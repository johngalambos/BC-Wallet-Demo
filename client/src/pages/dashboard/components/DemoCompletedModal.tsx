import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import { standardFade, dropIn } from '../../../FramerAnimations'
import { Button } from '../../../components/Button'
import { SmallButton } from '../../../components/SmallButton'
import { SmallButtonText } from '../../../components/SmallButtonText'
export interface Props {
  action(): void
  cancel?(): void
}

export const DemoCompletedModal: React.FC<Props> = ({ action, cancel }) => {
  const navigate = useNavigate()

  const TITLE = 'Scenario complete!'
  const DESCRIPTION =
    'Have you completed both scenarios? If not, select the finish button and complete the James Tenant scenario next.'
  const SUBTEXT = 'What do you think about using digital credentials to access City of Vancouver services?'

  return (
    <AnimatePresence>
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
          <div className="fixed inset-0 bg-bcgov-black bg-opacity-50 transition-opacity" aria-hidden="true" />
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true" />
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="show"
            exit="exit"
            className="bg-bcgov-white dark:bg-bcgov-black inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full dark:text-white"
          >
            <div className=" px-4 pt-2 mt-4 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h2 className="text-xl font-medium text-grey-900">{TITLE}</h2>
                  <div className="mt-2 text-sm">
                    <p>{DESCRIPTION}</p>
                    <p>{SUBTEXT}</p>

                    <a
                      href="https://submit.digital.gov.bc.ca/app/form/submit?f=d61da710-acc3-46fc-b692-111cf6e348de"
                      target="_blank"
                    >
                      <motion.button
                        whileTap={{ scale: 0.8 }}
                        className={`bg-bcgov-blue dark:bg-white text-white font-semibold dark:text-bcgov-black my-5 py-2.5 px-10 rounded transition duration-300 ease-in-out transform text-sm shadow-sm`}
                        data-cy="standard-button"
                      >
                        {'Give feedback'}
                      </motion.button>
                    </a>

                    <br />
                    <a href="https://animo.id/">
                      Based on code by <u>Animo</u>
                    </a>
                    <br />
                    <a href="https://storyset.com/business">
                      Business illustrations by <u>Storyset</u>
                    </a>
                    <div>
                      Icons made by{' '}
                      <u>
                        <a href="https://www.freepik.com" title="Freepik">
                          Freepik
                        </a>
                      </u>{' '}
                      from{' '}
                      <a href="https://www.flaticon.com/" title="Flaticon">
                        <u>Flaticon.com</u>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 pb-4 sm:px-6 sm:flex sm:flex-row-reverse">
              <SmallButton onClick={action} text={'FINISH'} disabled={false} />
              {cancel && <SmallButtonText onClick={cancel} text={'CANCEL'} disabled={false} />}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
