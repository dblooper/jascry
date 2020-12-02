import {Request, Response} from 'express';
import { Controller } from './Controller';
class Routes {   
private controller: Controller;    
constructor() {
    this.controller = new Controller();
}   

public routes(app): void {
    app.route('/')
        .get((request: Request, response: Response) => {
            response.status(200)
                .send({
                    message: "Jascry API WORKS!"
                });
        });
        // following code is to handle http://localhost:3000/superHero request.
    app.route('/users')
        .get(this.controller.getAllUsers)
        .post(this.controller.addPost);        // following code is to handle http://localhost:3000/superHero/{superHeroId} request.
    // app.route('/superHero/:superHeroId')
    //     .get(this.controller.getSuperHeroById)
    //     .put(this.controller.updateSuperHero)
    //     .delete(this.controller.deleteSuperHero);    
    }
}export {Routes};