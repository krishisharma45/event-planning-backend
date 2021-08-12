import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'event'})
export class EventEntity {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public eventName: string;

    @Column()
    public location: string;

    @Column({nullable: true})
    public venueName: string;

    @Column({nullable: true})
    public address: string;

    @Column({nullable: true})
    public eventStartTime: Date;

    @Column({nullable: true})
    public eventEndTime: Date;

    @Column({nullable: true})
    public associatedParty: string;
}