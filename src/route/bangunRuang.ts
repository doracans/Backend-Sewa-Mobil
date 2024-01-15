import express from "express"
import { LPBalok, LPKerucut, LPKubus, LPTabung, volumeBalok, volumeKerucut, volumeKubus, volumeTabung } from "../controller/bangunRuang"
import { validatetabung } from "../middleware/validatetabung"
import { validateVK } from "../middleware/validateVK"
import { validateLPK } from "../middleware/validateLPK"
import { validateVB } from "../middleware/validateVB"
import { validateLPB } from "../middleware/validateLPB"
import { validateVKR } from "../middleware/validateVKR"
import { validateLPKR } from "../middleware/validateLPKR"
const app = express()
/**allow to read a body */
app.use(express.json())
app.post(`/tabung/volume`, validatetabung, volumeTabung)
app.post(`/tabung/LP`, validatetabung,LPTabung)
app.post(`/kubus/volume`, validateVK,volumeKubus)
app.post(`/kubus/LP`, validateLPK, LPKubus)
app.post(`/balok/volume`, validateVB,volumeBalok)
app.post(`/balok/LP`, validateLPB,LPBalok)
app.post(`/kerucut/volume`, validateVKR,volumeKerucut)
app.post(`/kerucut/LP`, validateLPKR ,LPKerucut)
export default app