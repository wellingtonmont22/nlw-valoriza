import { getCustomRepository } from "typeorm";
import { ComplimentseRepositories } from "../repositories/ComplimentseRepositories";


export class ListUserReceiveComplimentsService{
    async execute(user_id: string){
        const complimentsRepository = getCustomRepository(ComplimentseRepositories)

        const compliments = await complimentsRepository.find({
            where: {
                user_receiver: user_id
            },
        
            relations: ["userSender", "userReceive", "tag"]
            })

        return compliments

    }
}