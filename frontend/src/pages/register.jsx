
import { Link } from "react-router-dom";
import Navbar from "../components/layout/navbar";
export default function Register() {
    return (
        <>
        <Navbar/>
        <div className="flex flex-col mt-[15rem] h-[40rem] px-[35rem] items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-semibold text-black">Registro de usuario</h1>
            </div>
            <img class="h-auto mas" src="src/assets/WhatsApp_Image_2023-07-04_at_1.51.58_AM-removebg-preview.png" alt="Imagen" />
            <button className="bg-green-400">Editar foto</button>
            <div>
                <form className="flex flex-col gap-3 mb-3 mt-3 bg-white margin 20px rounded-lg">
                    <div className="flex flex-col">
                        <label className="bg-green text-black mb-2">Nombres:</label>
                        <input className="bg-white border-2 rounded-md text-black" type="email" placeholder="Jose Coronado" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-black mb-2">Correo electrónico:</label>
                        <input className="bg-white border-2 rounded-md" type="email" placeholder="Correo electrónico" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-black mb-2">Numero telefonico:</label>
                        <input className="bg-white border-2 rounded-md" type="text" placeholder="+52" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-black mb-2">Direccion:</label>
                        <input className="bg-white border-2 rounded-md" type="text" placeholder="Calle/N°Casa/CP/" />
                    </div>
                    <div className="flex flex-col">
                        <label className="bg-green text-black mb-2">Contraseña:</label>
                        <input className="bg-white border-2 rounded-md" type="password" placeholder="Contraseña" />
                    </div>
                    <div className="flex flex-col">
                        <label className="bg-green text-black mb-2">Confirmar Contraseña:</label>
                        <input className="bg-white border-2 rounded-md" type="password" placeholder="Confirmar Contraseña" />
                    </div>
                    <button className="bg-green-400">Registrarse</button>
                    <p className="text-center mt-4 font-bold border 30px bg-green-400 margin 20px text-black">
                        ¿Tienes cuenta?
                        <Link to={"/inicio"} className="text-blue-500">Inicia sesion</Link>
                    </p>
                </form>
            </div>
        </div>
        </>
    );
}