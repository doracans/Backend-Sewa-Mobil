
//middelware: proses yang dilalui/djalankan sbl data request diolah
/**ini adalah file utama
 * dimana ada proses menjalankan server backend
 */

/**memanggil library express */
import express, { Request, Response } from "express" 
import routeAdmin from "./route/adminRoute"
import routeCar from "./route/carRoute"
import routeRent from "./route/rentRoute"


// buat wadah untuk inisiasi express
const app = express()

/**allow to read json as request */
app.use(express.json())

//sikan port berjalannya server
// port adalah sebuah jalur yang dibuat agar code itu berjalan
const PORT = 8000
//register route of admin,car,rent
app.use(routeAdmin,routeRent,routeCar)
//run server
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})
