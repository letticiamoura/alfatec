import { useNavigate } from "react-router-dom";

export default function Home() {
    
    const navigate = useNavigate();
    const handleCursos = () => navigate("/cursos");

    return (
        <div
            className="pt-10 md:pt-12 min-h-screen
            bg-[linear-gradient(125deg,rgba(126,34,206,0.7),rgba(249,115,22,0.7)),url('/src/assets/hero-classroom.jpg')]
            bg-cover bg-center bg-no-repeat
            flex flex-col justify-center
            px-6 md:px-10
            space-y-10"
        >
            <div className="flex items-center gap-3 px-5 py-3 w-fit rounded-3xl bg-white/20 backdrop-blur-md text-white text-lg font-medium shadow-lg">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                <p>Matrículas Abertas 2026</p>
            </div>

            <div className="flex flex-col space-y-5 max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Transforme seu futuro com <br />
                <span className="font-extrabold text-orange-300">
                    Educação de Qualidade
                </span>
                </h1>

                <p className="text-white/90 text-lg md:text-2xl font-medium">
                Há mais de 4 anos formando profissionais preparados para o mercado de
                trabalho. Cursos técnicos com metodologia prática e certificação
                reconhecida.
                </p>
            </div>

            <div className="flex space-x-5">
                <button
                    onClick={handleCursos}
                    className="px-5 mt-2 flex items-center justify-center gap-2 rounded-xl bg-orange-600 py-4 text-lg font-semibold text-white hover:bg-orange-500 hover:cursor-pointer hover:scale-105"
                >
                    Ver Cursos
                </button>
                <button
                    onClick={handleCursos}
                    className="px-5 mt-2 flex items-center justify-center gap-2 rounded-xl border border-white hover:bg-gray-50/10 py-4 text-lg font-semibold text-white hover:cursor-pointer hover:scale-105"
                >
                    Conhecer a Alfatec
                </button>
            </div>
            
    </div>
  );
}
