// CISSP content. Domains and weights follow the ISC2 CISSP exam outline.
// Re-check against the current ISC2 outline when it is updated.
// Each question: answer is the index of the correct choice.
export const cissp = {
  id: 'cissp',
  name: 'CISSP',
  fullName: 'Certified Information Systems Security Professional',
  issuer: 'ISC2',
  area: 'Security Leadership',
  ready: true,
  domains: [
    {
      id: 'd1',
      name: 'Security and Risk Management',
      weight: 16,
      summary:
        'The foundation of CISSP: governance, risk, ethics, law and business continuity, from a manager’s point of view.',
      keyPoints: [
        'Due diligence = researching and assessing. Due care = acting on it responsibly.',
        'ISC2 Code of Ethics canons, in order: protect society; act honorably; serve principals; advance the profession.',
        'SLE = asset value × exposure factor. ALE = SLE × ARO.',
        'Trade secrets are protected by keeping them secret (e.g. NDAs), not by registration.',
        'BCP keeps critical business functions running during and after a disruption.',
        'Job rotation and mandatory vacations help detect fraud.'
      ],
      questions: [
        {
          q: 'A company researches a vendor’s security before signing a contract. This is an example of:',
          choices: ['Due care', 'Due diligence', 'Risk transfer', 'Separation of duties'],
          answer: 1,
          why: 'Due diligence is the research and assessment. Due care is acting responsibly on what you learn.'
        },
        {
          q: 'What is the FIRST canon of the ISC2 Code of Ethics?',
          choices: [
            'Advance and protect the profession',
            'Provide diligent and competent service to principals',
            'Protect society, the common good, necessary public trust and confidence, and the infrastructure',
            'Act honorably, honestly, justly, responsibly and legally'
          ],
          answer: 2,
          why: 'The canons are applied in order, and protecting society comes first.'
        },
        {
          q: 'An asset is worth $50,000 and a threat would destroy 20% of it. What is the single loss expectancy (SLE)?',
          choices: ['$5,000', '$10,000', '$20,000', '$40,000'],
          answer: 1,
          why: 'SLE = asset value × exposure factor = $50,000 × 0.20 = $10,000.'
        },
        {
          q: 'How is a trade secret legally protected?',
          choices: ['By registering it with the patent office', 'By filing a copyright', 'By keeping it confidential, e.g. with NDAs', 'By trademarking it'],
          answer: 2,
          why: 'Trade secret protection lasts only as long as reasonable steps are taken to keep it secret.'
        },
        {
          q: 'What is the PRIMARY goal of business continuity planning?',
          choices: [
            'Restore IT systems after a disaster',
            'Keep critical business functions running during and after a disruption',
            'Prevent all disasters',
            'Reduce insurance premiums'
          ],
          answer: 1,
          why: 'BCP focuses on the business as a whole. Restoring IT is the narrower job of disaster recovery.'
        },
        {
          q: 'Which control MAINLY helps detect fraud by an employee?',
          choices: ['Job rotation', 'Strong passwords', 'Encryption at rest', 'Firewalls'],
          answer: 0,
          why: 'When someone else takes over the job, hidden irregularities are more likely to come to light.'
        }
      ]
    },
    {
      id: 'd2',
      name: 'Asset Security',
      weight: 10,
      summary:
        'Identifying, classifying and protecting information and assets through their whole lifecycle, including safe disposal.',
      keyPoints: [
        'Classify data by its value and sensitivity to the organization.',
        'Roles: owner (accountable), custodian (protects), processor (processes for a controller), user.',
        'Data remanence is data left behind after deletion.',
        'Sanitization: clearing < purging < destruction.',
        'Degaussing doesn’t work on SSDs. Physical destruction is the surest method.',
        'Scoping and tailoring adapt a control baseline to the organization.'
      ],
      questions: [
        {
          q: 'What is data remanence?',
          choices: [
            'Data that is backed up offsite',
            'Residual data that remains on media after deletion',
            'Data that has been classified',
            'Data stored in memory'
          ],
          answer: 1,
          why: 'Deleting or formatting often leaves recoverable data. Proper sanitization addresses this.'
        },
        {
          q: 'What is the MOST reliable way to make sure data on a failed SSD cannot be recovered?',
          choices: ['Degaussing', 'Formatting', 'Physical destruction', 'Deleting the files'],
          answer: 2,
          why: 'SSDs aren’t magnetic, so degaussing doesn’t work, and wear leveling defeats simple overwrites. Destruction is the surest method.'
        },
        {
          q: 'Data classification should be based PRIMARILY on:',
          choices: ['File size', 'The data’s value and sensitivity', 'Where the data is stored', 'Who created the data'],
          answer: 1,
          why: 'Classification reflects how much harm disclosure or loss would cause, which drives the protection needed.'
        },
        {
          q: 'Under privacy laws like the GDPR, a cloud payroll provider processing data for an employer is a:',
          choices: ['Data controller', 'Data subject', 'Data processor', 'Data owner'],
          answer: 2,
          why: 'The employer (controller) decides why and how. The provider processes on its behalf.'
        },
        {
          q: 'An organization adjusts a standard security baseline to fit its environment. This is called:',
          choices: ['Scoping and tailoring', 'Data masking', 'Degaussing', 'Risk avoidance'],
          answer: 0,
          why: 'Scoping removes controls that don’t apply, and tailoring adjusts the rest to fit.'
        },
        {
          q: 'How long should data be retained?',
          choices: [
            'Forever, in case it is needed',
            'As long as required by law, regulation and business need',
            'Exactly one year',
            'Until storage runs out'
          ],
          answer: 1,
          why: 'Keeping data too long increases risk and cost. Retention schedules balance legal and business needs.'
        }
      ]
    },
    {
      id: 'd3',
      name: 'Security Architecture and Engineering',
      weight: 13,
      summary:
        'Designing secure systems: security models, secure design principles, cryptography and physical site security.',
      keyPoints: [
        'Bell-LaPadula protects confidentiality: no read up, no write down.',
        'Biba protects integrity: no read down, no write up.',
        'Symmetric encryption is fast but hard to distribute keys for: n(n−1)/2 keys for n users.',
        'Asymmetric encryption solves key distribution but is slower.',
        'A TPM is a hardware chip that stores keys and supports secure boot.',
        'Common Criteria evaluates product security using Evaluation Assurance Levels (EALs).'
      ],
      questions: [
        {
          q: 'Which security model is focused on CONFIDENTIALITY?',
          choices: ['Biba', 'Clark-Wilson', 'Bell-LaPadula', 'Brewer-Nash'],
          answer: 2,
          why: 'Bell-LaPadula stops users from reading above their clearance (“no read up”).'
        },
        {
          q: 'Which security model is focused on INTEGRITY with the rule “no read down, no write up”?',
          choices: ['Bell-LaPadula', 'Biba', 'Take-Grant', 'Graham-Denning'],
          answer: 1,
          why: 'Biba keeps lower-integrity data from contaminating higher-integrity data.'
        },
        {
          q: 'How many symmetric keys are needed for 10 users to each communicate privately with every other user?',
          choices: ['10', '20', '45', '100'],
          answer: 2,
          why: 'n(n−1)/2 = 10 × 9 / 2 = 45. This is why symmetric key distribution doesn’t scale.'
        },
        {
          q: 'What is the MAIN advantage of symmetric over asymmetric encryption?',
          choices: ['Easier key distribution', 'Faster performance', 'Provides non-repudiation', 'Uses two keys'],
          answer: 1,
          why: 'Symmetric algorithms are much faster, which is why they encrypt bulk data while asymmetric exchanges the keys.'
        },
        {
          q: 'What is a Trusted Platform Module (TPM)?',
          choices: [
            'A software firewall',
            'A hardware chip that securely stores keys and supports secure boot',
            'A cloud key management service',
            'A type of antivirus'
          ],
          answer: 1,
          why: 'The TPM provides hardware-based key storage and system integrity checks.'
        },
        {
          q: 'What does the Common Criteria framework do?',
          choices: [
            'Sets accounting standards',
            'Evaluates the security assurance of IT products',
            'Defines privacy laws',
            'Rates network speed'
          ],
          answer: 1,
          why: 'Common Criteria (ISO/IEC 15408) evaluates products against security targets at defined assurance levels.'
        }
      ]
    },
    {
      id: 'd4',
      name: 'Communication and Network Security',
      weight: 13,
      summary:
        'Securing network design and communication channels: the OSI model, protocols, wireless and segmentation.',
      keyPoints: [
        'OSI layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.',
        'Switches work at layer 2 (MAC addresses). Routers work at layer 3 (IP addresses).',
        'IPsec AH gives integrity and authentication. ESP adds encryption.',
        'WPA3 is the current strongest Wi-Fi security standard.',
        'Common ports: 22 SSH, 53 DNS, 443 HTTPS, 3389 RDP.',
        'Segmentation and microsegmentation limit lateral movement.'
      ],
      questions: [
        {
          q: 'At which OSI layer do routers operate?',
          choices: ['Layer 1, Physical', 'Layer 2, Data Link', 'Layer 3, Network', 'Layer 4, Transport'],
          answer: 2,
          why: 'Routers forward packets using IP addresses, which is layer 3.'
        },
        {
          q: 'Which IPsec component provides encryption?',
          choices: ['Authentication Header (AH)', 'Encapsulating Security Payload (ESP)', 'Internet Key Exchange (IKE)', 'Security Association (SA)'],
          answer: 1,
          why: 'ESP provides confidentiality (and can provide integrity). AH provides integrity and authentication only.'
        },
        {
          q: 'Which Wi-Fi security standard is the MOST secure?',
          choices: ['WEP', 'WPA', 'WPA2', 'WPA3'],
          answer: 3,
          why: 'WPA3 adds stronger authentication (SAE) and protection against offline password guessing.'
        },
        {
          q: 'Which port does HTTPS use by default?',
          choices: ['80', '443', '22', '3389'],
          answer: 1,
          why: 'HTTPS uses TCP 443. Port 80 is unencrypted HTTP.'
        },
        {
          q: 'At which OSI layer does a standard network switch operate?',
          choices: ['Layer 2, Data Link', 'Layer 3, Network', 'Layer 5, Session', 'Layer 7, Application'],
          answer: 0,
          why: 'Switches forward frames using MAC addresses at layer 2.'
        },
        {
          q: 'What is the MAIN security benefit of microsegmentation?',
          choices: ['Faster internet speeds', 'Limiting an attacker’s lateral movement', 'Cheaper hardware', 'Removing the need for firewalls'],
          answer: 1,
          why: 'Fine-grained segments contain a breach so attackers can’t move freely between workloads.'
        }
      ]
    },
    {
      id: 'd5',
      name: 'Identity and Access Management (IAM)',
      weight: 13,
      summary:
        'Controlling who can access what: identification, authentication, authorization, access models and the identity lifecycle.',
      keyPoints: [
        'Access models: DAC (owner decides), MAC (labels and clearances), RBAC (roles), ABAC (attributes).',
        'Biometrics: FAR (false accepts), FRR (false rejects), CER/EER where they meet. Lower CER is better.',
        'Kerberos uses a Key Distribution Center and tickets.',
        'SAML supports federated SSO. OAuth is for authorization. OpenID Connect adds authentication on top of OAuth.',
        'Privilege creep builds up as people change roles. Regular access reviews fix it.',
        'Provision, review and deprovision accounts across the identity lifecycle.'
      ],
      questions: [
        {
          q: 'In which access control model does the data owner decide who gets access?',
          choices: ['Mandatory access control (MAC)', 'Discretionary access control (DAC)', 'Role-based access control (RBAC)', 'Rule-based access control'],
          answer: 1,
          why: 'In DAC, the owner grants access at their discretion. MAC uses system-enforced labels.'
        },
        {
          q: 'Which access model uses security labels and clearances enforced by the system?',
          choices: ['DAC', 'RBAC', 'MAC', 'ABAC'],
          answer: 2,
          why: 'MAC is common in military and government systems where labels decide access, not owners.'
        },
        {
          q: 'When comparing biometric systems, which measure BEST shows overall accuracy?',
          choices: ['False acceptance rate alone', 'Crossover error rate (CER)', 'Enrollment time', 'False rejection rate alone'],
          answer: 1,
          why: 'CER is where FAR and FRR are equal. A lower CER means a more accurate system.'
        },
        {
          q: 'Which authentication protocol uses tickets issued by a Key Distribution Center?',
          choices: ['RADIUS', 'Kerberos', 'LDAP', 'TACACS+'],
          answer: 1,
          why: 'Kerberos issues ticket-granting tickets and service tickets so passwords aren’t sent across the network.'
        },
        {
          q: 'An app lets users grant it access to their calendar without sharing their password. Which standard is this?',
          choices: ['OAuth', 'Kerberos', 'SAML', 'RADIUS'],
          answer: 0,
          why: 'OAuth handles delegated authorization. OpenID Connect builds authentication on top of it.'
        },
        {
          q: 'An employee who has changed roles three times still has access from every past role. This is:',
          choices: ['Least privilege', 'Privilege creep', 'Separation of duties', 'Federation'],
          answer: 1,
          why: 'Privilege creep builds up when old access isn’t removed. Regular access reviews fix it.'
        }
      ]
    },
    {
      id: 'd6',
      name: 'Security Assessment and Testing',
      weight: 12,
      summary:
        'Checking that controls work: vulnerability scans, penetration tests, code testing, log reviews and audit reports.',
      keyPoints: [
        'Always get written authorization before testing.',
        'SOC 1 covers financial reporting controls. SOC 2 covers security, availability, processing integrity, confidentiality and privacy.',
        'Type I = design at a point in time. Type II = operating effectiveness over a period.',
        'Synthetic transactions monitor availability and performance with scripted activity.',
        'Fuzzing sends random or malformed input to find crashes and flaws.',
        'False positives report issues that don’t exist. False negatives miss real ones.'
      ],
      questions: [
        {
          q: 'A customer wants evidence that a cloud vendor’s security controls worked over the past year. Which report is BEST?',
          choices: ['SOC 1 Type I', 'SOC 2 Type I', 'SOC 2 Type II', 'SOC 3 marketing summary'],
          answer: 2,
          why: 'SOC 2 covers security controls, and Type II tests how they operated over a period.'
        },
        {
          q: 'Which report focuses on controls relevant to financial reporting?',
          choices: ['SOC 1', 'SOC 2', 'SOC 3', 'ISO/IEC 27001 certificate'],
          answer: 0,
          why: 'SOC 1 supports financial statement audits. SOC 2 addresses security and related criteria.'
        },
        {
          q: 'What are synthetic transactions used for?',
          choices: [
            'Testing backup tapes',
            'Running scripted activity to monitor system performance and availability',
            'Generating fake customer data',
            'Encrypting transactions'
          ],
          answer: 1,
          why: 'Scripts act like users so problems are found before real users hit them.'
        },
        {
          q: 'Which testing technique sends large amounts of random or malformed input to an application?',
          choices: ['Fuzzing', 'Code review', 'Regression testing', 'Static analysis'],
          answer: 0,
          why: 'Fuzzing finds crashes and input-handling flaws that normal tests miss.'
        },
        {
          q: 'A vulnerability scan reports a flaw that doesn’t actually exist on the system. This is a:',
          choices: ['False negative', 'True positive', 'False positive', 'True negative'],
          answer: 2,
          why: 'A false positive is an alert for something that isn’t there. A false negative misses a real issue.'
        },
        {
          q: 'What is MOST important to have before starting a penetration test?',
          choices: ['The latest exploit tools', 'Written authorization from the system owner', 'A list of employee passwords', 'A completed SOC 2 report'],
          answer: 1,
          why: 'Without written permission, testing can be illegal. Authorization also defines scope.'
        }
      ]
    },
    {
      id: 'd7',
      name: 'Security Operations',
      weight: 13,
      summary:
        'Running security day to day: investigations, monitoring, incident response, backups, disaster recovery and personnel safety.',
      keyPoints: [
        'Human safety is always the top priority.',
        'Full backup + differential: restore the full and the latest differential.',
        'Full backup + incremental: restore the full and every incremental since.',
        'DR test types, least to most disruptive: read-through, walkthrough, simulation, parallel, full interruption.',
        'Mandatory vacations and job rotation help detect fraud.',
        'RAID 1 mirrors disks. RAID 5 stripes with parity.'
      ],
      questions: [
        {
          q: 'A company does a full backup Sunday and differential backups every other night. Its server fails Thursday. What is needed to restore?',
          choices: [
            'Sunday’s full backup only',
            'Sunday’s full backup and Wednesday’s differential',
            'Sunday’s full backup and every differential since',
            'Wednesday’s differential only'
          ],
          answer: 1,
          why: 'Each differential holds all changes since the last full backup, so you need the full plus the latest differential.'
        },
        {
          q: 'Which disaster recovery test carries the MOST risk to normal operations?',
          choices: ['Read-through', 'Tabletop walkthrough', 'Parallel test', 'Full interruption test'],
          answer: 3,
          why: 'A full interruption test actually shuts down the primary site, so failure means a real outage.'
        },
        {
          q: 'During a fire in the data center, what is the FIRST priority?',
          choices: ['Save the servers', 'Protect backup tapes', 'Ensure people’s safety', 'Notify customers'],
          answer: 2,
          why: 'Human life and safety always come before systems or data.'
        },
        {
          q: 'Why do some organizations require employees in sensitive roles to take mandatory vacations?',
          choices: ['To reduce payroll costs', 'To help detect fraud', 'To meet labor laws only', 'To improve morale only'],
          answer: 1,
          why: 'Someone else covers the role, which can expose hidden fraud or errors.'
        },
        {
          q: 'Which RAID level uses striping with distributed parity?',
          choices: ['RAID 0', 'RAID 1', 'RAID 5', 'RAID 10'],
          answer: 2,
          why: 'RAID 5 survives one disk failure using parity. RAID 1 mirrors, and RAID 0 has no redundancy.'
        },
        {
          q: 'A company does a full backup Sunday and incremental backups every other night. Its server fails Thursday. What is needed to restore?',
          choices: [
            'Sunday’s full backup only',
            'Wednesday’s incremental only',
            'Sunday’s full backup plus the Monday, Tuesday and Wednesday incrementals',
            'Sunday’s full backup plus Wednesday’s incremental'
          ],
          answer: 2,
          why: 'Each incremental holds only changes since the previous backup, so all of them are needed, in order.'
        }
      ]
    },
    {
      id: 'd8',
      name: 'Software Development Security',
      weight: 10,
      summary:
        'Building security into software: the SDLC, secure coding, testing tools, DevSecOps and database security.',
      keyPoints: [
        'Build security in from the requirements phase (“shift left”).',
        'SAST analyzes source code without running it. DAST tests the running application.',
        'Parameterized queries are the best defense against SQL injection.',
        'Validate input on the server side. Client-side checks can be bypassed.',
        'Database risks: aggregation (combining data) and inference (deducing secrets).',
        'ACID: atomicity, consistency, isolation, durability.'
      ],
      questions: [
        {
          q: 'Which testing method analyzes source code without running the application?',
          choices: ['DAST', 'SAST', 'Fuzzing', 'Penetration testing'],
          answer: 1,
          why: 'Static application security testing reviews code at rest. DAST tests the running app.'
        },
        {
          q: 'What is the BEST defense against SQL injection?',
          choices: ['Client-side input validation', 'Parameterized queries (prepared statements)', 'Hiding error messages', 'Using HTTPS'],
          answer: 1,
          why: 'Parameterized queries keep user input separate from SQL code, so input can’t change the query.'
        },
        {
          q: 'A user combines several non-sensitive facts to work out a classified secret. This is:',
          choices: ['Aggregation', 'Inference', 'Polyinstantiation', 'Normalization'],
          answer: 1,
          why: 'Inference is deducing sensitive information. Aggregation is collecting many items that together become sensitive.'
        },
        {
          q: 'In database transactions, what does “atomicity” mean?',
          choices: [
            'Transactions are fully completed or not done at all',
            'Data is stored in small pieces',
            'Transactions run at the same time',
            'Data is encrypted at rest'
          ],
          answer: 0,
          why: 'Atomicity is all-or-nothing, so a failed transaction leaves no partial changes.'
        },
        {
          q: 'What does “shift left” mean in DevSecOps?',
          choices: [
            'Move security testing to after release',
            'Build security into the earliest stages of development',
            'Outsource security to a vendor',
            'Remove security from the pipeline'
          ],
          answer: 1,
          why: 'Finding and fixing issues early is cheaper and faster than after deployment.'
        },
        {
          q: 'Where should input validation be enforced for security?',
          choices: ['Only in the browser', 'On the server', 'Only in the database', 'It isn’t needed with HTTPS'],
          answer: 1,
          why: 'Attackers can bypass client-side checks, so the server must validate all input.'
        }
      ]
    }
  ]
}
