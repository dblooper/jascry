import { type } from "os";
import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
import { User } from "../entity/User";
import { UserRepository } from "./repository/UserRepository";
import {factory} from '../../ConfigLog4j';
import {Logger} from "typescript-logging";

const LOGGER: Logger = factory.getLogger("database.connection");
var _connection: Connection;

export async function connect() {
    try {
        _connection = await createConnection();
        if(connected()) {
            LOGGER.info("Connected to database!");
        }
    } catch(err) {
        console.log(err);
    }
}

export function connected() {
    return typeof _connection !== 'undefined';
}

export function getUserRepository(): UserRepository {
    return _connection.getCustomRepository(UserRepository);
}