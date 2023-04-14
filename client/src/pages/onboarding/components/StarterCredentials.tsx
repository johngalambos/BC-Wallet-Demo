import type { CredentialData } from '../../../slices/types'

import { motion } from 'framer-motion'
import React from 'react'

import { fadeX } from '../../../FramerAnimations'
import { StateIndicator } from '../../../components/StateIndicator'
import { isCredIssued } from '../../../utils/Helpers'
import { prependApiUrl } from '../../../utils/Url'

export interface Props {
  credentialData: CredentialData[]
  credentials: any[]
}

export const StarterCredentials: React.FC<Props> = ({ credentialData, credentials }) => {
  return (
    <motion.div
      variants={fadeX}
      animate="show"
      exit="exit"
      className="flex flex-col bg-bcgov-white dark:bg-bcgov-black m-4 px-4 py-2 w-auto md:w-96 h-auto rounded-lg shadow"
    >
      <div className="flex-1-1 title mb-2">
        <h1 className="font-semibold dark:text-white">Starter credentials</h1>
        <hr className="text-bcgov-lightgrey" />
      </div>
      {credentialData.map((item) => {
        const state = credentials.find((x) => x.credential_definition_id === item.credentialDefinitionId)?.state

        const completed = isCredIssued(state)

        return (
          <div key={item.id} className="flex-1 flex flex-row items-center justify-between my-2">
            <div className="bg-bcgov-lightgrey rounded-lg p-2 w-12">
              <img className="h-8 m-auto" src={prependApiUrl(item.icon)} alt="icon" />
            </div>
            <div className="flex-1 px-4 justify-self-start dark:text-white text-sm sm:text-base">
              <p>{item.name}</p>
            </div>
            <StateIndicator completed={completed} />
          </div>
        )
      })}
    </motion.div>
  )
}
