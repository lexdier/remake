import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import TheCard from '../components/TheCard'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function Home() {
  const router = useRouter()
  const { data: session, status } = useSession()

  const [user, setUser] = useState([]) //terminar

  useEffect(() => {
    axios.get('/api/users')
      .then(console.log)
  }, [])

  if (status === 'loading') {
    return <p>Loading...</p>
  }
  return (
    <>
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
