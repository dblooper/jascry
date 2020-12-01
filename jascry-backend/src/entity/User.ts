import { type } from 'os';
import {Entity, PrimaryColumn, Column, OneToMany} from 'typeorm'
import { Comment } from './Comment';
import { CommentResponse } from './CommentResponse';
import { Post } from './Post';

@Entity()
export class User {

    @PrimaryColumn()
    login: string;

    @Column({default: ''})
    firstName: string;

    @Column( {default: ''})
    lastName: string
    
    @Column({default: ''})
    password: string;

    @Column({default: ''})
    email: string;

    @Column({default: false})
    isActive: boolean;

    @Column({default: 0})
    age: number;

    @OneToMany(type => Post, post => post.user, {cascade: true})
    posts: Post[];

    @OneToMany(type => Comment, comment => comment.user, {cascade: true})
    comments: Comment[];

    @OneToMany(type => CommentResponse, commentResponse => commentResponse.user, {cascade: true})
    commentResponses: CommentResponse[];
}