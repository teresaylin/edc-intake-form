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
  },
  {
    "question": "Are you currently living with the person evicting you?",
    "description": null,
    "inputType": "boolean",
    "required": false,
    "section": "Household Information"
  },
  {
    "question": "Which best describes your household?",
    "description": null,
    "inputType": "singleSelect",
    "options": ["Single Household", "Dual Household"],
    "required": false,
    "section": "Household Information"
  },
  {
    "question": "Number of adults in your household (including yourself)?",
    "description": null,
    "inputType": "dropdown",
    "options": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    "required": false,
    "section": "Household Information"
  },
  {
    "question": "Number of children?",
    "description": null,
    "inputType": "dropdown",
    "options": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    "required": false,
    "section": "Household Information"
  },
  {
    "question": "What is your monthly household gross income?",
    "description": null,
    "inputType": "text",
    "required": false,
    "section": "Household Information"
  },
  {
    "question": "Has anyone in your household served in the United States military?",
    "description": null,
    "inputType": "boolean",
    "required": false,
    "section": "Additional Information"
  },
  {
    "question": "Is anyone in your household pregnant?",
    "description": null,
    "inputType": "boolean",
    "required": false,
    "section": "Additional Information"
  },
  {
    "question": "Do you have any disability or disease diagnoses?",
    "description": null,
    "inputType": "boolean",
    "required": false,
    "section": "Additional Information"
  },
  {
    "question": "Do any of these apply to you?",
    "description": null,
    "inputType": "multiSelectSpecifyOther",
    "options": [
      "Mental Health Disability",
      "Physical Disability",
      "Developmental Disability",
      "Chronic Health Condition",
      "HIV/AIDS",
      "Issues with Substance Abuse",
      "None"
    ],
    "required": false,
    "section": "Additional Information"
  },
  {
    "question": "Are you receiving any medical treatment or medications for any of these issues?",
    "description": null,
    "inputType": "text",
    "required": false,
    "section": "Additional Information"
  },
  {
    "question": "Is your home facing foreclosure?",
    "description": null,
    "inputType": "singleSelect",
    "options": ["Yes", "No", "I am not a home owner"],
    "required": false,
    "section": "Additional Information"
  },
  {
    "question": "What is your individual monthly income?",
    "description": null,
    "inputType": "text",
    "required": false,
    "section": "Income"
  },
  {
    "question": "What is your source of income? Are you receiving any of these benefits?",
    "description": null,
    "inputType": "multiSelect",
    "options": [
      "CalWorks",
      "Employment",
      "Food Stamps",
      "General Assistance / County Assistance",
      "Medi-Cal",
      "SSI (Suplement Security Income)",
      "SSDI (Social Security Disability Income)",
      "SDI (State Disability)",
      "Unemployment Stub",
      "Other"
    ],
    "required": false,
    "section": "Income"
  },
  {
    "question": "What date did you move into your home?",
    "description": null,
    "inputType": "date",
    "required": false,
    "section": "Type of Housing"
  },
  {
    "question": "Which of these describe the type of housing you have?",
    "description": null,
    "inputType": "dropdown",
    "options": [
      "Private, rent controlled",
      "Private, not rent controlled",
      "Private, unknown if rent controlled",
      "Landlord is SFHA",
      "Project-based subsidy",
      "Tenant-based subsidy"
    ],
    "required": false,
    "section": "Type of Housing"
  },
  {
    "question": "Have you received a notice?",
    "description": null,
    "inputType": "boolean",
    "required": false,
    "section": "Case Information"
  },
  {
    "question": "Has an Unlawful Detainer been filed?",
    "description": null,
    "inputType": "boolean",
    "required": false,
    "section": "Case Information"
  },
  {
    "question": "What is the Case Number on the Unlawful Detainer?",
    "description": null,
    "inputType": "text",
    "required": false,
    "section": "Case Information"
  },
  {
    "question": "Plaintiff is a ...",
    "description": null,
    "inputType": "singleSelect",
    "options": ["Person", "Company / Organization"],
    "required": false,
    "section": "Case Information"
  },
  {
    "question": "Plaintiff attorney name",
    "description": null,
    "inputType": "text",
    "required": false,
    "section": "Case Information"
  },
  {
    "question": "Type of eviction",
    "description": null,
    "inputType": "multiSelectSpecifyOther",
    "options": [
      "Ellis Act",
      "Owner move-in",
      "Non-payment",
      "Nuisance",
      "Breach of lease",
      "Termination with no cause",
      "Motion to vacate"
    ],
    "required": false,
    "section": "Case Information"
  },
  {
    "question": "At what date was the summons or complaint served to you?",
    "description": null,
    "inputType": "date",
    "required": false,
    "section": "Service of Summons and Complaint"
  },
  {
    "question": "What is the deadline for the response to the summons?",
    "description": null,
    "inputType": "date",
    "required": false,
    "section": "Service of Summons and Complaint"
  },
  {
    "question": "How did you receive the summons or complaint?",
    "description": null,
    "inputType": "multiSelectSpecifyOther",
    "options": [
      "US Mail",
      "Posted or taped to door",
      "Handed"
    ],
    "required": false,
    "section": "Service of Summons and Complaint"
  },
];

export default questions;
