import { ObjectType, Field, ID } from "type-graphql";
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity('wishes')
export class Wish extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Field()
    @Column({type: 'uuid', nullable: false})
    animalId: string

    @Field()
    @Column({type: 'uuid', nullable: false})
    enrichmentItemId: string

    @Field()
    @Column({nullable: false, type: 'real'})
    fundAmount: number

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
