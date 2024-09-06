import { AnimatePresence, motion } from 'framer-motion'

import { standardFade, dropIn } from '../../../FramerAnimations'
import { baseUrl } from '../../../api/BaseUrl'
import { SmallButton } from '../../../components/SmallButton'

export interface Props {
  isModalOpen: boolean
  setIsModalOpen: (open: boolean) => void
  onCompleted(): void
}

export const InfoModal: React.FC<Props> = ({ isModalOpen, setIsModalOpen, onCompleted }) => {
  function isMobile() {
    return window.innerWidth <= 760
  }
  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          variants={standardFade}
          initial="hidden"
          animate="show"
          exit="exit"
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-bcgov-black bg-opacity-50 transition-opacity z-0"
              aria-hidden="true"
            />

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true" />

            <motion.div
              variants={dropIn}
              initial="hidden"
              animate="show"
              exit="exit"
              className="bg-bcgov-white z-40 dark:bg-bcgov-black inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition transition-all duration-300 sm:my-8 sm:align-middle sm:max-w-xl sm:w-full dark:text-white"
            >
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div className="px-2 md:px-6 pt-2 sm:mt-4 sm:pb-4">
                  <div className="mt-5">
                    <p className="font-semibold">Have you completed the Sally Homeowner scenario?</p>
                  </div>
                </div>
              </div>
              <div className="px-2 md:px-6 pt-2 sm:mt-4 sm:pb-4 flex justify-between">
                <button onClick={() => setIsModalOpen(false)}>No, go back</button>
                <SmallButton onClick={onCompleted} text={"Yes, start James' scenario"} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
