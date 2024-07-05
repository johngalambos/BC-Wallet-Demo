import type { CustomCharacter } from './types'

import { businessCustom } from '../../config/businessCustom'
import { contractorCustom } from '../../config/contractorCustom'
import { homeOwnerCustom } from '../../config/homeOwnerCustom'
import { lawyerCustom } from '../../config/lawyerCustom'
import { representativeCustom } from '../../config/representativeCustom'
import { studentCustom } from '../../config/studentCustom'

const characters: CustomCharacter[] = [
  // studentCustom,
  // lawyerCustom,
  businessCustom,
  contractorCustom,
  homeOwnerCustom,
  representativeCustom,
]

export default characters
