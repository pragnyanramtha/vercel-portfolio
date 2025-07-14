import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Pragnyan Ramtha's Portfolio",
  description: "my resume templet ",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Pragnyan Ramtha`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        A <strong className="text-stone-100">Full Stack Software Developer</strong>,
         currently working on <strong className="text-stone-100"> Advanced Learning Algorithms</strong><br />
         building sustainable neural networks, deploying LLMs that scale 
        and crafting <br /> intelligent systems with knowledge-aware graph networks.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me training in <strong className="text-stone-100">Chess</strong><br />
refining my <strong className="text-stone-100">Mathematics</strong> skills, or experimenting with new <br />
<strong className="text-stone-100"> Linux Distros</strong> just for fun.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://docs.google.com/document/d/1d8oSDjTOOaikZbHVeMjCy5wc63829ghUcg1jON-zRek/edit?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `https://linktr.ee/pragnyanramtha`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a full stack developer and AI enthusiast driven by curiosity and a deep love for math and learning. 
  I work on advanced learning algorithms, graph neural networks, and decentralized platforms. 
  Most comfortable building in Python, JavaScript, and Linux environments — especially when there's a terminal involved. 
  Whether I'm debugging models, exploring abstract math, or trying out obscure Linux distros, I'm always chasing the "why" behind everything.`,
  aboutItems: [
    {label: 'Location', text: 'Hyderabad, TG', Icon: MapIcon},
    {label: 'Age', text: '17', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'AI, Math, Chess, Linux', Icon: SparklesIcon},
    {label: 'Study', text: 'VMC', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'COMING SOON', Icon: BuildingOffice2Icon},
  ],
};


/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Telugu',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Hindi',
        level: 8,
      },
    ],
  },
  {
    name: 'Machine learning Development',
    skills: [ 
      { 
        name: "Neural Networks",
        level: 9,
      },
      { 
        name: 'Data handling',
        level: 7,
      },
      { 
        name: 'Scikit learn',
        level: 8,
      },
    ],
  },
  {
    name: 'Software Development', 
    skills: [ 
      { 
        name: 'Python',
        level: 9,
      },
      {
        name: 'C',
        level: 7,
      },
      {
        name: 'Javascript',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend Development', 
    skills: [ 
      { 
        name: 'VanillaJS',
        level: 9,
      },
      { 
        name: 'Figma',
        level: 7,
      },
      { 
        name: 'React',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'COMING SOON',
    description: 'Gotta wait for it.',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image: porfolioImage1,
  },
  {
    title: 'Deep Research',
    description: 'A Dify plugin empowering LLMs with real-time web intelligence—enabling live search, snippet extraction, and factual responses.',
    url: 'https://github.com/pragnyanramtha/deepResearch',
    image: porfolioImage2,
  },
  {
    title: 'COMING SOON',
    description: 'Gotta wait for it.',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image: porfolioImage3,
  },
  {
    title: 'Synapse‑Graph',
    description: 'Graph-based sentence boundary detection using knowledge graphs from “War and Peace,” mixing GNNs with entropy-driven traversal.',
    url: 'https://github.com/pragnyanramtha/Synapse-Graph',
    image: porfolioImage4,
  },
  {
    title: 'COMING SOON',
    description: 'Gotta wait for it.',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image: porfolioImage5,
  },
  {
    title: 'COMING SOON',
    description: 'Gotta wait for it.',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image: porfolioImage6,
  },
  {
    title: 'COMING SOON',
    description: 'Gotta wait for it.',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image: porfolioImage7,
  },
  {
    title: 'Recipro',
    description: 'A decentralized social platform on the ICP blockchain built with Rust & JavaScript—focus on privacy, identity, and trust loops.',
    url: 'https://github.com/pragnyanramtha/recipro',
    image: porfolioImage8,
  },
  {
    title: 'COMING SOON',
    description: 'Gotta wait for it.',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image: porfolioImage9,
  },
  {
    title: 'blt (BLT Latent Transformer)',
    description: 'An experimental latent transformer built in Python—exploring novel architectures and embedding behaviors.',
    url: 'https://github.com/pragnyanramtha/blt',
    image: porfolioImage10,
  },
  {
    title: 'COMING SOON',
    description: 'Gotta wait for it.',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2025',
    location: 'VMC College',
    title: 'Intermediate (11th – 12th Grade)',
    content: (
      <p>
        Focused on MPC (Maths, Physics, Chemistry) with parallel preparation for JEE Advanced. 
        Spent significant time diving into advanced mathematics topics such as combinatorics, number theory, and inequalities — influenced by Olympiad-style problem solving. 
        Developed critical thinking, abstraction, and proof-based reasoning alongside a strong foundation in calculus and physics.
      </p>
    ),
  },
  {
    date: 'March 2023',
    location: 'High School',
    title: 'Secondary School Certificate (SSC)',
    content: (
      <p>
        Graduated with distinction and began exploring foundational concepts in logic, algebra, and discrete mathematics early on. 
        Regularly participated in problem-solving communities and engaged in Olympiad-style training programs that nurtured a deep interest in math beyond the standard syllabus.
      </p>
    ),
  },
];


export const experience: TimelineItem[] = [
  {
    date: 'March 2024 - Present',
    location: 'A decentralized social platform',
    title: 'Recipro',
    content: (
      <p>
        Building a decentralized social platform on the ICP blockchain, focused on privacy, identity integrity, and 
        trust-based interaction loops. Worked with technologies like Rust, JavaScript, Internet Identity, and Canister smart contracts. 
        Designed real-time data flows, off-chain message verification systems, and explored edge cases around digital identity decentralization.
      </p>
    ),
  },
  {
    date: 'March 2023 - February 2024',
    location: 'Graph Neural Network Research',
    title: 'blt (BLT Latent Transformer)',
    content: (
      <p>
        Designed an experimental latent transformer that combines structured embedding models with graph traversal techniques. 
        Focused on building scalable knowledge-aware systems capable of symbolic reasoning over noisy or incomplete data. 
        Worked extensively with Python, PyTorch, NumPy, and custom embedding structures. Introduced entropy-driven pruning to improve signal clarity in graph representation learning.
      </p>
    ),
  },
  {
    date: 'March 2022 - February 2023',
    location: 'Independent Math Research',
    title: 'Riemann Hypothesis Exploration',
    content: (
      <p>
        Engaged in self-directed research exploring the implications and structure behind the Riemann Hypothesis. 
        Studied deep analytic number theory, explored zeta zero distributions, and attempted various visualization techniques to interpret non-trivial zeros. 
        This phase honed my proof intuition, abstract thinking, and mathematical maturity far beyond standard curriculum exposure.
      </p>
    ),
  },
];


/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Albert Einstein',
      text: 'I have no special talents. I am only passionately curious. — A mindset Pragnyan embodies daily, constantly learning and building at the edge of what’s known.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg',
    },
    {
      name: 'Terry A. Davis',
      text: 'An idiot admires complexity. A genius admires simplicity. Pragnyan builds systems the TempleOS way — minimal, elegant, and full of soul.',
      image: 'https://user-images.githubusercontent.com/24392180/122981344-50e0bb00-d3a2-11eb-9132-2c0b4733457f.jpg',
    },
    {
      name: 'Archimedes of Syracuse',
      text: 'Mathematics reveals its secrets only to those who approach it with pure love, for its own beauty. Pragnyan’s work reflects that love — from AI to number theory.',
      image: 'https://3.imimg.com/data3/YX/CA/MY-6587879/archimedes-portrait-1000x1000.jpeg',
    },
  ],
};


/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Reach out to me via...',
  items: [
    {
      type: ContactType.Email,
      text: 'pragnyanramtha@gmail.com',
      href: 'pragnyanramtha@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Hyderabad, TG',
      href: 'https://www.google.ca/maps/@17.412281,78.2432355,11z?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      type: ContactType.Instagram,
      text: '@pragnyan_ramtha',
      href: 'https://www.instagram.com/pragnyanramtha/',
    },
    {
      type: ContactType.Github,
      text: 'pragnyanramtha',
      href: 'https://github.com/pragnyanramtha',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/pragnyanramtha'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/pragnyanramtha/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/pragnyanramtha/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://x.com/pragnyanramtha'},
];
