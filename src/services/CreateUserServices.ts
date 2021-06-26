import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs"

interface IUserRequest{
    name: string,
    email: string,
    admin?: boolean
    password: string
}

export class CreateUserServices{
    async execute({name, email, admin, password}: IUserRequest){

        const usersRepositories = getCustomRepository(UsersRepositories)

        const userAlreadyExists = await usersRepositories.findOne({email})
        if(!email){
            throw new Error("Email incorrect")
        }

        if(userAlreadyExists){
            throw new Error("User already exists")
        }

        const passwordHash = await hash(password, 8)

        const user = usersRepositories.create({name, email, admin, password: passwordHash})

        await usersRepositories.save(user)

        return user
    }
}