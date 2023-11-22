import type { CustomCharacter } from '../src/content/types'

import { getDateInt } from '../src/utils/dateint'

export const businessCustom: CustomCharacter = {
  name: 'James',
  type: 'Business Owner',
  image: '/public/business/business.svg',
  description: 'James is a business owner who wants to use digital credentials to improve his business processes.',
  revocationInfo: [
    {
      type: 'revoke',
      id: 'revokeDigitalBusinessCard',
      name: "Revoke James' Digital Business Card",
      credentialName: 'Digital Business Card',
      credentialIcon: '/public/student/icon-student.svg',
      title: 'BC Business Registry - Revoke Digital Business Card',
      description: "The BC Business Registry needs to revoke James' digital Business Card. Let's see how that works.",
      screens: [
        {
          screenId: 'REVOKE',
          title: "BC Business Registry - Revoking James' digital Business Card",
          text: "BC Business Registry is the issuer for James' digital Business Card. They are going to revoke James' credential. Let's walk through that process. Click start to begin!",
          image: '/public/business/useCases/businessRevokeStart.svg',
        },
        {
          screenId: 'BUTTON',
          title: 'BC Business Registry - Revoke the digital Business Card',
          text: "Credential issuers like the Business Registry have tools to manage credentials.  Credential verifiers can easily identify revoked credentials and opt not to accept them. In this case, let's pretend we're the BC Business registry and press the button to revoke James' digital Business Card.",
          image: '/public/business/useCases/businessRevoke.svg',
        },
        {
          screenId: 'INFO',
          title: 'James - Remove the revoked crediential from BC Wallet',
          text: "James' credential has been revoked by BC Business Registry. James should now see a red ( ! ) on the revoked credential in his BC Wallet.\nJames can remove that credential from his BC Wallet by clicking on the credential and scrolling down. Tap 'Remove from wallet' and confirm to remove the credential.",
          image: '/public/business/useCases/businessRemoveRevoke.png',
        },
        {
          screenId: 'STEP_END',
          title: "You're done!",
          text: "BC Business Registry has successfully revoked James' digital Business Card. James was able to remove it from his BC Wallet.",
          image: '/public/lawyer2/onboarding/lawyer2Success.svg',
        },
      ],
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
      title: 'Meet James',
      text: 'James is a sole proprietor of a business in BC. To make sharing information about his business easier, BC Gov is going to offer James a digital Business Card to put in his BC Wallet. He can use this card when interacting with the City of Vancouver.',
    },
    {
      screenId: 'SETUP_START',
      title: "Let's get started!",
      text: 'BC Wallet is a new app for storing and using credentials on your smartphone. Credentials are things like certificates, licences and diplomas. \nUsing your BC Wallet is fast and simple. In the future it can be used online and in person. You approve every use, and share only what is needed. \nIn this demo, you will use your digital Business Card to expedite an application for a City of Vancouver business licence.',
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
      text: 'Imagine, as James, you are logged into the BC Business Registry (see below). They want to offer you a digital Business Card. Use your BC Wallet to scan the QR code from the website.',
      image: '/public/student/onboarding-connect-light.svg',
      issuer_name: 'COV Showcase - BC Gov',
    },
    {
      screenId: 'ACCEPT_CREDENTIAL',
      title: 'Accept your Digital Business Card',
      text: "Your wallet now has a secure and private connection with BC Gov. You should have received an offer in BC Wallet for a digital Business Card.\nReview what they are sending, and choose 'Accept offer'.",
      image: '/public/common/onboarding-credential-light.svg',
      credentials: [
        {
          name: 'digital_business_card',
          version: '1.0.0',
          icon: '/public/student/icon-student.svg',
          attributes: [
            {
              name: 'business_name',
              value: 'ABC Company',
            },
            {
              name: 'business_type',
              value: 'Sole Proprietorship',
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
              value: 'James',
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
      text: "Congratulations, you've just received your first digital credentials. They are safely stored in your wallet and ready to be used. So, what are you waiting for? Let's go!",
      image: '/public/common/onboarding-completed-light.svg',
    },
  ],
  useCases: [
    {
      type: 'useCase',
      id: 'businessLicence',
      name: 'Apply for a City of Vancouver Business Licence',
      screens: [
        {
          screenId: 'START',
          title: 'Apply for a business licence in the City of Vancouver',
          text: "James (that's you in this demo)  can get a business licence from the City of Vancouver using his digital Business Card. The City previously required you to upload your ID and other documentation proving your identity and ownership of a business. Now you can optionally use your digital Business Card",
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
          text: 'BC Wallet will now ask you to confirm what to send. Notice how you’re not sharing your entire credential. The City is requesting that you prove only what is needed.',
          requestOptions: {
            title: 'City of Vancouver Request',
            text: 'City of Vancouver would like some of your personal information.',
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
          text: "You've proved to the City of Vancouver that you're the sole proprietor of a business. They can now quickly move forward to issue your business licence. It only took a few seconds and you revealed minimal information that the City of Vancouver could easily and automatically trust.",
          image: '/public/lawyer2/onboarding/lawyer2Success.svg',
        },
      ],
    },
  ],
}
