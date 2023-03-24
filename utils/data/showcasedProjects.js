export const showcasedProjects = [
  {
    id: 1,
    img: '/images/dev-portfolio.png',
    docLink: '/dev-portfolio-site',
    title: 'Dev Portfolio',
    desc: 'This portfolio is built using Next.js and Tailwindcss. It also uses strapi on the backend for the documentaion/blog section of this app',
    tech: ['NextJs', 'ReactJS', 'TailwindCSS'],
    liveLink: 'https://www.alexmaldonado.dev',
    githubLink: 'https://github.com/AlexMNet/portfolio-nextjs',
  },
  {
    id: 2,
    img: '/images/plate-calculator.jpg',
    docLink: '/',
    title: 'Plate Weight',
    desc: 'A fullstack installable PWA built with Firebase, ReactJS, styled components and the ionic framework that calculates plates to put on a barbell.',
    tech: [
      'Typescript',
      'React',
      'Firebase',
      'Redux Toolkit',
      'Styled Components',
    ],
    liveLink: 'https://plate-weight-8d3ba.web.app/',
    githubLink: 'https://github.com/AlexMNet/plate-weight-pwa',
  },
  {
    id: 3,
    img: '/images/lms.png',
    docLink: '/',
    title: 'Learning Management System',
    desc: 'A Next.js Learning Management System built for Sandals Church. Contains Authentication, Redux-Toolkit, Redux-Persist and integrates a tracking API',
    tech: ['React', 'Redux-Persist', 'Redux Toolkit', 'Tailwindcss'],
    notification:
      'This is a live deployed app. This project can be showcased & discussed in a meeting.',
  },
]
