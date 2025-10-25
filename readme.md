npm install express express-graphql graphql


npm install @graphql-tools/schema @graphql-tools/utils graphql-tools


npm install mongoose

npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node


npm install rimraf
npm install nodemon -D
# taller_5


# {
#   saludar(name: "Ruben")
# }

# {
#   empleados {
#     nombre
#     sueldo
#   }
# }


# mutation {
#   createEmpleado(input: {nombre: "Carlos", sueldo: 1500}) {
#     _id
#     nombre
#     sueldo
#   }
# }

# {
#   departamentos {
#     _id
#     nombre
#     slogan
#   }
# }

# {
#   departamento(nombre: "Sistemas") {
#     _id
#     nombre
#     slogan
#   }
# }


mutation {
  createDepartamento(input: {
    nombre: "lenguaje "
    slogan: "lenguaje"
  }) {
    _id
    nombre
    slogan
  }
}

