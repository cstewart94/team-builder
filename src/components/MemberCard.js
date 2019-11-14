import React from "react";
import styled from 'styled-components'

const MemberCard = styled.div`
background:GAINSBORO;
border-radius: 5px 50px;
margin: 1%;
padding: 0.5% 1%;
width: 20%;
`
const Title = styled.h1`
color:red;
`
const Info = styled.p`

`

const MembersList = props => {
  return (
    <MemberCard>
      <Title>{props.info.name}</Title>
      <div>
        <Info>{props.info.house}</Info>
        <Info>{props.info.blood}</Info>
        <Info>Patronus: {props.info.patronus}</Info>
      </div>
    </MemberCard>
  );
};

export default MembersList; 