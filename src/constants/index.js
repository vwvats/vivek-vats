import {
  frontend,
  mobile,
  backend,
  blockchain,
  typescript,
  nextjs,
  reactjs,
  redux,
  tailwind,
  mui,
  threejs,
  graphql,
  nodejs,
  mongodb,
  postgres,
  jest,
  storybook,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Next JS",
    icon: nextjs,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "GraphQL",
    icon: graphql,
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
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "Storybook",
    icon: storybook,
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
      "A clone with the essential functionalities of Meta's Threads. Create and comment on threads, create and join communities, search for threads/users, customize profile, and receive activities notification.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: threadsClone,
    repoLink: "https://gitlab.com/vivekvats/threads-clone",
    liveLink: "https://threads-clone-r2uq8cc2a-vwvats.vercel.app",
  },
  {
    name: "Dribbble Clone",
    description:
      "A Dribbble like web app that allows users CRUD functionalities for projects. Login using Google to add projects. Projects are displayed on profile & home. Browse and filter other user portfolios & projects.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Grafbase",
        color: "green-text-gradient",
      },
    ],
    image: dribbleClone,
    repoLink: "https://gitlab.com/vivekvats/dribble-clone",
    liveLink: "https://dribble-clone-r55s3wohv-vwvats.vercel.app",
  },
  {
    name: "Kickstarer 3.0",
    description:
      "Crowdfunding paltform except it's on the Ethereum blockchain. View all fundraising campaigns on the chain. Connect wallet to create your own campaign or donate ETH to one of the existing ones.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "Hardhat",
        color: "orange-text-gradient",
      },
    ],
    image: kickstarter,
    repoLink: "https://gitlab.com/vivekvats/web3-kickstarter",
    liveLink: "https://web3-kickstarter.vercel.app",
  },
  {
    name: "ThreeD Shirts",
    description:
      "Customize a 3D t-shirt model. Choose a color and upload your own logos and textures. Or use text prompts to generate logos and textures with the integrated AI tool. Download after customization.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "orange-text-gradient",
      },
    ],
    image: shirts3d,
    repoLink: "https://gitlab.com/vivekvats/3dt",
    liveLink: "https://3dt-git-main-vivekvats.vercel.app",
  },
  {
    name: "Dall-E Clone",
    description:
      "Image generation with text tool powered by AI. Genrate photos with text prompts or use 'Suprise Me' to choose a random one. Generated a cool one? Share it on the public 'Community Showcase' page.",
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
    repoLink: "https://gitlab.com/vivekvats/dalle-clone",
    liveLink: "",
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
    repoLink: "https://gitlab.com/vivekvats/job-huntsman",
    liveLink: "",
  },
];

export { services, technologies, experiences, projects };
