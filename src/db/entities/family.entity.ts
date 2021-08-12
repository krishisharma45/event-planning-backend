import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'family'})
export class FamilyEntity {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public familyName: string;

    @Column()
    public memberCount: number;

    @Column()
    public address: string;

    @Column({nullable: true})
    public email: string;

    @Column({nullable: true})
    public relation: string;

    @Column({nullable: true})
    public associatedParty: string;
}
