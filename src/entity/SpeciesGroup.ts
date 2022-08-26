import { ObjectType, Field, ID, Int } from "type-graphql";
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from "typeorm";


@ObjectType()
@Entity()
export class SpeciesGroup extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Field()
    @Column()
    name: string

    @Field()
    @Column({ default: () => 'CURRENT_TIMESTAMP', nullable: false })
    createdAt: Date

    @Field()
    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: false })
    updatedAt: Date

}
