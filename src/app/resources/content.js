import { Logo } from "@/once-ui/components";
import { title } from "process";

const person = {
  firstName: "Neelakandan",
  lastName: "C",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Web Developer",
  avatar: "/images/avatar.jpeg",
  email: "neelakandan839@gmail.com",
  location: "India/Hyderabad", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Tamil", "Telugu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Neelakandan839",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/neelakandan-c-36445921b",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/avatar.jpeg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building seamless bridges between design and development</>,
  featured: {
    display: false,
    title: (
      <>
        Recent project: <strong className="ml-4">Concierge</strong>
      </>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      {/* <Logo icon={false} style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/> */}
      Hi, I&apos;m <b>Neelakandan</b> — a passionate Full Stack Software
      Engineer with 3+ years of experience delivering scalable and immersive
      solutions across Web, Mobile, 3D, AI, and Blockchain. I work with
      cutting-edge technologies, specializing in Web 3.0 development—including
      interactive 3D/360° scenes, VR/XR experiences, and smart contracts on
      Ethereum. <br />
      I'm also proficient in React Native for building cross-platform mobile
      apps and have hands-on experience developing AI-powered tools that enhance
      customer engagement and lead generation, especially in the real estate
      domain.
      <br />
      <br />
      I'm self-motivated, quick to adapt, and passionate about creating
      innovative, user-centric digital experiences that push boundaries.
      {/* <br />I collaborate with teams to build production-grade applications. By
      night, I experiment with side projects, explore new technologies, and push
      the boundaries of what&apos;s possible on the web. */}
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About Me`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/neelakandan",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a highly driven Full Stack Software Engineer with over 3+ years of
        hands-on experience in building scalable and immersive digital solutions
        across various technologies—Web, Mobile, 3D, AI, and Blockchain.
        <br />
        <br />
        My expertise includes Web 3.0 development, where I've worked on creating
        interactive 3D/360° scenes, building VR/XR experiences, and developing
        smart contracts on the Ethereum blockchain. I also specialize in
        building cross-platform mobile apps using React Native. In the real
        estate space, I've led the design and integration of AI-powered tools
        that help with customer engagement and lead generation.
        <br />
        <br />
        I'm self-motivated, a fast learner, and deeply passionate about building
        innovative, user-focused digital experiences. I enjoy working in
        fast-paced environments and take pride in delivering high-quality,
        future-ready solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "URBANRISE",
        timeframe: "2022 - Present",
        role: "Senior Software Development Engineer",
        achievements: [
          {
            title: "🔷  AI-Powered Tools",
            description: [
              <>
                Built Aira, an AI review assistant that fetches Google reviews
                and posts AI-generated replies automatically, streamlining
                business review management.
              </>,
              <>
                Developed Concierge, an AI chatbot for real estate, capable of
                handling customer queries, capturing leads, and showcasing 3D
                floor plans of real estate projects.
              </>,
              <>
                Implemented a dynamic dashboard for Concierge to manage chat
                insights, campaigns, subscriptions, and agent assignments.
              </>,
            ],
          },
          {
            title: "🔷  3D & VR/XR Web Development",
            description: [
              <>
                Created immersive 3D 360° scenes and integrated 360° video
                elements into web applications using WebGL, Three.js, and
                Babylon.js.
              </>,
              <>
                Developed and deployed VR/XR experiences that significantly
                improved user engagement and visual storytelling.
              </>,
            ],
          },
          {
            title: "🔷  Blockchain Integration",
            description: [
              <>
                Implemented blockchain features using Ethereum, Solidity,
                Truffle, and Web3.js.
              </>,
              <>
                Designed and managed smart contracts, and successfully minted
                NFTs for real estate-based digital assets.
              </>,
            ],
          },
          {
            title: "🔷 Mobile App Development",
            description: [
              <>
                Designed and developed cross-platform mobile applications using
                React Native.
              </>,
              <>
                Collaborated closely with UI/UX designers to ensure a smooth,
                intuitive mobile experience.
              </>,
              <>
                Integrated advanced features that enhanced app performance and
                overall usability.
              </>,
            ],
          },
          {
            title: "🔷 Real Estate Platform Development",
            description: [
              <>
                Built and maintained real estate websites with location-based
                services, interactive maps, and real-time data.
              </>,
              <>
                Developed user-friendly interfaces for property listings,
                searches, and filtering.
              </>,
            ],
          },
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Full Stack Web Development",
        description: (
          <>GUVI Geeks Network Pvt. Ltd, IIT Madras Research Park.</>
        ),
      },
      {
        name: "Mechanical Engineering",
        description: <>Nachimuthu Polytechnic College.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "HTML",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/assets/html.svg",
            alt: "html",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "CSS",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/assets/css.svg",
            alt: "css",
            width: 5,
            height: 5,
          },
        ],
      },
      ,
      {
        title: "Bootstrap",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/assets/bootstrap.svg",
            alt: "bootstrap",
            width: 5,
            height: 5,
          },
        ],
      },
      ,
      {
        title: "Javascript",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/assets/javascript.svg",
            alt: "Javascript",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Typescript",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/assets/typescript.svg",
            alt: "Typescript",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Python",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/assets/python.svg",
            alt: "Python",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "React.js",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/assets/react.svg",
            alt: "react",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Next.js",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/assets/nextjs.svg",
            alt: "nextjs",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Material UI",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/assets/mui.svg",
            alt: "mui",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Redux.js",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/assets/redux.svg",
            alt: "redux",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "React Native",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/assets/react.svg",
            alt: "reactNative",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Babylon.js",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/assets/babylonjs.svg",
            alt: "babylonjs",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Three.js",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/assets/threejs.svg",
            alt: "threejs",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Node.js",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/assets/nodejs.svg",
            alt: "nodejs",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Express.js",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/assets/express.svg",
            alt: "express",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "MongoDB",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/assets/mongodb.svg",
            alt: "mongodb",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "MySQL",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/assets/mysql.svg",
            alt: "mysql",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Solidity",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/assets/solidity.svg",
            alt: "Solidity",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Web 3.0",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/assets/web3.png",
            alt: "web3",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Truffle",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/assets/truffle.png",
            alt: "truffle",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "AWS",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/assets/aws.svg",
            alt: "aws",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Git",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/assets/git.svg",
            alt: "git",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Github",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/assets/github.svg",
            alt: "github",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Gitlab",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/assets/gitlab.svg",
            alt: "truffle",
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: "Postman",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/assets/postman.svg",
            alt: "postman",
            width: 5,
            height: 5,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects - ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery - ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
