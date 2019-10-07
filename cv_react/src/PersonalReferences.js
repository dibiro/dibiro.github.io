import React from 'react'
import ProfileData from './json/data'

function PersonalReferences() {
  return (
    <div className="row  bg-light"  style={{marginTop:"30px"}} >
        <div className="col-12 col-md-12">
            <h3 className="text-info">Personal References</h3>
        </div>
        {ProfileData.personalReferences.map((personalReferences, indexpersonalReferences)=>
            <div class="col-12 col-md-12" key={'personalReferences_'+indexpersonalReferences}>
                <hr class="col-11" />
                <div class="row">
                    <div class="col-12 col-md-6">
                        <h5>{personalReferences.name}</h5>
                        <p class="text-secondary">
                            {personalReferences.description}
                        </p>
                    </div>
                    <div class="col-12 col-md-6">
                        <ul >
                            {personalReferences.contac.map((contac, indexcontac)=>
                                <li>
                                    <strong>
                                        {contac.name}: 
                                    </strong>
                                    <a href={contac.url} target='_blanck'>
                                        {contac.icon && 
                                            <i className={contac.icon}></i>
                                        }
                                        {contac.value}
                                    </a>
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

export default PersonalReferences;