import type { CredentialRequest } from '../../../slices/types'

import { motion } from 'framer-motion'
import React from 'react'

import { useCredentials } from '../../../slices/credentials/credentialsSelectors'

import { ActionCard } from './ActionCard'

export interface Props {
  title: string
  description: string
  entity: { name: string; icon?: string }
}

export const StarterInfoRevoke: React.FC<Props> = ({ title, description, entity }) => {
  return (
    <motion.div className="flex flex-col h-full">
      <h1 className="text-4xl	font-bold my-4">{title}</h1>
      <p className="leading-loose">{description}</p>
      <div className="flex flex-col items-center justify-center h-full"></div>
    </motion.div>
  )
}
