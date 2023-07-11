import { Link } from "react-router-dom";
import Navbar from "../components/layout/navbar";

export default function Inicio_cesion() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
    <div className=" flex flex-col fixed justify-center mt-[15rem] ml-[39rem] items-center border 30px bg-green-400 rounded-lg">
      <img src="src/assets/WhatsApp_Image_2023-07-04_at_1.51.58_AM-removebg-preview.png" alt="Imagen" />
      <div className="border-10 border-green-300 p-5 mt-5">
        <form className="text-center">
          <h1 className="text-4xl font-semibold text-black">Inicio de sesión</h1>
          <p className="text-xl">Inicia sesión o regístrate para continuar</p>
        </form>
        <form className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label className="bg-green text-black mb-2">Correo electrónico:</label>
            <input className="bg-white border-2 rounded-md text-black" type="email" placeholder="Correo electrónico" />
          </div>
          <div className="flex flex-col">
            <label className="text-black mb-2">Contraseña:</label>
            <input className="bg-white border-2 rounded-md text-black" type="password" placeholder="Contraseña" />
            <p className="text-right">
              ¿Olvidaste tu Contraseña?
              <Link to={"/password"} className="text-red-500">Recuperar contraseña</Link>
            </p>
          </div>
          <button className="bg-[#ecedc1] text-black rounded-md py-2 px-4">Iniciar Sesión</button>
          <p className="text-center mt-4 font-bold border 30px bg-green-400 margin 20px">
          ¿No tienes cuenta?
          <Link to={"/registro"} className="text-blue-500">Regístrate</Link>
        </p>
        </form>
      </div>
    </div>
    </div>
    </>
  );
}