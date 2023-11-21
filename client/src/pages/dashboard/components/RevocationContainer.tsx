import type { CustomCharacter, RevocationInfoItem, RevocationRecord } from '../../../slices/types'

import { motion } from 'framer-motion'
import { startCase } from 'lodash'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { dashboardTitle, rowContainer } from '../../../FramerAnimations'
import { revokeCredential } from '../../../api/RevocationApi'
import { basePath } from '../../../utils/BasePath'

import { RevocationItem } from './RevocationItem'

export interface Props {
  currentCharacter: CustomCharacter
  revocationRecord: RevocationRecord[]
  revocationInfo: RevocationInfoItem[]
}

export const RevocationContainer: React.FC<Props> = ({ revocationRecord, revocationInfo, currentCharacter }) => {
  const navigate = useNavigate()

  const startUseCase = (slug: string, revokeId: string) => {
    const state = revokeId
    navigate(`${basePath}/revoke/${slug}`, { state })
  }

  const [completedRevocations, setCompletedRevocations] = useState<string[]>([])
  const [loadingRevocations, setLoadingRevocations] = useState<string[]>([])
  const [menuExpanded, setMenuExpanded] = useState<boolean>(false)

  const renderUseCases = revocationRecord.map((item) => {
    const revocationKey = item.revocationRegId.split(':')[6]
    const revocationDescription = revocationInfo.find(
      (infoItem) => startCase(infoItem.credentialName) === startCase(revocationKey)
    )
    return (
      <RevocationItem
        slug={revocationDescription ? revocationDescription.id : 'TEST'}
        title={revocationDescription?.title}
        description={revocationDescription?.description}
        credentialName={revocationDescription?.credentialName}
        credentialIcon={revocationDescription?.credentialIcon}
        key={item.revocationRegId}
        revocationRecord={item}
        currentCharacter={currentCharacter}
        callback={() => {
          const revocations = completedRevocations.filter((rev) => rev !== item.revocationRegId)
          setCompletedRevocations(revocations)

          const loadingList = loadingRevocations
          loadingList.push(item.revocationRegId)
          setLoadingRevocations(loadingList)

          revokeCredential(item).then((result) => {
            if (result.status === 200) {
              revocations.push(item.revocationRegId)
              setCompletedRevocations(revocations)
            }
            setLoadingRevocations(loadingRevocations.filter((rev) => rev !== item.revocationRegId))
          })
        }}
        isCompleted={completedRevocations.includes(item.revocationRegId)}
        isLoading={loadingRevocations.includes(item.revocationRegId)}
        start={startUseCase}
      />
    )
  })

  return (
    <div className="flex flex-col mx-4 lg:mx-4 my-2 p-4 md:p-6 lg:p-8 bg-white dark:bg-bcgov-darkgrey dark:text-white rounded-lg shadow-sm">
      <motion.h1 variants={dashboardTitle} className="text-3xl md:text-4xl font-bold mb-2">
        Revoking credentials
      </motion.h1>
      <p className="text-bcgov-blue dark:text-white font-bold">The issuer is able to revoke issued credentials.</p>
      {menuExpanded && (
        <motion.div variants={rowContainer} className="flex flex-col w-auto overflow-x-hidden md:overflow-x-visible">
          {renderUseCases}
        </motion.div>
      )}
      <motion.div
        className="mx-0 lg:mx-0 my-2 p-4 md:p-4 lg:p-8"
        style={{ display: 'flex', justifyContent: 'flex-end', fontWeight: 'bold' }}
      >
        <motion.button
          className="font-bold"
          onClick={() => {
            setMenuExpanded(!menuExpanded)
          }}
        >
          {menuExpanded ? 'READ LESS' : 'READ MORE'}
        </motion.button>
      </motion.div>
    </div>
  )
}
