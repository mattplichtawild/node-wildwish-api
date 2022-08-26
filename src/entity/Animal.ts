import { Field, ID, ObjectType } from "type-graphql"
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, UpdateDateColumn, ManyToOne } from "typeorm"
import { Zoo } from "./Zoo"

@ObjectType()
@Entity('animals')
export class Animal extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Field()
    @Column({type: 'uuid', nullable: true})
    zooId?: string

    @Field()
    @Column({ nullable: false })
    name: string

    @Field()
    @Column({ nullable: false })
    species: string

    @Field()
    @Column({ nullable: true })
    bio?: string

    @Field(() => Zoo)
    @ManyToOne(() => Zoo, {nullable: true})
    zoo?: Zoo

    @Field()
    @Column({ default: () => 'CURRENT_TIMESTAMP', nullable: false })
    createdAt: Date

    @Field()
    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: false })
    updatedAt: Date

}
