import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';

import data from './data'
import MembersList from './components/MemberCard'
import Form from './components/Form'

const Entry = styled.div`
display:flex;
justify-content: space-around;
flex-wrap:wrap;
`
const FormStyle = styled.div`
width:100%;
display:flex;
justify-content: space-around;
`

function App() {

  const [members, setMembers] = useState([])

  useEffect(() => {
    setMembers(data)
  }, [])

  const addTeamMate = mate => {
    const newMate = setMembers([...members, mate])
  }

  return (
    <div className="App">
      <FormStyle>
        <Form addTeamMate={addTeamMate} />
      </FormStyle>
      <Entry>
        {members.map(member => {
          return <MembersList key={member.id} info={member} />
        })}
      </Entry>
    </div>
  );
}

export default App; 