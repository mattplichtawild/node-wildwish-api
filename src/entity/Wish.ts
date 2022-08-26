import { ObjectType, Field, ID, Int } from "type-graphql";
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, ManyToOne, ManyToMany } from "typeorm";
import { Animal } from "./Animal";
import { EnrichmentItem } from "./EnrichmentItem";


@ObjectType()
@Entity()
export class Wish extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Field()
    @Column({type: 'uuid', nullable: false})
    animalId: string

    @Field()
    @Column({type: 'uuid', nullable: false})
    enrichmentItemId: string

    @Field()
    @Column({nullable: false})
    fundAmount: number

    @Field()
    @ManyToOne(() => Animal, {nullable: false})
    animal: Animal

    @Field(() => EnrichmentItem)
    @ManyToOne(() => EnrichmentItem, {nullable: false})
    enrichmentItem: EnrichmentItem

    @Field()
    @Column({default: false, nullable: false})
    active: boolean

    @Field()
    @Column({ default: () => 'CURRENT_TIMESTAMP', nullable: false })
    createdAt: Date

    @Field()
    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: false })
    updatedAt: Date

}
