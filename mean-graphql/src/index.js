import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import mongoose from "mongoose";
import schema from "./schema.js";

const app = express();

// Conectar a MongoDB
mongoose.connect("mongodb://localhost:27017/mean_graphql")
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.error("Error al conectar a Mongo:", err));

// Schema mínimo
// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// Resolvers mínimos
const root = {
  hello: () => "world"
};

// Endpoint GraphQL
app.use("/graphql", graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}));

app.listen(3000, () => console.log("/graphql en http://localhost:3000/graphql"));