import { Link } from "react-router-dom";
import logo from "../assets/logo_alfa.png";

import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";

export default function Footer() {
  const redesSociais = [
    { id: 1, icon: <FaWhatsapp />, link: "http://api.whatsapp.com/send?phone=5585991815887&text=Quero%20fazer%20minha%20matr%C3%ADcula." },
    { id: 2, icon: <FaInstagram />, link: "https://www.instagram.com/alfatecoficial/" },
    { id: 3, icon: <FaTiktok />, link: "#" },
  ];

  return (
    <footer className="w-full bg-gray-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        <div className="flex flex-col items-center lg:items-start space-y-5 text-center lg:text-left">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo Alfatec" className="h-12 w-auto" />
            <h1 className="text-2xl font-bold tracking-tight">
              <strong className="text-orange-500">Alfa</strong>
              <span className="text-fuchsia-600">tec</span>
            </h1>
          </Link>

          <p className="text-white/70 max-w-md">
            Transformando vidas através da educação profissional de qualidade há
            mais de 4 anos.
          </p>

          <div className="flex items-center gap-4">
            {redesSociais.map((rs) => (
              <a
                key={rs.id}
                href={rs.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-full bg-white/10
                  transition-all
                  hover:bg-orange-500
                  hover:scale-110
                "
              >
                <span className="text-xl">{rs.icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left">
          
          <h2 className="text-xl font-semibold text-white/90">Contato</h2>

          <div className="flex items-start gap-3 text-white/70">
            <FaLocationDot className="mt-1 text-lg" />
            <p>
              R. Ana Nogueira Lopes, 254 <br />
              Centro, Horizonte
            </p>
          </div>

          <div className="flex items-center gap-3 text-white/70">
            <BsFillTelephoneFill />
            <p>(85) 2136-7788</p>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left">
          <h2 className="text-xl font-semibold text-white/90">
            Horário de Funcionamento
          </h2>

          <div className="flex items-start gap-3 text-white/70">
            <FaClock className="mt-1" />
            <p>
              Segunda a Sexta <br />
              08:00 às 20:00
            </p>
          </div>

          <div className="flex items-start gap-3 text-white/70">
            <FaClock className="mt-1" />
            <p>
              Sábado e Domingo <br />
              08:00 às 12:00
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Alfatec. Todos os direitos reservados.
      </div>
    </footer>
  );
}