import { Field, ID } from "type-graphql"
import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from "typeorm"
import { Zoo } from "./Zoo"

@Entity()
export class User {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Field()
    @Column({nullable: false})
    firstName: string

    @Field()
    @Column({nullable: false})
    lastName: string

    @Field()
    @Column({nullable: false})
    email: string

    @Field()
    @Column({type: 'uuid', nullable: true})
    zooId?: string

    @Field()
    @Column()
    age: number

    @Field()
    @Column({ default: () => 'CURRENT_TIMESTAMP', nullable: false })
    createdAt: Date

    @Field()
    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: false })
    updatedAt: Date

}
