import valores from "../assets/valores.png";
import visao from "../assets/visao.png";
import missao from "../assets/missao.png";

export default function About() {

    return(

        <div className="p-10 bg-zinc-100 h-auto">

            <h1 className="text-2xl font-medium text-orange-500">REDE DE ENSINO <br />
                <span className="text-4xl font-extrabold">ALFATEC</span>
            </h1>

            <div className="pt-5">

                <h2 className="text-lg font">Somos uma renomada rede de ensino especializada em capacitar profissionais para atender às demandas do mercado de trabalho atual. Oferecemos uma variedade de cursos técnicos e profissionalizantes para garantir que nossos alunos estejam preparados para enfrentar os desafios e se destacarem em suas carreiras.</h2>

                <div className="pt-5 flex flex-col gap-5">
                    <div className="p-5 border shadow-xl bg-orange-500 rounded-tl-[50px] rounded-br-[50px] text-white">
                        <img src={valores} alt="Valores" className="h-[10vh] m-auto"/>
                        <h2 className="text-2xl font-bold text-center">Valores</h2>
                        <li className="text-lg">Honestidade</li>
                        <li className="text-lg">Respeito</li>
                        <li className="text-lg">Compromisso</li>
                        <li className="text-lg">Ética</li>
                    </div>

                    <div className="p-5 border bg-orange-500 text-white rounded-tl-[50px] rounded-br-[50px] shadow-xl">
                        <img src={visao} alt="Visão" className="h-[10vh] m-auto"/>
                        <h2 className="text-2xl font-bold text-center">Visão</h2>
                        <p  className="text-ld">Ser a melhor Escola Técnica do Brasil reconhecida como o melhor método de ensino e a mais eficiente na realização dos sonhos de nossos alunos.</p>
                    </div>
                    <div className="p-5 border bg-orange-500 text-white rounded-tl-[50px] rounded-br-[50px] shadow-xl">
                        <img src={missao} alt="Missão" className="h-[10vh] m-auto"/>
                        <h2 className="text-2xl font-bold text-center">Missão</h2>
                        <p  className="text-lg">Proporcionar aos alunos ensino de excelência visando desenvolver o potencial de cada educando e formando cidadãos úteis á sociedade e á Pátria.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}