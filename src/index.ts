/**ini adalah file utama
 * dimana ada proses menjalankan server backend
 */

/**memanggil library express */
import express, { Request, Response, request, response} from "express"
import { ResolvedProjectReference } from "typescript"
import { validatecube } from "./middleware/validatecube"
import routebangunDatar from "./route/bangunDatar"
import routebangunRuang from "./route/bangunRuang"


// buat wadah untuk inisiasi express
const app = express()

// mendefinisikan port berjalannya server
// port adalah sebuah jalur yang dibuat agar code itu berjalan
const port= 3000

/**allow to read json as request */
app.use(express.json())

// proses pertama untuk handle request
app.get(`/serena`, (request: Request, response: Response) => {

    return response.status(200).json({
        message: `halo serena anaknya bu siana`
    }) 
})

/**read a query request */
app.get('/moklet',(request: Request, response: Response)=>{
    /**asumsikan data yang dikirim 
     * adalah nama dan umur
     */
    let nama: any = request.query.nama?.toString()
    let umur: any = request.query.umur?.toString()

    let message: string =   `my name is ${nama} and i'm ${umur} yo`
    return response.status(200).json(message)
})

/**read data request from parameter */
app.get(`/telkom/:nama/:gender`, (request: Request, response: Response)=>{
    let nama: string= request.params.nama
    let gender: string= request.params.gender

    let message: string = `my name is ${nama} and i'm ${gender}`
    return response.status(200).json(message)
});

/**read data request that sent from body */
app.post(`/moklet`, (request: Request, response: Response)=>{
    /**asumsikan data yang dikirim adalah 
     * panjang dan lebar 
     */
    let panjang: number = request.body.panjang
    let lebar: number= request.body.lebar

    let luasPersegiPanjang: number = panjang * lebar
    let message = `luas persegi panjang adalah ${luasPersegiPanjang}`
    return response.status(200).json(message)
});

/**buatlah sebuah request untuk mengonversi 
 * suhu celcius ke fahrenheit, kelvin, dan reamur
 * menggunakan request parameter
 * exp: http://localhost:8000/celcius/80
 * (80 adalah nilai celciusnya)
 * response data->
 * {
 * reamur: ?, fahrenheit: ?, kelvin: ?
 * }
 */

app.get(`/convert/:suhuAwal`, (request: Request, response: Response) => {
    let suhuawal: any= request.params.suhuAwal;

    let fahrenheit: number = (9/5 * suhuawal)+35;
    let kelvin: number= Number(suhuawal) + 273;
    let reamur: number= (4/5)*suhuawal;

    let message: string= `suhu celcius = ${suhuawal} => fahrenheit ${fahrenheit} => kelvin ${kelvin} => reamur ${reamur}`; 
    response.status(200).json(message);
});

/**creat request for count volume of long cube */
app.post(`/cube`, validatecube, (request: Request, response: Response)=>{
    /**read panjang, lebar, tinggi */
    let panjang: number =   Number(request.body.panjang)
    let lebar: number =   Number(request.body.lebar)
    let tinggi: number =   Number(request.body.tinggi)

    let volume: number= panjang*lebar*tinggi
    return response.status(200).json({
        panjang, lebar, tinggi, volume
    })
})

app.use(routebangunDatar)
app.use(routebangunRuang)

/**running server */
app.listen(port, ()=>{

    console.log(`server running on port ${port}`)
})