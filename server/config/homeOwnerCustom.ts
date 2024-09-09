import type { CustomCharacter } from '../src/content/types'

import { getDateInt } from '../src/utils/dateint'

export const homeOwnerCustom: CustomCharacter = {
  name: 'Sally',
  type: 'Homeowner',
  image: '/public/homeowner/homeowner.svg',
  description:
    'Sally Homeowner wants to rent her secondary suite long-term to James Tenant. She allows James to sublet the suite short-term while he travels. To do this, she needs to get a business licence and prove to the City of Vancouver that she owns the property. Also, she needs to give James proof of her permission to sublet.',
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
      title: 'Meet Sally',
      text: 'Sally Homeowner wants to rent her secondary suite long-term to James Tenant. She allows James to sublet the suite short-term while he travels. To do this, she needs to get a business licence and prove to the City of Vancouver that she owns the property. Also, she needs to give James proof of her permission to sublet.',
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
      text: 'To complete the scenario as Sally Homeowner, you will need to install the BC Wallet app on your iOS or Android smartphone.',
      image: '/public/common/app-store-screenshots.png',
      step: 3,
    },
    {
      screenId: 'CONNECT_PERSON',
      title: 'Get Sally Homeowner person credential',
      text: "As Sally Homeowner, you'll use your BC Services Card account to receive your person credential and add it to your BC Wallet. The person credential proves that you're Sally when you access government services online so you don't have to provide a photo of your ID.",
      image: '/public/homeowner/person-credential-sally.svg',
      issuer_name: 'Service BC (Demo)',
      step: 4,
    },
    {
      screenId: 'ACCEPT_PERSON',
      title: 'Add the credential to your wallet',
      text: 'Check your phone. You’ve received a credential offer from Service BC in your BC Wallet. You can use this credential to prove who you are online.',
      image: '/public/homeowner/person-credential-sally.svg',
      step: 4,
      credentials: [
        {
          name: 'Person',
          version: '1.2',
          icon: '/public/lawyer2/connection/bc-logo.png',
          attributes: [
            {
              name: 'postal_code',
              value: 'V6B2B5',
            },
            {
              name: 'picture',
              value:
                'data:image/png;base64,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',
            },
            {
              name: 'given_names',
              value: 'Sally',
            },
            {
              name: 'family_name',
              value: 'Homeowner',
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
      text: "Great! You got your person credential and added it to your BC Wallet. \n \nLet's use the person credential to get your proof of home ownership and apply for a business licence.",
      image: '/public/homeowner/chapter-complete-sally.svg',
      step: 5,
    },
  ],
  useCases: [
    {
      type: 'useCase',
      id: 'homeOwnerCredential',
      name: 'Get proof that you own the property',
      screens: [
        {
          screenId: 'START',
          title: 'Get proof that you own the property',
          text: "As Sally, apply for a homeowner credential from BC Land Title and Survey Authority (LTSA). You'll provide your person credential in your BC Wallet to prove your identity.",
          image: '/public/homeowner/person-credential-sally.svg',
        },
        {
          screenId: 'CONNECTION',
          title: 'Scan the QR code to start sharing',
          text: 'Open the BC Wallet app and scan the QR code on the LTSA website to start sharing your person credential with LTSA.',
          image: '/public/homeowner/useCases/ltsaOverlay.png',
          verifier: { name: 'LTSA', icon: '/public/homeowner/icon-ltsa.svg' },
        },
        {
          screenId: 'PROOF',
          title: 'Confirm the information to share',
          text: 'In BC Wallet, view the request from LTSA to share your person credential. LTSA is requesting some of the information in your person credential – but not all of it. Select the share button and notice LTSA receives the information.',
          requestOptions: {
            title: 'LTSA Request',
            text: 'LTSA would like some of your personal information.',
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
          title: 'Get the homeowner credential',
          text: "In BC Wallet, select the notifications menu and view the new credential offer from LTSA. Review the information that proves you're a homeowner. Scroll to the end and select the accept button.",
          issueCredentials: [
            {
              id: '',
              icon: '/public/homeowner/icon-ltsa.svg',
              name: 'homeowner_credential',
              version: '1.1.0',
              attributes: [
                {
                  name: 'title',
                  value: 'N34500A',
                },
                {
                  name: 'registration_date',
                  value: `${getDateInt(-19)}`,
                },
                {
                  name: 'family_name',
                  value: 'Homeowner',
                },
                {
                  name: 'given_names',
                  value: 'Sally',
                },
                {
                  name: 'taxation_authority',
                  value: 'City of Vancouver',
                },
                {
                  name: 'postal_code',
                  value: 'V6B2B5',
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
                {
                  name: 'parcel_id',
                  value: '0123456789',
                },
                {
                  name: 'short_legal_description',
                  value: 'S/1530///A',
                },
                {
                  name: 'description_of_land',
                  value: 'Some text here for description of land',
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
          title: 'Chapter complete!',
          text: "You received a homeowner credential from LTSA. In just a few easy steps, you shared minimal information to get proof you own a home that other organizations can trust because it's verified.",
          image: '/public/homeowner/chapter-complete-sally.svg',
        },
      ],
    },
    {
      type: 'useCase',
      id: 'LTRDiBLCredential',
      name: 'Get permission to rent long-term',
      screens: [
        {
          screenId: 'START',
          title: 'Get permission to rent long-term',
          text: "As Sally, apply for a business licence from the City of Vancouver. You'll share your homeowner credential in your BC Wallet to answer questions on the application form that prove you own the home.",
          image: '/public/homeowner/person-credential-sally.svg',
        },
        {
          screenId: 'CONNECTION',
          title: 'Scan the QR code to start sharing',
          text: 'Open the BC Wallet app and scan the QR code on the City of Vancouver business license application form to start sharing your homeowner credential with the City.',
          image: '/public/homeowner/useCases/covOverlay.png',
          verifier: { name: 'City of Vancouver', icon: '/public/homeowner/icon-cov.png' },
        },
        {
          screenId: 'PROOF',
          title: 'Confirm the information to share',
          text: 'In BC Wallet, view the request from City of Vancouver to share your homeowner credential. The City of Vancouver is requesting some of the information in your homeowner credential – but not all of it. Select the share button and notice the City receives the information.',
          requestOptions: {
            title: 'City of Vancouver Request',
            text: 'City of Vancouver would like some of your personal information.',
            requestedCredentials: [
              {
                icon: '/public/homeowner/icon-ltsa.svg',
                name: 'homeowner_credential',
                properties: [
                  'title',
                  'given_names',
                  'family_name',
                  'expiry_date',
                  'street_address',
                  'region',
                  'locality',
                  'country',
                  'postal_code',
                  'parcel_id',
                ],
              },
            ],
          },
        },
        {
          screenId: 'CREDENTIAL',
          title: 'Get the business licence credential',
          text: "The City of Vancouver approved your business licence application and issued your licence. In BC Wallet, select the notifications menu and view the new credential offer from the City of Vancouver. Review the information that proves you're licensed to rent your secondary suite long-term. Scroll to the end and select the accept button.",
          issueCredentials: [
            {
              id: '',
              icon: '/public/homeowner/icon-cov.png',
              name: 'LTR_DiBL_Credential',
              version: '1.0.0',
              attributes: [
                {
                  name: 'license_number',
                  value: '1234567890',
                },
                {
                  name: 'family_name',
                  value: 'Homeowner',
                },
                {
                  name: 'given_names',
                  value: 'Sally',
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
          title: 'Chapter complete!',
          text: "You received a long-term rental business licence credential from the City of Vancouver. In just a few easy steps, you shared minimal information to get proof you're licensed to rent your secondary suite long-term.",
          image: '/public/homeowner/chapter-complete-sally.svg',
        },
      ],
    },
    {
      type: 'useCase',
      id: 'digitalLetterAuthorization',
      name: 'Authorize tenant to sublet short-term',
      screens: [
        {
          screenId: 'START',
          title: 'Give tenant permission to sublet short-term',
          text: "We've jumped forward in time. As Sally, you've rented to James Tenant for a while. Now, he's asking you if he can sublet short-term while he travels. You'll agree and grant him a letter of authorization credential using the City of Vancouver so that he can get a business licence. Again, you'll share your homeowner credential in your BC Wallet to prove you own the home and grant James permission.",
          image: '/public/homeowner/person-credential-sally.svg',
        },
        {
          screenId: 'CONNECTION',
          title: 'Scan the QR code to start sharing',
          text: "You receive James's request as an email message from the City of Vancouver sent on his behalf. Open the BC Wallet app and scan the QR code in the message to start sharing your homeowner credential with the City.",
          image: '/public/homeowner/useCases/covHomeownerOverlay.png',
          verifier: { name: 'City of Vancouver', icon: '/public/homeowner/icon-cov.png' },
        },
        {
          screenId: 'PROOF',
          title: 'Confirm the information to send',
          text: 'In BC Wallet, view the request from City of Vancouver to share your homeowner credential. The City of Vancouver is requesting some of the information in your homeowner credential – but not all of it. Select the share button and notice the City receives the information.',
          requestOptions: {
            title: 'City of Vancouver Request',
            text: 'City of Vancouver would like some of your personal information.',
            requestedCredentials: [
              {
                icon: '/public/homeowner/icon-ltsa.svg',
                name: 'homeowner_credential',
                properties: [
                  'given_names',
                  'family_name',
                  'expiry_date',
                  'street_address',
                  'region',
                  'locality',
                  'country',
                  'postal_code',
                  'parcel_id',
                ],
              },
            ],
          },
        },
        {
          screenId: 'STEP_END',
          title: 'Chapter complete!',
          text: "The City of Vancouver has notified James that you've granted them a letter of authorization credential so that he can get a business licence. In just a few easy steps, you shared minimal information to prove you own the property.",
          image: '/public/homeowner/chapter-complete-sally.svg',
        },
      ],
    },
    // {
    //   type: 'useCase',
    //   id: 'STRDiBLCredential',
    //   name: 'Apply for a Short Term Rental (STR) Business License',
    //   screens: [
    //     {
    //       screenId: 'START',
    //       title: 'Apply for a Short Term Rental (STR) Business License',
    //       text: 'Sally (that’s you in this demo) can apply for a Short Term Rental (STR) Business License from City of Vancouver and using her Homeowner Credential.',
    //       image: '/public/lawyer2/useCases/courtServices/bothCreds.svg',
    //     },
    //     {
    //       screenId: 'CONNECTION',
    //       title: 'Start providing your credentials',
    //       text: 'City of Vancouver offers a quick way to verify your credentials. Scan the QR code with your BC Wallet to get started.',
    //       image: '/public/homeowner/useCases/covOverlay.png',
    //       verifier: { name: 'City of Vancouver', icon: '/public/homeowner/icon-cov.png' },
    //     },
    //     {
    //       screenId: 'PROOF',
    //       title: 'Confirm the information to send',
    //       text: "BC Wallet will now ask you to confirm what to send. Notice how you're not sharing your entire credential. City of Vancouver is requesting that you prove only what is needed.",
    //       requestOptions: {
    //         title: 'City of Vancouver Request',
    //         text: 'City of Vancouver would like some of your personal information.',
    //         requestedCredentials: [
    //           {
    //             icon: '/public/homeowner/icon-ltsa.svg',
    //             name: 'homeowner_credential',
    //             properties: [
    //               'title',
    //               'given_names',
    //               'family_name',
    //               'expiry_date',
    //               'street_address',
    //               'region',
    //               'locality',
    //               'country',
    //               'postal_code',
    //               'parcel_id',
    //             ],
    //           },
    //         ],
    //       },
    //     },
    //     {
    //       screenId: 'CREDENTIAL',
    //       title: 'Receive credential',
    //       text: 'Check your phone. City of Vancouver has provided you with the Short Term Rental (STR) Business License.',
    //       issueCredentials: [
    //         {
    //           id: '',
    //           icon: '/public/homeowner/icon-cov.png',
    //           name: 'STR_DiBL_Credential',
    //           version: '1.0.0',
    //           attributes: [
    //             {
    //               name: 'license_number',
    //               value: '1234567890',
    //             },
    //             {
    //               name: 'family_name',
    //               value: 'Builder',
    //             },
    //             {
    //               name: 'given_names',
    //               value: 'Sally',
    //             },
    //             {
    //               name: 'own_rent',
    //               value: 'Own',
    //             },
    //             {
    //               name: 'street_address',
    //               value: '814 Richards St',
    //             },
    //             {
    //               name: 'country',
    //               value: 'Canada',
    //             },
    //             {
    //               name: 'locality',
    //               value: 'BC',
    //             },
    //             {
    //               name: 'region',
    //               value: 'Vancouver',
    //             },
    //             {
    //               name: 'postal_code',
    //               value: 'V6B2B5',
    //             },
    //             {
    //               name: 'expiry_date',
    //               value: `${getDateInt(1)}`,
    //             },
    //           ],
    //           connectionId: '',
    //         },
    //       ],
    //     },
    //     {
    //       screenId: 'STEP_END',
    //       title: "You're done!",
    //       text: 'You’ve received the Short Term Rental (STR) Business License. You can now use this credential to publish listings for your home. It only took a few seconds and you revealed minimal information that City of Vancouver could easily and automatically trust.',
    //       image: '/public/lawyer2/onboarding/lawyer2Success.svg',
    //     },
    //   ],
    // },
    // {
    //   type: 'useCase',
    //   id: 'Airbnb',
    //   name: 'Publish listing on Airbnb',
    //   screens: [
    //     {
    //       screenId: 'START',
    //       title: 'Post listing on Airbnb',
    //       text: 'Sally can use her Short Term Rental (STR) Business License from the City of Vancouver to fill out information on Airbnb to post a listing for her space.',
    //       image: '/public/lawyer2/useCases/courtServices/bothCreds.svg',
    //     },
    //     {
    //       screenId: 'CONNECTION',
    //       title: 'Start providing your credentials',
    //       text: 'Airbnb offers a quick way to verify your credentials. Scan the QR code with your BC Wallet to get started.',
    //       image: '/public/homeowner/useCases/airbnbOverlay.png',
    //       verifier: { name: 'Airbnb', icon: '/public/homeowner/icon-airbnb.png' },
    //     },
    //     {
    //       screenId: 'PROOF',
    //       title: 'Confirm the information to send',
    //       text: "BC Wallet will now ask you to confirm what to send. Notice how you're not sharing your entire credential. Airbnb is requesting that you prove only what is needed.",
    //       requestOptions: {
    //         title: 'Airbnb Request',
    //         text: 'Airbnb would like some of your personal information.',
    //         requestedCredentials: [
    //           {
    //             icon: '/public/homeowner/icon-cov.png',
    //             name: 'STR_DiBL_Credential',
    //             properties: [
    //               'license_number',
    //               'given_names',
    //               'family_name',
    //               'expiry_date',
    //               'street_address',
    //               'region',
    //               'locality',
    //               'country',
    //               'postal_code',
    //               'own_rent',
    //             ],
    //           },
    //         ],
    //       },
    //     },
    //     {
    //       screenId: 'STEP_END',
    //       title: "You're done!",
    //       text: 'Airbnb has received your details. You can now publish your listing for your space. It only took a few seconds and you revealed minimal information that Airbnb could easily and automatically trust.',
    //       image: '/public/lawyer2/onboarding/lawyer2Success.svg',
    //     },
    //   ],
    // },
  ],
}
