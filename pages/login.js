import { useRouter } from 'next/router'
import { useAuth0 } from '@auth0/auth0-react'

export default function LoginPage() {
  const router = useRouter()
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <button onClick={() => loginWithRedirect()}>
        Sign in
      </button>
    </div>
  )
}
