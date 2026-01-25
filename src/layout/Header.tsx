import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import logo from "../assets/logo_alfa.png";

import { HiMenu, HiX } from "react-icons/hi";
import { BsChatDotsFill } from "react-icons/bs";

type NavItem = {
  nome: string;
  path: string;
};

const navItems: NavItem[] = [
  { nome: "Início", path: "/" },
  { nome: "Cursos", path: "/cursos" },
  { nome: "Conheça a Alfatec", path: "/sobre" },
];

export default function Header() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white backdrop-blur-md border-gray-200 shadow-sm">
      
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo Alfatec" className="h-12 w-auto" />
          <h1 className="text-2xl font-bold tracking-tight text-fuchsia-600">
            <strong className="font-bold text-orange-500">Alfa</strong>tec
          </h1>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative px-4 py-2 text-lg font-medium transition-colors ${
                  isActive
                    ? "text-orange-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-orange-500"
                    : "text-gray-700 hover:text-orange-600"
                }`
              }
            >
              {item.nome}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contato"
          className="hidden items-center gap-2 rounded-xl bg-orange-600 px-6 py-3 font-medium text-white shadow-md transition-all hover:bg-orange-500 hover:shadow-lg hover:scale-[1.03] md:flex"
        >
          <BsChatDotsFill className="text-lg" />
          Fale Conosco
        </Link>

        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menu mobile"
        >
          {mobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white px-6 py-5 shadow-lg">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-lg font-medium ${
                    isActive ? "text-orange-600" : "text-gray-800 hover:text-orange-600"
                  }`
                }
              >
                {item.nome}
              </NavLink>
            ))}

            <Link
              to="/contato"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-orange-600 py-4 text-lg font-semibold text-white hover:bg-orange-500"
            >
              <BsChatDotsFill />
              Fale Conosco
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}