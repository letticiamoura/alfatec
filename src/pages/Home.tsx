import alfatec from "../assets/alf1.gif";

import Navbar from "../layout/Navbar";
import About from "./About";
import News from "./News";

export default function Home() {

    return(
        
        <div className="h-auto">

            <div className="h-auto bg-slate-100 bg-cover bg-current">

                <Navbar />

                <video  playsInline autoPlay loop muted src={alfatec} className="h-[90vh] object-cover filter brightness-75 w-full rounded-bl-[60vw] md:rounded-none"></video>

                <h2 className="p-3 borde w-[80vw] text-center backdrop-blur-sm text-white  text-3xl font-extrabold shadow-2xl rounded-xl shadow-white/50 absolute font-sedan left-[12%] top-[35%] md:left-[30%] md:w-[40vw]">Venha conhecer a melhor escola técnica do Ceará</h2>

                <a href="#about" className="border text-center text-white rounded-xl p-2 w-36 absolute left-[34%] top-[55%] md:top-[55%] md:left-[44%]">Conhecer</a>

            </div>
            
            <About />

            <News />

        </div>
    )
}