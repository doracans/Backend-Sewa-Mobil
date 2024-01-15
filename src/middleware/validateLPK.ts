import { NextFunction, Request, Response } from "express"
import Joi from "joi"
let schema = Joi.object({

    p: Joi.number().required().min(1),
    l: Joi.number().required().min(1),
    t: Joi.number().required().min(1),
}) 


let validateLPK = (request: Request, response: Response, next: NextFunction) => {
     let {error} = schema.validate(request.body)
     
     if(error){
        return response.status(400).json({
            message: error.details
        })
     }
     next()
}

export {validateLPK}
