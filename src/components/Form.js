import React, { useState, useEffect } from 'react'

const Form = (props) => {
  const [member, setMember] = useState({
    name: '',
    email: '',
    role: ''
  })

  useEffect(() => {
    return setMember(props.memberToEdit);
  }, [props.memberToEdit])

  const handleChanges = e => {
    setMember({ ...member, [e.target.name]: e.target.value })
  }

  const submitHandler = e => {
    e.preventDefault()
    props.setTeam([...props.team, member]);
    setMember({ name: '', email: '', role: '' })
  }

  return (
    <div>
      <form onSubmit={event => submitHandler(event)}>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChanges} id="name" name="name" value={member.name} type="text" placeholder="Name"></input>

        <label htmlFor="email">Email: </label>
        <input onChange={handleChanges} id="email" name="email" value={member.email} type="text" placeholder="Email"></input>

        <label htmlFor="role">Role:</label>
        <input onChange={handleChanges} id="role" name="role" value={member.role} type="text" placeholder="Role"></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Form 