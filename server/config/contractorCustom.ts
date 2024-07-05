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
      text: 'Bob is a contractor. To help verify his credentials quicker, Technical Safety B.C. is going to offer Bob a Trade Qualifications Card to put in his BC Wallet.',
    },
    {
      screenId: 'SETUP_START',
      title: "Let's get started!",
      text: 'What is the BC Wallet? \nThe BC Wallet is an app created by the Government of British Columbia that allows users to store and use digital credentials on their smartphones. These digital credentials can include IDs, licenses, certificates, titles, and more. \nCustomer Value: \nUsing the BC Wallet is fast and simple, with an increasing number of uses to simplify access to services both online and in person. \n• It saves users from having to manually fill out forms by allowing the BC Wallet to automatically fill the form with the requested information using the data stored in digital credentials. \n• It saves staff time by eliminating the need to verify manually typed information in forms. Information that comes from the credentials is information that can be trusted because the user does not have the ability to modify the data; data arrives to the CoV systems as issued by the organization/Authority.',
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
      issuer_name: 'COV Showcase - Technical Safety BC',
    },
    {
      screenId: 'ACCEPT_CREDENTIAL',
      title: 'Accept your Trade Qualification Card',
      text: "Your wallet now has a secure and private connection with Technical Safety B.C. You should have received an offer in BC Wallet for a Certificate of Qualifications.\nReview what they are sending, and choose 'Accept offer'.",
      image: '/public/common/onboarding-credential-light.svg',
      credentials: [
        {
          name: 'certificate_of_qualification',
          version: '1.0.0',
          icon: '/public/contractor/icon-technicalsafety.png',
          attributes: [
            {
              name: 'license_number',
              value: '1234567890',
            },
            {
              name: 'certification_type',
              value: 'Electrical Field Safety Representative',
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
      type: 'useCase',
      id: 'permitApplication',
      name: 'Apply for a City of Vancouver Trade Permit',
      screens: [
        {
          screenId: 'START',
          title: 'Apply for a City of Vancouver Trade Permit',
          text: 'Bob (that’s you in this demo) can apply for a trade permit from the City of Vancouver and using his Certificate of Qualification. The City requires you to upload your ID and other documentation proving your identity and qualifications. Now you can use your Certificate of Qualification instead.',
          image: '/public/lawyer2/useCases/courtServices/bothCreds.svg',
        },
        {
          screenId: 'CONNECTION',
          title: 'Start proving your qualifications',
          text: 'City of Vancouver offers a quick way to verify your qualifications. Scan the QR code with your BC Wallet to get started.',
          image: '/public/contractor/useCases/posseOverlay.png',
          verifier: { name: 'City of Vancouver', icon: '/public/contractor/icon-cov.png' },
        },
        {
          screenId: 'PROOF',
          title: 'Confirm the information to send',
          text: "BC Wallet will now ask you to confirm what to send. Notice how you're not sharing your entire credential. The City of Vancouver is requesting that you prove only what is needed.",
          requestOptions: {
            title: 'City of Vancouver Request',
            text: 'City of Vancouver would like some of your personal information.',
            requestedCredentials: [
              {
                icon: '/public/contractor/icon-technicalsafety.png',
                name: 'certificate_of_qualification',
                properties: ['license_number', 'certification_type', 'family_name', 'given_names'],
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
