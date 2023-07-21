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
                    <div className=" ml-auto w-[2rem] h-[1rem]">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex">
                        <div className=" w-[25rem] h-[18rem] ml-5 mt-2 ">
                            <img src={imagen_carro} alt="Texto alternativo de la imagen" />
                        </div>
                        <div className="   mt-[1rem] ml-[3rem] w-[15rem] h-[4rem]">
                            <h1> Maceta De Lily Rosas Y Rosas Topaz</h1>
                            <p>precio:$123 mxn</p>
                        </div>
                        <div className="flex flex-row bg-green-400 mt-[9rem] mr-[1rem] w-[3rem] h-[3rem]">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                            <h1>1</h1>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
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
                    <div className=" ml-auto w-[2rem] h-[1rem]">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex">
                        <div className=" w-[25rem] h-[18rem] ml-5 mt-2 ">
                            <img src={imagen_carro} alt="Texto alternativo de la imagen" />
                        </div>
                        <div className="   mt-[1rem] ml-[3rem] w-[15rem] h-[4rem]">
                            <h1> Maceta De Lily Rosas Y Rosas Topaz</h1>
                            <p>precio:$123 mxn</p>
                        </div>
                        <div className="flex flex-row bg-green-400 mt-[9rem] mr-[1rem] w-[3rem] h-[3rem]">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                            <h1>1</h1>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
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