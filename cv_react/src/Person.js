import React from 'react'
import ProfilePictori from "./img/about/22.jpg"
import ProfileData from './json/data'

function Person() {
  return (
    <div className="row" style={{marginTop:"30px"}} >
        <div className="col-12 col-md-3">
            <img src={ProfilePictori} className="img-fluid" style={{marginTop:"45px;"}} alt="" />
        </div>
        <div className="col-12 col-md-9">
            <div className="wesley_tm_main_title_holder about">
                <h3 className="text-info">About Me</h3>
            </div>
            <div className="subtitle"><p>Full Stack Web Developer &amp; React Native Developer</p></div>
            <div className="definition">
                <p className="text-justify">Hi! My name is <strong>Leopoldo Montesinos</strong>. I'm backend developer with many experience, I like to speak about Django and technology; i want to know more about new technologies, frameworks and libraries.</p>
                <p className="text-justify">I grew up in Aragua, Venezuela. in 2017 I moved to Medellin, Colombia where I strengthened my knowledge on the web with react.js and started my path on mobile with React Native, later in 2018 I specialized in sap technologies but without leaving behind my passion for django react and in general for the development.</p>
            </div>
            <div className="about_short_contact_wrap">
                <ul>
                    {ProfileData.contac.map((contac)=>
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
  );
}

export default Person;