import { Request, Response } from "express";

const luasLingkaran = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const luas = phi*r*r
        return response.status(200)
        .json({
            status: true,
             r,
             luas
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

const kelilingLingkaran = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const keliling = phi* 2 *r
        return response.status(200)
        .json({
            status: true,
             r,
             keliling
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

const kelilingPersegi = (request: Request, response: Response) => {
    try {
        const sisi: number = Number(request.body.sisi)
        const keliling =  4*sisi
        return response.status(200)
        .json({
            status: true,
             sisi,
             keliling
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

const luasPersegi = (request: Request, response: Response) => {
    try {
        const sisi: number = Number(request.body.sisi)
        const luas =  sisi*sisi
        return response.status(200)
        .json({
            status: true,
             sisi,
            luas
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

const kelilingPP = (request: Request, response: Response) => {
    try {
        const panjang: number = Number(request.body.panjang)
        const lebar: number = Number(request.body.lebar)
        const keliling =  2*(panjang+lebar)
        return response.status(200)
        .json({
            status: true,
             panjang,
             lebar,
             keliling
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

const luasPP = (request: Request, response: Response) => {
    try {
        const panjang: number = Number(request.body.panjang)
        const lebar: number = Number(request.body.lebar)
        const keliling = panjang*lebar
        return response.status(200)
        .json({
            status: true,
             panjang,
             lebar,
             keliling
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

const luasSegitiga = (request: Request, response: Response) => {
    try {
        const alas: number = Number(request.body.alas)
        const tinggi: number = Number(request.body.tinggi)
        const luas = 0.5*alas*tinggi
        return response.status(200)
        .json({
            status: true,
             alas,
             tinggi,
             luas
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}


export {luasLingkaran, kelilingLingkaran, kelilingPersegi, luasPersegi, luasPP, kelilingPP, luasSegitiga}