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
        },
        {
          q: "What is the MOST effective way to gain senior management support for information security?",
          choices: [
            "Present security risks in business terms",
            "Show the results of a recent vulnerability scan",
            "Describe breaches at other companies",
            "Compare the security budget to industry averages"
          ],
          answer: 0,
          why: "Leaders act on business risk and impact. Technical results, news stories and benchmarks don't speak to their goals."
        },
        {
          q: "An information security strategy should be based PRIMARILY on:",
          choices: [
            "Industry best practices",
            "The organization’s business strategy and objectives",
            "Findings from the last audit",
            "The current security budget"
          ],
          answer: 1,
          why: "Security strategy exists to support business strategy. Best practices, audits and budget inform it but don’t drive it."
        },
        {
          q: "Who should approve the organization’s information security policy?",
          choices: [
            "The CISO",
            "The legal department",
            "Senior management",
            "The IT operations manager"
          ],
          answer: 2,
          why: "Policy states management’s intent, so senior management approves it. That also gives it authority across the organization."
        },
        {
          q: "Who is responsible for deciding the classification level of a set of business data?",
          choices: [
            "The data custodian",
            "The security manager",
            "The end users",
            "The data owner"
          ],
          answer: 3,
          why: "The data owner is accountable for the data, so they classify it. Custodians protect it according to that classification."
        },
        {
          q: "What is the PRIMARY purpose of an information security steering committee?",
          choices: [
            "Approve firewall rule changes",
            "Ensure security efforts align with business priorities across departments",
            "Run day-to-day security operations",
            "Perform internal security audits"
          ],
          answer: 1,
          why: "A steering committee brings business leaders together to set priorities and oversee alignment. Operations and audits belong elsewhere."
        },
        {
          q: "A new privacy regulation will apply to the organization next year. What should the security manager do FIRST?",
          choices: [
            "Buy a data loss prevention tool",
            "Rewrite all security policies",
            "Assess how the regulation affects the organization",
            "Train all employees on the regulation"
          ],
          answer: 2,
          why: "You need to know the gap between the regulation and your current state before choosing controls, policies or training."
        },
        {
          q: "Which information is MOST useful to report to the board of directors?",
          choices: [
            "Number of patches applied last quarter",
            "Firewall rule change statistics",
            "Trends in key risks compared to the risk appetite",
            "Count of antivirus detections"
          ],
          answer: 2,
          why: "The board oversees risk. It needs risk trends against appetite, not operational activity counts."
        },
        {
          q: "What is the PRIMARY purpose of a gap analysis when developing a security strategy?",
          choices: [
            "Identify the difference between the current and desired state of security",
            "Calculate the annual security budget",
            "Rank employees by security awareness",
            "Select a security vendor"
          ],
          answer: 0,
          why: "Strategy moves the organization from where it is to where it needs to be. A gap analysis measures that distance."
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
        },
        {
          q: "What does an organization’s risk appetite describe?",
          choices: [
            "The total value of its insured assets",
            "The amount of risk it is willing to accept to pursue its objectives",
            "The number of risks in its risk register",
            "The maximum loss its insurer will cover"
          ],
          answer: 1,
          why: "Risk appetite is the level of risk leadership is willing to take on to meet business goals. It guides risk decisions."
        },
        {
          q: "Which is a characteristic of a QUALITATIVE risk analysis?",
          choices: [
            "It uses exact dollar values for every asset",
            "It calculates ALE for each threat",
            "It rates risks using scales such as high, medium and low",
            "It requires statistical loss data"
          ],
          answer: 2,
          why: "Qualitative analysis uses relative ratings. Dollar values and ALE belong to quantitative analysis."
        },
        {
          q: "An organization installs a web application firewall to reduce the chance of a successful attack. Which risk response is this?",
          choices: [
            "Accept",
            "Mitigate",
            "Transfer",
            "Avoid"
          ],
          answer: 1,
          why: "Adding a control to lower likelihood or impact is risk mitigation."
        },
        {
          q: "A company stops offering a high-risk online service because the risk cannot be reduced to an acceptable level. Which risk response is this?",
          choices: [
            "Avoid",
            "Accept",
            "Transfer",
            "Mitigate"
          ],
          answer: 0,
          why: "Ending the activity that creates the risk is risk avoidance."
        },
        {
          q: "What is residual risk?",
          choices: [
            "Risk before any controls are applied",
            "Risk that has been transferred to an insurer",
            "Risk that remains after controls are applied",
            "Risk that has been formally avoided"
          ],
          answer: 2,
          why: "Residual risk is what is left after controls. It must be within risk appetite and accepted by the risk owner."
        },
        {
          q: "What is the PRIMARY purpose of a key risk indicator (KRI)?",
          choices: [
            "Measure how many controls are in place",
            "Provide early warning that risk exposure is increasing",
            "Track the security team’s productivity",
            "Report audit findings"
          ],
          answer: 1,
          why: "KRIs signal rising risk before it turns into loss, so management can act early."
        },
        {
          q: "What is the MOST important factor when deciding whether to implement a new control?",
          choices: [
            "Whether competitors use the same control",
            "Whether the vendor is well known",
            "Whether the control’s cost is justified by the risk it reduces",
            "Whether the control uses new technology"
          ],
          answer: 2,
          why: "A control should cost less than the risk reduction it delivers. That is a cost-benefit decision."
        },
        {
          q: "What is the FIRST step in a risk assessment?",
          choices: [
            "Identify and value the assets in scope",
            "Select controls",
            "Calculate residual risk",
            "Write the risk treatment plan"
          ],
          answer: 0,
          why: "You can’t judge threats or impact until you know which assets matter and what they are worth."
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
        },
        {
          q: "Which is an example of a PREVENTIVE control?",
          choices: [
            "Reviewing audit logs",
            "Restoring data from backup",
            "Requiring multi-factor authentication to log in",
            "Running an intrusion detection system"
          ],
          answer: 2,
          why: "MFA stops unauthorized access before it happens. Log review and IDS are detective; restoring backups is corrective."
        },
        {
          q: "When is a COMPENSATING control used?",
          choices: [
            "When the primary control is not feasible or too costly",
            "When a control has already failed",
            "When an auditor requests extra evidence",
            "When a risk has been transferred"
          ],
          answer: 0,
          why: "A compensating control gives similar protection when the preferred control can’t be implemented."
        },
        {
          q: "What does a security baseline define?",
          choices: [
            "The ideal security state for the future",
            "The minimum required security settings for a system type",
            "The security budget for the year",
            "The list of approved vendors"
          ],
          answer: 1,
          why: "A baseline sets the minimum acceptable configuration that every system of that type must meet."
        },
        {
          q: "Granting users only the access they need to do their jobs follows which principle?",
          choices: [
            "Defense in depth",
            "Separation of duties",
            "Need to share",
            "Least privilege"
          ],
          answer: 3,
          why: "Least privilege limits access to what each role requires, which reduces damage from misuse or compromise."
        },
        {
          q: "What is the PRIMARY purpose of segregation of duties?",
          choices: [
            "Speed up approvals",
            "Reduce staffing costs",
            "Prevent one person from both committing and hiding an error or fraud",
            "Simplify access reviews"
          ],
          answer: 2,
          why: "Splitting key tasks between people means no single person can complete and conceal an improper action."
        },
        {
          q: "What is the BEST way to keep security policies relevant?",
          choices: [
            "Review them periodically and when the business changes significantly",
            "Rewrite them every five years",
            "Copy updates from industry templates",
            "Update them only after an audit finding"
          ],
          answer: 0,
          why: "Regular and change-driven reviews keep policies aligned with the business and current risks."
        },
        {
          q: "When should security requirements be included in a new system development project?",
          choices: [
            "After user acceptance testing",
            "During the requirements and design phase",
            "Just before go-live",
            "After the first security incident"
          ],
          answer: 1,
          why: "Building security in early is cheaper and more effective than adding it later."
        },
        {
          q: "Who should approve a user’s access to a business application?",
          choices: [
            "The help desk",
            "The system administrator",
            "The business or system owner",
            "The user’s coworkers"
          ],
          answer: 2,
          why: "The owner is accountable for the application and its data, so they decide who gets access. Administrators carry it out."
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
        },
        {
          q: "What does a recovery time objective (RTO) define?",
          choices: [
            "The maximum acceptable data loss",
            "The maximum acceptable time to restore a system or process",
            "How often backups are taken",
            "The time to detect an incident"
          ],
          answer: 1,
          why: "RTO is how long a process can be down before the impact is unacceptable. Data loss is the RPO."
        },
        {
          q: "Which recovery site can be operational the FASTEST?",
          choices: [
            "Cold site",
            "Warm site",
            "Hot site",
            "Mobile site"
          ],
          answer: 2,
          why: "A hot site is fully equipped with systems and current data, so it can take over within hours."
        },
        {
          q: "What is the BEST way to make sure the incident response plan will work when needed?",
          choices: [
            "Have it approved by legal",
            "Test it regularly with exercises",
            "Store copies in several locations",
            "Make it as detailed as possible"
          ],
          answer: 1,
          why: "Testing proves the plan works and that people know their roles. An untested plan often fails in a real incident."
        },
        {
          q: "Evidence from an incident may be used in court. What MUST the team maintain?",
          choices: [
            "A chain of custody",
            "A risk register",
            "A business impact analysis",
            "A change log"
          ],
          answer: 0,
          why: "Chain of custody documents who handled evidence and when, which keeps it admissible."
        },
        {
          q: "What is the difference between a security event and a security incident?",
          choices: [
            "They mean the same thing",
            "An incident is any log entry; an event is a confirmed breach",
            "An event is any observable occurrence; an incident harms or threatens confidentiality, integrity or availability",
            "An event affects people; an incident affects systems"
          ],
          answer: 2,
          why: "Many events happen daily. Only those that threaten or harm information assets are incidents."
        },
        {
          q: "Who should decide to declare a disaster and invoke the business continuity plan?",
          choices: [
            "Any employee who notices the outage",
            "The authority designated in the plan",
            "The help desk",
            "The external auditor"
          ],
          answer: 1,
          why: "The plan should name who has authority to declare a disaster, so the decision is fast and clear."
        },
        {
          q: "What is the PRIMARY purpose of classifying incidents by severity?",
          choices: [
            "Assign blame",
            "Prioritize the response and decide on escalation",
            "Calculate insurance premiums",
            "Meet audit documentation requirements"
          ],
          answer: 1,
          why: "Severity drives how fast and at what level the organization responds."
        },
        {
          q: "What is a tabletop exercise?",
          choices: [
            "A full failover to the recovery site",
            "A discussion-based walk-through of a scenario",
            "An automated vulnerability scan",
            "A surprise phishing test"
          ],
          answer: 1,
          why: "Tabletop exercises talk through a scenario to test roles and decisions without touching live systems."
        }
      ]
    }
  ]
}
