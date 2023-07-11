import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/navbar";


const Inicio = () => {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div className=" max-w-6xl w-full m-auto">
          <div className="bg-fondo bg-navbarletras mt-[15rem] flex flex-col items-end w-[65rem] h-[17rem]">
            <h1 className=" espaciado font-cormorant text-navbarletras ">FLOWER</h1>

            <div className="bg-slate-900 mt-[40rem] w-[65rem]"></div>
          </div>

        </div>
        
        
        <Outlet />
      </div>
      
    </>
  );
}

export default Inicio;