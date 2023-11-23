import type { CustomCharacter } from '../src/content/types'

import { getDateInt } from '../src/utils/dateint'

export const businessCustom: CustomCharacter = {
  name: 'Jane',
  type: 'Business Owner',
  image: '/public/business/business.svg',
  description: 'Jane is a business owner who wants to use digital credentials to improve her business processes.',
  revocationInfo: [
    {
      type: 'revoke',
      id: 'revokeDigitalBusinessCard',
      name: "Revoke Jane's Digital Business Card",
      credentialName: 'Digital Business Card',
      credentialIcon: '/public/business/icon-bcgov.png',
      title: 'BC Business Registry - Revoke Digital Business Card',
      description: "The BC Business Registry needs to revoke Jane's digital Business Card. Let's see how that works.",
      screens: [
        {
          screenId: 'REVOKE',
          title: "BC Business Registry - Revoking Jane's digital Business Card",
          text: "BC Business Registry is the issuer for Jane's digital Business Card. They are going to revoke Jane's credential. Let's walk through that process. Click start to begin!",
          image: '/public/business/useCases/businessRevokeStart.svg',
        },
        {
          screenId: 'BUTTON',
          title: 'BC Business Registry - Revoke the digital Business Card',
          text: "Credential issuers like the Business Registry have tools to manage credentials.  Credential verifiers can easily identify revoked credentials and opt not to accept them. In this case, let's pretend we're the BC Business registry and press the button to revoke Jane's digital Business Card.",
          image: '/public/business/useCases/businessRevoke.svg',
        },
        {
          screenId: 'INFO',
          title: 'Jane - Remove the revoked crediential from BC Wallet',
          text: "Jane's credential has been revoked by BC Business Registry. Jane should now see a red ( ! ) on the revoked credential in her BC Wallet.\nJane can remove that credential from her BC Wallet by clicking on the credential and scrolling down. Tap 'Remove from wallet' and confirm to remove the credential.",
          image: '/public/business/useCases/businessRemoveRevoke.png',
        },
        {
          screenId: 'STEP_END',
          title: "You're done!",
          text: "BC Business Registry has successfully revoked Jane's digital Business Card. Jane was able to remove it from her BC Wallet.",
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
      title: 'Meet Jane',
      text: 'Jane is a sole proprietor of a business in BC. To make sharing information about her business easier, BC Gov is going to offer Jane a digital Business Card to put in her BC Wallet. She can use this card when accessing City of Vancouver services.',
    },
    {
      screenId: 'SETUP_START',
      title: "Let's get started!",
      text: 'BC Wallet is a new app for storing and using credentials on your smartphone. Credentials are things like certificates, licences and diplomas. \nUsing your BC Wallet is fast and simple. In the future it can be used online and in person. You approve every use, and share only what is needed. \nIn this demo, you will use your digital Business Card to pre-fill and speed up an application for a City of Vancouver business licence.',
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
      text: 'Imagine, as Jane, you have registered your business with the BC Business Registry. You are now ready to be issued a digital Business Card. Use your BC Wallet to scan the QR code.',
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
          icon: '/public/business/icon-bcgov.png',
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
              value: 'Jane',
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
          text: 'Jane (that’s you in this demo) can get a business licence from the City of Vancouver using her digital Business Card. The City requires you to upload your ID and other documentation proving your identity and ownership of the business. Now you can use your Digital Business Card instead.',
          image: '/public/lawyer2/useCases/courtServices/bothCreds.svg',
        },
        {
          screenId: 'CONNECTION',
          title: 'Start proving you’re a business owner',
          text: 'Use your digital Business Card to prove you’re a business owner when you apply for a business licence. Enjoy a streamlined application process and faster processing times. Scan the QR code with your BC Wallet to get started.',
          image: '/public/business/useCases/businessOverlay.png',
          verifier: { name: 'City of Vancouver', icon: '/public/business/icon-cov.png' },
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
                icon: '/public/business/icon-bcgov.png',
                name: 'digital_business_card',
                properties: [
                  'business_name',
                  'business_type',
                  'company_status',
                  'family_name',
                  'given_names',
                  'identifier',
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
