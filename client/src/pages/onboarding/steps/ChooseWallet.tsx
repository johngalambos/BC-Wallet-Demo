import type { Wallet } from '../../../slices/types'

import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { isMobile, isBrowser } from 'react-device-detect'

import { fadeX, rowContainer } from '../../../FramerAnimations'
import { baseUrl } from '../../../api/BaseUrl'
import appStore from '../../../assets/light/app-store-badge.svg'
import playStore from '../../../assets/light/google-play-badge.png'
import { useWallets } from '../../../slices/wallets/walletsSelectors'
import { StepInformation } from '../components/StepInformation'
import { WalletItem } from '../components/WalletItem'
import { WalletModal } from '../components/WalletModal'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const QRCode = require('qrcode.react')

export interface Props {
  title: string
  text: string
  step?: number
  addOnboardingProgress(): void
}

export const ChooseWallet: React.FC<Props> = ({ title, text, step, addOnboardingProgress }) => {
  const { wallets } = useWallets()

  const [isChooseWalletModalOpen, setIsChooseWalletModalOpen] = useState(false)
  const [selectedWallet, setSelectedWallet] = useState<Wallet | undefined>(undefined)

  const openWalletModal = (id: number) => {
    setSelectedWallet(wallets.find((item) => item.id === id) || undefined)
    setIsChooseWalletModalOpen(true)
  }

  const renderWallets = wallets.map((wallet) => {
    return (
      <div key={wallet.id} onClick={() => openWalletModal(wallet.id)}>
        <WalletItem
          name={wallet.name}
          icon={wallet.icon}
          organization={wallet.organization}
          recommended={wallet.recommended}
        />
      </div>
    )
  })

  const onCompleted = () => {
    setIsChooseWalletModalOpen(false)

    setTimeout(function () {
      addOnboardingProgress()
    }, 300)
  }

  const style = isBrowser ? { marginBottom: '1rem', maxHeight: '35vh' } : { maxHeight: '34vh' }

  return (
    <>
      <motion.div variants={fadeX} initial="hidden" animate="show" exit="exit">
        <StepInformation title={title} text={text} step={step} />
        <motion.div
          className="flex flex-col h-full dark:text-white"
          variants={rowContainer}
          initial="hidden"
          animate="show"
          exit="exit"
          style={style}
        >
          <div>
            <p>
              BC Wallet lets you receive, store and use digital credentials, and was made by the Government of
              Government of British Columbia.{' '}
              <a
                href="https://www2.gov.bc.ca/gov/content/governments/government-id/bc-wallet"
                style={{ color: '#0000EE' }}
              >
                Learn more about BC Wallet.
              </a>
              <div className="pt-4 flex-1 py-4 px-4">
                <ul className={'list-disc'}>
                  <li>Scan the QR code with your phone.</li>
                  <li>Select the app store icon.</li>
                  <li>Search your app store for BC wallet.</li>
                </ul>
              </div>
            </p>
          </div>
          <div className="pt-4 flex-1 mb-6">
            <div className="dark:text-white">
              <div
                className="flex bg-bcgov-white dark:bg-bcgov-black py-4 px-8"
                style={{
                  flexDirection: isMobile ? 'column' : 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {!isMobile && (
                  <div>
                    <QRCode value={`${baseUrl}/qr`} size={125} />
                  </div>
                )}
                <a href="https://apps.apple.com/us/app/bc-wallet/id1587380443" target="_blank">
                  <img
                    src={appStore}
                    style={
                      isMobile ? { width: '200px', marginBottom: '10px' } : { height: '50px', marginRight: '10px' }
                    }
                    alt="app store"
                  />
                </a>
                <a href="https://play.google.com/store/apps/details?id=ca.bc.gov.BCWallet" target="_blank">
                  <img
                    src={playStore}
                    style={isMobile ? { width: '200px' } : { height: '50px' }}
                    alt="google play store"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <AnimatePresence initial={false} exitBeforeEnter onExitComplete={() => null}>
          {selectedWallet && (
            <WalletModal
              isWalletModalOpen={isChooseWalletModalOpen}
              setIsWalletModalOpen={setIsChooseWalletModalOpen}
              wallet={selectedWallet}
              onCompleted={onCompleted}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
