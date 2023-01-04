import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

export default function LogoutButton() {
  const { logout } = useAuth0()

  return (
    <div className="vh-100  d-flex justify-content-center align-items-center">
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
    </div>
  )
};
