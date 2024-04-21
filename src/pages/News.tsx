import alfatec from "../assets/comecial.jpeg";

export default function News() { 

    return(
        
        <div className="p-10 h-auto bg-orange-600">

            <h1 className="text-white text-2xl lg:text-3xl font-bold mb-5">Fique por dentro <br /> 
                <span className="text-4xl lg:text-5xl text-orange-300 font-extrabold">Notícias Alfatec</span>
            </h1>

            <div>

                <img src={alfatec} alt="Alfatec" className="rounded-2xl object-cover h-[50vh]  w-full lg:h-[50vh] lg:w-[40vw] lg:object-container"/>

                <div className="pt-10">

                    <div className="flex flex-col md:flex-row justify-around gap-8">

                        <div className="p-3 w-full lg:h-[25vh]  md:w-[50vw] rounded-2xl bg-orange-400 shadow-black/30 shadow-lg">
                            <h1 className="text-white text-2xl lg:text-xl font-bold p-4">Promoção Amigo da Onça</h1>
                            <p className="text-orange-200 text-xl lg:text-lg pl-4">Indique um amigo e ganhe R$50,00</p>
                        </div>

                        <div className="p-3 lg:h-[25vh] w-full md:w-[50vw] rounded-2xl bg-orange-400 shadow-black/30 shadow-lg">
                            <h1 className="text-white text-2xl lg:text-xl font-bold p-4">Sorteio do mês</h1>
                            <p className="text-orange-200 text-xl lg:text-lg pl-4">Pague em dia e concorra a um prêmio</p>
                        </div>
                    
                    </div>

                    <div className="p-8">
                        <a href="/view" className="border w-36 left-[30%] rounded-2xl p-2 text-center absolute sm:left-[40%] md:left-[41%] text-white text-2xl">Ver mais</a>
                    </div>

                </div>

            </div>

        </div>
    )
}