import type { CustomCharacter } from '../src/content/types'

import { getDateInt } from '../src/utils/dateint'

export const businessCustom: CustomCharacter = {
  name: 'John',
  type: 'Business Owner',
  image: '/public/business/business.svg',
  description: 'John is a business owner who wants to use digital credentials to improve his business processes.',
  revocationInfo: [
    {
      credentialName: 'Digital Business Card',
      credentialIcon: '/public/student/icon-student.svg',
      title: 'Revoke your Digital Business Card',
      description:
        'City of Vancouver allows you to revoke your Digital Business Card "if":\n• there is a problem with your credential.\n• your device was lost or stolen and you want to secure your personal information.',
    },
  ],
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
      title: 'Meet John',
      text: 'Meet John. John is a business owner in the City of Vancouver. To help make setting up a business easier, BC Gov is going to offer John a digital Business Card to put in his BC Wallet.',
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
      title: 'Connect with BC Gov',
      text: 'John is trying to setup a new business in Vancouver. He will need a digital Business Card to begin. Use your BC Wallet to scan the QR code from the website.',
      image: '/public/student/onboarding-connect-light.svg',
      issuer_name: 'BC Gov',
    },
    {
      screenId: 'ACCEPT_CREDENTIAL',
      title: 'Accept your Digital Business Card',
      text: "Your wallet now has a secure and private connection with BC Gov. You should have received an offer in BC Wallet for a Digital Business Card.\nReview what they are sending, and choose 'Accept offer'.",
      image: '/public/common/onboarding-credential-light.svg',
      credentials: [
        {
          name: 'digital_business_card',
          version: '1.0',
          icon: '/public/student/icon-student.svg',
          attributes: [
            {
              name: 'business_name',
              value: 'ABC Company',
            },
            {
              name: 'business_type',
              value: 'Private Corporation',
            },
            {
              name: 'company_status',
              value: 'Active',
            },
            {
              name: 'cra_business_number',
              value: '123456789',
            },
            {
              name: 'credential_id',
              value: '1234567890',
            },
            {
              name: 'family_name',
              value: 'Smith',
            },
            {
              name: 'given_names',
              value: 'John',
            },
            {
              name: 'identifier',
              value: '1234567890',
            },
            {
              name: 'registered_on_dateint',
              value: `${getDateInt(0)}`,
            },
            {
              name: 'role',
              value: `Owner`,
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
      id: 'businessLicence',
      name: 'Business Licence',
      screens: [
        {
          screenId: 'START',
          title: 'Apply for a business licence in the City of Vancouver',
          text: 'John can get a business licence from the City of Vancouver using his Digital Business Card. They require proof that you’re a business owner in B.C.',
          image: '/public/lawyer2/useCases/courtServices/bothCreds.svg',
        },
        {
          screenId: 'CONNECTION',
          title: 'Start proving you’re a business owner',
          text: "City of Vancouver offers a quick way to apply for a business licence if you can prove you're a business owner. Scan the QR code to get started.",
          image: '/public/business/useCases/businessOverlay.png',
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
                name: 'digital_business_card',
                properties: [
                  'business_name',
                  'business_type',
                  'company_status',
                  'cra_business_number',
                  'credential_id',
                  'family_name',
                  'given_names',
                  'identifier',
                  'registered_on_dateint',
                  'role',
                ],
              },
            ],
          },
        },
        {
          screenId: 'STEP_END',
          title: "You're done!",
          text: 'You’ve proved to the City of Vancouver that you’re a business owner from B.C. You can now start your new business with the busincess licence. It only took a few seconds and you revealed minimal information that the City of Vancouver could easily and automatically trust.',
          image: '/public/lawyer2/onboarding/lawyer2Success.svg',
        },
      ],
    },
  ],
}
