import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";


export class ListUserReceiveComplimentController{
    async handle(request: Request, response: Response){

        const { user_id } = request

        const listUserReceiveComplimentService = new ListUserSendComplimentsService

        const compliments = await listUserReceiveComplimentService.execute(user_id)

        return response.json(compliments)
    }
}