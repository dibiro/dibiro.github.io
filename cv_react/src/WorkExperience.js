import React from 'react'
import ProfileData from './json/data'

function WorkExperience() {
  return (
    <div className="row bg-light"  style={{marginTop:"30px"}} >
        <div className="col-12 col-md-12">
            <h3 className="text-info">Work Experience</h3>
        </div>
        {ProfileData.workExperience.map((workExperience, indexWorkExperience)=>
            <div class="col-12 col-md-12" key={'workExperience_'+indexWorkExperience}>
                <hr class="col-11" />
                <div class="row">
                    <div class="col-12 col-md-6">
                        <h5>{workExperience.name}</h5>
                        <p class="text-secondary">
                            {workExperience.startDate} - {workExperience.endDate}
                        </p>
                    </div>
                    <div class="col-12 col-md-6">
                        <ul>
                            {workExperience.skill.map((skill, indexSkill)=>
                                <li key={'_skill_'+indexSkill}>
                                    {skill}
                                </li>
                            )}
                        </ul>
                    </div>
                    <div class="col-12 col-md-12">
                        <p>{workExperience.description}</p>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
}

export default WorkExperience;