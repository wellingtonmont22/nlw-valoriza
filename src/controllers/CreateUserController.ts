import { Request, Response } from "express";
import { CreateUsersServices } from "../services/CreateUsersServices";


export class CreateUserController{
    async handle(request:Request, response:Response){
        const { name, email, admin } = request.body

        const createUserService = new CreateUsersServices

        const user =  await createUserService.execute({ name, email, admin })

        return response.json(user)
    }
}