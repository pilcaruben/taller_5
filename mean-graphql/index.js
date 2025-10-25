// import express from "express";
// import { graphqlHTTP } from "express-graphql";
// import mongoose from "mongoose";
// import schema from "./schema.js";

// const app = express();

// // Conecta Mongo ANTES del middleware de /graphql
// await mongoose.connect("mongodb://localhost:27017/mean_graphql");
// console.log("Mongo listo");

// // GraphQL
// app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

// app.listen(3000, () => console.log("/graphql en http://localhost:3000/graphql"));
