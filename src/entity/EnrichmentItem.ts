import { ObjectType, Field, ID, Int } from "type-graphql";
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from "typeorm";
import { Animal } from "./Animal";


@ObjectType()
@Entity()
export class EnrichmentItem extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Field()
    @Column()
    name: string

    @Field()
    @Column()
    description: string

    @Field()
    @Column()
    url: string

    @Field()
    @Column()
    price: number

    @Field()
    @Column({ default: () => 'CURRENT_TIMESTAMP', nullable: false })
    createdAt: Date

    @Field()
    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: false })
    updatedAt: Date

}
