import { ObjectType, Field, ID, Int } from "type-graphql";
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column,UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity('donations')
export class Donation extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Field()
    @Column({type: 'uuid', nullable: false})
    userId: string

    @Field()
    @Column({type: 'uuid', nullable: false})
    wishId: string

    @Field()
    @Column({nullable: false, type: 'real'})
    amount: number

    @Field()
    @Column({ default: () => 'CURRENT_TIMESTAMP', nullable: false })
    createdAt: Date

    @Field()
    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: false })
    updatedAt: Date
}
