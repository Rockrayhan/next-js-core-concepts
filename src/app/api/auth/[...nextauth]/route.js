import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

// Define users array before using it in the authorize function
const users = [
  {
    id: 1,
    name: "abc",
    email: "abc@gmail.com",
    type : "admin",
    password: "123456789", // Add password for the example to work
  },
  {
    id: 2,
    name: "kashem",
    email: "kashem@gmail.com",
    type : "user",
    password: "123456789", // Add password for the example to work
  },
  {
    id: 3,
    name: "kulsum",
    email: "kulsum@gmail.com",
    type : "user",
    password: "123456789", // Add password for the example to work
  },
];

export const authOptions = {
  secret: "2xIo6xQn6OFifrif1pi5rYftnyvpyss5CwZxbyk18N0=",
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60 ,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "text",
          required: true,
          placeholder: "Your Email",
        },
        password: {
          label: "Password",
          type: "text",
          required: true,
          placeholder: "Your Password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        if (!credentials) {
          return null;
        }

        if (email) {
          const currentUser = users.find((user) => user.email === email);
          console.log(currentUser); // This should now log the correct user

          if (currentUser) {
            if (currentUser.password === password) {
              return currentUser;
            }
          }
        }
        return null; // Return null if user is not found or password doesn't match
      },
    }),
     GoogleProvider({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
  })
  ],

  callbacks : {

    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.type = user.type
      }
      return token
    },

    async session({ session, token }) {
      session.user.type = token.type
      return session ;
    },
  }




};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };