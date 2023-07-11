import { Link } from "react-router-dom";


export default function Footer(){
    return(

<footer class="bg-miColor rounded-lg shadow m-4 ">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-navbarletras sm:text-center ">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowverse™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-navbarletras sm:mt-0">
        <li>
          <Link to='/acercade'>  <h1 className="mr-4 hover:underline md:mr-6 ">Acerca de</h1> </Link>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Politica de privacidad</a>
        </li>
        <li>
            <a href="#" class="hover:underline"></a>
        </li>
    </ul>
    </div>
</footer>
    );
}