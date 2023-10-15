import React, { useState } from 'react'
import '../../styles/section/Skill.css'
import { useDataContext } from '../../Provider/DataProvider';
import ProgressClass from '../subcomponent/ProgressClass'


const Skills = () => {


  let data = useDataContext();
  let listofskills = data.skill;

  return (
    <section id="skills" className="skills section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Skills</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row skills-content">

          {Object.keys(listofskills).map((key, index) => {
            return (
              <div className="col-lg-6">
                <ProgressClass skillname={key} percentage={listofskills[key]} />
              </div>
            );
          })}

        </div>

      </div>
    </section>
  )
}

export default Skills