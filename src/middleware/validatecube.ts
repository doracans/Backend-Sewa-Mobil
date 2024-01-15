import { NextFunction, Request, Response } from "express"
import Joi from "joi"
/**creat validation schema */
let schema = Joi.object({
    panjang: Joi.number().required().min(1),
    lebar: Joi.number().required().min(1),
    tinggi: Joi.number().required().min(1)
    /**code di atas berfungsi memberikan  */
}) 

/**creat vaidation function */
let validatecube = (request: Request, response: Response, next: NextFunction) => {
     let {error} = schema.validate(request.body)
     /**untuk memvalidasi schema yang sudah dibuat  */
     if(error){
        return response.status(400).json({
            message: error.details
        })
     }
     next()
}

export {validatecube}
/**agar file lain dapat mengimport file ini maka perlu diexport terlebih dahulu */