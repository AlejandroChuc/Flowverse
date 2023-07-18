import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import 'boxicons'


function Navbar() {
  return (
    <>
      <div className="bg-miColor text-black absolute top-0 w-full right-0 flex flex-row justify-between px-20 py-6 items-center">
        <div>
          <Link to="/"><img className="h-28" src=""/></Link>
        </div>
        <div className="mx-auto block">
          <div className="flex flex-row items-center">
            <input className="w-[50rem] bg-white outline-none text-letrasBuscador border rounded-full border-letrasBuscador px-4 py-2 mt-2" placeholder="Busca tus flores" type="search" />
            <i class="bi bi-search"></i>
            <box-icon className="search-bot" name='search-alt-2' color='#ffffff'></box-icon>
            <div className="ml-4 flex gap-4">
              <Link to="/perfil"><box-icon className="" size="lg" name='user' color='#9f486d' ></box-icon></Link>
              <Link to="/carrito"><box-icon name='cart-alt' color='#9f486d' size="lg"></box-icon></Link>
            </div>
          </div>
          <ul className="flex flex-row gap-3 font-rufina decoration-navbarletras mt-10 left-1/2 text-[20px]">
            <Link to="/"><li><span className="text-navbarletras">| Inicio |</span></li></Link>
            <Link to="/catalogo"><li><span className="text-navbarletras">| De temporada |</span></li></Link>
            <li><span className="text-navbarletras">| Ofertas |</span></li>
            <li><span className="text-navbarletras">| los mas vendidos |</span></li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navbar;
