import React from 'react'
import Heading from './Heading';
import Cards from './Cards';

const data = [
    {
        id: 0,
        title: "Single page portfolio",
        desc: "Welcome to my portfolio,showcasing my skills and experince as a web developer with expertise in React,Nextjs and Tailwind css",
        img: "/project_01.png",
        tags: ["HTML", "Typescript", "Nextj", "Tailwind CSS"],
    },
    {
        id: 1,
        title: "Clone Panacloud website",
        desc: "Secure cloud storage for indivisuals and Teams.access,and share files effortlessly.Scaleable and reliable solutions.",
        img: "/project_02.png",
        tags: ["HTML", "CSS", "Typescipt"],
    },
    {
        id: 2,
        title: "Static Interactive Resume",
        desc: "A typescript-based interactive resume build with HTML and CSS,allowing user to showcase their skills dynamically.",
        img: "/project_03.png",
        tags: ["HTML", "CSS", "Node", "Typescript"],
    },
];

const Projects = () => {
    return (
        <div id='Projects' className='container pt-32'>
            <Heading title='My projects' />
            <div className='grid gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
                {data.map((el) => (<Cards
                    key={el.id}
                    title={el.title}
                    desc={el.desc}
                    img={el.img}
                    tags={el.tags}
                />))}
            </div>

        </div>
    )
}

export default Projects
