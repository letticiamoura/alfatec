import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CallToAction() {
  const navigate = useNavigate();

  return (
    <section className="px-4 md:px-8 py-16">
      
      <div className="mx-auto max-w-6xl rounded-2xl bg-gradient-to-r from-purple-500 via-purple-600 to-orange-500 px-6 md:px-16 py-14 text-center text-white shadow-xl">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Pronto para transformar sua carreira?
        </h2>

        <p className="mx-auto max-w-3xl text-base md:text-lg text-white/90 mb-10">
          Não perca mais tempo! Matricule-se agora e dê o primeiro passo rumo ao
          seu sucesso profissional.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate("/cursos")}
            className="flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold hover:bg-orange-400 transition-all hover:scale-105"
          >
            Ver Cursos →
          </button>

          <a
            href="http://api.whatsapp.com/send?phone=5585991815887&text=Quero%20fazer%20minha%20matr%C3%ADcula."
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2 rounded-xl border border-white/80 px-8 py-4 text-lg font-semibold hover:bg-white/10 transition-all hover:scale-105"
            >
            <FaWhatsapp className="text-xl" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}