import express from "express"
import { kelilingLingkaran, kelilingPP, kelilingPersegi, luasLingkaran, luasPP, luasPersegi, luasSegitiga } from "../controller/bangunDatar"
const app = express()
/**allow to read a body */
app.use(express.json())
app.post(`/lingkaran/luas`, luasLingkaran)
app.post(`/lingkaran/keliling`, kelilingLingkaran)
app.post(`/persegi/keliling`, kelilingPersegi)
app.post(`/persegi/luas`, luasPersegi)
app.post(`/PP/keliling`, kelilingPP)
app.post(`/pp/luas`, luasPP)
app.post(`/segitiga/luas`, luasSegitiga)
export default app