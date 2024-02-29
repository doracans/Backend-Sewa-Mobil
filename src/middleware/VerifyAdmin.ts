import { Request, Response } from "express"
import { NextFunction } from "express"
import { verify } from "jsonwebtoken"

const VerifyAdmin = async (request: Request, response: Response, next: NextFunction) => {
    try {
        //membaca data header request
        const header = request.headers.authorization
        //membaca data token yang dikirmkan 
        const token = header?.split(" ")[1] || ``
        const secretkey = 'mpuss'
        //proses verifikasi token
       verify(token, secretkey, error =>{
        if (error){
            return response.status(401).json
            ({
                status: false,
                massage: "unautorized"
            })
        }
        next()
       })
    } catch (error) {
        return response
            .status(500)
            .json({
                status: false,
                message: error
            })
    }
}

export{VerifyAdmin}