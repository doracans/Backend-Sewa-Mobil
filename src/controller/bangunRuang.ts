import { Request, Response } from "express";

const volumeTabung = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const t: number = Number(request.body.t)
        const luas = phi*r*r*t
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

const LPTabung = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const t: number = Number(request.body.t)
        const volume = 2*phi*r*(r+t)
        return response.status(200)
        .json({
            status: true,
             r,
             volume
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

const volumeKubus = (request: Request, response: Response) => {
    try {
        const s: number = Number(request.body.s)
        const volume = s*s*s
        return response.status(200)
        .json({
            status: true,
             s,
             volume
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

const LPKubus = (request: Request, response: Response) => {
    try {
        const p: number = Number(request.body.p)
        const l: number = Number(request.body.l)
        const t: number = Number(request.body.t)
        const LP = 2*((p*l)+(p*t)+(l*t)) 
        return response.status(200)
        .json({
            status: true,
             p,
             l,
             t,
            LP
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

const volumeBalok = (request: Request, response: Response) => {
    try {
        const p: number = Number(request.body.p)
        const l: number = Number(request.body.l)
        const t: number = Number(request.body.t)
        const volume = p*l*t
        return response.status(200)
        .json({
            status: true,
             p,
             l,
             t,
            volume
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

const LPBalok = (request: Request, response: Response) => {
    try {
        const p: number = Number(request.body.p)
        const l: number = Number(request.body.l)
        const t: number = Number(request.body.t)
        const LP = 2*((p*l)+(p*t)+(l*t)) 
        return response.status(200)
        .json({
            status: true,
             p,
             l,
             t,
            LP
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

const volumeKerucut = (request: Request, response: Response) => {
    try {
        const phi= Math.PI
        const r: number = Number(request.body.r)
        const t: number = Number(request.body.t)
        const volume = 0.33*r*r*phi
        return response.status(200)
        .json({
            status: true,
             phi,
             r,
             t,
            volume
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

const LPKerucut = (request: Request, response: Response) => {
    try {
        const phi= Math.PI
        const r: number = Number(request.body.r)
        const t: number = Number(request.body.t)
        const s: number = Number(request.body.s)
        const volume = (phi*r*s)+(phi*r*r)
        return response.status(200)
        .json({
            status: true,
             phi,
             r,
             t,
            volume
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

export {volumeBalok, volumeKerucut,volumeTabung,volumeKubus, LPBalok, LPKerucut, LPKubus,LPTabung}