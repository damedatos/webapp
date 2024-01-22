import { MongoDBAdapter } from "@auth/mongodb-adapter"
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Auth0Provider from "next-auth/providers/auth0"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Auth0Provider({
      clientId: process.env.AUTH0_ID,
      clientSecret: process.env.AUTH0_SECRET
    })
  ],
  adapter: MongoDBAdapter(clientPromise),
  theme: {
    colorScheme: "light",
    logo: "https://i.imgur.com/uSG3DaK.png"
  },
  callbacks: {
    async session({ session, user }) {
      if (session?.user) {
        session.user.id = new ObjectId(user.id)
        session.user.iniciales = user.iniciales
      }
      return session
    }
  }
}

export default NextAuth(authOptions)