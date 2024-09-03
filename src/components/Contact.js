import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


const Contact = () => {
  // USE Auth0 Login Function
  const { isAuthenticated, user } = useAuth0();

  return (
    <div>
      <h1>Contact Us  </h1>
      <h4>User Details : </h4>
      {isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>Name -: {user.name}</h2>
          <h3>Email -: {user.email}</h3>
          <h3>nickname -: {user.nickname}</h3>

        </div>
      )}
    </div>
  )
}

export default Contact