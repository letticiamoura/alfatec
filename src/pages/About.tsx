import valores from "../assets/valores.png";
import visao from "../assets/visao.png";
import missao from "../assets/missao.png";

import diretora from "../assets/isabele.jpg";
import brendha from "../assets/brendha.jpg";
import ph from "../assets/phh.jpg";

export default function About() {
    return(
        <section className="px-5 pt-10 bg-zinc-50">
            <h1 className="text-3xl font-bold text-orange-500">Rede de Ensino <br />
                <span className="text-4xl font-extrabold">Alfatec</span>
            </h1>
            
            <div>

            <div className="pt-5">

                <h2 className="text-lg lg:w-[70vw] lg:text-center lg:m-auto lg:text-xl">Somos uma renomada rede de ensino especializada em capacitar profissionais para atender às demandas do mercado de trabalho atual. Oferecemos uma variedade de cursos técnicos e profissionalizantes para garantir que nossos alunos estejam preparados para enfrentar os desafios e se destacarem em suas carreiras.</h2>

            <div className="pt-5 flex flex-col md:flex-row md:justify-center gap-5">
    
                <div className="transform hover:scale-105 ease-in-out p-5 border shadow-xl bg-orange-500 rounded-tl-[50px] rounded-br-[50px] lg:rounded-xl md:w-[27vw] lg:w-[22vw] text-white">
                    <img src={valores} alt="Valores" className="h-[10vh] m-auto"/>
                    <h2 className="text-2xl font-bold text-center">Valores</h2>
                    <li className="text-md w-[80vw]">Honestidade</li>
                    <li className="text-md">Respeito</li>
                    <li className="text-md">Compromisso</li>
                    <li className="text-md">Ética</li>
                </div>

                <div className="transform hover:scale-105 ease-in-out p-5 border bg-orange-500 text-white rounded-tl-[50px] rounded-br-[50px] lg:rounded-xl  lg:w-[22vw]  shadow-xl">
                    <img src={visao} alt="Visão" className="h-[10vh] m-auto"/>
                    <h2 className="text-2xl font-bold text-center">Visão</h2>
                    <p  className="text-ld">Ser a melhor Escola Técnica do Brasil reconhecida como o melhor método de ensino e a mais eficiente na realização dos sonhos de nossos alunos.</p>
                </div>
                <div className="transform hover:scale-105 ease-in-out p-5 border bg-orange-500 text-white rounded-tl-[50px] rounded-br-[50px] lg:rounded-xl  lg:w-[22vw]  shadow-xl">
                    <img src={missao} alt="Missão" className="h-[10vh] m-auto"/>
                    <h2 className="text-2xl font-bold text-center">Missão</h2>
                    <p  className="text-md">Proporcionar aos alunos ensino de excelência visando desenvolver o potencial de cada educando e formando cidadãos úteis á sociedade e á Pátria.</p>
                </div>
            </div>

            </div>

            <div>
                <h2 className="p-5 text-2xl sm:text-4xl font-bold text-orange-500">Conheça nossos <br /> 
                    <span className="text-orange-400 text-3xl sm:text-5xl font-extrabold">colaboradores</span>
                </h2>

                <div className="flex justify-center gap-5">

                    <div>
                        <img src={diretora} alt="Diretora" className="h-[45vh] w-[150%] lg:h-[45vh] lg:w-[20vw] rounded-full object-cover filter hover:brightness-75"/>
                        <div className="text-orange-400 text-center">  
                            <h2 className="font-bold">Isabele Ferreira</h2>
                            <p>Diretora</p>
                        </div>    
                    </div>

                    <div>
                        <img src={brendha} alt="Dona" className="h-[45vh] w-[65vw] lg:h-[45vh] lg:w-[20vw] rounded-full object-cover filter hover:brightness-75"/>
                        <div className="text-orange-400 text-center">  
                            <h2 className="font-bold">Brendha Bezerra</h2>
                            <p>Lorem Lorem</p>
                        </div>    
                    </div>

                    <div className="block">
                        <img src={ph} alt="Dona" className="h-[45vh] w-[65vw] lg:h-[45vh] lg:w-[20vw] object-cover rounded-full filter hover:brightness-75"/>
                        <div className="text-orange-400 text-center">  
                            <h2 className="font-bold">Paulo Henrique</h2>
                            <p>Lorem Lorem</p>
                        </div>    
                    </div>

                </div>

            </div>

            </div>
        </section>
    )
}