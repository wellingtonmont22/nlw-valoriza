import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAutheticateService{
    email: string,
    password: string
}

export class AuthenticateUserService{
    async execute({email, password}:IAutheticateService){
        const usersRepositories = getCustomRepository(UsersRepositories)

        const user = await usersRepositories.findOne({email})

        if(!user){
            throw new Error("Email/Password incorrect")
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email/Password incorrect")
        }

        const token = sign({email: user.email}, "f20cbb1df5e31d70038e3539d5af30e6", {
            subject: user.id,
            expiresIn: "1d"
        })

        return token
    }
}