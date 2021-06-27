import { getCustomRepository } from "typeorm";
import { ComplimentseRepositories } from "../repositories/ComplimentseRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest{
    tag_id: string,
    user_sender: string,
    user_receiver: string,
    message: string,
}

export class CreateComplimentService {
    async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest){
        const complimentsRepository = getCustomRepository(ComplimentseRepositories)
        const usersRepositories = getCustomRepository(UsersRepositories)

        if(user_sender === user_receiver){
            throw new Error("Incorrect user Receiver")
        }

        const userReceiverExists = await usersRepositories.findOne({ id :user_receiver })

        if(!userReceiverExists){
            throw new Error("User Receiver does not exists!")
        }

        const compliment = complimentsRepository.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        })

        await complimentsRepository.save(compliment)

        return compliment
    }
}