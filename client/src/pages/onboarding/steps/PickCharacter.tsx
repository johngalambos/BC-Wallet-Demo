import type { CustomCharacter, TextWithImage } from '../../../slices/types'
import type { Content } from '../../../utils/OnboardingUtils'

import { AnimatePresence, motion } from 'framer-motion'
import { track } from 'insights-js'
import React, { useEffect, useState } from 'react'
import TagManager from 'react-gtm-module'

import { fadeX } from '../../../FramerAnimations'
import { useAppDispatch } from '../../../hooks/hooks'
import { useDarkMode } from '../../../hooks/useDarkMode'
import { setCharacter } from '../../../slices/characters/charactersSlice'
import { usePreferences } from '../../../slices/preferences/preferencesSelectors'
import { prependApiUrl } from '../../../utils/Url'
import { InfoModal } from '../components/InfoModal'
import { StepInformation } from '../components/StepInformation'

export interface Props {
  currentCharacter?: CustomCharacter
  characters: CustomCharacter[]
  title: string
  text: string
  textWithImage?: TextWithImage[]
  step?: number
}

export const PickCharacter: React.FC<Props> = ({ currentCharacter, characters, title, text, textWithImage, step }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [canSelectCharacter, setCanSelectCharacter] = useState(currentCharacter !== undefined)
  const [selectedCharacter, setSelectedCharacter] = useState<CustomCharacter | undefined>(currentCharacter)
  const dispatch = useAppDispatch()
  const { completedCharacters } = usePreferences()
  const darkMode = useDarkMode()
  const defaultStep = 1
  const defaultTitle = `Choose a scenario`
  const defaultText = `Explore how digital credentials help prove identity, qualifications, and relationships to things like property. Start as Sally Homeowner who wants to rent her secondary suite long-term to James Tenant. Continue as James Tenant who wants to sublet the suite short-term while he travels.`
  const titleText = title
  const mainText = text

  const openModal = (char: CustomCharacter) => {
    setIsModalOpen(true)
    setSelectedCharacter(char)
  }

  const onCompleted = () => {
    if (selectedCharacter) {
      dispatch(setCharacter(selectedCharacter))
      track({
        id: 'character-selected',
        parameters: {
          character: selectedCharacter.name,
        },
      })
    }
    setIsModalOpen(false)
    setCanSelectCharacter(true)
  }

  useEffect(() => {
    if (selectedCharacter && canSelectCharacter) {
      dispatch(setCharacter(selectedCharacter))
      track({
        id: 'character-selected',
        parameters: {
          character: selectedCharacter.name,
        },
      })
    }
  }, [selectedCharacter, canSelectCharacter, dispatch])

  useEffect(() => {
    if (!isModalOpen && !canSelectCharacter) {
      setSelectedCharacter(undefined)
    }
  }, [isModalOpen, canSelectCharacter])

  const PrerequisiteChecker = (prereqs: string[] | null | undefined): boolean => {
    if (!prereqs || prereqs.length === 0) {
      return false
    }
    return !prereqs.every((prereq: string) => completedCharacters.includes(prereq))
  }

  const CharacterClickHandler = (char: CustomCharacter) => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'buttonClick',
        buttonId: char.name,
      },
    })
    if (PrerequisiteChecker(char.prerequisites)) {
      openModal(char)
    } else {
      setSelectedCharacter(char)
      setCanSelectCharacter(true)
      dispatch(setCharacter(char))
      track({
        id: 'character-selected',
        parameters: {
          character: char.name,
        },
      })
    }
  }

  const renderCharacters = characters.map((char: CustomCharacter) => {
    const cardStyleSelected = `shadow-xl ring-4 ${darkMode ? 'ring-bcgov-gold' : 'ring-bcgov-blue'}`
    const cardStyleUnselected = `ring-4 ${darkMode ? 'ring-bcgov-black' : 'ring-bcgov-white'}`

    return (
      <motion.button
        key={char.type}
        onClick={() => CharacterClickHandler(char)}
        whileHover={{ scale: 1.01 }}
        className="flex md:flex-row lg:flex-col"
        data-cy="select-char"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          className={`m-auto h-16 w-16 p-2 sm:h-20 sm:w-20 md:h-24 md:w-24 md:p-4 lg:h-36 lg:w-36 lg:p-8 rounded-full bg-bcgov-white dark:bg-bcgov-black my-6 shadow ${
            currentCharacter?.type === char.type ? cardStyleSelected : cardStyleUnselected
          }`}
          src={prependApiUrl(char.image)}
          alt={char.name}
        />
        <div
          className={`m-auto p-4 flex flex-1 flex-col text-left lg:text-center dark:text-white ${
            selectedCharacter !== char && PrerequisiteChecker(char.prerequisites) ? 'opacity-40' : ''
          }`}
        >
          <h2 className="font-bold">{char.name}</h2>
          <p>{char.type}</p>
        </div>
      </motion.button>
    )
  })

  return (
    <motion.div variants={fadeX} initial="hidden" animate="show" exit="exit">
      <StepInformation
        title={titleText === '' ? defaultTitle : titleText}
        text={mainText === '' ? defaultText : mainText}
        textWithImage={textWithImage}
        step={step === undefined ? defaultStep : step}
      />

      <div className="flex flex-col lg:flex-row items-left lg:items-start justify-between px-8 h-full max-h-72 sm:max-h-96 overflow-y-scroll lg:overflow-y-hidden">
        {renderCharacters}
      </div>
      <AnimatePresence initial={false} exitBeforeEnter onExitComplete={() => null}>
        {isModalOpen && (
          <InfoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} onCompleted={onCompleted} />
        )}
      </AnimatePresence>
    </motion.div>
  )
}
