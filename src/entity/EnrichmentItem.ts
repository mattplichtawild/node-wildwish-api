import { ObjectType, Field, ID } from "type-graphql";
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity('enrichment_items')
export class EnrichmentItem extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Field()
    @Column({nullable: false})
    name: string

    @Field()
    @Column({nullable: false})
    description: string

    @Field()
    @Column({nullable: true})
    url: string

    @Field()
    @Column({nullable: true, type: 'real'})
    price: number

    @Field()
    @Column({ default: () => 'CURRENT_TIMESTAMP', nullable: false })
    createdAt: Date

    @Field()
    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: false })
    updatedAt: Date

}
