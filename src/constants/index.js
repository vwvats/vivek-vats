import {
  frontend,
  mobile,
  backend,
  blockchain,
  javascript,
  typescript,
  reactjs,
  redux,
  mui,
  tailwind,
  threejs,
  nodejs,
  mongodb,
  graphql,
  jest,
  cypress,
  tripadvisor,
  whatfix,
  component,
  yogami,
  threadsClone,
  dribbleClone,
  dalleClone,
  kickstarter,
  shirts3d,
  jobHuntsman,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: frontend,
  },
  {
    title: "Mobile Development",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Blockchain Development",
    icon: blockchain,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "Cypress",
    icon: cypress,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Component.Fi",
    icon: component,
    iconBg: "#000",
    date: "Sep 2022 - Apr 2023",
    points: [
      "Led the frontend development of ‘Blueprint’ - a simulation platform for user-coded DeFi trading strategies.",
      "Planned, developed, and deployed a custom IDE that gives users a full-fledged Python environment in their web browsers.",
      "Integrated REST/gRPC micro-services and Ethereum Smart Contracts to simulate trading strategy results.",
      "Visualized strategy result simulations using frontend charting libraries (Charts/D3).",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Tripadvisor",
    icon: tripadvisor,
    iconBg: "#000",
    date: "Feb 2021 - Sep 2022",
    points: [
      "Collaborated with UX Designers and Product Managers to ship features on the Vacation Rental vertical.",
      "Worked with ‘Lithium’, Tripadvisor's in house SSR framework built on React with GraphQL as the querying language.",
      "Led bug hunting and resilience testing sessions on children platforms of Tripadvisor such as Holiday Lettings and Flipkey.",
      "Prepared reports and participated in monthly product strategy & review meetings.",
      "Mentored juniors for performance and productivity.",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Yogami.Fit",
    icon: yogami,
    iconBg: "#000",
    date: "Aug 2019 - Jan 2021",
    points: [
      "Architected, developed, and deployed several iterations of the cross platform mobile app using React Native.",
      "Built multiple features on the React web frontend. Also planned and executed its migration to Next.js & TypeScript.",
      "Integrated & streamlined user analytics to monitor product usage and user journey.",
      "Oversaw web & mobile deployment pipelines, shipped bugfixes, and refactored codebases.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Whatfix",
    icon: whatfix,
    iconBg: "#000",
    date: "Mar 2018 - Jul 2019",
    points: [
      "Designed and deployed a PWA as proof of concept to supplant an existing product.",
      "Reviewed the web frontend for accessibility & UX concerns and spearheaded changes.",
      "Wrote unit and integration tests for porting the Flask backend from Python 2 to 3.",
      "Delivered multiple features across the stack.",
    ],
  },
];

const projects = [
  {
    name: "Threads Clone",
    description:
      "Essential functionalities clone of Meta's social media platform. Create and comment on threads, create or join communities, search for threads or users, customize profile, and receive activities notifications.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "orange-text-gradient",
      },
    ],
    image: threadsClone,
    repoLink: "#",
    liveLink: "#",
  },
  {
    name: "Dribbble Clone",
    description:
      "Essential functionalities clone of Dribbble. CRUD functionality for projects which are then displayed on your portfolio. Filter and Browse other users' portfolios and projects. Receive project recommendations.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Grafbase",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "orange-text-gradient",
      },
    ],
    image: dribbleClone,
    repoLink: "#",
    liveLink: "#",
  },
  {
    name: "Dall-E Clone",
    description:
      "Image generation tool powered by Open AI. Genrate photos with text phrases or click 'Suprise Me' to choose a random prompt. Share generated images on the public 'Community Showcase' page.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "orange-text-gradient",
      },
    ],
    image: dalleClone,
    repoLink: "#",
    liveLink: "#",
  },
  {
    name: "Web3 Kickstarer",
    description:
      "Crowdfunding paltform except it's on the Ethereum blockchain. View all fundraising campaigns on the chain. Create your own campaign or donate ETH to one of the existing ones.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Thirdweb",
        color: "orange-text-gradient",
      },
    ],
    image: kickstarter,
    repoLink: "#",
    liveLink: "#",
  },
  {
    name: "3DT Shirts",
    description:
      "Customize a 3D t-shirt model. Choose a color and upload your own logo or texture. Or use text prompts to generate logos and textures with the integrated AI tool. Download after finishing customization.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Three.js",
        color: "orange-text-gradient",
      },
    ],
    image: shirts3d,
    repoLink: "#",
    liveLink: "#",
  },
  {
    name: "Job Huntsman",
    description:
      "A mobile app that fetches developer jobs from leading platforms and displays them with search and pagination functionalities. Performant, intuitive, and built with an elegant UI/UX.",
    tags: [
      {
        name: "ReactNative",
        color: "blue-text-gradient",
      },
      {
        name: "RapidAPI",
        color: "green-text-gradient",
      },
      {
        name: "Expo",
        color: "orange-text-gradient",
      },
    ],
    image: jobHuntsman,
    repoLink: "#",
    liveLink: "#",
  },
];

export { services, technologies, experiences, projects };
