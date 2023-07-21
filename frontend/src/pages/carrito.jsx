import { Link } from "react-router-dom";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import 'boxicons'
import imagen_carro from "../img/ramo-rico-hecho-rosas-rojas-encuentra-afuera.jpg"


function Carrito() {
    return (
        <>
            <Navbar />
            <div className="flex ">

                <div className="  w-[56rem] h-[20rem] ml-[12rem] mt-52 border-4 border-colorcarrito rounded-2xl ">
                    <div className=" w-[25rem] h-[18rem] ml-5 mt-2 ">
                        <img src={imagen_carro} alt="Texto alternativo de la imagen" />
                    </div>
                </div>
                <div className="flex-row">
                    <div className="bg-colorcarrito w-[25rem] h-[-3rem] ml-[7rem] mt-[13rem] border-colorcarritosec rounded-2xl border-4 p-4">
                    </div>
                    <div className="   w-[25rem] h-[30rem] ml-[7rem] mt-[1rem]  border-2 border-colorSec rounded-2xl border-solid p-4 ">
                        <p className="text-3xl"><h5>Productos(2)$830</h5></p>
                        <p className="text-2xl  p-9"><h5>Total $830.00</h5></p>
                    </div>
                    <div className=" bg-colorcarrito w-[25rem] h-[3.2rem] ml-[7rem] mt-[1rem] border-4 border-colorcarritosec rounded-2xl border-solid p-4 text-white text-center text-2xl ">
                        <Link to=''><button ><h3>Comprar</h3> </button></Link>
                    </div>
                </div>
            </div>
            <div className="flex-row">
                <div className="  w-[56rem] h-[20rem] ml-[12rem] mt-[-16rem] border-4 border-colorcarrito rounded-2xl">
                    <div className=" w-[25rem] h-[18rem] ml-5 mt-2 ">
                        <img src={imagen_carro} alt="Texto alternativo de la imagen" />
                    </div>
                </div>
                <div className=" bg-colorcarrito w-[56rem] h-[1rem] ml-[12rem] mt-[1rem] border-4 border-colorcarritosec p-2 rounded-2xl">

                </div>



            </div>
            <Footer />
        </>
    )
}

export default Carrito;