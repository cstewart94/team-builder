import React, { useState } from 'react';
import './App.css';

import Form from './components/Form'

function App() {

  const [team, setTeam] = useState([])
  const [memberToEdit, setMemberToEdit] = useState({ name: '', email: '', role: '' })

  const editMember = (memberToAdd) => {
    setMemberToEdit(memberToAdd);
    console.log(memberToAdd);
  }

  return (
    <div className="App">
      {team.map((element, index) => {
        return (

          <div>
            <p>{element.name}</p>
            <p>{element.email}</p>
            <p>{element.role}</p>
            <button onClick={() => editMember(element)}>Edit</button>
          </div>
        );
      })}
      <Form team={team} setTeam={setTeam} memberToEdit={memberToEdit} />
    </div>
  )
}

export default App; 