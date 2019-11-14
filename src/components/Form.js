import React, { useState } from 'react'

const Form = props => {
  const [member, setMember] = useState({
    name: '',
    id: '',
    role: ''
  })

  const handleChanges = e => {
    setMember({ ...member, [e.target.name]: e.target.value })
  }

  const submitHandler = e => {
    e.preventDefault()
    const newMate = {
      ...member,
      id: Date.now(),
    }
    props.addTeamMate(newMate)
    setMember({ name: "", email: "", role: "" });
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChanges} id="name" name="name" value={member.name} type="text" placeholder="Name"></input>

        <label htmlFor="house">House: </label>
        <input onChange={handleChanges} id="house" name="house" value={member.house} type="text" placeholder="House"></input>

        <label htmlFor="blood">Blood:</label>
        <input onChange={handleChanges} id="blood" name="blood" value={member.blood} type="text" placeholder="Blood"></input>

        <label htmlFor="patronus">Patronus:</label>
        <input onChange={handleChanges} id="patronus" name="patronus" value={member.patronus} type="text" placeholder="Patronus"></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Form 