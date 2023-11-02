import type { CustomCharacter } from './types'

import { businessCustom } from '../../config/businessCustom'
import { contractorCustom } from '../../config/contractorCustom'
import { lawyerCustom } from '../../config/lawyerCustom'
import { studentCustom } from '../../config/studentCustom'

const characters: CustomCharacter[] = [studentCustom, lawyerCustom, businessCustom, contractorCustom]

export default characters
