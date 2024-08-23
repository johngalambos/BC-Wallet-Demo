import type { CustomCharacter } from '../src/content/types'

import { getDateInt } from '../src/utils/dateint'

export const tenantCustom: CustomCharacter = {
  name: 'James',
  type: 'Tenant',
  image: '/public/representative/representative.svg',
  description:
    'James is a tenant. He wants to publish a listing on Airbnb for his space that he rents. To do this, he will need to get authorization from his landlord and the strata.',
  revocationInfo: [
    {
      type: 'revoke',
      id: 'revokeDigitalBusinessCard',
      name: "Revoke James' Strata Letter of Authorization",
      credentialName: 'Strata Letter of Authorization',
      credentialIcon: '/public/homeowner/icon-cov.png',
      title: 'Revoke Strata Letter of Authorization',
      description:
        "When James is no longer Sally's tenant, the strata needs to revoke James' Strata Letter of Authorization. Let's see how that works.",
      screens: [
        {
          screenId: 'REVOKE',
          title: 'Revoke Strata Letter of Authorization',
          text: 'The strata will revoke James’s Strata Letter of Authorization as he no longer Sally’s tenant.',
          image: '/public/business/useCases/businessRevokeStart.svg',
        },
        {
          screenId: 'BUTTON',
          title: 'Strata - Revoke the Strata Letter of Authorization',
          text: 'The strata can revoke the credentials it issued. Let’s pretend we’re the strata and revoke James’s Strata Letter of Authorization.',
          image: '/public/business/useCases/businessRevoke.svg',
        },
        {
          screenId: 'INFO',
          title: 'James - Remove the revoked crediential from BC Wallet',
          text: 'James’s Strata Letter of Authorization has been revoked by the strata. He will see a red (!) on his Strata Letter of Authorization. James can remove it from his BC Wallet. Organisations that request a Strata Letter of Authorization can identify that his has been revoked and choose not to accept it, even if he doesn’t remove it from his BC Wallet.',
          image: '/public/business/useCases/businessRemoveRevoke.png',
        },
        {
          screenId: 'STEP_END',
          title: "You're done!",
          text: 'The strata has revoked James’s Strata Letter of Authorization. James was notified and can remove it from his BC Wallet. If he rents another strata property, the strata there can issue him a Strata Letter of Authorization. It only took a few seconds and organisations that request a Strata Letter of Authorization can trust that the information it carries is up to date.',
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
      onboardingStep: 'ACCEPT_PERSON',
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
      text: 'James is a tenant. He wants to publish a listing on Airbnb for his space that he rents. To do this, he will need to get authorization from his landlord and the strata.',
      step: 1,
    },
    {
      screenId: 'SETUP_START',
      title: 'Learn about digital credentials',
      text: 'What is the BC Wallet? \nThe BC Wallet is an app created by the Government of British Columbia that allows users to store and use digital credentials on their smartphones. These digital credentials can include IDs, licenses, certificates, titles, and more. \nCustomer Value: \nUsing the BC Wallet is fast and simple, with an increasing number of uses to simplify access to services both online and in person. \n• It saves users from having to manually fill out forms by allowing the BC Wallet to automatically fill the form with the requested information using the data stored in digital credentials. \n• It saves staff time by eliminating the need to verify manually typed information in forms. Information that comes from the credentials is information that can be trusted because the user does not have the ability to modify the data; data arrives to the CoV systems as issued by the organization/Authority.',
      image: '/public/common/getStarted.svg',
      step: 2,
    },
    {
      screenId: 'CHOOSE_WALLET',
      title: 'Install BC Wallet',
      text: 'First, install the BC Wallet app onto your smartphone. Select the button below for instructions and the next step.',
      image: '/public/common/app-store-screenshots.png',
      step: 3,
    },
    {
      screenId: 'CONNECT_PERSON',
      title: 'Get a person credential',
      text: 'James gets his Person credential from the BC Services Card app. he starts the process within BC Wallet. For this demo you will scan this QR code to receive the credential offer.',
      image: '/public/lawyer2/onboarding/personCredPhone.svg',
      issuer_name: 'Service BC (Demo)',
      step: 4,
    },
    {
      screenId: 'ACCEPT_PERSON',
      title: 'Add the credential to your wallet',
      text: 'Check your phone. You’ve received a credential offer from Service BC in your BC Wallet. You can use this credential to prove who you are online.',
      image: '/public/lawyer2/onboarding/personCredPhone.svg',
      step: 4,
      credentials: [
        {
          name: 'Person',
          version: '1.2',
          icon: '/public/lawyer2/connection/bc-logo.png',
          attributes: [
            {
              name: 'postal_code',
              value: 'V5Y1V4',
            },
            {
              name: 'picture',
              value:
                'data:image/png;base64,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',
            },
            {
              name: 'given_names',
              value: 'James',
            },
            {
              name: 'family_name',
              value: 'tenant',
            },
            {
              name: 'locality',
              value: 'BC',
            },
            {
              name: 'region',
              value: 'Vancouver',
            },
            {
              name: 'street_address',
              value: '453 W 12th Ave',
            },
            {
              name: 'country',
              value: 'Canada',
            },
            {
              name: 'expiry_date_dateint',
              value: `${getDateInt(5)}`,
            },
            {
              name: 'birthdate_dateint',
              value: `${getDateInt(-19)}`,
            },
          ],
        },
      ],
    },
    {
      screenId: 'SETUP_COMPLETED',
      title: 'Recap and next steps',
      text: 'Congratulations, you’ve just received your first digital credentials. They are safely stored in your wallet and ready to be used. So, what are you waiting for? Let’s go!',
      image: '/public/common/onboarding-completed-light.svg',
      step: 5,
    },
  ],
  useCases: [
    {
      type: 'useCase',
      id: 'digitalLetterAuthorization',
      name: 'Apply for a Strata Letter of Authorization',
      screens: [
        {
          screenId: 'START',
          title: 'Apply for a Strata Letter of Authorization',
          text: 'James can apply for a Strata Letter of Authorization from the strata using his Person Credential and his Digital Letter of Authorization.',
          image: '/public/lawyer2/useCases/courtServices/bothCreds.svg',
        },
        {
          screenId: 'CONNECTION',
          title: 'Start providing your information',
          text: 'City of Vancouver offers a quick way to verify your credentials. Scan the QR code with your BC Wallet to get started.',
          image: '/public/homeowner/useCases/covOverlay.png',
          verifier: { name: 'City of Vancouver', icon: '/public/homeowner/icon-cov.png' },
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
                icon: '/public/lawyer2/connection/bc-logo.png',
                name: 'Person',
                properties: [
                  'given_names',
                  'family_name',
                  'birthdate_dateint',
                  'expiry_date_dateint',
                  'street_address',
                  'postal_code',
                ],
              },
              {
                icon: '/public/homeowner/icon-cov.png',
                name: 'DigitalLetterOfAuthorization',
                properties: [
                  'given_names',
                  'family_name',
                  'street_address',
                  'region',
                  'locality',
                  'country',
                  'postal_code',
                ],
              },
            ],
          },
        },
        {
          screenId: 'CREDENTIAL',
          title: 'Receive credential',
          text: 'Check your phone. City of Vancouver has provided James with the Digital Letter of Authorization.',
          issueCredentials: [
            {
              id: '',
              icon: '/public/homeowner/icon-cov.png',
              name: 'StrataLetterOfAuthorization',
              version: '1.0.0',
              attributes: [
                {
                  name: 'postal_code',
                  value: 'V6B2B5',
                },
                {
                  name: 'given_names',
                  value: 'James',
                },
                {
                  name: 'family_name',
                  value: 'tenant',
                },
                {
                  name: 'locality',
                  value: 'BC',
                },
                {
                  name: 'region',
                  value: 'Vancouver',
                },
                {
                  name: 'street_address',
                  value: '814 Richards St',
                },
                {
                  name: 'country',
                  value: 'Canada',
                },
              ],
              connectionId: '',
            },
          ],
        },
        {
          screenId: 'STEP_END',
          title: "You're done!",
          text: 'You’ve provided the City of Vancouver with the necessary information. It only took a few seconds and you revealed minimal information that the City of Vancouver could easily and automatically trust.',
          image: '/public/lawyer2/onboarding/lawyer2Success.svg',
        },
      ],
    },
    {
      type: 'useCase',
      id: 'STRDiBLCredential',
      name: 'Apply for a STR DiBL Credential',
      screens: [
        {
          screenId: 'START',
          title: 'Apply for a STR DiBL Credential',
          text: 'James (that’s you in this demo) can apply for a STR DiBL credential from City of Vancouver and using his Strata Letter of Authorization.',
          image: '/public/lawyer2/useCases/courtServices/bothCreds.svg',
        },
        {
          screenId: 'CONNECTION',
          title: 'Start providing your credentials',
          text: 'City of Vancouver offers a quick way to verify your credentials. Scan the QR code with your BC Wallet to get started.',
          image: '/public/homeowner/useCases/covOverlay.png',
          verifier: { name: 'City of Vancouver', icon: '/public/homeowner/icon-cov.png' },
        },
        {
          screenId: 'PROOF',
          title: 'Confirm the information to send',
          text: "BC Wallet will now ask you to confirm what to send. Notice how you're not sharing your entire credential. City of Vancouver is requesting that you prove only what is needed.",
          requestOptions: {
            title: 'City of Vancouver Request',
            text: 'City of Vancouver would like some of your personal information.',
            requestedCredentials: [
              {
                icon: '/public/homeowner/icon-cov.png',
                name: 'StrataLetterOfAuthorization',
                properties: [
                  'given_names',
                  'family_name',
                  'street_address',
                  'locality',
                  'region',
                  'postal_code',
                  'country',
                ],
              },
            ],
          },
        },
        {
          screenId: 'CREDENTIAL',
          title: 'Receive credential',
          text: 'Check your phone. City of Vancouver has provided you with the STR DiBL Credential.',
          issueCredentials: [
            {
              id: '',
              icon: '/public/homeowner/icon-cov.png',
              name: 'STR_DiBL_Credential',
              version: '1.0.0',
              attributes: [
                {
                  name: 'license_number',
                  value: '1234567890',
                },
                {
                  name: 'family_name',
                  value: 'Builder',
                },
                {
                  name: 'given_names',
                  value: 'James',
                },
                {
                  name: 'own_rent',
                  value: 'Own',
                },
                {
                  name: 'street_address',
                  value: '814 Richards St',
                },
                {
                  name: 'country',
                  value: 'Canada',
                },
                {
                  name: 'locality',
                  value: 'BC',
                },
                {
                  name: 'region',
                  value: 'Vancouver',
                },
                {
                  name: 'postal_code',
                  value: 'V6B2B5',
                },
                {
                  name: 'expiry_date',
                  value: `${getDateInt(1)}`,
                },
              ],
              connectionId: '',
            },
          ],
        },
        {
          screenId: 'STEP_END',
          title: "You're done!",
          text: 'You’ve received the STR DiBL Credential. You can now use this credential to publish listings for your home. It only took a few seconds and you revealed minimal information that City of Vancouver could easily and automatically trust.',
          image: '/public/lawyer2/onboarding/lawyer2Success.svg',
        },
      ],
    },
    {
      type: 'useCase',
      id: 'Airbnb',
      name: 'Publish listing on Airbnb',
      screens: [
        {
          screenId: 'START',
          title: 'Post listing on Airbnb',
          text: 'James can use his STR DiBL Credential from the City of Vancouver to fill out information on Airbnb to post a listing for his space.',
          image: '/public/lawyer2/useCases/courtServices/bothCreds.svg',
        },
        {
          screenId: 'CONNECTION',
          title: 'Start providing your qualifications',
          text: 'Airbnb offers a quick way to verify your qualifications. Scan the QR code with your BC Wallet to get started.',
          image: '/public/homeowner/useCases/airbnbOverlay.png',
          verifier: { name: 'Airbnb', icon: '/public/homeowner/icon-airbnb.png' },
        },
        {
          screenId: 'PROOF',
          title: 'Confirm the information to send',
          text: "BC Wallet will now ask you to confirm what to send. Notice how you're not sharing your entire credential. Airbnb is requesting that you prove only what is needed.",
          requestOptions: {
            title: 'Airbnb Request',
            text: 'Airbnb would like some of your personal information.',
            requestedCredentials: [
              {
                icon: '/public/homeowner/icon-cov.png',
                name: 'STR_DiBL_Credential',
                properties: [
                  'license_number',
                  'given_names',
                  'family_name',
                  'expiry_date',
                  'street_address',
                  'region',
                  'locality',
                  'country',
                  'postal_code',
                  'own_rent',
                ],
              },
            ],
          },
        },
        {
          screenId: 'STEP_END',
          title: "You're done!",
          text: 'Airbnb has received your details. You can now publish your listing for your space. It only took a few seconds and you revealed minimal information that Airbnb could easily and automatically trust.',
          image: '/public/lawyer2/onboarding/lawyer2Success.svg',
        },
      ],
    },
  ],
}
