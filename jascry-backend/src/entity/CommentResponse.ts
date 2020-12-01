import {Entity, PrimaryColumn,PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import { Comment } from './Comment';
import { User } from './User';

@Entity()
export class CommentResponse {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    body: string;

    @Column()
    likes: number;

    @Column()
    dislikes: number;

    @ManyToOne(type => Comment, comment => comment.commentResponses)
    comment: Comment;

    @ManyToOne(type => User, user => user.commentResponses)
    user: User;

}