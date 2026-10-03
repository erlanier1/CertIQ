// CISM content. Domains and weights follow the ISACA CISM exam outline.
// Each question: answer is the index of the correct choice.
export const cism = {
  id: 'cism',
  name: 'CISM',
  fullName: 'Certified Information Security Manager',
  issuer: 'ISACA',
  area: 'Security Management',
  ready: true,
  domains: [
    {
      id: 'd1',
      name: 'Information Security Governance',
      weight: 17,
      summary:
        'Governance makes sure security supports the business. Leadership sets direction, owns the risk, and funds the program.',
      keyPoints: [
        'Security must align with business goals and strategy, not run on its own.',
        'The board and senior management are ultimately accountable for security.',
        'Organizational culture, legal, regulatory and contractual requirements shape the program.',
        'Roles and responsibilities must be clearly defined (e.g. RACI).',
        'Frameworks and standards (e.g. COBIT, ISO/IEC 27001, NIST CSF) give structure.',
        'A business case links security spending to business value and risk reduction.'
      ],
      questions: [
        {
          q: 'What is the PRIMARY goal of information security governance?',
          choices: [
            'Implement the latest security technologies',
            'Align security activities with business objectives',
            'Achieve certification against a security standard',
            'Reduce the security department budget'
          ],
          answer: 1,
          why: 'Governance exists to make security support and enable business objectives. Technology, certification and cost are means, not the goal.'
        },
        {
          q: 'Who is ULTIMATELY accountable for information security in an organization?',
          choices: ['The CISO', 'The IT manager', 'The board and senior management', 'Each data custodian'],
          answer: 2,
          why: 'Accountability sits with the board and senior management. The CISO manages the program but does not own the organization’s risk.'
        },
        {
          q: 'When presenting a business case for a new security investment, what is MOST important to show?',
          choices: [
            'How the investment supports business objectives',
            'The technical features of the solution',
            'What competitors are spending on security',
            'The number of vulnerabilities found last year'
          ],
          answer: 0,
          why: 'Management funds what clearly supports business goals. Technical detail and benchmarks are secondary.'
        }
      ]
    },
    {
      id: 'd2',
      name: 'Information Security Risk Management',
      weight: 20,
      summary:
        'Find the risks, decide what to do about them, and keep watching them. Business owners decide which risks they accept.',
      keyPoints: [
        'Risk = likelihood × impact of a threat exploiting a vulnerability.',
        'Four responses: accept, mitigate, transfer, avoid.',
        'Risk owners (business management) accept residual risk, not the security team.',
        'ALE = SLE × ARO. SLE = asset value × exposure factor.',
        'A risk register tracks risks, owners and treatment status.',
        'Risk is monitored and reported continuously, not once a year.'
      ],
      questions: [
        {
          q: 'An organization buys cyber insurance to cover losses from a data breach. Which risk response is this?',
          choices: ['Accept', 'Mitigate', 'Transfer', 'Avoid'],
          answer: 2,
          why: 'Insurance shifts the financial impact to a third party, which is risk transfer.'
        },
        {
          q: 'Who should formally accept the residual risk for a business system?',
          choices: ['The security manager', 'The business (risk) owner', 'The internal auditor', 'The system administrator'],
          answer: 1,
          why: 'The business owner is accountable for the system and its risk, so they accept residual risk. Security advises.'
        },
        {
          q: 'An asset is worth $100,000. A threat would destroy 40% of it and is expected once every two years. What is the ALE?',
          choices: ['$20,000', '$40,000', '$50,000', '$80,000'],
          answer: 0,
          why: 'SLE = $100,000 × 0.40 = $40,000. ARO = 0.5. ALE = $40,000 × 0.5 = $20,000.'
        }
      ]
    },
    {
      id: 'd3',
      name: 'Information Security Program',
      weight: 33,
      summary:
        'The program turns strategy into action: policies, controls, people, metrics, training and third-party oversight.',
      keyPoints: [
        'Policy = management intent. Standards = mandatory rules. Procedures = step-by-step. Guidelines = optional advice.',
        'Controls are preventive, detective, corrective, deterrent or compensating.',
        'Good metrics show whether security is meeting business goals, not just activity counts.',
        'Awareness training should change behavior, and be measured that way.',
        'Third parties must be assessed before contracting and monitored after.',
        'Report program status to management in business terms.'
      ],
      questions: [
        {
          q: 'Which type of document gives recommended, NON-mandatory advice?',
          choices: ['Policy', 'Standard', 'Procedure', 'Guideline'],
          answer: 3,
          why: 'Guidelines are optional recommendations. Policies, standards and procedures are mandatory.'
        },
        {
          q: 'Which is the BEST indicator that a security awareness program is effective?',
          choices: [
            'Number of employees who completed training',
            'Drop in phishing simulation click rates over time',
            'Number of training sessions held',
            'Positive feedback on the training survey'
          ],
          answer: 1,
          why: 'Effectiveness means behavior changed. Fewer clicks on simulated phishing shows that. The others measure activity.'
        },
        {
          q: 'Before signing with a cloud vendor that will process customer data, the security manager should FIRST:',
          choices: [
            'Assess the vendor’s security controls',
            'Encrypt all data sent to the vendor',
            'Add the vendor to the incident response plan',
            'Schedule an annual audit of the vendor'
          ],
          answer: 0,
          why: 'Due diligence comes first. You need to know the vendor’s risk before you commit and decide on other controls.'
        }
      ]
    },
    {
      id: 'd4',
      name: 'Incident Management',
      weight: 30,
      summary:
        'Be ready before an incident, respond well during it, and learn after it. Includes business continuity and disaster recovery.',
      keyPoints: [
        'A BIA identifies critical processes and sets recovery priorities.',
        'RTO = how fast a system must be back. RPO = how much data loss (in time) is acceptable.',
        'Phases: prepare, identify, contain, eradicate, recover, lessons learned.',
        'Containment comes before eradication, to stop the damage spreading.',
        'Plans (IRP, BCP, DRP) must be tested and kept current.',
        'Post-incident review improves the program.'
      ],
      questions: [
        {
          q: 'What is the PRIMARY purpose of a business impact analysis (BIA)?',
          choices: [
            'Identify vulnerabilities in critical systems',
            'Identify critical processes and the impact of their disruption',
            'Select a backup site',
            'Estimate the cost of security controls'
          ],
          answer: 1,
          why: 'A BIA tells you what matters most and how bad an outage would be. That drives RTOs, RPOs and recovery priorities.'
        },
        {
          q: 'Malware is confirmed on a file server. What should the incident response team do FIRST?',
          choices: ['Wipe and rebuild the server', 'Isolate the server from the network', 'Notify customers', 'Restore from backup'],
          answer: 1,
          why: 'Containment comes first to stop the spread. Eradication and recovery follow.'
        },
        {
          q: 'A system’s recovery point objective (RPO) is 4 hours. What does this mean?',
          choices: [
            'The system must be restored within 4 hours',
            'Up to 4 hours of data loss is acceptable',
            'Backups are tested every 4 hours',
            'The incident must be reported within 4 hours'
          ],
          answer: 1,
          why: 'RPO is about data loss measured in time. Restore time is the RTO.'
        }
      ]
    }
  ]
}
