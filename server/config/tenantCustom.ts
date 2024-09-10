import type { CustomCharacter } from '../src/content/types'

import { getDateInt } from '../src/utils/dateint'

export const tenantCustom: CustomCharacter = {
  name: 'James',
  type: 'Tenant',
  image: '/public/representative/representative.svg',
  prerequisites: ['Homeowner'],
  description:
    'James Tenant wants to sublet the secondary suite on a short-term basis while he travels. To do this, he needs to get a business license and prove to the City of Vancouver that he has permission from Sally Homeowner.',
  revocationInfo: [
    {
      type: 'revoke',
      id: 'revokeDigitalLetterOfAuthorization',
      name: "Revoke James' Letter of Authorization",
      credentialName: 'Digital Letter of Authorization',
      credentialIcon: '/public/homeowner/icon-cov.png',
      title: 'Revoke Letter of Authorization',
      description:
        "When James is no longer Sally's tenant, Sally needs to revoke James' Letter of Authorization. Let's see how that works.",
      screens: [
        {
          screenId: 'REVOKE',
          title: 'Revoke Letter of Authorization',
          text: 'Sally will revoke James’s Letter of Authorization as he no longer Sally’s tenant.',
          image: '/public/business/useCases/businessRevokeStart.svg',
        },
        {
          screenId: 'BUTTON',
          title: 'Sally - Homeowner Revokes the Letter of Authorization',
          text: 'Sally can revoke the credentials it issued. Let’s pretend we’re Sally and revoke James’s Letter of Authorization.',
          image: '/public/business/useCases/businessRevoke.svg',
        },
        {
          screenId: 'INFO',
          title: 'James - Remove the revoked crediential from BC Wallet',
          text: 'James’s Letter of Authorization has been revoked by Sally. He will see a red (!) on his Letter of Authorization. James can remove it from his BC Wallet. Organizations that request a Letter of Authorization can identify that his has been revoked and choose not to accept it, even if he doesn’t remove it from his BC Wallet.',
          image: '/public/business/useCases/businessRemoveRevoke.png',
        },
        {
          screenId: 'STEP_END',
          title: "You're done!",
          text: 'Sally has revoked James’s Letter of Authorization. James was notified and can remove it from his BC Wallet. If he rents another property, the homeowner there can issue him a Letter of Authorization for that property. It only took a few seconds and organisations that request a Letter of Authorization can trust that the information it carries is up to date.',
          image: '/public/tenant/chapter-complete-james.svg',
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
      text: 'James Tenant wants to sublet the secondary suite on a short-term basis while he travels. To do this, he needs to get a business license and prove to the City of Vancouver that he has permission from Sally Homeowner.',
      step: 1,
    },
    {
      screenId: 'SETUP_START',
      title: 'Learn about digital credentials',
      text: 'Digital credentials help simplify how customers access government services. They let customers easily prove things with less documentation. Things like proof of identity, property ownership, business licence, and so on.\n\nWhen governments and organizations include digital credentials in delivering services, they:\n\n• Receive trusted data the way it was issued\n• Reduce staff time verifying data that customers entered manually\n• Reduce customer time providing documents and answering questions on forms',
      image: '/public/common/getStarted.svg',
      step: 2,
    },
    {
      screenId: 'CHOOSE_WALLET',
      title: 'Install BC Wallet',
      text: 'To complete the scenario as James Tenant, you will need to install the BC Wallet app on your iOS or Android smartphone.',
      image: '/public/common/app-store-screenshots.svg',
      step: 3,
    },
    {
      screenId: 'CONNECT_PERSON',
      title: 'Get James Tenant person credential',
      text: "As James Tenant, you'll use your BC Services Card account to receive your person credential and add it to your BC Wallet. The person credential proves that you're James when you access government services online so you don't have to provide a photo ID.",
      image: '/public/tenant/person-credential-james.svg',
      issuer_name: 'Service BC (Demo)',
      step: 4,
    },
    {
      screenId: 'ACCEPT_PERSON',
      title: 'Add the credential to your wallet',
      text: 'Check your phone. You’ve received a credential offer from Service BC in your BC Wallet. You can use this credential to prove who you are online.',
      image: '/public/tenant/person-credential-james.svg',
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
              value: 'Tenant',
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
      text: "Great! You got your person credential and added it to your BC Wallet. Let's use the person credential to receive your letter of authorization credential from Sally Homeowner, apply for a business licence, and post your short-term rental listing.",
      image: '/public/tenant/chapter-complete-james.svg',
      step: 5,
    },
  ],
  useCases: [
    {
      type: 'useCase',
      id: 'digitalLetterAuthorization',
      name: 'Receive landlord authorization',
      screens: [
        {
          screenId: 'START',
          title: 'Receive landlord authorization',
          text: "As James, you previously asked Sally Homeowner for permission to sublet and she agreed. Receive the letter of authorization credential from the City of Vancouver, on Sally's behalf. You'll share your person credential in your BC Wallet to prove your identity.",
          image: '/public/tenant/person-credential-james.svg',
        },
        {
          screenId: 'CONNECTION',
          title: 'Scan the QR code to start sharing',
          text: "You receive Sally's permission as an email message from the City of Vancouver sent on her behalf. Open the BC Wallet app and scan the QR code in the message to start sharing your person credential with the City.",
          image: '/public/tenant/email-letter-of-authorization-approved.jpg',
          verifier: { name: 'City of Vancouver', icon: '/public/homeowner/icon-cov.png' },
        },
        {
          screenId: 'PROOF',
          title: 'Confirm the information to share',
          text: 'In BC Wallet, view the request from City of Vancouver to share your person credential. The City of Vancouver is requesting some of the information in your person credential – but not all of it. Select the share button and notice the City receives the information.',
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
            ],
          },
        },
        {
          screenId: 'CREDENTIAL',
          title: 'Get the letter of authorization credential',
          text: 'The City of Vancouver issued your letter of authorization from Sally. In BC Wallet, select the notifications menu and view the new credential offer from the City of Vancouver. Review the information that proves Sally authorizes you to short-term rent the suite on her property. Scroll to the end and select the accept button.',
          issueCredentials: [
            {
              id: '',
              icon: '/public/homeowner/icon-cov.png',
              name: 'DigitalLetterOfAuthorization',
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
                  value: 'Tenant',
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
          title: 'Chapter complete!',
          text: "You received a letter of authorization credential from the City of Vancouver on behalf of Sally Homeowner. In just a few easy steps, you shared minimal information to prove you have Sally's permission to short-term rent.",
          image: '/public/tenant/chapter-complete-james.svg',
        },
      ],
    },
    {
      type: 'useCase',
      id: 'STRDiBLCredential',
      name: 'Get permission to rent short-term',
      screens: [
        {
          screenId: 'START',
          title: 'Get permission to rent short-term',
          text: "As James, apply for a business licence from the City of Vancouver. You'll share your letter of authorization credential in your BC Wallet to answer questions on the application form that prove you have Sally's permission to rent.",
          image: '/public/tenant/person-credential-james.svg',
        },
        {
          screenId: 'CONNECTION',
          title: 'Scan the QR code to start sharing',
          text: 'Open the BC Wallet app and scan the QR code on the City of Vancouver short-term rental business license application form to start sharing your letter of authorization credential with the City.',
          image: '/public/tenant/apply-for-a-business-license.jpg',
          verifier: { name: 'City of Vancouver', icon: '/public/homeowner/icon-cov.png' },
        },
        {
          screenId: 'PROOF',
          title: 'Confirm the information to share',
          text: 'In BC Wallet, view the request from City of Vancouver to share your letter of authorization credential. The City of Vancouver is requesting some of the information in your credential – but not all of it. Select the share button and notice the City receives the information.',
          requestOptions: {
            title: 'City of Vancouver Request',
            text: 'City of Vancouver would like some of your personal information.',
            requestedCredentials: [
              {
                icon: '/public/homeowner/icon-cov.png',
                name: 'DigitalLetterOfAuthorization',
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
          title: 'Get the business licence credential',
          text: "The City of Vancouver approved your business licence application and issued your licence. In BC Wallet, select the notifications menu and view the new credential offer from the City of Vancouver. Review the information that proves you're licensed to rent your suite short-term. Scroll to the end and select the accept button.",
          issueCredentials: [
            {
              id: '',
              icon: '/public/homeowner/icon-cov.png',
              name: 'STR_DiBL_Credential',
              version: '1.0.1',
              attributes: [
                {
                  name: 'license_number',
                  value: '1234567890',
                },
                {
                  name: 'family_name',
                  value: 'Tenant',
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
                {
                  name: 'license_status',
                  value: 'Active',
                },
              ],
              connectionId: '',
            },
          ],
        },
        {
          screenId: 'STEP_END',
          title: 'Chapter complete!',
          text: "You received a short-term rental business licence credential from the City of Vancouver. In just a few easy steps, you shared minimal information to get proof you're licensed to rent your suite short-term.",
          image: '/public/tenant/chapter-complete-james.svg',
        },
      ],
    },
    {
      type: 'useCase',
      id: 'STRListing',
      name: 'Post listing on short-term rental platform',
      screens: [
        {
          screenId: 'START',
          title: 'Post listing on short-term rental platform',
          text: "As James, list your suite on the fictitious rental platform Roam Like Home. You'll share your short-term rental business licence credential in your BC Wallet to prove you have the City of Vancouver's permission to rent. This increases trust in your listing and lowers risk for your guests.",
          image: '/public/tenant/person-credential-james.svg',
        },
        {
          screenId: 'CONNECTION',
          title: 'Scan the QR code to start sharing',
          text: 'Open the BC Wallet app and scan the QR code on the Roam Like Home website to start sharing your business licence credential with Roam Like Home.',
          image: '/public/representative/useCases/strOverlay.png',
          verifier: { name: 'STR.com', icon: '/public/representative/icon-str.png' },
        },
        {
          screenId: 'PROOF',
          title: 'Confirm the information to share',
          text: 'In BC Wallet, view the request from Roam Like Home to share your business licence credential. Roam Like Home is requesting some of the information in your credential – but not all of it. Select the share button and notice Roam Like Home receives the information.',
          requestOptions: {
            title: 'STR.com Request',
            text: 'STR.com would like some of your personal information.',
            requestedCredentials: [
              {
                icon: '/public/homeowner/icon-cov.png',
                name: 'STR_DiBL_Credential',
                properties: [
                  'license_number',
                  'expiry_date',
                  'license_status',
                  'given_names',
                  'family_name',
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
          title: 'Chapter complete!',
          text: 'You posted your suite for rent on Roam Like Home. In just a few easy steps, you shared minimal information to prove you have permission to rent the suite.',
          image: '/public/tenant/chapter-complete-james.svg',
        },
      ],
    },
  ],
}
