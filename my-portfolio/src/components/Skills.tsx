import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container-p-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
          <h2 className='text-4xl md:text-5xl'>Tecnology I work with</h2>
          <p className='text-grey-500 pt-2'>
            I have a solid foundation in web development,specializing in HTML,CSS and Javascript.My experience iextends to using frameworks lie React and Nextjs to create dynamic and user-friendly applications.I also profficient in Tailwind CSS for efficient styling and design with a passion of learning,stay updated on the latest technologies to inhance my skills set and contribute effectively to projects. 
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
            </div>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">Node.js</h2>  
            </div>
          </div>
          </div>
           

      </div>
      
    </div>
  )
}

export default Skills
