import "reflect-metadata";
import {createConnection} from "typeorm";
import { Post } from "./entity/Post";
import {User} from "./entity/User";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const post1 = new Post();
    post1.name = 'Post1';
    const post2 = new Post();
    post2.name = 'Post2';
    
    const user = new User();
    user.login = 'TimberSaw'
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    user.posts = [post1, post2];
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.login);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);
    let users2 = await connection.getRepository(User).find({relations: ["posts"]}); 
    console.log(JSON.stringify(users2))

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
