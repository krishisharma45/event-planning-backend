import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {FamilyEntity} from "./family.entity";
import {EventEntity} from "./event.entity";

@Entity({name: 'response'})
export class ResponseEntity {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public familyId: string;

    @Column()
    public eventId: string;

    @Column({nullable: true})
    public response: boolean;

    @Column({nullable: true, default: Date.now()})
    public responseDate: Date;

    @Column({nullable: true})
    public attendingMemberCount: number;

    @ManyToOne(() => FamilyEntity)
    @JoinColumn({ name: "familyId" })
    public Family: FamilyEntity;

    @ManyToOne(() => EventEntity)
    @JoinColumn({ name: "eventId" })
    public Event: EventEntity;
}