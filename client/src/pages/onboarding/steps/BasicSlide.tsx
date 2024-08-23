import type { TextWithImage } from '../../../slices/types'
import type { Content } from '../../../utils/OnboardingUtils'

import { motion } from 'framer-motion'
import React from 'react'

import { fadeX } from '../../../FramerAnimations'
import { StepInformation } from '../components/StepInformation'

export interface Props {
  title: string
  text: string
  textWithImage?: TextWithImage[]
  step?: number
}

export const BasicSlide: React.FC<Props> = ({ title, text, textWithImage, step }) => {
  return (
    <motion.div className="h-full" variants={fadeX} initial="hidden" animate="show" exit="exit">
      <StepInformation title={title} text={text} textWithImage={textWithImage} step={step} />
    </motion.div>
  )
}
