import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Animal } from "../entity/Animal";

@Resolver()
export class AnimalResolver {
  @Query(() => String)
  hello() {
    return "roar";
  };

  @Mutation(() => Animal)
  async createAnimal(
      @Arg('name') name: string, 
      @Arg('species') species: string,
      @Arg('bio') bio: string
  ): Promise<Animal> {
    return Animal.save({ name, species, bio });
  };

  @Query(() => [Animal])
  async getAnimals(): Promise<Animal[]> {
    return Animal.find()
  };
};
