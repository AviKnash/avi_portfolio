import cloud from "@/public/images/cloud-ops.svg";
import proptech from "@/public/images/proptech.svg";
import headphones from "@/public/images/headphones.svg";


export const projects = [
  {
    title: "Linear Six",
    route: "/linear-six",
    src: cloud,
    color: "#000000",
    descriptionLists: [
      [
        "Designed, implemented, and developed a project time tracker/reporting service application to replace Clockify.",
        "Leveraged AWS services to implement efficient hosting, CI/CD, log tracking, and data handling.",
        "Engaged in Agile-style development using Scrum project management methodologies.",
        "Implemented best practices in software development, including secure version management and comprehensive testing (unit, regression, and integration tests), ensuring maintainability and scalability.",
      ],
    ],
    descriptionTitles: [
      "Worked on Bespoke team for internal development, contributing to LinearSix by:",
    ],
  },
  {
    title: "Insighture",
    route: "/insighture",
    src: proptech,
    color: "#8C8C8C",
    descriptionLists: [
      [
        "Worked on fixing synchronization issues between the audio obtained and the received text from Azure Cognitive Services to ensure correct playback for audio-to-text detection in an enterprise application, resulting in a 2-4 second improvement in audio-to-text synchronization for remote meetings.",
        "Refactored code to streamline integration and resolve existing bugs, drastically increasing efficiency and reliability.",
        "Performed thorough regression testing to ensure the application remains in a working state.",
      ],
      [
        "Led the front-end development of a high-priority feature aimed at automating the digitization of property leasing and rental forms.",
        "Managed a frontend team by efficiently delegating non-blocking tasks and architecting the project to accommodate team members' code, improving collaboration, efficiency, and resulting in early delivery of key milestones.",
        "Identified performance bottlenecks and implemented Next.js best practices to optimize not only the newly developed feature but also improve the performance of existing integrated features.",
      ],
      [
        "Building and developing backend AI services using Python and FastAPI, including AI Swagger spec generation and reverse DNS look-up.",
        "Integrated HashiCorp Vault into SkyU's secret management service for secure client secret management, resulting in a smooth client onboarding process.",
      ],
    ],
    descriptionTitles: [
      "Worked on the project team focusing on RegTech and contributing by:",
      "Worked on the project team focusing on PropTech and contributed by:",
      "Worked on the product team building a SaaS application and contributing by:",
    ],
  },
  {
    title: "Zoral",
    route: "/zoral",
    src: headphones,
    color: "#EFE8D3",
    descriptionLists: [
      [
        "Spearheading a major project to automate loan and leasing services for a leading Malaysian bank, leveraging Zoral's AI engine.",
        "Designing and implemented solutions pertaining to Credit Policy Scope, incorporating innovative design solutions and workflows. These solutions and designs resulted in a 20%-30% reduction on expected time for UAT.",
        "Leveraged Zoral's extension data warehouse to build highly scalable and reusable backend services that were templatized for use in other projects.",
        "Collaborating seamlessly with the frontend and UI/UX teams, enabling communication and contributing to screens and backend integrations.",
        "Taking an active role in the recruitment process, including designing take-home plans and leading interviews for new developers joining the team.",
      ],
    ],
    descriptionTitles: ["Contributed to Zoral by:"],
  },
];
