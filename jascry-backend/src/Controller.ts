import {Request, Response} from 'express';
import {getUserRepository} from './database/Connection'
import { UserRepository } from './database/repository/UserRepository';
import { User } from './entity/User';
import {factory} from '../ConfigLog4j';
import {Logger} from "typescript-logging";
import Error from './ApiResponse';
import ApiResponse from './ApiResponse';

const LOGGER: Logger = factory.getLogger("controller.connection");

class Controller {    constructor() {}

    public getAllUsers(req: Request, res: Response) {
        const repository:UserRepository = getUserRepository();
        repository.allUsers().then((users) =>
            res.json(users)
        )
    }
    
    public addPost(req: Request, res: Response) {
        const repository:UserRepository = getUserRepository();
        let userToSave: User = new User();
        userToSave.login = req.body.login;
        userToSave.firstName = req.body.firstName;
        userToSave.lastName = req.body.lastName;
        userToSave.age = req.body.age;
        repository.createAndSave(userToSave).then((response) => {
            let apiResp: ApiResponse = new ApiResponse(0, JSON.stringify(response));
            res.json(apiResp)
        }).catch(err => {
            LOGGER.warn(err);
            let error: ApiResponse = new ApiResponse(1, err);
            res.json(error)
        })
        
    }
}
export {Controller}