import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

export default function LoginPage() {
  const { status } = useSession()
  const router = useRouter()

  if (status === 'authenticated') {
    router.push('/')
  }


  return (
    <div>
      <button onClick={() => router.push('/api/auth/signin/github')}>
        Sign in with GitHub
      </button>
    </div>
  )
}
