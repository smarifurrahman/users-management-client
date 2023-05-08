import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error))
  }, [])


  // console.log(users);
  return (
    <>
      <h1>User Management System</h1>
      <p>Number of users: {users.length}</p>
      {
        users.map(user => <p key={user.id}>{user.id}. {user.name} : {user.email}</p>)
      }
    </>
  )
}

export default App
