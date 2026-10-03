// CISA content. Domains and weights follow the ISACA CISA exam outline.
// Each question: answer is the index of the correct choice.
export const cisa = {
  id: 'cisa',
  name: 'CISA',
  fullName: 'Certified Information Systems Auditor',
  issuer: 'ISACA',
  area: 'Audit',
  ready: true,
  domains: [
    {
      id: 'd1',
      name: 'Information System Auditing Process',
      weight: 18,
      summary:
        'How an IS audit is planned, carried out and reported. Audits are risk-based, follow ISACA standards, and rely on good evidence.',
      keyPoints: [
        'Audit plans are driven by a risk assessment, so high-risk areas get attention first.',
        'Auditors must stay independent and objective in fact and in appearance.',
        'Compliance tests check that controls work. Substantive tests check the data or transactions.',
        'Attribute sampling suits compliance tests. Variable sampling suits substantive tests.',
        'Evidence from an independent outside source, or obtained directly by the auditor, is the most reliable.',
        'Follow-up confirms management actually fixed what the audit found.'
      ],
      questions: [
        {
          q: 'What should be the PRIMARY basis for an annual IS audit plan?',
          choices: ['Last year’s audit plan', 'A risk assessment', 'Management requests', 'The audit department’s staffing'],
          answer: 1,
          why: 'Risk-based planning focuses limited audit resources on the areas that matter most.'
        },
        {
          q: 'Which audit evidence is MOST reliable?',
          choices: [
            'A report prepared by the auditee',
            'Verbal statements from the system owner',
            'A confirmation received directly from an independent third party',
            'Screenshots emailed by the IT team'
          ],
          answer: 2,
          why: 'Evidence from an independent source, received directly by the auditor, is hardest to alter and most objective.'
        },
        {
          q: 'What is the PRIMARY purpose of compliance testing?',
          choices: [
            'Determine whether controls are operating as designed',
            'Verify the accuracy of account balances',
            'Estimate the dollar value of errors',
            'Identify new business risks'
          ],
          answer: 0,
          why: 'Compliance tests check that controls work. Substantive tests check the accuracy and completeness of the data.'
        },
        {
          q: 'Which sampling method is BEST for estimating how often a control fails?',
          choices: ['Variable sampling', 'Stop-or-go sampling only', 'Judgmental sampling', 'Attribute sampling'],
          answer: 3,
          why: 'Attribute sampling estimates the rate of occurrence (e.g. how often approvals are missing), which is what compliance tests need.'
        },
        {
          q: 'An IS auditor is assigned to audit a system they helped configure last year. What is the MAIN concern?',
          choices: ['The audit will take longer', 'The auditor’s independence may be impaired', 'The auditor lacks technical knowledge', 'The system owner may object'],
          answer: 1,
          why: 'Auditing your own work impairs independence and objectivity. The assignment should be changed or the conflict disclosed.'
        },
        {
          q: 'What is the PRIMARY purpose of a follow-up audit?',
          choices: [
            'Re-test every control from the original audit',
            'Verify that management implemented the agreed corrective actions',
            'Find new issues not covered before',
            'Update the audit charter'
          ],
          answer: 1,
          why: 'Follow-up confirms that findings were actually addressed, which closes the audit loop.'
        }
      ]
    },
    {
      id: 'd2',
      name: 'Governance and Management of IT',
      weight: 18,
      summary:
        'How IT is directed and controlled so it supports the business: strategy, structures, policies, vendors and performance.',
      keyPoints: [
        'IT governance aligns IT with business strategy and is led by the board and senior management.',
        'An IT steering committee sets IT priorities across business units.',
        'Enterprise architecture documents the current and target state of IT.',
        'Segregation of duties prevents one person from controlling a process end to end.',
        'Outsourcing contracts need SLAs and a right-to-audit clause.',
        'A balanced scorecard measures IT on more than cost alone.'
      ],
      questions: [
        {
          q: 'Which contract clause is MOST important to an IS auditor reviewing an IT outsourcing agreement?',
          choices: ['Payment terms', 'Right to audit', 'Contract renewal date', 'Vendor marketing rights'],
          answer: 1,
          why: 'Without a right-to-audit clause, the organization cannot verify the vendor’s controls. Outsourcing the work doesn’t outsource accountability.'
        },
        {
          q: 'Which combination of duties is the GREATEST segregation-of-duties concern?',
          choices: [
            'A developer who can move their own code into production',
            'A help desk analyst who resets passwords',
            'A DBA who monitors database performance',
            'A network engineer who reviews firewall logs'
          ],
          answer: 0,
          why: 'A developer with production access could deploy unauthorized or untested changes with no independent check.'
        },
        {
          q: 'What is the PRIMARY role of an IT steering committee?',
          choices: [
            'Approve individual user access requests',
            'Manage daily IT operations',
            'Ensure IT investments align with business priorities',
            'Perform IT audits'
          ],
          answer: 2,
          why: 'The steering committee brings business and IT leaders together to set priorities and oversee alignment.'
        },
        {
          q: 'An IT balanced scorecard is used PRIMARILY to:',
          choices: [
            'Measure IT performance beyond financial results',
            'Calculate the IT budget',
            'Track software license counts',
            'Rank IT staff for bonuses'
          ],
          answer: 0,
          why: 'It adds customer, internal process and learning perspectives to financial ones, giving a fuller view of IT value.'
        },
        {
          q: 'What is the MAIN benefit of enterprise architecture?',
          choices: [
            'It removes the need for IT policies',
            'It documents current and target IT states so investments support business strategy',
            'It replaces project management',
            'It guarantees system availability'
          ],
          answer: 1,
          why: 'Enterprise architecture gives a roadmap from today’s IT to the target state that the business needs.'
        },
        {
          q: 'An organization uses a maturity model for its IT processes. What is the PRIMARY benefit?',
          choices: [
            'It certifies the organization against ISO standards',
            'It eliminates the need for audits',
            'It shows current capability and the target level to improve toward',
            'It reduces software costs'
          ],
          answer: 2,
          why: 'Maturity models show where a process is now and what the next level looks like, which guides improvement.'
        }
      ]
    },
    {
      id: 'd3',
      name: 'Information Systems Acquisition, Development and Implementation',
      weight: 12,
      summary:
        'How systems are justified, built or bought, tested and put into production with the right controls.',
      keyPoints: [
        'A business case and feasibility study justify a project before money is spent.',
        'Controls and security requirements should be designed in early.',
        'User acceptance testing confirms the system meets business needs.',
        'Data conversion needs reconciliation (record counts, control totals).',
        'Parallel changeover is lowest risk. Direct cutover is highest risk.',
        'A post-implementation review checks whether expected benefits were achieved.'
      ],
      questions: [
        {
          q: 'What is the PRIMARY purpose of a feasibility study?',
          choices: [
            'Select the programming language',
            'Determine whether the project is viable and justified',
            'Write the user manual',
            'Plan user acceptance testing'
          ],
          answer: 1,
          why: 'A feasibility study checks whether the project makes sense technically, financially and operationally before committing to it.'
        },
        {
          q: 'Who should perform user acceptance testing (UAT)?',
          choices: ['The developers', 'The IS auditor', 'The vendor', 'The business users'],
          answer: 3,
          why: 'UAT confirms the system meets business requirements, so the people who will use it should test it.'
        },
        {
          q: 'During data conversion to a new system, which control is MOST important?',
          choices: [
            'Reconciling record counts and control totals between old and new systems',
            'Training users on the new screens',
            'Deleting the old data immediately',
            'Converting data during business hours'
          ],
          answer: 0,
          why: 'Reconciliation proves data was transferred completely and accurately.'
        },
        {
          q: 'Which changeover approach has the LOWEST risk?',
          choices: ['Direct cutover', 'Phased changeover', 'Parallel changeover', 'Pilot with no fallback'],
          answer: 2,
          why: 'Running old and new systems side by side lets you compare results and fall back if the new system fails. It costs more effort.'
        },
        {
          q: 'What is the BEST way to control changes to project requirements?',
          choices: [
            'Let developers decide on changes',
            'Use a formal change control process',
            'Freeze all requirements permanently',
            'Accept every user request'
          ],
          answer: 1,
          why: 'Formal change control assesses each change’s impact on cost, schedule and risk, which prevents uncontrolled scope creep.'
        },
        {
          q: 'An organization buys critical software from a small vendor. What protects it if the vendor goes out of business?',
          choices: ['A source code escrow agreement', 'A non-disclosure agreement', 'A service level agreement', 'A software license audit'],
          answer: 0,
          why: 'Escrow releases the source code to the customer if the vendor can no longer support the product.'
        }
      ]
    },
    {
      id: 'd4',
      name: 'Information Systems Operations and Business Resilience',
      weight: 26,
      summary:
        'Running IT reliably day to day, managing changes and problems, and recovering when things go wrong.',
      keyPoints: [
        'Incident management restores service fast. Problem management finds the root cause.',
        'All changes, including emergency changes, are documented, tested and approved.',
        'Patches should be tested before going into production.',
        'Backups are only useful if restores are tested.',
        'End-user computing (e.g. critical spreadsheets) often lacks controls.',
        'BIA, BCP and DRP work together to keep the business running.'
      ],
      questions: [
        {
          q: 'What is the PRIMARY goal of problem management?',
          choices: [
            'Restore service as quickly as possible',
            'Identify and remove the root cause of incidents',
            'Approve changes to production',
            'Track hardware assets'
          ],
          answer: 1,
          why: 'Incident management restores service. Problem management prevents recurrence by fixing the underlying cause.'
        },
        {
          q: 'An emergency change was made to production at night to fix an outage. What should happen next?',
          choices: [
            'Nothing, since the outage is fixed',
            'Roll back the change automatically',
            'Document and get approval for the change after the fact',
            'Disable the developer’s account'
          ],
          answer: 2,
          why: 'Emergency changes skip some steps for speed but must still be documented, reviewed and approved afterward.'
        },
        {
          q: 'What should be done BEFORE deploying a critical security patch to production?',
          choices: ['Test it in a non-production environment', 'Notify all customers', 'Wait for the next annual maintenance window', 'Disable logging'],
          answer: 0,
          why: 'Testing first catches patches that break systems, while still allowing urgent deployment.'
        },
        {
          q: 'What is the BEST way to confirm that backups are reliable?',
          choices: [
            'Check that backup jobs report success',
            'Store backups in two locations',
            'Encrypt all backup media',
            'Perform regular test restores'
          ],
          answer: 3,
          why: 'Only a successful restore proves the backup is usable. A “success” status can hide corrupt or incomplete data.'
        },
        {
          q: 'A finance team relies on a complex spreadsheet for monthly reporting. What is the MAIN risk?',
          choices: [
            'High software license costs',
            'Errors and unauthorized changes due to weak controls',
            'Slow network performance',
            'Too many backups'
          ],
          answer: 1,
          why: 'End-user computing tools often lack change control, testing and access restrictions, so errors go unnoticed.'
        },
        {
          q: 'Which document lists the steps to restore IT systems after a disaster?',
          choices: ['Business impact analysis', 'Disaster recovery plan', 'Information security policy', 'Service level agreement'],
          answer: 1,
          why: 'The DRP covers restoring IT. The BIA sets priorities, and the BCP keeps the wider business running.'
        }
      ]
    },
    {
      id: 'd5',
      name: 'Protection of Information Assets',
      weight: 26,
      summary:
        'The controls that protect information: access, encryption, network and physical security, and monitoring.',
      keyPoints: [
        'Access should follow least privilege and be removed promptly when people leave.',
        'Multi-factor means different factor types: something you know, have or are.',
        'Encrypt with the recipient’s public key for confidentiality.',
        'Sign with the sender’s private key for integrity, authenticity and non-repudiation.',
        'Public-facing servers belong in a DMZ.',
        'A vulnerability scan finds weaknesses. A penetration test tries to exploit them.'
      ],
      questions: [
        {
          q: 'To send a confidential message using asymmetric encryption, the sender should encrypt it with:',
          choices: ['The sender’s private key', 'The sender’s public key', 'The recipient’s public key', 'The recipient’s private key'],
          answer: 2,
          why: 'Only the recipient’s private key can decrypt data encrypted with their public key, which keeps it confidential.'
        },
        {
          q: 'A digital signature is created using:',
          choices: ['The sender’s private key', 'The recipient’s public key', 'A shared secret key', 'The certificate authority’s public key'],
          answer: 0,
          why: 'Signing with the sender’s private key proves who sent it. Anyone can verify it with the sender’s public key.'
        },
        {
          q: 'Which is an example of multi-factor authentication?',
          choices: ['A password and a PIN', 'A password and a security question', 'Two different passwords', 'A password and a code from a hardware token'],
          answer: 3,
          why: 'Password (something you know) plus token (something you have) uses two factor types. The others are all “something you know.”'
        },
        {
          q: 'Where should a company’s public web server be placed?',
          choices: ['On the internal network', 'In a DMZ', 'On the same segment as the database server', 'Outside any firewall'],
          answer: 1,
          why: 'A DMZ lets the public reach the web server while firewalls keep the internal network separated.'
        },
        {
          q: 'What does a penetration test do that a vulnerability scan does not?',
          choices: [
            'Lists missing patches',
            'Attempts to exploit weaknesses to show real impact',
            'Runs automatically every night',
            'Checks password length settings'
          ],
          answer: 1,
          why: 'A pen test goes beyond finding weaknesses and tries to exploit them, showing what an attacker could actually do.'
        },
        {
          q: 'What is the MOST important control when an employee leaves the organization?',
          choices: [
            'Collect their parking pass',
            'Remove their system access promptly',
            'Archive their email after one year',
            'Update the org chart'
          ],
          answer: 1,
          why: 'Leftover access for former employees is a common way unauthorized access happens.'
        }
      ]
    }
  ]
}
