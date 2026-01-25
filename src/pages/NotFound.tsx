import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
    
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-purple-500 to-orange-500 px-6">
      <div
        className="max-w-xl text-center bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-2xl text-white">

        <h1 className="text-7xl font-extrabold mb-4">404</h1>

        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Página não encontrada
        </h2>

        <p className="text-white/90 mb-8">
          Opa! Parece que a página que você tentou acessar não existe ou foi
          movida. Mas não se preocupe, você pode voltar para um caminho seguro
        </p>

        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold hover:bg-orange-400 transition-all hover:scale-105">
          <FaArrowLeft />
          Voltar para o início
        </button>
      </div>
    </section>
  );
}