import { getCustomRepository } from "typeorm";
import { ComplimentseRepositories } from "../repositories/ComplimentseRepositories";


export class ListUserSendComplimentsService{
    async execute(user_id: string){
        const complimentsRepository = getCustomRepository(ComplimentseRepositories)

        const compliments = await complimentsRepository.find({ where: { user_sender: user_id } })

        return compliments

    }
}