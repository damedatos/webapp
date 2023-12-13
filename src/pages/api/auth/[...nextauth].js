import { MongoDBAdapter } from "@auth/mongodb-adapter"
import { MongoClient } from "mongodb"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Auth0Provider from "next-auth/providers/auth0"

let client = new MongoClient(process.env.MONGODB_URI);
let clientPromise = client.connect();

export default NextAuth({
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
  }
})