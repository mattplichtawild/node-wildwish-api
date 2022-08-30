import { Field, ID, ObjectType } from "type-graphql"
import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, BaseEntity } from "typeorm"
import { Zoo } from "./Zoo"

@ObjectType()
@Entity('users')
export class User extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string

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
    @Column({ default: () => 'CURRENT_TIMESTAMP', nullable: false })
    createdAt: Date

    @Field()
    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: false })
    updatedAt: Date

}
