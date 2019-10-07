import React from 'react'
import ProfileData from './json/data'

function Education() {
  return (
    <div className="row"  style={{marginTop:"30px"}} >
        <div className="col-12 col-md-12">
            <h3 className="text-info">Education</h3>
        </div>
        {ProfileData.education.map((education, indexeducation)=>
            <div class="col-12 col-md-12" key={'education_'+indexeducation}>
                <hr class="col-11" />
                <div class="row">
                    <div class="col-12 col-md-6">
                        <h5>{education.name}</h5>
                        <p class="text-secondary">
                            {education.startDate} - {education.endDate}
                        </p>
                    </div>
                    <div class="col-12 col-md-6">
                        <ul >
                            {education.skill.map((skill, indexSkill)=>
                                <li key={'_skill_'+indexSkill}>
                                        {skill}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
}

export default Education;