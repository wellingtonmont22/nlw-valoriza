import { NextFunction, Request, Response } from "express";

import { verify } from "jsonwebtoken"

interface IPayload{
    sub: string
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    
    const authToken = request.headers.authorization

    if(!authToken){
        response.status(401).end()
    }

    const [, token] = authToken.split(" ")

    try {

        const { sub } =  verify(token, "f20cbb1df5e31d70038e3539d5af30e6") as IPayload
        
        request.user_id = sub

        return next()

    } catch (err) {
        return response.status(401).end()
    }


}