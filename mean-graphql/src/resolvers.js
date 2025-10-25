import { empleados } from "./sample.js";
import Departamento from "./models/Departamento.js";

export const resolvers = {
    Query: {
        saludar: (_, { name }) => `Hola ${name}!`,
        empleados: () => empleados,

        departamento: async (_, { nombre }) => {
            return await Departamento.findOne({ nombre });
        },
        departamentos: async () => {
            return await Departamento.find();
        }
        
        // departamentos: async () => {
        //     // return await Departamento.find();
        //     return [{ _id: "1", nombre: "Sistemas", slogan: "Demo" }];
        // }
    },
    Mutation: {
        createEmpleado: (_, { input }) => {
            input._id = empleados.length + 1;
            empleados.push(input);
            return input;
        },
        // async createDepartamento(_, { input }) {
        //     const nuevo = new Departamento(input);
        //     await nuevo.save();
        //     return nuevo;
        // },
        createDepartamento: async (_, { input }) => {
            const nuevoDepto = new Departamento(input);
            await nuevoDepto.save();
            console.log("Nuevo departamento creado:", nuevoDepto);
            return nuevoDepto;
        },
    }
};
