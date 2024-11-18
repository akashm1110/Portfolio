


import { skills } from "../constants";



const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Akash
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React.js,  Node.js, Express, PostgreSQL, HTML, CSS . I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications..

Demonstrated ability to manage and deliver projects efficiently, from initial planning and design to final
deployment and maintenance.
Committed to staying updated with the latest industry trends and technologies, continuously enhancing
skills to provide innovative solutions

        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <hr className='border-slate-200' />

           
    
    </section>
  );
};

export default About;