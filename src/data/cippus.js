// CIPP/US content. Domain names follow the IAPP CIPP/US body of knowledge.
// Re-check against the current IAPP outline when it is updated.
// Each question: answer is the index of the correct choice.
export const cippus = {
  id: 'cipp-us',
  name: 'CIPP/US',
  fullName: 'Certified Information Privacy Professional/United States',
  issuer: 'IAPP',
  area: 'Privacy',
  ready: true,
  domains: [
    {
      id: 'd1',
      name: 'Introduction to the U.S. privacy environment',
      summary:
        'The U.S. has no single privacy law. Privacy comes from a mix of federal and state laws by sector, regulators like the FTC, and self-regulation.',
      keyPoints: [
        'The U.S. uses a sectoral approach: different laws for health, finance, children, education and more.',
        'The FTC is the main federal privacy enforcer for most businesses.',
        'FTC Section 5 bans unfair or deceptive acts or practices.',
        'Breaking your own privacy notice is a deceptive practice.',
        'FTC consent orders typically last 20 years.',
        'The EU-U.S. Data Privacy Framework lets certified U.S. companies receive EU personal data.'
      ],
      questions: [
        {
          q: 'Which agency is the PRIMARY federal privacy enforcer for most U.S. businesses?',
          choices: ['The Federal Communications Commission', 'The Federal Trade Commission', 'The Department of Commerce', 'The Securities and Exchange Commission'],
          answer: 1,
          why: 'The FTC has broad authority over most commercial businesses and is the main federal privacy enforcer.'
        },
        {
          q: 'The FTC’s main privacy enforcement power comes from Section 5 of the FTC Act, which prohibits:',
          choices: [
            'Collecting any personal data without consent',
            'Transferring data outside the U.S.',
            'Unfair or deceptive acts or practices',
            'Selling data to data brokers'
          ],
          answer: 2,
          why: 'Section 5 targets unfair or deceptive practices. Most FTC privacy cases rely on it.'
        },
        {
          q: 'A company shares customer data with advertisers even though its privacy notice says it never does. Under the FTC Act, this is MOST likely:',
          choices: ['A deceptive practice', 'Legal, because notices aren’t binding', 'Only a state law issue', 'A HIPAA violation'],
          answer: 0,
          why: 'Doing something different from what your privacy notice promises misleads consumers, which is deceptive.'
        },
        {
          q: 'Which BEST describes the U.S. approach to privacy law?',
          choices: [
            'One comprehensive federal privacy law',
            'Privacy is regulated only by the states',
            'Sectoral, with different laws for different industries and data types',
            'Self-regulation only, with no laws'
          ],
          answer: 2,
          why: 'The U.S. has sector-specific federal laws (HIPAA, GLBA, COPPA and others) plus state laws, not one general law.'
        },
        {
          q: 'How long do FTC privacy consent orders typically last?',
          choices: ['1 year', '5 years', '10 years', '20 years'],
          answer: 3,
          why: 'FTC consent orders commonly last 20 years and often require privacy programs and independent assessments.'
        },
        {
          q: 'Which mechanism lets certified U.S. companies receive personal data from the EU?',
          choices: ['The EU-U.S. Data Privacy Framework', 'COPPA Safe Harbor', 'The CAN-SPAM Act', 'The Privacy Act of 1974'],
          answer: 0,
          why: 'The Data Privacy Framework lets U.S. companies self-certify to receive EU personal data. It replaced Privacy Shield.'
        }
      ]
    },
    {
      id: 'd2',
      name: 'Limits on private-sector collection and use of data',
      summary:
        'Federal laws that limit how businesses collect and use data in health care, finance, education, marketing and children’s services.',
      keyPoints: [
        'HIPAA protects health information held by covered entities and their business associates.',
        'GLBA requires financial institutions to give privacy notices and protect customer data.',
        'FCRA governs consumer reports and how they are used.',
        'FERPA protects student education records.',
        'COPPA protects children under 13 online.',
        'CAN-SPAM covers commercial email. TCPA covers calls and texts.'
      ],
      questions: [
        {
          q: 'COPPA protects the online personal information of children under what age?',
          choices: ['13', '16', '18', '12'],
          answer: 0,
          why: 'COPPA applies to children under 13 and generally requires verifiable parental consent.'
        },
        {
          q: 'A hospital hires a billing company that will handle patients’ health information. Under HIPAA, they must sign a:',
          choices: ['Non-disclosure agreement', 'Business associate agreement', 'Data processing addendum', 'Consent decree'],
          answer: 1,
          why: 'Vendors that handle PHI for covered entities are business associates and must sign a BAA.'
        },
        {
          q: 'Which law requires financial institutions to give customers privacy notices about how their information is shared?',
          choices: ['FERPA', 'HIPAA', 'GLBA', 'TCPA'],
          answer: 2,
          why: 'The Gramm-Leach-Bliley Act’s Privacy Rule requires financial institutions to provide privacy notices.'
        },
        {
          q: 'Which law protects the privacy of student education records?',
          choices: ['COPPA', 'FERPA', 'FCRA', 'GLBA'],
          answer: 1,
          why: 'FERPA gives students and parents rights over education records at schools that receive federal funding.'
        },
        {
          q: 'Under CAN-SPAM, commercial emails must:',
          choices: [
            'Only be sent with prior opt-in consent',
            'Never contain images',
            'Be sent only during business hours',
            'Include a working way to opt out of future emails'
          ],
          answer: 3,
          why: 'CAN-SPAM is an opt-out law. Senders must give a working opt-out and honor it promptly.'
        },
        {
          q: 'Which law restricts autodialed calls and texts to mobile phones without consent?',
          choices: ['CAN-SPAM', 'TCPA', 'ECPA', 'GLBA'],
          answer: 1,
          why: 'The Telephone Consumer Protection Act restricts robocalls, autodialed calls and texts, and telemarketing.'
        }
      ]
    },
    {
      id: 'd3',
      name: 'Government and court access to private-sector information',
      summary:
        'When and how the government and courts can get data that businesses hold, for law enforcement, national security and lawsuits.',
      keyPoints: [
        'The Fourth Amendment protects against unreasonable government searches and seizures.',
        'ECPA includes the Wiretap Act, the Stored Communications Act and the Pen Register Act.',
        'CALEA requires telecom carriers to support lawful interception.',
        'FISA governs foreign intelligence surveillance, overseen by the FISA Court.',
        'The USA FREEDOM Act ended bulk collection of phone records.',
        'In civil lawsuits, protective orders limit how sensitive discovery data is used.'
      ],
      questions: [
        {
          q: 'The Fourth Amendment protects people against:',
          choices: [
            'Data collection by private companies',
            'Unreasonable searches and seizures by the government',
            'Unwanted marketing emails',
            'Identity theft'
          ],
          answer: 1,
          why: 'The Fourth Amendment limits government action. It doesn’t apply to private companies.'
        },
        {
          q: 'Which law governs government access to emails stored by a service provider?',
          choices: ['The Stored Communications Act', 'CALEA', 'The Privacy Act of 1974', 'FERPA'],
          answer: 0,
          why: 'The Stored Communications Act, part of ECPA, sets rules for accessing stored communications held by providers.'
        },
        {
          q: 'Which law ended the NSA’s bulk collection of telephone records?',
          choices: ['USA PATRIOT Act', 'FISA', 'USA FREEDOM Act', 'CALEA'],
          answer: 2,
          why: 'The USA FREEDOM Act (2015) ended bulk collection and required more targeted requests.'
        },
        {
          q: 'Which law requires telecom carriers to design their networks so they can support lawful wiretaps?',
          choices: ['ECPA', 'CALEA', 'TCPA', 'GLBA'],
          answer: 1,
          why: 'The Communications Assistance for Law Enforcement Act requires carriers to enable lawful interception.'
        },
        {
          q: 'Which court reviews government requests for foreign intelligence surveillance?',
          choices: ['The U.S. Supreme Court', 'The Court of International Trade', 'The FISA Court', 'State supreme courts'],
          answer: 2,
          why: 'The Foreign Intelligence Surveillance Court (FISC) reviews surveillance applications under FISA.'
        },
        {
          q: 'In a civil lawsuit, a company must produce records containing customer data. What can limit how the other side uses that data?',
          choices: ['A protective order', 'A privacy notice', 'A business associate agreement', 'A consent decree'],
          answer: 0,
          why: 'Courts issue protective orders to restrict the use and disclosure of sensitive information produced in discovery.'
        }
      ]
    },
    {
      id: 'd4',
      name: 'Workplace privacy',
      summary:
        'Privacy rules across the employment cycle: hiring, background checks, monitoring, investigations and leaving the job.',
      keyPoints: [
        'FCRA background checks need a standalone written disclosure and the candidate’s authorization.',
        'Before an adverse decision based on a report, give a pre-adverse action notice with a copy of the report.',
        'EPPA generally bans lie detector tests by private employers.',
        'ADA limits medical exams until after a conditional job offer.',
        'GINA bars using genetic information in employment decisions.',
        'Tell employees about monitoring through clear policies.'
      ],
      questions: [
        {
          q: 'Before getting a background check from a consumer reporting agency, an employer must:',
          choices: [
            'Notify the state attorney general',
            'Give a standalone written disclosure and get the candidate’s written authorization',
            'Wait until after the employee starts work',
            'Get approval from the FTC'
          ],
          answer: 1,
          why: 'FCRA requires a clear standalone disclosure and written authorization before getting a consumer report for employment.'
        },
        {
          q: 'An employer plans to reject a candidate based on a background report. What must it do FIRST?',
          choices: [
            'Send a pre-adverse action notice with a copy of the report and a summary of rights',
            'Reject the candidate immediately',
            'Delete the report',
            'Ask the candidate to sign a waiver'
          ],
          answer: 0,
          why: 'FCRA gives the candidate a chance to see and dispute the report before the final decision.'
        },
        {
          q: 'Which law generally prohibits private employers from requiring lie detector tests?',
          choices: ['ADA', 'GINA', 'EPPA', 'NLRA'],
          answer: 2,
          why: 'The Employee Polygraph Protection Act bans most private employers from using polygraphs, with limited exceptions.'
        },
        {
          q: 'Under the ADA, when may an employer require a medical exam?',
          choices: [
            'Before any interview',
            'On the job application',
            'Never',
            'After a conditional job offer, if required of all entering employees in that job'
          ],
          answer: 3,
          why: 'The ADA allows medical exams after a conditional offer, as long as all new hires in that job category get them.'
        },
        {
          q: 'Which law bars employers from using genetic information in hiring decisions?',
          choices: ['GINA', 'HIPAA', 'FCRA', 'EPPA'],
          answer: 0,
          why: 'The Genetic Information Nondiscrimination Act prohibits using genetic information in employment decisions.'
        },
        {
          q: 'What is the BEST practice before monitoring employees’ use of company systems?',
          choices: [
            'Monitor secretly to catch misconduct',
            'Tell employees through a clear written policy',
            'Monitor only senior staff',
            'Get a court order'
          ],
          answer: 1,
          why: 'Clear notice sets expectations, reduces privacy claims and supports a lawful monitoring program.'
        }
      ]
    },
    {
      id: 'd5',
      name: 'State privacy laws',
      summary:
        'States fill gaps left by federal law with breach notification, data security, biometric and comprehensive privacy laws.',
      keyPoints: [
        'All 50 states have data breach notification laws.',
        'Most breach laws exempt encrypted data if the key wasn’t compromised.',
        'California’s CCPA, as amended by the CPRA, gives rights to know, delete, correct and opt out of sale or sharing.',
        'The CPRA created the California Privacy Protection Agency.',
        'Many other states now have comprehensive privacy laws (e.g. Virginia, Colorado).',
        'Illinois BIPA regulates biometrics and allows private lawsuits.'
      ],
      questions: [
        {
          q: 'How many U.S. states have data breach notification laws?',
          choices: ['About half', 'All 50', 'Only California', 'None, as it is federal law'],
          answer: 1,
          why: 'Every state has a breach notification law. Requirements such as timing and definitions vary by state.'
        },
        {
          q: 'What makes the Illinois Biometric Information Privacy Act (BIPA) especially significant?',
          choices: [
            'It applies only to government agencies',
            'It has no penalties',
            'It allows individuals to sue for violations',
            'It only covers fingerprints'
          ],
          answer: 2,
          why: 'BIPA’s private right of action has led to many lawsuits and large settlements.'
        },
        {
          q: 'Which right does the CCPA, as amended by the CPRA, give California consumers?',
          choices: [
            'The right to opt out of the sale or sharing of their personal information',
            'The right to free credit monitoring',
            'The right to sue for any privacy violation',
            'The right to block all data collection'
          ],
          answer: 0,
          why: 'Consumers can opt out of sale and sharing. The private right of action is limited to certain data breaches.'
        },
        {
          q: 'Which agency did the CPRA create?',
          choices: ['The California Department of Privacy', 'The California Privacy Protection Agency', 'The State Data Board', 'The Office of Consumer Data'],
          answer: 1,
          why: 'The California Privacy Protection Agency enforces the law and writes regulations, alongside the Attorney General.'
        },
        {
          q: 'A stolen laptop held strongly encrypted customer data, and the key was not compromised. Under most state breach laws:',
          choices: [
            'Notification is usually not required',
            'All customers must be notified within 24 hours',
            'Only the FTC must be notified',
            'The company must offer free credit monitoring'
          ],
          answer: 0,
          why: 'Most state laws have an encryption safe harbor when the key wasn’t also compromised. Always check each state’s specific rules.'
        },
        {
          q: 'Massachusetts data security regulations (201 CMR 17.00) require companies holding residents’ personal information to have:',
          choices: [
            'A chief privacy officer',
            'Cyber insurance',
            'A written information security program',
            'Annual FTC audits'
          ],
          answer: 2,
          why: 'Massachusetts requires a written information security program (WISP) with specific safeguards.'
        }
      ]
    }
  ]
}
