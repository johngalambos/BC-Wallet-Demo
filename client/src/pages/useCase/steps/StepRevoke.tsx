/* eslint-disable no-console */
import type { UseCaseScreen } from '../../../slices/types'

import { motion } from 'framer-motion'
import React, { useState } from 'react'

import { fadeX } from '../../../FramerAnimations'
import { revokeCredential } from '../../../api/RevocationApi'
import { Button } from '../../../components/Button'
import { StateIndicator } from '../../../components/StateIndicator'
import { useCredentials } from '../../../slices/credentials/credentialsSelectors'
import { prependApiUrl } from '../../../utils/Url'
import { StepInfo } from '../components/StepInfo'

export interface Props {
  step: UseCaseScreen
  revoke: string
}

export const StepRevoke: React.FC<Props> = ({ step, revoke }) => {
  const { revokableCredentials } = useCredentials()
  const [completed, setCompleted] = useState(false)

  const findAndRevoke = () => {
    const item = revokableCredentials.find((item) => item.revocationRegId === revoke)
    if (item) {
      revokeCredential(item).then((result) => {
        if (result.status === 200) {
          setCompleted(true)
        }
      })
    }
  }

  return (
    <motion.div variants={fadeX} initial="hidden" animate="show" exit="exit" className="flex flex-col h-full">
      <StepInfo title={step.title} description={step.text} />
      <div className="flex flex-col items-center justify-between">
        <div className="flex bg-bcgov-black rounded-lg p-2">
          <Button onClick={findAndRevoke} text={'REVOKE'} disabled={completed}></Button>
          <StateIndicator completed={completed} />
        </div>
        {step.image && <img className="h-full w-1/2 m-auto" src={prependApiUrl(step.image)} alt={step.title} />}
      </div>
    </motion.div>
  )
}
