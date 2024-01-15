import { NextFunction, Request, Response } from "express"
import Joi from "joi"
let schema = Joi.object({

    s: Joi.number().required().min(1),
    r: Joi.number().required().min(1),
    t: Joi.number().required().min(1),
}) 


let validateLPKR = (request: Request, response: Response, next: NextFunction) => {
     let {error} = schema.validate(request.body)
     
     if(error){
        return response.status(400).json({
            message: error.details
        })
     }
     next()
}

export {validateLPKR}