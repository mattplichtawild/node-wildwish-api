import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Animal } from './entity/Animal'
import { Zoo } from "./entity/Zoo"
import { Wish } from "./entity/Wish"
import { Donation } from "./entity/Donation"
import { EnrichmentItem } from "./entity/EnrichmentItem"
import { Species } from "./entity/Species"
import { SpeciesGroup } from "./entity/SpeciesGroup"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "wildwish_dev",
    synchronize: true,
    logging: false,
    entities: [User, Animal, Zoo, Wish, Donation, EnrichmentItem, Species, SpeciesGroup],
    migrations: [],
    subscribers: [],
})
