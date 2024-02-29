import { PrismaClient } from "@prisma/client";
import { Request,Response,response } from "express";
import md5 from "md5";
import { sign } from "jsonwebtoken";

/**create a function to create new event */
const prisma = new PrismaClient()

/**create a function to create new event body */
/**asychronous = fungsi yang berjalan secara paralel */
const createAdmin = async (request: Request, response: Response) => {
    try{
         /**read a request from body */
        const adminName = request.body.adminName
        const email     = request.body.email
        const password  = request.body.password

         //**insert tadmin table using prisma */
        const newData = await prisma.admin.create({
            data:{
                adminName: adminName,
                email: email,
                password: password
            }
        })
        return response
        .status(200)
            .json({
                status: true,
                message: `Admin has been created`,
                data: newData
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
/**create function to READ admin  */
const readAdmin = async (request: Request, response: Response) => {
    try{
        const page = Number(request.query.page) || 1;
        const quantity = Number(request.query.quantity) || 5;
        const keyword = request.query.keyword?.toString() || "";
        const dataAdmin = await prisma.admin.findMany({
            take: quantity, //mendefinisikan jumlah data yang diambil
            skip: (page - 1) * quantity,
            where: {
                OR: [

                    { adminName: { contains: keyword } }
                ]
            },
            orderBy: { adminName: "asc" }
        })

        return response
            .status(200)
            .json({
                status: true,
                message: `Car has been loaded`,
                data: dataAdmin
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
    // function for update admin
    const updateAdmin = async (request: Request, response: Response) => {
        try{
            // read adminID that sent from URL
            const adminID = Number(request.params.adminID)
            const adminName = request.body.adminName
            const email = request.body.email
            const password = md5(request.body.password)
            
            // patikan datanya sudah ada 
            const findAdmin = await prisma.admin.findFirst({
                where: { adminID: Number(adminID) }
            })

            if (!findAdmin) {
                return response.status(400)
                    .json({
                        status: false,
                        message: `Data admin not found`
                    })
            }

            const dataAdmin = await prisma.admin.update({
                where: { adminID: Number(adminID) },
                data: {
                    adminName: adminName || findAdmin.adminName,
                    email: email || findAdmin.email,
                    password: password || findAdmin.password
    
                }
            })
    
            return response.status(200)
            .json({
                status: true,
                message: `Admin has been updated`,
                data: dataAdmin
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

    // create a function to delete admin
    const deleteAdmin = async (request: Request, response: Response) => {
        try{
            // get userID from URL
            const adminID = request.params.adminID

            // patikan datanya sudah ada 
            const findAdmin = await prisma.admin.findFirst({
                where: {adminID: Number(adminID)}
            })

            if (!findAdmin) {
                return response.status(400)
                    .json({
                        status: false,
                        message: `Admin not found`
                    })
            }
            // eksekusi untuk delete user
            const dataAdmin = await prisma.admin.delete({
                where: { adminID: Number(adminID) }
            })
    
            return response.status(200)
                .json({
                    status: true,
                    message: `Data admin has been deleted`
                })
        }catch (error) {
            return response
                .status(500)
                .json({
                    status: false,
                    message: error
                })
        }
    }
    const login = async  (request: Request, response: Response) => {
        try{
            const email = request.body.email
            const password = md5(request.body.password)
            const admin = await prisma.admin.findFirst(
            {
                where: { email: email, password: password }
            }
        )
        if (admin) {
            const payload = admin
            const secretkey = 'mpuss'
            const token = sign(payload, secretkey)
            return response.status(200)
                .json({
                    status: true,
                    message: `Login success`,
                    token: token
                })

        }
        else {
            return response.status(200)
                .json({
                    status: false,
                    message: `Data admin not falid`
                })

        }
        } catch (error) {
            return response
                .status(500)
                .json({
                    status: false,
                    message: error
                })
    }
}

export {createAdmin, readAdmin, login, updateAdmin, deleteAdmin}