// CompTIA Security+ content. Domains and weights follow the CompTIA Security+ (SY0-701) exam objectives.
// Re-check against the current CompTIA objectives when the exam version changes.
// Each question: answer is the index of the correct choice.
export const secplus = {
  id: 'secplus',
  name: 'Security+',
  fullName: 'CompTIA Security+',
  issuer: 'CompTIA',
  area: 'Security Fundamentals',
  ready: true,
  domains: [
    {
      id: 'd1',
      name: 'General Security Concepts',
      weight: 12,
      summary:
        'The building blocks of security: the CIA triad, control types, zero trust and basic cryptography.',
      keyPoints: [
        'CIA triad: confidentiality, integrity, availability. Add non-repudiation and AAA (authentication, authorization, accounting).',
        'Control categories: technical, managerial, operational, physical.',
        'Control types: preventive, deterrent, detective, corrective, compensating, directive.',
        'Zero trust: never trust, always verify, for every request.',
        'Hashing proves integrity. Salting stops rainbow table attacks on password hashes.',
        'Digital signatures provide integrity, authentication and non-repudiation.'
      ],
      questions: [
        {
          q: 'Which security goal does hashing a file MAINLY support?',
          choices: ['Confidentiality', 'Integrity', 'Availability', 'Anonymity'],
          answer: 1,
          why: 'A hash changes if the file changes, so comparing hashes shows whether data was altered.'
        },
        {
          q: 'Adding a random salt to each password before hashing MAINLY defends against:',
          choices: ['Rainbow table attacks', 'Phishing', 'Denial of service', 'Shoulder surfing'],
          answer: 0,
          why: 'Salts make each hash unique, so precomputed rainbow tables don’t work.'
        },
        {
          q: 'Which statement BEST describes zero trust?',
          choices: [
            'Trust everything inside the corporate network',
            'Trust users after their first login each day',
            'Never trust by default; verify every access request',
            'Only trust devices owned by the company'
          ],
          answer: 2,
          why: 'Zero trust removes implicit trust based on network location and checks every request.'
        },
        {
          q: 'What is the main purpose of a honeypot?',
          choices: [
            'Speed up network traffic',
            'Lure attackers so their activity can be detected and studied',
            'Store backup data',
            'Encrypt sensitive files'
          ],
          answer: 1,
          why: 'Honeypots are decoys. Any interaction with them is suspicious and reveals attacker techniques.'
        },
        {
          q: 'A written acceptable use policy is which control category?',
          choices: ['Technical', 'Physical', 'Managerial', 'Operational'],
          answer: 2,
          why: 'Managerial controls are policies, plans and risk decisions set by management.'
        },
        {
          q: 'Which provides non-repudiation for an email?',
          choices: ['A digital signature', 'A strong password', 'A firewall rule', 'Symmetric encryption'],
          answer: 0,
          why: 'Only the sender has their private key, so a valid signature proves they sent it.'
        }
      ]
    },
    {
      id: 'd2',
      name: 'Threats, Vulnerabilities, and Mitigations',
      weight: 22,
      summary:
        'Who attacks, how they get in, the weaknesses they exploit, and how to reduce the risk.',
      keyPoints: [
        'Threat actors include nation-states, organized crime, hacktivists, insiders and unskilled attackers.',
        'Social engineering: phishing (email), vishing (voice), smishing (SMS), pretexting, business email compromise.',
        'Malware: worms self-spread; trojans pretend to be legitimate; ransomware encrypts for payment.',
        'A zero-day is a flaw with no available patch.',
        'Injection attacks (SQL injection, XSS) exploit poor input handling.',
        'Mitigations: patching, hardening, segmentation, least privilege, monitoring.'
      ],
      questions: [
        {
          q: 'A user gets a text message with a fake delivery link asking for payment details. This is:',
          choices: ['Vishing', 'Smishing', 'Whaling', 'Tailgating'],
          answer: 1,
          why: 'Smishing is phishing over SMS. Vishing uses voice calls.'
        },
        {
          q: 'Which malware spreads across a network on its own, without user action?',
          choices: ['Trojan', 'Logic bomb', 'Worm', 'Keylogger'],
          answer: 2,
          why: 'Worms self-replicate across systems. Trojans need a user to run them.'
        },
        {
          q: 'What is a zero-day vulnerability?',
          choices: [
            'A flaw that is fixed on the same day it is found',
            'A flaw unknown to the vendor or with no patch available',
            'A vulnerability with a CVSS score of zero',
            'A flaw that only exists on day one of deployment'
          ],
          answer: 1,
          why: 'Defenders have had “zero days” to fix it, so it can be exploited before a patch exists.'
        },
        {
          q: 'A web log shows the input `\' OR 1=1 --` in a login field. Which attack is MOST likely?',
          choices: ['SQL injection', 'Cross-site scripting', 'Buffer overflow', 'DNS poisoning'],
          answer: 0,
          why: 'That input tries to change the database query so it always returns true.'
        },
        {
          q: 'Attackers infect a website that a target industry’s employees often visit. This is a:',
          choices: ['Typosquatting attack', 'Watering hole attack', 'Brute force attack', 'Replay attack'],
          answer: 1,
          why: 'A watering hole attack compromises a site the victims already trust and visit.'
        },
        {
          q: 'A group defaces a company’s website to protest its policies. Which threat actor is this MOST likely?',
          choices: ['Nation-state', 'Organized crime', 'Hacktivist', 'Insider threat'],
          answer: 2,
          why: 'Hacktivists are driven by ideology or a cause. Organized crime is usually driven by money.'
        }
      ]
    },
    {
      id: 'd3',
      name: 'Security Architecture',
      weight: 18,
      summary:
        'How to design secure systems and networks, on premises and in the cloud, and keep data protected and available.',
      keyPoints: [
        'Cloud shared responsibility: the more you manage (IaaS), the more you secure.',
        'Data states: at rest, in transit, in use. Each needs its own protections.',
        'Data sovereignty: data is subject to the laws of the country where it is stored.',
        'Segment networks, especially ICS/SCADA and IoT, to limit the spread of attacks.',
        'Tokenization swaps sensitive data for a meaningless token.',
        'Resilience: load balancing, clustering, backups and recovery sites.'
      ],
      questions: [
        {
          q: 'In an IaaS cloud model, who is responsible for patching the virtual machine’s operating system?',
          choices: ['The cloud provider', 'The customer', 'The hardware vendor', 'Nobody, as it patches itself'],
          answer: 1,
          why: 'In IaaS, the provider secures the physical infrastructure and the customer manages the OS and above.'
        },
        {
          q: 'Which BEST protects data in transit over the internet?',
          choices: ['Full-disk encryption', 'TLS', 'Data masking', 'Hashing'],
          answer: 1,
          why: 'TLS encrypts data as it moves between systems. Full-disk encryption protects data at rest.'
        },
        {
          q: 'A company stores EU customer data in a U.S. data center. Which concept is MOST relevant?',
          choices: ['Data sovereignty', 'Data masking', 'Load balancing', 'Data deduplication'],
          answer: 0,
          why: 'Data sovereignty means data is subject to the laws of where it is located, which affects compliance.'
        },
        {
          q: 'Which technique MAINLY improves availability?',
          choices: ['Hashing', 'Load balancing', 'Tokenization', 'Steganography'],
          answer: 1,
          why: 'Load balancers spread traffic across servers, so one failure doesn’t take the service down.'
        },
        {
          q: 'Why should industrial control systems (ICS/SCADA) be separated from the corporate network?',
          choices: [
            'To make them faster',
            'To limit the spread of attacks to critical physical systems',
            'To reduce licensing costs',
            'To allow remote access from anywhere'
          ],
          answer: 1,
          why: 'Segmentation keeps a compromise on the business network from reaching systems that control physical processes.'
        },
        {
          q: 'A payment system replaces card numbers with random values that map back only in a secure vault. This is:',
          choices: ['Hashing', 'Tokenization', 'Salting', 'Obfuscation'],
          answer: 1,
          why: 'Tokenization swaps sensitive data for a token. Only the vault can map it back.'
        }
      ]
    },
    {
      id: 'd4',
      name: 'Security Operations',
      weight: 28,
      summary:
        'Day-to-day security work: hardening, monitoring, managing vulnerabilities and identities, and responding to incidents.',
      keyPoints: [
        'A SIEM collects and correlates logs to spot attacks.',
        'CVSS scores vulnerability severity to help prioritize fixes.',
        'Email protections: SPF (allowed senders), DKIM (signatures), DMARC (policy).',
        'Incident response: preparation, detection, analysis, containment, eradication, recovery, lessons learned.',
        'Forensics: chain of custody, legal hold, collect the most volatile data first.',
        'SSO and MFA improve both security and user experience.'
      ],
      questions: [
        {
          q: 'What is the PRIMARY purpose of a SIEM?',
          choices: [
            'Block malware at the email gateway',
            'Collect and correlate logs from many sources to detect threats',
            'Encrypt data at rest',
            'Manage software licenses'
          ],
          answer: 1,
          why: 'A SIEM brings logs together and correlates events to raise alerts.'
        },
        {
          q: 'What does a CVSS score tell you?',
          choices: [
            'How many systems are affected',
            'The severity of a vulnerability',
            'The cost to fix a vulnerability',
            'Who discovered the vulnerability'
          ],
          answer: 1,
          why: 'CVSS rates severity from 0 to 10, which helps prioritize remediation.'
        },
        {
          q: 'Which DNS record lists the mail servers allowed to send email for a domain?',
          choices: ['DKIM', 'DMARC', 'SPF', 'MX'],
          answer: 2,
          why: 'SPF lists authorized sending servers. DKIM signs messages, and DMARC sets the policy for failures.'
        },
        {
          q: 'During forensic collection, which should be captured FIRST?',
          choices: ['Data on backup tapes', 'Data on the hard drive', 'Contents of system memory (RAM)', 'Printed reports'],
          answer: 2,
          why: 'Order of volatility says collect the most short-lived data first. RAM is lost when power is removed.'
        },
        {
          q: 'What is the MAIN benefit of single sign-on (SSO)?',
          choices: [
            'Users don’t need passwords at all',
            'Users log in once to access multiple systems',
            'It removes the need for MFA',
            'It encrypts all network traffic'
          ],
          answer: 1,
          why: 'SSO reduces password fatigue and centralizes authentication. It should still be paired with MFA.'
        },
        {
          q: 'A company is told a lawsuit is coming. What must it do with relevant data?',
          choices: ['Delete it to reduce risk', 'Place it under a legal hold', 'Encrypt and forget it', 'Move it to the cloud'],
          answer: 1,
          why: 'A legal hold preserves relevant data and suspends normal deletion.'
        }
      ]
    },
    {
      id: 'd5',
      name: 'Security Program Management and Oversight',
      weight: 20,
      summary:
        'Running security as a program: governance, risk, third parties, compliance, audits and awareness.',
      keyPoints: [
        'Governance documents: policies, standards, procedures, guidelines.',
        'Business continuity metrics: RTO, RPO, MTTR (repair time), MTBF (time between failures).',
        'Third-party agreements: SLA, MSA, SOW, NDA, MOU/MOA, BPA.',
        'Pen test knowledge levels: known, partially known and unknown environment.',
        'Rules of engagement define a pen test’s scope and limits.',
        'Data roles: owner (accountable), custodian (implements protection), processor (acts for controller).'
      ],
      questions: [
        {
          q: 'A penetration tester is given no information about the target before the test. This is a(n):',
          choices: ['Known environment test', 'Partially known environment test', 'Unknown environment test', 'Integrated test'],
          answer: 2,
          why: 'An unknown environment (black box) test simulates an outside attacker with no inside knowledge.'
        },
        {
          q: 'Which metric measures the average time a system runs before it fails?',
          choices: ['MTTR', 'MTBF', 'RTO', 'RPO'],
          answer: 1,
          why: 'Mean time between failures measures reliability. MTTR is the average time to repair.'
        },
        {
          q: 'Which agreement defines the expected level of service, such as uptime, from a vendor?',
          choices: ['NDA', 'SLA', 'MOU', 'BPA'],
          answer: 1,
          why: 'A service level agreement sets measurable service targets and often penalties.'
        },
        {
          q: 'Which document protects confidential information shared with a business partner?',
          choices: ['NDA', 'SOW', 'SLA', 'MSA'],
          answer: 0,
          why: 'A non-disclosure agreement legally restricts sharing confidential information.'
        },
        {
          q: 'Who usually applies the day-to-day controls that protect data, as the data owner requires?',
          choices: ['The data subject', 'The data custodian', 'The auditor', 'The regulator'],
          answer: 1,
          why: 'Custodians (often IT) implement protections such as backups and access controls. Owners decide the requirements.'
        },
        {
          q: 'Which document sets the scope, timing and allowed activities for a penetration test?',
          choices: ['Rules of engagement', 'Privacy notice', 'Acceptable use policy', 'Incident report'],
          answer: 0,
          why: 'Rules of engagement keep testing authorized, in scope and safe for the business.'
        }
      ]
    }
  ]
}
