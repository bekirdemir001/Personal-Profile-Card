import React, { useEffect, useState } from "react"
import ProfileCard from "./components/ProfileCard";

const baseUrl = "https://randomuser.me/api/?results=20"

function App() {
  const [users, setUsers] = useState(null);

  const getUserData = async(url) => {
    await fetch(url)
    .then((response) => response.json())
    .then((data) => setUsers(data.results))
    .catch((error) => console.log("Error: ", error))
  }

  useEffect(() => {
    getUserData(baseUrl)
  }, [])

  return(
    <div className="container">
      <p>We are a private organization that contributes to the protection of nature.</p>
      <h1>Our Members</h1>
      <div className="containerCard">
        {
          users ? (
            users.map((user) => (
              <ProfileCard key={user.id.value} user={user}/>
            ))
          ) : (
            <p>Loading...</p>
          )
        }
      </div>
      <p>We would like to thank our members for their contributions.</p>
    </div>
  )
}

export default App