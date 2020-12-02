import "reflect-metadata";
import {createConnection} from "typeorm";
import { Post } from "./entity/Post";
import {User} from "./entity/User";
import {factory} from "../ConfigLog4j"
import {Logger} from "typescript-logging";
import { Comment } from "./entity/Comment";
import {connect, getUserRepository} from './database/Connection'
import { UserRepository } from "./database/repository/UserRepository";
import app from './app'

const LOGGER: Logger = factory.getLogger("controller.index");
const PORT: number = parseInt(process.env.port) || 8080;

app.listen(PORT, () => {
    connect().then(() =>
        LOGGER.info(`Express is listening on port: ${PORT}`)
    )
})

// const find = async function() {
//     let repo: UserRepository = getUserRepository();
//     const user = new User();
//     user.login = 'TimberSaw'
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await repo.createAndSave(user);
//     const users: User[] = await repo.allUsers();
//     console.log(users);
// }

// connect().then(() => {
//     find();
// });


// //connection pool to mysql
// createConnection().then(async connection => {
//     LOGGER.info("mysql database conneciton success: " + connection.isConnected);

//     //test posts
//     const post1 = new Post();
//     post1.name = 'Post1';
//     const post2 = new Post();
//     post2.name = 'Post2';
    
//     //test comment
//     const comment = new Comment();
//     comment.body = 'Fake post 1';
//     comment.post = post1;

//     //test user
//     const user = new User();
//     user.login = 'TimberSaw'
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     user.posts = [post1, post2];
//     user.comments = [comment];

//     //Save user
//     await connection.manager.save(user);

//     //Retrieve blank user
//     const users = await connection.manager.find(User);
//     LOGGER.info(JSON.stringify(users, null, 4));
//     //Retrieve user with relations
//     let users2 = await connection.getRepository(User).find({relations: ["posts", "comments"]}); 
//     LOGGER.info(JSON.stringify(users2, null, 4));

// }).catch(error => LOGGER.fatal(JSON.stringify(error, null, 4)));
