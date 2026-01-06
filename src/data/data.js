export const Skillset = [
  {
    key: 1,
    title: "DevOps & Cloud",
    count: "I",
    skills: [
      { skill: "Docker", percentage: "95%" },
      { skill: "Kubernetes", percentage: "92%" },
      { skill: "Jenkins", percentage: "90%" },
      { skill: "ArgoCD", percentage: "88%" },
      { skill: "Terraform", percentage: "90%" },
      { skill: "Ansible", percentage: "85%" },
      { skill: "AWS", percentage: "92%" },
      { skill: "Azure (AKS)", percentage: "88%" },
      { skill: "GCP", percentage: "85%" },
      { skill: "Linux", percentage: "95%" },
      { skill: "Nginx", percentage: "90%" },
      { skill: "Git & GitHub Actions", percentage: "95%" },
    ],
  },
  {
    key: 2,
    title: "Observability & Security",
    count: "II",
    skills: [
      { skill: "Prometheus", percentage: "88%" },
      { skill: "Grafana", percentage: "88%" },
      { skill: "Loki", percentage: "80%" },
      { skill: "EFK Stack", percentage: "78%" },
      { skill: "SonarQube", percentage: "85%" },
      { skill: "Trivy", percentage: "85%" },
      { skill: "DevSecOps", percentage: "82%" },
    ],
  },
  {
    key: 3,
    title: "Programming",
    count: "III",
    skills: [
      { skill: "Python", percentage: "90%" },
      { skill: "Go", percentage: "85%" },
      { skill: "JavaScript", percentage: "90%" },
      { skill: "C/C++", percentage: "85%" },
      { skill: "Bash/Shell", percentage: "92%" },
    ],
  },
  {
    key: 4,
    title: "Database & Storage",
    count: "IV",
    skills: [
      { skill: "MongoDB", percentage: "90%" },
      { skill: "Redis", percentage: "88%" },
      { skill: "PostgreSQL/RDS", percentage: "85%" },
      { skill: "DynamoDB", percentage: "82%" },
      { skill: "S3", percentage: "90%" },
    ],
  },
  {
    key: 5,
    title: "Development",
    count: "V",
    skills: [
      { skill: "React", percentage: "85%" },
      { skill: "Node.js", percentage: "88%" },
      { skill: "Express", percentage: "85%" },
      { skill: "REST APIs", percentage: "90%" },
    ],
  },
  {
    key: 6,
    title: "Soft Skills",
    count: "VI",
    skills: [
      { skill: "Leadership" },
      { skill: "Teamwork" },
      { skill: "Time Management" },
      { skill: "Critical Thinking" },
      { skill: "Problem-Solving" },
      { skill: "Adaptability" },
      { skill: "Communication" },
    ],
  },
];

export const Skills = [
  {
    key: 1,
    title: "Docker",
    count: "I",
  },
  {
    key: 2,
    title: "Kubernetes",
    count: "II",
  },
  {
    key: 3,
    title: "Jenkins",
    count: "III",
  },
  {
    key: 4,
    title: "Terraform",
    count: "IV",
  },
  {
    key: 5,
    title: "AWS",
    count: "V",
  },
  {
    key: 6,
    title: "ArgoCD",
    count: "VI",
  },
  {
    key: 7,
    title: "Prometheus",
    count: "VII",
  },
  {
    key: 8,
    title: "Grafana",
    count: "VIII",
  },
  {
    key: 9,
    title: "Python",
    count: "IX",
  },
  {
    key: 10,
    title: "Go",
    count: "X",
  },
  {
    key: 11,
    title: "MongoDB",
    count: "XI",
  },
  {
    key: 12,
    title: "Linux",
    count: "XII",
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "DevOps Engineer - TOINGG",
    date: "October 2025 - Present",
    responsibilities: [
    "Designed and operated a production Kubernetes (AKS) platform for stateless microservices, improving scalability,fault isolation, and deployment reliability.",
    "Implemented GitOps-based CI/CD pipeline using ArgoCD with blue-green and canary strategies, enabling automated, zero-downtime releases across environments.",
    "Built a production observability stack (Prometheus, Grafana, NGINX ingress), reducing incident detection time and cutting MTTR by 70%.",
    "Automated Infrastructure as Code (Terraform) for disaster recovery and high availability; handled production incidents and on-call debugging, reducing incident response time by 40%." ,
    "Implemented Kubernetes RBAC, IAM policies, and secure networking (VPC, load balancers) for production workloads.",
    ],
  },
  {
    title: "DevOps Intern - PGAGI",
    date: "June 2025 - October 2025",
    responsibilities: [
      // "Architected and deployed multi-cloud infrastructure spanning AWS and GCP using Terraform IaC reducing operational costs by 90%",
      "Containerized distributed microservices using secure multi-stage Dockerfiles with layer optimization following industry security best practices",
      "Improved data processing throughput by 90% and reduced web scraping execution time by 85% through strategic infrastructure optimization",
      "Integrated SonarQube static code analysis and Trivy container security scanning improving code quality by 65% and reducing vulnerabilities by 80%",
      "Orchestrated complex workloads with Kubernetes and AWS Lambda serverless services achieving horizontal auto-scaling and zero downtime",
    ],
  },
  {
    title: "Development Intern - ISRO",
    date: "July 2024 - Present",
    responsibilities: [
      "Led cross-functional 10-member development team building core geospatial features for Bhuvan platform (ISRO's national geoportal)",
      "Added comprehensive multilingual support for 10+ regional Indian languages increasing platform adoption by 45% and improving accessibility",
      "Built highly scalable REST APIs and geospatial data processing pipelines improving map rendering performance by 60% through caching",
      "Implemented OGC (Open Geospatial Consortium) API standards improving data accessibility, cross-platform interoperability and third-party integration",
      "Achieved 30% overall performance boost through systematic code optimization, database indexing and efficient query patterns",
    ],
  },
  {
    title: "FullStack Mentor - DSCE",
    date: "January 2025 - April 2025",
    responsibilities: [
      "Mentored 70+ undergraduate students in structured FullStack web development focusing on industry-standard MERN stack technologies",
      "Achieved 100% project completion rate through hands-on code guidance, weekly code reviews and personalized debugging sessions",
      "Conducted interactive technical sessions on advanced debugging techniques, cloud deployment strategies and scalable system architecture",
      "Taught industry best practices for ReactJS component architecture, ExpressJS middleware, MongoDB schema design and secure JWT authentication",
    ],
  },
  // {
  //   title: "Software Developer - Stealth AI (UK)",
  //   date: "October 2024 - December 2024",
  //   responsibilities: [
  //     "Built production-ready MVP for UK-based AI startup in 2 months using full MERN stack with integrated LLM capabilities",
  //     "Improved frontend performance by 30% through React optimization, code splitting, lazy loading and efficient state management",
  //     "Collaborated effectively with global distributed team across multiple time zones using agile methodologies and async communication",
  //     "Participated actively in daily standups, sprint planning sessions, technical code reviews and architectural decision-making",
  //     "Accelerated product launch readiness timeline through rapid feature development, quick iteration cycles and continuous feedback",
  //   ],
  // },
  {
    title: "Open Source Developer - GirlScript Summer of Code",
    date: "October 2024 - November 2024",
    responsibilities: [
      "Contributed 90+ high-quality pull requests across 50+ diverse open-source repositories spanning multiple domains and technology stacks",
      "Achieved impressive peak rank #1 and maintained final rank #35 on GSSoC'24 leaderboard among thousands of global contributors",
      "Improved project codebases through critical bug fixes, feature additions, comprehensive documentation updates and code quality enhancements",
      "Worked with multiple technology stacks: JavaScript, React, GoLang, Python, CSS demonstrating adaptability and quick learning",
    ],
  },
  {
    title: "Tech and Operations Intern - SpawnLabs",
    date: "May 2024 - July 2024",
    responsibilities: [
      "Developed and launched responsive landing pages using modern web technologies with mobile-first design approach and cross-browser compatibility",
      "Led technical team responsible for end-to-end website development, Figma design implementation and WIX platform integration",
      "Applied advanced SEO optimization techniques and best practices resulting in 25% measurable increase in organic search traffic",
      "Implemented sophisticated CSS animations and micro-interactions significantly enhancing user experience, engagement and overall interactivity",
    ],
  },
];



