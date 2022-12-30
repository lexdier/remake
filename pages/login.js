import { useRouter } from 'next/router'
import { useAuth0 } from '@auth0/auth0-react'

export default function LoginPage() {
  const router = useRouter()
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="vh-100 bg-info  d-flex justify-content-center align-items-center">
      <button onClick={() => loginWithRedirect()}>
        Sign in
      </button>
    </div>
  )
}
