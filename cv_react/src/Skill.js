import React from 'react'
import ProfileData from './json/data'

function Skill() {
  return (
    <div className="row bg-light"  style={{marginTop:"30px"}} >
        <div className="col-12 col-md-12">
            <h3 className="text-info">Skill</h3>
        </div>
        <hr className="col-11" />
        {ProfileData.skill.map((skill)=>
            <div className="col-12 col-md-6">
                <h6>
                    {skill.name}
                </h6>
                <div className="progress">
                    <div 
                        className="progress-bar bg-info" 
                        role="progressbar" 
                        style={{width: skill.value+"%"}} 
                        aria-valuenow={skill.value} 
                        aria-valuemin={skill.value} 
                        aria-valuemax="100"
                    >
                        {skill.value}%
                    </div>
                </div>
            </div>
        )}
    </div>
  );
}

export default Skill;