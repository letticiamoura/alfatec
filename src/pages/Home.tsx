import alfatec from "../assets/alf1.gif";

import Navbar from "../layout/Navbar";
import About from "./About";
import News from "./News";

export default function Home() {

    return(
        
        <div className="h-auto">

            <div className="h-auto bg-estudante bg-cover bg-current">

                <Navbar />

                <video  autoPlay loop muted src={alfatec} className="h-[85vh] object-cover filter brightness-50 w-full"></video>

                <h2 className="w-[80vw] text-center text-white brightness-50 text-3xl font-extrabold shadow-2xl rounded-xl shadow-white/50 absolute font-sedan left-[12%] top-[35%]">Venha conhecer a melhor escola técnica do Ceará</h2>

                <a href="/about" className="border text-center text-white rounded-xl p-2 w-36 absolute left-[34%] top-[55%] md:top-[45%] md:left-[44%]">Conhecer</a>

            </div>
            
            <About />

            <News />

        </div>
    )
}