const formQuestionarie =
{
  resourceType: "Questionnaire",
  id: "f201",
  url: "http://hl7.org/fhir/Questionnaire/f201",
  status: "active",
  subjectType: [
    "Patient"
  ],
  date: "2021-08-12",
  item: [
    {
      linkId: "1",
      value: "",
      text: "Do you have allergies?",
      type: "boolean"
    },
    {
      linkId: "2",
      text: "What is your gender?",
      value: "",
      type: "choice",
      option: [
        {
          valueCoding: {
            system: "http://hl7.fhir/org",
            code: "male",
            display: "Male"
          }
        },
        {
          valueCoding: {
            system: "http://hl7.fhir/org",
            code: "female",
            display: "Female"
          }
        },
        {
          valueCoding: {
            system: "http://hl7.fhir/org",
            code: "other",
            display: "Other"
          }
        }
      ]
    },
    {
      linkId: "3",
      text: "What is your date of birth?",
      type: "date",
      value: ""
    },
    {
      linkId: "4",
      text: "What is your country of birth?",
      type: "string",
      value: ""
    },
    {
      linkId: "5",
      text: "What is your marital status?",
      type: "choice",
      value: "",
      option: [
        {
          valueCoding: {
            system: "http://hl7.fhir/org",
            code: "married",
            display: "Married"
          }
        },
        {
          valueCoding: {
            system: "http://hl7.fhir/org",
            code: "single",
            display: "Single"
          }
        },
        {
          valueCoding: {
            system: "http://hl7.fhir/org",
            code: "divorced",
            display: "Divorced"
          }
        }
      ]
    },
    {
      linkId: "6",
      text: "Do you smoke?",
      type: "boolean",
      value: ""
    },
    {
      linkId: "7",
      text: "Do you drink alchohol?",
      type: "boolean",
      value: ""
    }
  ]
}

export { formQuestionarie }