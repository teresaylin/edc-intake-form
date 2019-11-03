const questions = [
  {
    question: "Full Name",
    description: null,
    inputType: "text",
    required: true,
    section: "Client Information"
  },
  {
    question: "Birthdate",
    description: null,
    inputType: "date",
    required: false,
    section: "Client Information"
  },
  {
    question: "What is the address that you are being evicted from?",
    description: null,
    inputType: "text",
    // inputType: "localAddress",
    required: false,
    section: "Client Address"
  },
  {
    question: "Phone number",
    description: null,
    inputType: "phone",
    required: false,
    section: "Client Information"
  },
  {
    question: "Email",
    description: null,
    // inputType: "email",
    inputType: "text",
    required: false,
    section: "Client Information"
  },
  {
    question: "Last 4 digits of your SSN",
    description: null,
    inputType: "social",
    required: false,
    section: "Client Information"
  },

  // {
  //   question:
  //     "Would you like to receive important notifications and documents about the case at this address?",
  //   description: null,
  //   inputType: "boolean",
  //   required: false,
  //   section: "Client Address"
  // },
  {
    question:
      "Where would you like to receive important notifications and documents?",
    description: null,
    // inputType: "fullAddress",
    inputType: "text",
    required: false,

    section: "Mailing Address"
  },
  {
    question: "Emergency Contact Name",
    description: null,
    inputType: "text",
    required: false,
    section: "Emergency Contact"
  },
  {
    question: "What is your relationship to your emergency contact?",
    description: null,
    inputType: "dropdown",
    options: ["Spouse", "Parent", "Child", "Friend", "Relative", "Other"],
    required: false,
    section: "Emergency Contact"
  },
  {
    question: "What is the phone number of your emergency contact?",
    description: null,
    inputType: "phone",
    required: false,
    section: "Emergency Contact"
  },
  {
    question: "What is the address of your emergency contact?",
    description: null,
    // inputType: "fullAddress",
    inputType: "text",
    required: false,
    section: "Emergency Contact"
  },
  {
    question: "I give permission to discuss my case with my emergency contact",
    description: null,
    inputType: "boolean",
    required: false,
    section: "Emergency Contact"
  },
  {
    question: "Are you comfortable speaking English?",
    description: null,
    inputType: "dropdown",
    options: ["Yes", "No", "Some"],
    required: false,
    section: "Language Preferences"
  },
  {
    question: "Do you need an interpreter for court proceedings?",
    description: null,
    inputType: "boolean",
    required: false,
    section: "Language Preferences"
  },
  {
    question: "What is your preferred language?",
    description: null,
    inputType: "dropdownSpecifyOther",
    options: [
      "English",
      "Spanish",
      "Cantonese",
      "Mandarin",
      "Russian",
      "Tagalog"
    ],
    required: false,
    section: "Language Preferences"
  },
  {
    question: "What is your race? (Select all that apply)",
    description: null,
    inputType: "multiSelect",
    options: [
      "American Indian / Alaskan Native",
      "Asian",
      "Black / African American",
      "Native Hawaiian / Other Pacific Islander",
      "White",
      "Other / Multiracial"
    ],
    required: false,
    section: "Client Information"
  },
  {
    question: "Which best describes your ethnicity?",
    description: null,
    inputType: "singleSelect",
    options: ["Hispanic / Latino", "Not Hispanic / Latino"],
    required: false,
    section: "Client Information"
  },
  {
    question: "Which best describes your current gender identity?",
    description: null,
    inputType: "dropdownSpecifyOther",
    options: [
      "Female",
      "Genderqueer / Gender Non-binary",
      "Male",
      "Trans Female",
      "Trans Male"
    ],
    required: false,
    section: "Client Information"
  },
  {
    question:
      "Which best describes your sexual orientation or sexual identify?",
    description: null,
    inputType: "dropdownSpecifyOther",
    options: [
      "Bisexual",
      "Gay / Lesbian / Same-gender loving",
      "Questioning / Unsure",
      "Straight / Heterosexual",
      "Decline to answer"
    ],
    required: false,
    section: "Client Information"
  },
  {
    question: "How did you hear about us?",
    description: null,
    inputType: "multiSelectSpecifyOther",
    options: ["Friend or relative", "Agency", "Online / Social Media", "Court"],
    required: false,
    section: "Client Information"
  }
];

export default questions;
