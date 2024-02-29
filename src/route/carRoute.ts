import express from "express"
import { createCar, deleteCar, readCar, updateCar } from "../controller/carController"
import { VerifyAdmin } from "../middleware/VerifyAdmin"
//import { VerifyUser } from "../middleware/VerifyUser"
const app = express()

//**allow to read a json from body */
app.use(express.json())

/**address for get car data */
app.get(`/car`,VerifyAdmin, readCar)
/**address for add new car */
app.post(`/car`,VerifyAdmin,createCar)
// adress for update car
app.put(`/car/:carID`, VerifyAdmin,updateCar)
// adress for delete car
app.delete(`/car/:carID`,VerifyAdmin,deleteCar)
export default app