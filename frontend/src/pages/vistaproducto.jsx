import Footer from "../components/layout/footer";
import Navbar from "../components/layout/navbar";


function DetallesProducto() {
    return (
        <>
            <Navbar />
            <div className="flex ">
                <div className="imagen bg-green-600 w-[40rem] h-[23rem] ml-[12rem] mt-52"></div>
                <div className="flex-row">
                    <div className="   w-[43rem] h-[12rem] ml-[7rem] mt-52  border-2 border-colorSec rounded-2xl border-solid p-4 ">
                        <p className="text-3xl"><h5>Detail of Liles Rosas y Rosas Topaz</h5></p>
                        <p className="text-2xl p-9"><h5>MX $619.00</h5></p>
                    </div>
                    <div className="bg-yellow-500 w-[43rem] h-[4rem] ml-[7rem] mt-[1rem] border-colorSec rounded-2xl border-solid p-4">
                        <ul className="flex items-center">
                            <li><box-icon name='star' size="lg" color='#9f486d' ></box-icon></li>
                            <li><box-icon name='star' size="lg" color='#9f486d' ></box-icon></li>
                            <li><box-icon name='star' size="lg" color='#9f486d' ></box-icon></li>
                            <li><box-icon name='star' size="lg" color='#9f486d' ></box-icon></li>
                            <li><box-icon name='star' size="lg" color='#9f486d' ></box-icon></li>
                        </ul>
                    </div>
                    <div className="  bg-yellow-500 w-[43rem] h-[4rem] ml-[7rem] mt-[1rem] border-colorSec rounded-2xl border-solid p-4">
                        <box-icon name='location-plus' size="lg" color='#9f486d' ></box-icon>
                    </div>
                    <div className="  bg-yellow-500 w-[43rem] h-[4rem] ml-[7rem] mt-[1rem] border-colorSec rounded-2xl border-solid p-4">
                        <ul className="flex items-start">
                            <li>
                                <button className="bg-rose-500 w-[11rem] h-[4rem] hover:bg-rose-600 text-white font-bold py-2 px-4 rounded">
                                Comprar ahora
                            </button>
                            </li>
                            <li><box-icon name='cart-alt' color='#9f486d' size="lg"></box-icon></li>
                            <li><box-icon name='heart' size="lg" color='#9f486d'></box-icon></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="imagen bg-red-500 w-[19rem] h-[12rem] ml-[12rem] mt-[-2rem] border-colorSec border-solid p-4"></div>
                <div className="imagen bg-blue-500 w-[19rem] h-[12rem] ml-[2rem] mt-[-2rem]"></div>
            </div>
            <div className="flex-row">
                <div className=" w-[90rem] h-[12rem] ml-[12rem] mt-[4rem]">
                    <h1>Metodos de pago </h1>
                    <ul className="flex items-start ">
                        <li><box-icon name='credit-card' size="lg" color='#9f486d' ></box-icon></li>
                        <li><box-icon name='credit-card' size="lg" color='#9f486d' ></box-icon></li>
                        <li><box-icon name='credit-card' size="lg" color='#9f486d' ></box-icon></li>
                    </ul>
                </div>
                <div className="bg-red w-[90rem] h-[38rem] ml-[12rem] mt-[4rem]">
                    <h1>Descripcion del producto</h1>
                    <p>
                        Rosa Roja : 6 pzs
                        Alstroemeria Roja : 10 pzs
                        El rojo es el color del amor y la pasión, y este ramo de rosas rojas con astromelias en color rojo también, refleja tus sentimientos más profundos por una persona que amas y que deseas tener junto a ti por mucho tiempo, y con toda la pasión posible que existe en el mundo. Este ramo grita te amo, y tiene un toque único y diferente gracias a las astromelias.

                        Este bouquet contiene:

                        6 rosas rojas.8 astromelias rojas.Papel envoltorio en color negro.

                        Además de ser un ramo hermoso, las flores que se incluyen son de tallo largo por lo que le dan un gran toque elegante, en conjunto con el envoltorio en color negro. También, las plantas decorativas que acompañan a las flores le dan mucho más volumen y presencia al bouquet.

                        Las astromelias son flores muy particulares. Es cierto que el significado detrás de esta flor en realidad se deriva de los seis pétalos que la componen.

                        Cada pétalo de la flor representa una característica muy diferente. Son los siguientes: el primer pétalo representa la comprensión. El segundo pétalo representa el humor. El tercer pétalo representa la paciencia. El cuarto pétalo representa la empatía. El quinto pétalo representa compromiso y el sexto pétalo representa respeto.

                        Además de esto, las hojas que tiene la flor representan la unión y la superación de las dificultades con un sentido de unión. Envían un mensaje claro de: “estoy aquí para ti ante cada situación que se presente en la vida”.

                        Por supuesto, las tradicionales rosas rojas tienen un simbolismo de amor y pasión que sólo estas flores llevan, y que toda persona entiende a la perfección apenas las ve.

                        Las flores en la disposición pueden ser de diferentes colores y tamaños dependiendo del estado de stock.

                        Algunas de las flores en el arreglo floral se pueden enviar, incluso si no florecen debido a las condiciones estacionales. Las flores cerradas se abren en 1-2 días, a temperatura ambiente.

                        Código de producto: lf820</p>


                </div>
                <div className="bg-black w-[90rem] h-[24rem] ml-[12rem] mt-[4rem]">
                    
                </div>
            </div>
            <Footer/>
        </>

    )
}


export default DetallesProducto;

//<div className="bg-yellow-500 w-[120rem] h-[35rem] ml-[rem] mt-96"></div>