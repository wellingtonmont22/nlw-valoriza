import { Request, Response } from "express";
import { CreateUserServices } from "../services/CreateUserServices";


export class CreateUserController{
    async handle(request:Request, response:Response){
        const { name, email, admin } = request.body

        const createUserService = new CreateUserServices

        const user =  await createUserService.execute({ name, email, admin })

        return response.json(user)
    }
}