import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm'
import { Comment } from './Comment';
import { User } from './User';

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column({nullable: false,length: 150})
    name: string;

    @Column('text', {default: null})
    image: string;

    @Column('text', {default: null})
    body: string;

    @ManyToOne(type => User, user => user.posts)
    user: User;

    @OneToMany(type => Comment, comment => comment.post)
    comments: Comment[];
}