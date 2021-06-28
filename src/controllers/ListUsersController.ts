import { Request, Response } from "express";
import { ListUsersService } from "../services/ListUsersService";

export class ListUsersController{
    
    async handle(request: Request, response: Response){

        const listUsersServive = new ListUsersService

        const users = await listUsersServive.execute()

        return response.json(users)
    }

}