import type { CustomCharacter } from '../src/content/types'

import { getDateInt } from '../src/utils/dateint'

export const contractorCustom: CustomCharacter = {
  name: 'Bob',
  type: 'Contractor',
  image: '/public/contractor/contractor.svg',
  description:
    'Bob is a contractor. To work on a project he needs to verify his qualifications issued by Technical Safety B.C.',
  // revocationInfo: [
  //   {
  //     credentialName: 'Trade Qualifications Card',
  //     credentialIcon: '/public/student/icon-student.svg',
  //     title: 'Revoke your Trade Qualifications Card',
  //     description:
  //       'City of Vancouver allows you to revoke your Trade Qualifications Card "if":\n• there is a problem with your credential.\n• your device was lost or stolen and you want to secure your personal information.',
  //   },
  // ],
  progressBar: [
    {
      name: 'person',
      onboardingStep: 'PICK_CHARACTER',
      iconLight: '/public/common/icon-person-light.svg',
      iconDark: '/public/common/icon-person-dark.svg',
    },
    {
      name: 'moon',
      onboardingStep: 'SETUP_START',
      iconLight: '/public/common/icon-moon-light.svg',
      iconDark: '/public/common/icon-moon-dark.svg',
    },
    {
      name: 'wallet',
      onboardingStep: 'CHOOSE_WALLET',
      iconLight: '/public/common/icon-wallet-light.svg',
      iconDark: '/public/common/icon-wallet-dark.svg',
    },
    {
      name: 'notification',
      onboardingStep: 'ACCEPT_CREDENTIAL',
      iconLight: '/public/common/icon-notification-light.svg',
      iconDark: '/public/common/icon-notification-dark.svg',
    },
    {
      name: 'balloon',
      onboardingStep: 'SETUP_COMPLETED',
      iconLight: '/public/common/icon-balloon-light.svg',
      iconDark: '/public/common/icon-balloon-dark.svg',
    },
  ],
  onboarding: [
    {
      screenId: 'PICK_CHARACTER',
      title: 'Meet Bob',
      text: 'Meet Bob. Bob is a contractor. To help verify his credentials quicker, Technical Safety B.C. is going to offer Bob a Trade Qualifications Card to put in his BC Wallet.',
    },
    {
      screenId: 'SETUP_START',
      title: "Let's get started!",
      text: 'BC Wallet is a new app for storing and using credentials on your smartphone. Credentials are things like IDs, licenses and diplomas. \nUsing your BC Wallet is fast and simple. In the future it can be used online and in person. You approve every use, and share only what is needed. \nIn this demo, you will use two credentials to prove who you are and access court materials online instead of in-person.',
      image: '/public/common/getStarted.svg',
    },
    {
      screenId: 'CHOOSE_WALLET',
      title: 'Install BC Wallet',
      text: 'First, install the BC Wallet app onto your smartphone. Select the button below for instructions and the next step.',
      image: '/public/common/app-store-screenshots.png',
    },
    {
      screenId: 'CONNECT',
      title: 'Connect with Technical Safety B.C.',
      text: 'Bob will need a Trade Qualification card to work on projects. Use your BC Wallet to scan the QR code from the website.',
      image: '/public/student/onboarding-connect-light.svg',
      issuer_name: 'Technical Safety B.C.',
    },
    {
      screenId: 'ACCEPT_CREDENTIAL',
      title: 'Accept your Trade Qualification Card',
      text: "Your wallet now has a secure and private connection with Technical Safety B.C. You should have received an offer in BC Wallet for a Digital Business Card.\nReview what they are sending, and choose 'Accept offer'.",
      image: '/public/common/onboarding-credential-light.svg',
      credentials: [
        {
          name: 'trade_qualifications_card',
          version: '1.0',
          icon: '/public/student/icon-student.svg',
          attributes: [
            {
              name: 'license_number',
              value: '1234567890',
            },
            {
              name: 'contractor_type',
              value: 'Builder',
            },
            {
              name: 'family_name',
              value: 'McGraw Jr.',
            },
            {
              name: 'given_names',
              value: 'Bob',
            },
            {
              name: 'fsr_class',
              value: 'B',
            },
            {
              name: 'expiry_date',
              value: `${getDateInt(1)}`,
            },
          ],
        },
      ],
    },
    {
      screenId: 'SETUP_COMPLETED',
      title: "You're all set!",
      text: 'Congratulations, you’ve just received your first digital credentials. They are safely stored in your wallet and ready to be used. So, what are you waiting for? Let’s go!',
      image: '/public/common/onboarding-completed-light.svg',
    },
  ],
  useCases: [
    {
      id: 'permitApplication',
      name: 'Permit Application in the City of Vancouver',
      screens: [
        {
          screenId: 'START',
          title: 'Apply for a permit in the City of Vancouver',
          text: 'Bob can apply for a permit in the City of Vancouver and use his Trade Qualifications Card to verify his qualifications.',
          image: '/public/lawyer2/useCases/courtServices/bothCreds.svg',
        },
        {
          screenId: 'CONNECTION',
          title: 'Start proving your qualifications',
          text: 'City of Vancouver offers a quick way to verify your qualifications. Scan the QR code to get started.',
          image: '/public/contractor/useCases/posseOverlay.png',
          verifier: { name: 'City of Vancouver', icon: '/public/lawyer2/connection/lsbc-logo.png' },
        },
        {
          screenId: 'PROOF',
          title: 'Confirm the information to send',
          text: 'BC Wallet will now ask you to confirm what to send. Notice how you’re not sharing your entire credential. Court Services Branch is requesting that you prove only what is needed.',
          requestOptions: {
            title: 'City of Vancouver Request',
            text: 'City of Vnacouver would like some of your personal information.',
            requestedCredentials: [
              {
                icon: '/public/lawyer2/connection/lsbc-logo.png',
                name: 'trade_qualifications_card',
                properties: [
                  'license_number',
                  'contractor_type',
                  'family_name',
                  'given_names',
                  'fsr_class',
                  'expiry_date',
                ],
              },
            ],
          },
        },
        {
          screenId: 'STEP_END',
          title: "You're done!",
          text: 'You’ve proved to the City of Vancouver that you’re a qualified contractor. You can now continue with the permit application process. It only took a few seconds and you revealed minimal information that the City of Vancouver could easily and automatically trust.',
          image: '/public/lawyer2/onboarding/lawyer2Success.svg',
        },
      ],
    },
  ],
}