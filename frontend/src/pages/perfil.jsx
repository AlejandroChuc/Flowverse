 import Footer from "../components/layout/footer";
import Navbar from "../components/layout/navbar";
 
 
 function Perfil() {
    return (
        <>
        <Navbar/>
        <div className="bg-white ml-[5rem]  flex h-mid items-center justify-center border-green min-h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-semibold text-black">Perfil</h1>
                <form className="flex flex-col bg-white margin 20px rounded-lg">
                    <div className="flex flex-row items-center">
                        <label className="bg-green text-black mb-2">Nombres:</label>
                        <input className="bg-white border-2 rounded-md text-black" type="email" placeholder="Jose Coronado" />
                        <button className="bg-[#7F2B50]">Modificar</button>
                    </div>
                    <div className="flex flex-row items-center">
                        <label className="bg-green text-black mb-2">Apellidos:</label>
                        <input className="bg-white border-2 rounded-md text-black" type="email" placeholder="Hoil" />
                        <button className="bg-[#7F2B50]">Modificar</button>
                    </div>
                    <div className="flex flex-row items-center">
                        <label className="text-black mb-2">Correo electrónico:</label>
                        <input className="bg-white border-2 rounded-md" type="email" placeholder="Correo electrónico" />
                        <button className="bg-[#7F2B50]">Modificar</button>
                    </div>
                    <div className="flex flex-row items-center">
                        <label className="text-black mb-2">Numero telefonico:</label>
                        <input className="bg-white border-2 rounded-md" type="text" placeholder="+52" />
                        <button className="bg-[#7F2B50]">Modificar</button>
                    </div>
                    <div className="flex flex-row items-center">
                        <label className="text-black mb-2">Direccion:</label>
                        <input className="bg-white border-2 rounded-md" type="text" placeholder="Calle/N°Casa/CP/" />
                        <button className="bg-[#7F2B50]">Modificar</button>
                    </div>
                    <div className="flex flex-row items-center">
                        <label className="bg-green text-black mb-2">Contraseña:</label>
                        <input className="bg-white border-2 rounded-md" type="password" placeholder="Contraseña" />
                        <button className="bg-[#7F2B50]">Modificar</button>
                    </div>
                    <button className="bg-[#7F2B50]">Confirmar</button>
                </form>
                <div class="mb-4">
                    <img src="src/assets/WhatsApp_Image_2023-07-04_at_1.51.58_AM-removebg-preview.png" alt=""
                        class="h-auto max-w-full rounded-full" />
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Perfil;