import valores from "../assets/valores.png";
import visao from "../assets/visao.png";
import missao from "../assets/missao.png";

export default function About() {

    return(

        <div className="p-10 bg-zinc-100 h-auto">

            <h1 className="text-2xl font-medium text-orange-500">REDE DE ENSINO <br />
                <span className="text-4xl font-extrabold">ALFATEC</span>
            </h1>

            <div>

                <h2>Somos uma renomada rede de ensino especializada em capacitar profissionais para atender às demandas do mercado de trabalho atual. Oferecemos uma variedade de cursos técnicos e profissionalizantes para garantir que nossos alunos estejam preparados para enfrentar os desafios e se destacarem em suas carreiras.</h2>

                <div className="flex flex-col gap-5">
                    <div className="border border-black rounded-xl">
                        <img src={valores} alt="Valores" className="h-[10vh] m-auto"/>
                        <h2 className="text-2xl font-bold text-orange-500 text-center">Valores</h2>
                        <li>Honestidade</li>
                        <li>Compromisso</li>
                        <li>Respeito</li>
                        <li>Ética</li>
                    </div>



                    <div className="border border-black rounded-xl">
                        <img src={visao} alt="Visão" className="h-[10vh] m-auto"/>
                        <h2>Visão</h2>
                        <p>Ser a melhor Escola Técnica do Brasil reconhecida como o melhor método de ensino e a mais eficiente na realização dos sonhos de nossos alunos.</p>
                    </div>
                    <div className="border border-black rounded-xl">
                        <img src={missao} alt="Missão" className="h-[10vh] m-auto"/>
                        <h2>Missão</h2>
                        <p>Proporcionar aos alunos ensino de excelência visando desenvolver o potencial de cada educando e formando cidadãos úteis á sociedade e á Pátria.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}