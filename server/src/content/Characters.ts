import type { CustomCharacter } from './types'

import { businessCustom } from '../../config/businessCustom'
import { contractorCustom } from '../../config/contractorCustom'
import { homeOwnerCustom } from '../../config/homeOwnerCustom'
import { homeOwnerCustom2 } from '../../config/homeOwnerCustom2'
import { lawyerCustom } from '../../config/lawyerCustom'
import { studentCustom } from '../../config/studentCustom'

const characters: CustomCharacter[] = [
  // studentCustom,
  // lawyerCustom,
  businessCustom,
  contractorCustom,
  homeOwnerCustom,
  homeOwnerCustom2,
]

export default characters
