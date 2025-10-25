import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers.js";

const typeDefs = `
  type Empleado {
    _id: ID
    nombre: String!
    sueldo: Float
  }

  type Departamento {
    _id: ID
    nombre: String
    slogan: String
    empleados: [Empleado]
  }

  input EmpleadoInput {
    nombre: String!
    sueldo: Float
  }

  input DepartamentoInput {
    nombre: String!
    slogan: String
  }

  type Query {
    saludar(name: String!): String
    empleados: [Empleado]
    departamentoprueba(nombre: String!): String
    departamento(nombre: String!): Departamento
    departamentos: [Departamento!]!
  }

  type Mutation {
    createEmpleado(input: EmpleadoInput): Empleado
    createDepartamento(input: DepartamentoInput): Departamento
  }
`;

export default makeExecutableSchema({ typeDefs, resolvers });
