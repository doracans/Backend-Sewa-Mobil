import express from "express"
import { LPBalok, LPKerucut, LPKubus, LPTabung, volumeBalok, volumeKerucut, volumeKubus, volumeTabung } from "../controller/bangunRuang"
const app = express()
/**allow to read a body */
app.use(express.json())
app.post(`/tabung/volume`, volumeTabung)
app.post(`/tabung/LP`, LPTabung)
app.post(`/kubus/volume`, volumeKubus)
app.post(`/kubus/LP`, LPKubus)
app.post(`/balok/volume`, volumeBalok)
app.post(`/balok/LP`, LPBalok)
app.post(`/kerucut/volume`, volumeKerucut)
app.post(`/kerucut/LP`, LPKerucut)
export default app