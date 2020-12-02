import {Entity, PrimaryColumn,PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { Post } from './Post';

@Entity()
export class Subject {
    @PrimaryColumn()
    name: string

    @Column()
    descritpion: string;

    @OneToMany(type => Post, post => post.subject)
    posts: Post[];
}