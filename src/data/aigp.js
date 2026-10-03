// AIGP content. Domain names follow the IAPP AIGP body of knowledge.
// Re-check against the current IAPP outline when it is updated.
// Each question: answer is the index of the correct choice.
export const aigp = {
  id: 'aigp',
  name: 'AIGP',
  fullName: 'Artificial Intelligence Governance Professional',
  issuer: 'IAPP',
  area: 'AI Governance',
  ready: true,
  domains: [
    {
      id: 'd1',
      name: 'Foundations of AI governance',
      summary:
        'What AI is, how it can cause harm, and the principles and roles organizations use to govern it responsibly.',
      keyPoints: [
        'Machine learning systems learn patterns from data instead of following hand-written rules.',
        'Generative AI creates new content such as text, images or code.',
        'Harms can hit individuals, groups, organizations and society (e.g. bias, privacy loss, safety).',
        'Responsible AI principles include fairness, transparency, accountability, privacy, safety and human oversight.',
        'Unrepresentative training data is a major source of bias.',
        'Governance needs clear roles, policies and cross-functional ownership.'
      ],
      questions: [
        {
          q: 'What is the KEY difference between machine learning and traditional software?',
          choices: [
            'Machine learning always runs in the cloud',
            'Machine learning learns patterns from data instead of following only explicit rules',
            'Traditional software cannot make decisions',
            'Machine learning never makes mistakes'
          ],
          answer: 1,
          why: 'ML models infer rules from data. That is also why data quality and bias matter so much.'
        },
        {
          q: 'A large language model confidently gives a made-up legal citation. This is called:',
          choices: ['Overfitting', 'Data drift', 'A hallucination', 'Model inversion'],
          answer: 2,
          why: 'A hallucination is plausible-sounding output that is false or made up.'
        },
        {
          q: 'A hiring model favors one group because past hiring data was skewed. What is the MOST likely cause?',
          choices: [
            'Biased or unrepresentative training data',
            'Too much computing power',
            'Using open-source software',
            'Encrypting the training data'
          ],
          answer: 0,
          why: 'Models learn from historical data, including its biases. Data review and fairness testing are key controls.'
        },
        {
          q: 'Which responsible AI principle means people can understand how an AI system reaches its outputs?',
          choices: ['Robustness', 'Explainability', 'Data minimization', 'Scalability'],
          answer: 1,
          why: 'Explainability (often grouped with transparency) helps people understand, trust and challenge AI decisions.'
        },
        {
          q: 'What does “human in the loop” mean?',
          choices: [
            'Humans label all training data',
            'A human reviews or approves AI outputs before they take effect',
            'Humans write all of the model’s code',
            'The AI imitates human behavior'
          ],
          answer: 1,
          why: 'Human oversight lets a person catch and correct AI errors, especially for high-impact decisions.'
        },
        {
          q: 'Who should own AI governance in an organization?',
          choices: [
            'Only the data science team',
            'Only the legal department',
            'A cross-functional group with clear accountability from leadership',
            'The AI vendor'
          ],
          answer: 2,
          why: 'AI risk spans legal, privacy, security, ethics and business, so governance needs several functions and a clear owner.'
        }
      ]
    },
    {
      id: 'd2',
      name: 'How laws, standards and frameworks apply to AI',
      summary:
        'Existing laws already apply to AI, and new AI-specific laws and frameworks add more. The EU AI Act and NIST AI RMF are central.',
      keyPoints: [
        'Privacy, anti-discrimination, consumer protection, product liability and IP laws all apply to AI.',
        'The EU AI Act is risk-based: unacceptable (banned), high, limited (transparency) and minimal risk.',
        'AI used in hiring and other employment decisions is high-risk under the EU AI Act.',
        'Users must be told when they are interacting with an AI system such as a chatbot.',
        'NIST AI RMF core functions: Govern, Map, Measure, Manage.',
        'ISO/IEC 42001 is a certifiable AI management system standard.'
      ],
      questions: [
        {
          q: 'How does the EU AI Act regulate AI systems?',
          choices: [
            'It bans all AI in the EU',
            'It applies the same rules to every AI system',
            'It uses risk tiers, with stricter rules for higher-risk uses',
            'It only regulates AI made in the EU'
          ],
          answer: 2,
          why: 'The Act sorts AI by risk: unacceptable (prohibited), high, limited and minimal. Obligations scale with risk.'
        },
        {
          q: 'Under the EU AI Act, AI used to screen job applicants is MOST likely classified as:',
          choices: ['Minimal risk', 'Limited risk', 'High risk', 'Not covered'],
          answer: 2,
          why: 'Employment and worker management uses are listed as high-risk, with strict requirements.'
        },
        {
          q: 'Under the EU AI Act, AI-based social scoring that leads to unjustified harmful treatment of people is:',
          choices: ['Prohibited', 'High risk', 'Limited risk', 'Allowed with consent'],
          answer: 0,
          why: 'Social scoring of this kind is an unacceptable-risk practice and is banned.'
        },
        {
          q: 'What are the four core functions of the NIST AI Risk Management Framework?',
          choices: [
            'Identify, Protect, Detect, Respond',
            'Govern, Map, Measure, Manage',
            'Plan, Do, Check, Act',
            'Assess, Design, Build, Deploy'
          ],
          answer: 1,
          why: 'NIST AI RMF uses Govern, Map, Measure and Manage. Identify-Protect-Detect-Respond is from the NIST Cybersecurity Framework.'
        },
        {
          q: 'What is ISO/IEC 42001?',
          choices: [
            'A law that bans facial recognition',
            'A management system standard for AI that organizations can certify against',
            'A programming standard for neural networks',
            'A U.S. federal AI regulation'
          ],
          answer: 1,
          why: 'ISO/IEC 42001 sets requirements for an AI management system, similar to how ISO/IEC 27001 works for security.'
        },
        {
          q: 'A company has no AI-specific laws in its country. Do existing laws still apply to its AI systems?',
          choices: [
            'No, AI is unregulated until AI laws exist',
            'Only intellectual property laws apply',
            'Only if the AI makes fully automated decisions',
            'Yes, laws on privacy, discrimination and consumer protection still apply'
          ],
          answer: 3,
          why: 'Regulators have made clear that existing laws apply to AI. Using AI is not an exemption.'
        }
      ]
    },
    {
      id: 'd3',
      name: 'Governing AI development',
      summary:
        'Building AI responsibly: define the purpose, assess the risks, use good data, test thoroughly and document everything.',
      keyPoints: [
        'Start with a clear purpose and an impact or risk assessment.',
        'Training data must be lawfully obtained, relevant, accurate and representative.',
        'Apply privacy principles such as data minimization to training data.',
        'Test for accuracy, robustness, security and fairness across groups.',
        'Red teaming uses adversarial testing to find harmful behavior.',
        'Document the model (e.g. model cards) with its intended use, performance and limits.'
      ],
      questions: [
        {
          q: 'What should happen FIRST when an organization plans to develop a new AI system?',
          choices: [
            'Collect as much data as possible',
            'Define the purpose and assess the potential risks and impacts',
            'Choose the model architecture',
            'Deploy a prototype to customers'
          ],
          answer: 1,
          why: 'The purpose and risk level decide what data, controls, testing and approvals are needed.'
        },
        {
          q: 'A team wants to use all customer data to train a model “just in case it helps.” Which principle does this conflict with?',
          choices: ['Data minimization', 'Explainability', 'Robustness', 'Accountability'],
          answer: 0,
          why: 'Data minimization means using only the data that is necessary for the defined purpose.'
        },
        {
          q: 'What is the PRIMARY purpose of a model card?',
          choices: [
            'Market the model to customers',
            'Store the model’s source code',
            'Document the model’s intended use, performance and limitations',
            'License the model to third parties'
          ],
          answer: 2,
          why: 'Model cards give transparency about what a model is for, how well it works, and where it shouldn’t be used.'
        },
        {
          q: 'What is AI red teaming?',
          choices: [
            'Training a model on red-flagged data',
            'Adversarial testing to find harmful or unsafe behavior before release',
            'Marketing review of AI features',
            'Turning off a model in an emergency'
          ],
          answer: 1,
          why: 'Red teams deliberately try to make the system fail, e.g. produce harmful output or leak data, so issues are fixed before launch.'
        },
        {
          q: 'How should a team test a lending model for fairness?',
          choices: [
            'Check overall accuracy only',
            'Ask the developers whether it is fair',
            'Remove all personal data and assume it is fair',
            'Compare performance and outcomes across demographic groups'
          ],
          answer: 3,
          why: 'A model can be accurate overall but unfair to specific groups. Removing protected attributes doesn’t remove proxies.'
        },
        {
          q: 'Which is MOST important to confirm about training data before using it?',
          choices: [
            'That it is the largest dataset available',
            'That it was lawfully obtained and is fit for the intended purpose',
            'That it is stored in the cloud',
            'That it is free'
          ],
          answer: 1,
          why: 'Data provenance and quality affect legal risk (privacy, IP) and model performance.'
        }
      ]
    },
    {
      id: 'd4',
      name: 'Governing AI deployment and use',
      summary:
        'Using AI responsibly once it’s live: vet vendors, set use rules, monitor continuously, handle incidents and retire systems safely.',
      keyPoints: [
        'Assess third-party AI before buying it: intended use, documentation, testing and contract terms.',
        'Under the EU AI Act, a company using an AI system under its own authority is a “deployer.”',
        'Models can drift as real-world data changes, so monitor them continuously.',
        'Acceptable use policies stop staff from putting confidential data into public AI tools.',
        'Have an AI incident response process: contain, investigate, fix, report.',
        'Retire AI systems deliberately, handling data and dependencies properly.'
      ],
      questions: [
        {
          q: 'Under the EU AI Act, a company that uses an AI system under its own authority in its business is a:',
          choices: ['Provider', 'Deployer', 'Distributor', 'Importer'],
          answer: 1,
          why: 'The provider develops the system or places it on the market. The deployer uses it, and has its own obligations.'
        },
        {
          q: 'A fraud model’s accuracy slowly drops as customer behavior changes. This is called:',
          choices: ['Model drift', 'Hallucination', 'Overfitting', 'Prompt injection'],
          answer: 0,
          why: 'Drift happens when real-world data moves away from the training data. Continuous monitoring catches it.'
        },
        {
          q: 'What is the BIGGEST risk of employees pasting company documents into a public generative AI tool?',
          choices: [
            'The tool will run slowly',
            'Employees will become less productive',
            'Confidential or personal data may be exposed',
            'The documents will be reformatted'
          ],
          answer: 2,
          why: 'Data entered into public tools may be stored or used by the provider. An acceptable use policy and approved tools reduce this risk.'
        },
        {
          q: 'Before buying an AI tool from a vendor, the organization should FIRST:',
          choices: [
            'Assess the vendor and tool against its intended use and risk requirements',
            'Train all staff on the tool',
            'Announce the tool to customers',
            'Turn off human review'
          ],
          answer: 0,
          why: 'Due diligence (documentation, testing, data use and contract terms) should come before commitment.'
        },
        {
          q: 'A deployed chatbot starts giving discriminatory answers to customers. What should happen FIRST?',
          choices: [
            'Wait for more complaints to confirm the problem',
            'Delete all chatbot logs',
            'Retrain the model next quarter',
            'Contain the issue, e.g. limit or suspend the feature, and start the incident process'
          ],
          answer: 3,
          why: 'Containment stops ongoing harm. Investigation, fixes and any required reporting follow.'
        },
        {
          q: 'Which activity should continue for as long as an AI system is in use?',
          choices: ['Initial training', 'Procurement review', 'Monitoring of performance and impacts', 'Writing the business case'],
          answer: 2,
          why: 'AI risk changes over time. Ongoing monitoring is how you catch drift, misuse and new harms.'
        }
      ]
    }
  ]
}
