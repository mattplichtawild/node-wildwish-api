import { ObjectType, Field, ID, Int } from "type-graphql";
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column,UpdateDateColumn, ManyToOne } from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity('zoos')
export class Zoo extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Field()
    @Column({nullable: false})
    name: string

    @Field()
    @Column({nullable: false})
    shippingAdress: string

    @Field()
    @Column({nullable: false})
    city: string

    @Field()
    @Column({nullable: false})
    state: string

    @Field()
    @Column({nullable: false})
    postalCode: string

    @Field()
    @Column({ default: () => 'CURRENT_TIMESTAMP', nullable: false })
    createdAt: Date

    @Field()
    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: false })
    updatedAt: Date
}
