import { 
    EntityRepository, Repository, getRepository 
} from "typeorm";

import * as util from 'util';
import { User } from "../../entity/User";
import {factory} from "../../../ConfigLog4j"

export type GenderType = "male" | "female";
export enum Gender {
    male = "male", female = "female"
}
@EntityRepository(User)
export class UserRepository extends Repository<User> {

    async createAndSave(user: User) {
        const retrievedUser = await this.findOne(user.login);
        if(retrievedUser !== undefined) {
            throw `Error. User: ${user.login} exists`;
        }
        const userToSave = new User();
        userToSave.login = user.login
        userToSave.firstName = user.firstName;
        userToSave.lastName = user.lastName;
        userToSave.age = user.age;
        await this.save(userToSave);
        return user;
    }

    async allUsers(): Promise<User[]> {
        let users = await this.find();
        return users;
    }

    static isuser(user: any): user is User {
        return typeof user === 'object'
            && typeof user.name === 'string'
            && typeof user.entered === 'number'
            && typeof user.grade === 'number'
            && UserRepository.isGender(user.gender);
    }
    static isuserUpdater(updater: any): boolean {
        let ret = true;
        if (typeof updater !== 'object') {
            throw new Error('isuserUpdater must get object');
        }
        if (typeof updater.name !== 'undefined') {
            if (typeof updater.name !== 'string') ret = false;
        }
        if (typeof updater.entered !== 'undefined') {
            if (typeof updater.entered !== 'number') ret = false;
        }
        if (typeof updater.grade !== 'undefined') {
            if (typeof updater.grade !== 'number') ret = false;
        }
        if (typeof updater.gender !== 'undefined') {
            if (!UserRepository.isGender(updater.gender)) ret = false;
        }
        return ret;
    }
    static isGender(gender: any): gender is Gender {
        return typeof gender === 'string'
            && (gender === 'male' || gender === 'female');
    }
}

export function normalizeNumber(
    num: number | string, errorIfNotNumber: string)
: number {
if (typeof num === 'undefined') {
throw new Error(`${errorIfNotNumber} -- ${num}`);
}
if (typeof num === 'number') return num;
let ret = parseInt(num);
if (isNaN(ret)) {
throw new Error(`${errorIfNotNumber} ${ret} -- ${num}`);
}
return ret!;
}