import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'song'})
export class SongEntity {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public songName: string;

    @Column()
    public artistName: number;

    @Column({default: Date.now()})
    public requestDate: string;
}