import type { CustomCharacter } from './types'

import { businessCustom } from '../../config/businessCustom'
import { contractorCustom } from '../../config/contractorCustom'
import { homeOwnerCustom } from '../../config/homeOwnerCustom'
import { tenantCustom } from '../../config/tenantCustom'

const characters: CustomCharacter[] = [
  // studentCustom,
  // lawyerCustom,
  businessCustom,
  contractorCustom,
  homeOwnerCustom,
  tenantCustom,
]

export default characters
