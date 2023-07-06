import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

import { connectToDB } from "@utils/database";

console.log({
  clientId: process.env.GOOGLE_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET
})

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  async session({ session }) {

  },

  async signIn({ profile }) {
    try {
      //serverless -> lambda -> dynamic
      await connectToDB()
      // check if user already exist


      // if not, create a new user
      
    } catch {

    }
  }
})

export { handler as GET, handler as POST }