import {
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiMongodb,
    SiTailwindcss,
    SiBootstrap,
    SiCss3,
    SiGithub,
    SiHtml5,
    SiMarkdown,
    SiStrapi,
    SiTypescript,
} from 'react-icons/si'

export const technologies = [
    {
        id: 1,
        link: 'https://www.javascript.com/',
        title: 'Javascript',
        icon: (
            <SiJavascript className="hover:scale-110 transform duration-200 " />
        ),
    },
    {
        id: 2,
        link: 'https://reactjs.org/',
        title: 'ReactJS',
        icon: <SiReact className="hover:scale-110 transform duration-200" />,
    },
    {
        id: 3,
        link: 'https://reactnative.dev/',
        title: 'React Native',
        icon: <SiReact className="hover:scale-110 transform duration-200" />,
    },
    {
        id: 4,
        link: 'https://nextjs.org/',
        title: 'NextJS',
        icon: (
            <SiNextdotjs className="hover:scale-110 transform duration-200" />
        ),
    },
    {
        id: 5,
        link: 'https://expressjs.com/',
        title: 'ExpressJS',
        icon: (
            <SiNodedotjs className="hover:scale-110 transform duration-200" />
        ),
    },
    {
        id: 6,
        link: 'https://www.mongodb.com/',
        title: 'MongoDB',
        icon: <SiMongodb className="hover:scale-110 transform duration-200" />,
    },
    {
        id: 7,
        link: 'https://tailwindcss.com/',
        title: 'TailwindCSS',
        icon: (
            <SiTailwindcss className="hover:scale-110 transform duration-200" />
        ),
    },
    {
        id: 8,
        link: 'https://getbootstrap.com/',
        title: 'BootStrap',
        icon: (
            <SiBootstrap className="hover:scale-110 transform duration-200" />
        ),
    },
    {
        id: 9,
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        title: 'CSS',
        icon: <SiCss3 className="hover:scale-110 transform duration-200" />,
    },
    {
        id: 10,
        link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
        title: 'HTML5',
        icon: <SiHtml5 className="hover:scale-110 transform duration-200" />,
    },
    {
        id: 11,
        link: 'https://www.markdownguide.org/',
        title: 'Markdown',
        icon: <SiMarkdown className="hover:scale-110 transform duration-200" />,
    },
    {
        id: 12,
        link: 'https://github.com/',
        title: 'Github',
        icon: <SiGithub className="hover:scale-110 transform duration-200" />,
    },
    {
        id: 13,
        link: 'https://strapi.io/',
        title: 'Strapi',
        icon: <SiStrapi className="hover:scale-110 transform duration-200" />,
    },
]
