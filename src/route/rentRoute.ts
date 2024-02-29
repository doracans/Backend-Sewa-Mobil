import express from "express"
import { createRent, deleteRent, readRent, updateRent } from "../controller/rentController"
import { VerifyAdmin } from "../middleware/VerifyAdmin"
//import { VerifyUser } from "../middleware/VerifyUser"
const app = express()

//**allow to read a json from body */
app.use(express.json())

/**address for get rent data */
app.get(`/rent`, VerifyAdmin,readRent)
/**address for add new rent */
app.post(`/rent`, VerifyAdmin,createRent)
// adress for update rent
app.put(`/rent/:rentID`, VerifyAdmin,updateRent)
// adress for delete rent
app.delete(`/rent/:rentID`,VerifyAdmin,deleteRent)
export default app