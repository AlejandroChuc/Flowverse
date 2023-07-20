import { Outlet } from "react-router-dom";
import 'boxicons'
import imagen_card from "../img/hermoso-ramo-rosas-rosadas-aislado-blanco.jpg";

function Card() {
    return (
        <>
            <div>
                <div className=" w-[21rem] h-[28rem] rounded-xl border-4 border-colorcarritosec">

                    <div className="bg-red-200 mt-[0.5rem] ml-[0.2rem] w-[20rem] h-[17rem] rounded-xl">
                        <img className="object-cover mr-2 h-[17rem] w-[20rem] rounded-xl border-4 border-colorcarritosec" src={imagen_card} alt="" />
                    </div>
                    <div className="ml-[0.7rem] mt-[1rem] w-[19rem] h-[4rem] rounded-sm"> 
                    <h1>Ramo de flores frescas de colores aislado</h1>
                    </div>
                    <div className="flex">
                        <div className="bg-red-500 ml-[0.7rem] mt-[0.5rem] w-[8rem] h-[4rem] rounded-sm">
                            <h4>$550 mxn</h4>
                        </div>
                        <div className=" ml-[3rem] mt-[0.5rem] w-[8rem] h-[4rem] rounded-sm">
                            <button className="ml-[5rem]"><box-icon name='cart-alt' color='#9f486d' size="lg" ></box-icon> </button>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}


export default Card;