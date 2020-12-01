import {Entity, PrimaryColumn,PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Subject {
    @PrimaryColumn()
    name: string

    @Column()
    descritpion: string;


}