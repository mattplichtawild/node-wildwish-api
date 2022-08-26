import { ObjectType, Field, ID, Int } from "type-graphql";
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, ManyToMany } from "typeorm";
import { SpeciesGroup } from "./SpeciesGroup";


@ObjectType()
@Entity()
export class Species extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Field()
    @Column()
    commonName: string

    @Field()
    @Column()
    genus: string

    @Field()
    @Column()
    species: string

    @Field()
    @Column()
    subspecies: string

    @Field(() => [SpeciesGroup])
    @ManyToMany(() => SpeciesGroup)
    speciesGroups: SpeciesGroup[]

    @Field()
    @Column({ default: () => 'CURRENT_TIMESTAMP', nullable: false })
    createdAt: Date

    @Field()
    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: false })
    updatedAt: Date
    
}
