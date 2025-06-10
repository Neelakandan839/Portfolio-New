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
  display: true,
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
    name: "X",
    icon: "x",
    link: "",
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
  title: `About - ${person.name}`,
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
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
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
  title: `Photo gallery – ${person.name}`,
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
