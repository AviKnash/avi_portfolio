import l6 from "@/public/images/linear-six.svg";
import insighture from "@/public/images/insighture.svg";
import zoral from "@/public/images/zoral.svg";
import graphql from "@/public/technologies/graphql.svg";
import firebase from "@/public/technologies/firebase.svg";
import aws from "@/public/technologies/aws.svg";
import cplus from "@/public/technologies/cplus.svg";
import django from "@/public/technologies/django.svg";
import docker from "@/public/technologies/docker.svg";
import flask from "@/public/technologies/flask.svg";
import mongodb from "@/public/technologies/mongodb.svg";
import javascript from "@/public/technologies/javascript.svg";
import python from "@/public/technologies/python.svg";
import typescript from "@/public/technologies/typescript.svg";
import react from "@/public/technologies/react.svg";
import nextjs from "@/public/technologies/nextjs.svg";
import sql from "@/public/technologies/sql.svg";
import golang from "@/public/technologies/golang.svg";
import postgresql from "@/public/technologies/postgresql.svg";
import nestjs from "@/public/technologies/nestjs.svg";
import warboard from "@/public/images/warboard.png";
import bubble from "@/public/images/bubble.png";
import portfolio from "@/public/images/portfolio.png";

export const experience = [
  {
    title: "Insighture",
    role: "Software Engineer",
    src: insighture,
    color: "#8C8C8C",
    date: "2024 - Present",
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
    title: "Linear Six",
    role: "Associate Software Engineer/ Software Engineer",
    src: l6,
    color: "#000000",
    date: "2022 - 2024",
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
    title: "Zoral",
    role: "Software Engineer",
    src: zoral,
    color: "#EFE8D3",
    date: "2023 - 2024",
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

export const technologies = [
  { name: "React", src: react, top: 10, left: 20, size: 100 },
  { name: "Next.js", src: nextjs, top: 40, left: 30, size: 100 },
  { name: "NestJS", src: nestjs, top: 70, left: 15, size: 100 },
  { name: "Golang", src: golang, top: 80, left: 50, size: 100 },
  { name: "JavaScript", src: javascript, top: 20, left: 80, size: 100 },
  { name: "TypeScript", src: typescript, top: 60, left: 10, size: 100 },
  { name: "Docker", src: docker, top: 30, left: 60, size: 100 },
  { name: "GraphQL", src: graphql, top: 50, left: 25, size: 100 },
];

export const technologiesTwo = [
  { name: "Firebase", src: firebase, top: 20, left: 40, size: 100 },
  { name: "AWS", src: aws, top: 70, left: 80, size: 100 },
  { name: "C++", src: cplus, top: 90, left: 10, size: 100 },
  { name: "Django", src: django, top: 30, left: 20, size: 100 },
  { name: "Flask", src: flask, top: 10, left: 60, size: 100 },
  { name: "MongoDB", src: mongodb, top: 80, left: 70, size: 100 },
  { name: "Python", src: python, top: 40, left: 90, size: 100 },
  { name: "SQL", src: sql, top: 60, left: 50, size: 100 },
  { name: "PostgreSQL", src: postgresql, top: 90, left: 30, size: 100 },
];

export const projects = [
  {
    title: "Warboard",
    href: "https://www.warboard.live",
    src: warboard,
    color: "#0e0e0f",
    badgeColor: "#3d5a80",
    techUsed: [
      "React",
      "Express",
      "Websockets",
      "Firebase",
      "Typescript",
      "AWS",
    ],
    subTitle:
      "A real time typing game build for the most competitive of keyboard warriors.",
  },
  {
    title: "Bubble",
    href: "https://www.tinybubbles.online",
    src: bubble,
    color: "#0e0e0f",
    badgeColor: "#3d5a80",
    techUsed: ["React", "Typescript", "SQL", "Tailwind", "AppwriteDB", "AWS"],
    subTitle: "A mini social media application with all the charms to match.",
  },
  {
    title: "Portfolio",
    href: "https://www.aavinash.live",
    src: portfolio,
    color: "#0e0e0f",
    badgeColor: "#3d5a80",
    techUsed: ["Nextjs", "Typescript", "SCSS", "AWS"],
    subTitle: "My minimalistic yet modern attempt at a portfolio.",
  },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/AviKnash",
  instagram: "https://www.instagram.com/avinash.ashok.97",
  medium: "https://medium.com/@aavinash1997",
  linkedin: "https://linkedin.com/in/avinash-asok-541b25241",
};
