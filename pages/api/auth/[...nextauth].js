import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

// import EmailProvider from 'next-auth/providers/email'

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
    // EmailProvider({
    // server: process.env.EMAIL_SERVER,
    // from: process.env.EMAIL_FROM
    //}),
  ]
})
