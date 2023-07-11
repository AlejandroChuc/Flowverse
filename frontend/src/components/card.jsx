import { Outlet } from "react-router-dom";


function Card() {
    return (
        <>
            <div className="w-[15rem] h-[20rem] bg-white shadow-md rounded-lg p-4 relative">
                <div className="flex justify-between items-center">
                    
                    <div>
                        <i className="bx bx-heart text-gray-500 text-xl" />
                        <i className="bx bx-heart text-red-500 text-xl absolute top-0 right-0 hidden" />
                    </div>
                </div>
                <img src="frontend\img\hermoso-ramo-flores-frescas-colores-aislado-espacio-blanco.jpg" alt="123" className="mt-4" />
                <h2 className="text-lg font-semibold">Rosas rojas y verdes</h2>
                <p className="mt-2 text-gray-600">$99.99</p>
            </div>
            <Outlet/>
        </>
    )
}


export default Card;