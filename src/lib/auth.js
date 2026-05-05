// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// const client = new MongoClient(process.env.MONGODB_URI);
// const db = client.db("qurbani-hat");

// export const auth = betterAuth({
//   database: mongodbAdapter(db, {
//     client
//   }),
//   emailAndPassword: {
//     enabled: true
//   },
//   socialProviders: {
//         google: { 
//             clientId: process.env.GOOGLE_CLIENT_ID ,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET ,
//         }, 
//     },
// });

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

// connect once (important for serverless)
const clientPromise = client.connect();

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL, // 🔥 MUST
  secret: process.env.BETTER_AUTH_SECRET, // 🔥 MUST

  database: mongodbAdapter(clientPromise, {
    databaseName: "qurbani-hat",
  }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});