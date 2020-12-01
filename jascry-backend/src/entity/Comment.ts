import {Entity, PrimaryColumn,PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm';
import { CommentResponse } from './CommentResponse';
import { Post } from './Post';
import { User } from './User';

@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    body: string;

    @Column()
    likes: number;

    @Column()
    dislikes: number;

    @ManyToOne(type => User, user => user.comments)
    user: User;

    @ManyToOne(type => Post, post => post.comments)
    post: Post;

    @OneToMany(type => CommentResponse, commentResponse => commentResponse.comment, {cascade: true})
    commentResponses: CommentResponse[];
}