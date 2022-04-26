import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const ExperienceDetail = ({ title, proficiency }) => (
  <article className='d-flex'>
    <BsFillPatchCheckFill className='experience__icon mt-2' />
    <div className='ps-2 w-100 d-flex flex-column justify-content-center align-items-center'>
      <h4>{title}</h4>
      <small className='text-lighter ps-2'>{proficiency}</small>
    </div>
  </article>
);

const Experience = () => {
  return (
    <section id='experience' className='pt-5'>
      <h5 className='pt-5'>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <ExperienceDetail title="HTML, CSS" proficiency="Advanced" />
            <ExperienceDetail title="JavaScript" proficiency="Intermediate" />
            <ExperienceDetail title="Bootstrap" proficiency="Intermediate" />
            <ExperienceDetail title="Tailwind" proficiency="Basics" />
            <ExperienceDetail title="React" proficiency="Intermediate" />
            <ExperienceDetail title="Flutter" proficiency="Basics" />
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <ExperienceDetail title="Solidity" proficiency="Intermediate" />
            <ExperienceDetail title="PHP Laravel" proficiency="Intermediate" />
            <ExperienceDetail title="Python Django" proficiency="Intermediate" />
            <ExperienceDetail title="Python Flask" proficiency="Intermediate" />
            <ExperienceDetail title="SQL" proficiency="Intermediate" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience