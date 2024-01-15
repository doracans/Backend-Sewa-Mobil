import { NextFunction, Request, Response } from "express"
import Joi from "joi"
/**creat validation schema */
let schema = Joi.object({
    r: Joi.number().required().min(1),
    t: Joi.number().required().min(1)
    /**code di atas berfungsi memberikan  */
}) 

/**creat vaidation function */
let validatetabung = (request: Request, response: Response, next: NextFunction) => {
     let {error} = schema.validate(request.body)
     /**untuk memvalidasi schema yang sudah dibuat  */
     if(error){
        return response.status(400).json({
            message: error.details
        })
     }
     next()
}

export {validatetabung}
/**agar file lain dapat mengimport file ini maka perlu diexport terlebih dahulu */