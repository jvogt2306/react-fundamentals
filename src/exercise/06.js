// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInputRef = React.useRef()

  const [error, setError] = React.useState(null)
  const [firstname, setFirstname] = React.useState('')
  const [username, setUsername] = React.useState('')

  const handleSubmit = e => {
    //disable post request after (submit)
    e.preventDefault()
    // Select usernameInput from event elements array:
    //const username = e.target.elements[0].value

    // Select usernameInput from event by element object (id or className):
    //const username = e.target.elements.usernameInput.value

    // Select usernameInput from by Ref
    //const username = usernameInputRef.current.value

    onSubmitUsername(username)
  }

  const handleUsernameChange = event => {
    const {value} = event.target
    setUsername(value)
    const isLowerCase = value === value.toLowerCase()
    setError(isLowerCase ? null : 'Username must be lower case')
  }

  const handleFirstnameChange = event => {
    const {value} = event.target
    setFirstname(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstnameInput">LowerCaseName:</label>
        <input
          id="firstnameInput"
          type="text"
          onChange={handleFirstnameChange}
          value={firstname}
        />
      </div>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          ref={usernameInputRef}
          id="usernameInput"
          type="text"
          onChange={handleUsernameChange}
        />
      </div>
      <div style={{color: 'red'}}>{error}</div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

// Basic Forms
// http://localhost:3000/isolated/exercise/06.js
