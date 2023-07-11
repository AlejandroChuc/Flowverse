import Navbar from "../components/layout/navbar";


function DetallesProducto() {
    return (
        <>
        <Navbar/>
            <div className="flex ">
                <div className="imagen bg-green-600 w-[40rem] h-[23rem] ml-[12rem] mt-52"></div>
                <div className="flex-row">
                    <div className="   w-[43rem] h-[12rem] ml-[7rem] mt-52  border-2 border-colorSec rounded-2xl border-solid p-4 ">
                        <p className="text-3xl"><h5>Detail of Liles Rosas y Rosas Topaz</h5></p>
                        <p className="text-2xl p-9"><h5>MX $619.00</h5></p>
                    </div>
                    <div className="bg-yellow-500 w-[43rem] h-[3.2rem] ml-[7rem] mt-[1rem] border-colorSec rounded-2xl border-solid p-4">
                        <ul>
                            <li><box-icon name='star' color='#9f486d' ></box-icon></li>
                            <li><box-icon name='star' color='#9f486d' ></box-icon></li>
                        </ul>
                    </div>
                    <div className="  bg-yellow-500 w-[43rem] h-[4rem] ml-[7rem] mt-[1rem] border-colorSec rounded-2xl border-solid p-4">
                        <box-icon name='location-plus' color='#9f486d' ></box-icon>
                    </div>
                    <div className="  bg-yellow-500 w-[43rem] h-[4rem] ml-[7rem] mt-[1rem] border-colorSec rounded-2xl border-solid p-4"></div>
                </div>
            </div>
            <div className="flex">
                <div className="imagen bg-red-500 w-[19rem] h-[12rem] ml-[12rem] mt-[-2rem] border-colorSec border-solid p-4"></div>
                <div className="imagen bg-blue-500 w-[19rem] h-[12rem] ml-[2rem] mt-[-2rem]"></div>
            </div>
            <div className="flex-row">
            <div className=" w-[90rem] h-[12rem] ml-[12rem] mt-[4rem]">
                <h1>Metodos de pago </h1>
                <box-icon name='credit-card' color='#ffffff'></box-icon>
            </div>
                <div className="bg-black w-[90rem] h-[45rem] ml-[12rem] mt-[4rem]"></div>
                <div className="bg-black w-[90rem] h-[24rem] ml-[12rem] mt-[4rem]"></div>
            </div>
        </>
    )
}


export default DetallesProducto;

//<div className="bg-yellow-500 w-[120rem] h-[35rem] ml-[rem] mt-96"></div>