import express from "express"
import { createAdmin, deleteAdmin, login, readAdmin, updateAdmin } from "../controller/adminController"
import { verify } from "crypto"
import { VerifyAdmin } from "../middleware/VerifyAdmin"
//import { VerifyUser } from "../middleware/VerifyUser"
const app = express()

//**allow to read a json from body */
app.use(express.json())

/**address for get  admin data */
app.get(`/admin`,VerifyAdmin,readAdmin)
/**address for add new admin*/
app.post(`/admin`,VerifyAdmin,createAdmin)
// adress for update admin
app.put(`/admin/:adminID`,VerifyAdmin,updateAdmin)
// adress for delete admin
app.delete(`/admin/:adminID`, VerifyAdmin,deleteAdmin)
//adress for login to data
app.post(`/admin/login`, login)

export default app
