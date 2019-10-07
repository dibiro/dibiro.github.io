import React from 'react';
import Person from './Person';
import Skill from './Skill';
import Languages from './Languages';
import WorkExperience from './WorkExperience';
import Education from './Education';
import PersonalReferences from './PersonalReferences';

function App() {
  return (
    <div>
      <Person />
      <Skill />
      <Languages />
      <WorkExperience />
      <Education />
      <PersonalReferences />
    </div>
  );
}

export default App;
