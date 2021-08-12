import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {FamilyEntity} from "./family.entity";

@Entity({name: 'guest'})
export class GuestEntity {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public familyId: string;

    @Column()
    public firstName: string;

    @Column()
    public lastName: boolean;

    @ManyToOne(() => FamilyEntity)
    @JoinColumn({name: "familyId"})
    public Family: FamilyEntity;
}