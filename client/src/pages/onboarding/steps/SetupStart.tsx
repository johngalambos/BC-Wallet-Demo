import type { Content } from '../../../utils/OnboardingUtils'

import { motion } from 'framer-motion'
import React from 'react'

import { fadeX } from '../../../FramerAnimations'
import { StepInformation } from '../components/StepInformation'

export interface Props {
  title: string
  text: string
  step?: number
}

export const SetupStart: React.FC<Props> = ({ title, text, step }) => {
  return (
    <motion.div variants={fadeX} initial="hidden" animate="show" exit="exit">
      <StepInformation title={title} text={text} step={step} />
    </motion.div>
  )
}
