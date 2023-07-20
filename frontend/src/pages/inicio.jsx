import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";


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
          <div className="flex">
            <div className=" bg-fondo3 w-[28rem] h-[20rem] ml-[1rem] mt-[4rem] border-4 border-colorcarrito rounded-2xl">
              <div className="bg-colorcarrito w-auto h-auto rounded-sm">
                <h1 className="text-white ml-[4%] mt-[65%]">Los mas vendidos</h1>
              </div>

            </div>
            <div className=" bg-fondo2 w-[28rem] h-[20rem] ml-[8rem] mt-[4rem] border-4 border-colorcarrito rounded-2xl">
              <div className="bg-colorcarrito w-auto h-max rounded-sm">
                <h1 className="text-white ml-[4%] mt-[65%]">De temporada</h1>
              </div>
            </div>

          </div>
          <div className="max-w-6xl w-full m-auto">
            <div className="bg-fondo1 bg-navbarletras mt-[4rem] flex flex-col items-end w-[65rem] h-[17rem] border-4 border-colorcarrito rounded-2xl">
              <div className="bg-colorcarrito w-[64.5rem] mt-[13.5rem] h-[3rem] rounded-sm">
                <h1 className="text-white text-2xl ">Ofertas</h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
        <Outlet />
      </div>

    </>
  );
}

export default Inicio;