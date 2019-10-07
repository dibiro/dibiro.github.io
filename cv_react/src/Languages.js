import React from 'react'
import ProfileData from './json/data'

function Languages() {
  return (
    <div className="row"  style={{marginTop:"30px"}} >
        <div className="col-12 col-md-12">
            <h3 className="text-info">Languages</h3>
        </div>
        <hr className="col-11" />
        {ProfileData.languages.map((languages)=>
            <div className="col-12 col-md-6">
                <h6>
                    {languages.name}
                </h6>
                <div className="progress">
                    <div className="progress-bar bg-info" role="progressbar" style={{width: languages.value+"%"}} aria-valuenow={languages.value} aria-valuemin={languages.value} aria-valuemax="100">{languages.valueText}</div>
                </div>
            </div>
        )}
    </div>
  );
}

export default Languages;