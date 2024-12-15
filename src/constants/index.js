export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Skills',
    href: '#skills',
  },
  {
    id: 4,
    name: 'Work',
    href: '#work',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Easybar - Marketplace for Rebars',
    desc: 'Easybar serves as a marketplace that allows buyers to design and place orders for iron bars, while suppliers receive and print these orders for their automated machines.',
    subdesc:
      'Built as a unique Software-as-a-Service platform with React, Bootstrap, TypeScript, Konva.js, and Django, EasyBar streamlines iron order preparation for manufacturers, ensuring precision and efficiency.',
    href: 'https://app.easybar.co.il/',
    texture: 'textures/project/easybar.png',
    logo: '/assets/logos/easybar-logo.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Redux',
        path: 'assets/langs/redux.png',
      },
      {
        id: 3,
        name: 'BootstrapCSS',
        path: 'assets/langs/bootstrap.png',
      },
      {
        id: 4,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 5,
        name: 'Python Django',
        path: '/assets/langs/django.svg',
      },
      {
        id: 6,
        name: 'PostrgreSQL',
        path: '/assets/langs/postgres.png',
      },
    ],
  },
  {
    title: 'LFGO - Web3/Token Management Platform',
    desc: 'An innovative Web3 platform designed to simplify token creation and management. It enables users to build and launch custom tokens, trade them in a marketplace, and perform actions like locking, unlocking, and transferring tokens, delivering a seamless experience for both creators and traders.',
    subdesc:
      'With a focus on efficiency, LFGO leverages cutting-edge technologies like Next.js, Golang with Gin, MySQL, Sockets, and Solidity to deliver a seamless Web3 experience, streamlining token creation, management, and trading processes.',
    href: 'https://www.lfgo.us/',
    texture: '/textures/project/lfgoo.png',
    logo: '/assets/logos/lfgo-white.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/langs/next.svg',
      },
      {
        id: 2,
        name: 'BootstrapCSS',
        path: 'assets/langs/bootstrap.png',
      },
      {
        id: 3,
        name: 'Redux',
        path: 'assets/langs/redux.png',
      },
      {
        id: 4,
        name: 'Solidity',
        path: '/assets/langs/solidity.png',
      },
      {
        id: 5,
        name: 'Golang',
        path: '/assets/langs/golang.png',
      },
      {
        id: 6,
        name: 'Aws',
        path: '/assets/langs/aws.png',
      },
      {
        id: 7,
        name: 'Docker',
        path: '/assets/langs/docker.png',
      },
      {
        id: 8,
        name: 'MySql',
        path: '/assets/langs/mysql.png',
      },
    ],
  },
  // {
  //   title: 'Sunfox Solar - Real-Time Google Docs Clone',
  //   desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
  //   subdesc:
  //     'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
  //   href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
  //   texture: '/textures/project/sunfox.png',
  //   logo: '/assets/project-logo2.png',
  //   logoStyle: {
  //     backgroundColor: '#13202F',
  //     border: '0.2px solid #17293E',
  //     boxShadow: '0px 0px 60px 0px #2F6DB54D',
  //   },
  //   spotlight: '/assets/spotlight2.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
  {
    title: 'Finance - Personal Finance Management App',
    desc: 'Take control of your money and plan for a better future. Finance helps you track your spending, set budgets, and grow your savings effortlessly—all in one intuitive app.',
    subdesc:
      'Built with Next.js, TypeScript, Prisma, PostgreSQL, React Query, Framer Motion, shadcn/ui, and Redis, Finance ensures a smooth and secure personal finance management experience, tailored to meet the needs of modern users.',
    href: 'https://personal-finance-app-hazel.vercel.app/login',
    texture: '/textures/project/finance.png',
    logo: '/assets/logos/finance.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/langs/next.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
      {
        id: 5,
        name: 'PostgreSQL',
        path: '/assets/langs/postgres.png',
      },
      {
        id: 6,
        name: 'Prisma',
        path: '/assets/langs/prisma.png',
      },
      {
        id: 7,
        name: 'Redis',
        path: '/assets/langs/redis.png',
      },
    ],
  },
  {
    title: 'Knaban - Intuitive Kanban Board App',
    desc: 'Kanban is a powerful Software-as-a-Service application designed to simplify task management and enhance productivity. With features like intuitive drag-and-drop Kanban boards, real-time collaboration, and progress tracking, Kanban helps teams and individuals stay organized and achieve their goals effortlessly.',
    subdesc:
      'Built with React, Next.js, MongoDB, Prisma, and Framer Motion, Kanban combines modern technologies with a user-first design. Its intuitive Kanban board helps you streamline workflows, boost productivity, and collaborate effortlessly, making it ideal for personal or professional task management.',
    href: 'https://kanban-task-management-kappa.vercel.app/',
    texture: '/textures/project/kanban.png',
    logo: '/assets/logos/kanban.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/langs/next.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
      {
        id: 4,
        name: 'MySQL',
        path: '/assets/langs/mysql.png',
      },
      {
        id: 5,
        name: 'Prisma',
        path: '/assets/langs/prisma.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Arithmiks',
    pos: 'Senior Software Engineer',
    duration: '2022 - Present',
    title:
      'At Arithmiks, I developed and delivered custom software solutions for startups, working across frontend, full stack, and blockchain technologies. I managed project workflows, coordinated feature planning, and ensured high-quality results through collaboration and technical leadership.',
    icon: '/assets/arithmiks.svg',
    subExperiences: [
      {
        id: 1,
        name: 'LFGO',
        pos: 'Lead Software Engineer',
        duration: '2024 - Present',
        title:
          'At LFGO, I developed and integrated both frontend and backend solutions, including blockchain functionalities. I played a key role in managing project tickets, planning features, and ensuring high-quality code through PR reviews, while also mentoring junior developers.',
        icon: '/assets/logos/lfgo-green.png',
      },
      // {
      //   id: 2,
      //   name: 'Sunfox Solar',
      //   pos: 'Web Developer',
      //   duration: '2023 - 2024',
      //   title: 'Collaborated on frontend development and design iteration through Figma.',
      //   icon: '/assets/sunfox-solar.svg',
      // },
      {
        id: 2,
        name: 'Easybar',
        pos: 'Software Engineer',
        duration: '2022 - 2024',
        title:
          'At EasyBar, I contributed from the early stages of development, primarily focusing on frontend application development and implementing mathematical algorithms. I also worked on CI/CD pipelines and deployments, ensuring smooth integration and delivery of updates to the platform.',
        icon: '/assets/logos/easybar-logo.png',
      },
    ],
  },
  {
    id: 2,
    name: 'Fiverr',
    pos: 'Web Developer',
    duration: '2021 - 2022',
    title:
      'At fiverr, I developed custom dashboards and web applications for clients, focusing on delivering scalable and user-friendly solutions.',
    icon: '/assets/fiv.png',
  },
];
