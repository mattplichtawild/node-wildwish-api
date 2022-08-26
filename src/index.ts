// import { AppDataSource } from "./data-source"
// import { User } from "./entity/User"

import "reflect-metadata";
// import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import  connectToDatabase from "./db";
import { AnimalResolver } from "./resolvers/AnimalResolver";
import { getDatasource } from "./db";
import { User } from "./entity/User";
import { Animal } from "./entity/Animal";

async function main() {
    // createConnection is deprecated but comes with the starter repo
    // const connection = await createConnection()
    await connectToDatabase();
    const schema = await buildSchema({
        resolvers: [AnimalResolver],
        validate: true,
        nullableByDefault: true
    });
    
    const dataSource = getDatasource();
    // const users = await dataSource.manager.find(User);
    // if (users !== null) {dataSource.manager.remove(users)}
    // console.log("Loaded users: ", users);
    
    // const animals = await dataSource.manager.find(Animal);
    // console.log("Loaded animals: ", animals);

    const server = new ApolloServer({ schema });
    await server.listen(4000);
    console.log("Server has started on port 4000");
}
main();

// AppDataSource.initialize().then(async () => {

//     // console.log("Inserting a new user into the database...")
//     // const user = new User()
//     // user.firstName = "Timber"
//     // user.lastName = "Saw"
//     // user.age = 25
//     // await AppDataSource.manager.save(user)
//     // console.log("Saved a new user with id: " + user.id)

//     console.log("Loading users from the database...")
//     const users = await AppDataSource.manager.find(User)
//     console.log("Loaded users: ", users)

//     console.log("Here you can setup and run express / fastify / any other framework.")

// }).catch(error => console.log(error))
