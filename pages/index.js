import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import TheNavbar from '../components/TheNavbar'
import TheCard from '../components/TheCard'

export default function Home() {
  const router = useRouter()
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <p>Loading...</p>
  }
  if (status === 'unauthenticated') {
    router.push('/login')
  }

  return (
    <>
      <TheNavbar />
      {// session ? (<div>
        // <h1>{session.user.name}</h1>
        // <h1>{session.user.email}</h1>
        // <img src={session.user.image} alt="" />
        //</div>) : (
        // <p>Esquyeletom</p>)
      }
      <TheCard />
    </>
  )
}
