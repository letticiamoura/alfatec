import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useState } from "react";

export default function Header() {
    const menuItem = [
        { id: 1, name: "Inicio", link: "/" },
        { id: 2, name: "Sobre", link: "/sobre" },
        { id: 3, name: "Cursos", link: "/cursos" },
        { id: 4, name: "Contato", link: "/contato" },
    ];

    const [open, setOpen] = useState(false);

    const handleOpenMenu = () => setOpen(!open);

    return (
        <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-gradient-to-r from-orange-500 to-red-500 px-4 md:px-10 h-20 flex items-center justify-between">

            <h1 className="text-zinc-50 text-4xl font-extrabold font-serif absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
                <Link to="/">Alfatec</Link>
            </h1>
            
            <div className="md:hidden">
                <Menu onClick={handleOpenMenu} />
            </div>

            <nav className="hidden md:flex md:space-x-10 text-zinc-50 text-2xl font-serif font-medium">
                {menuItem.map((item) => (
                    <Link key={item.id} to={item.link} className="hover:underline">
                        {item.name}
                    </Link>
                ))}
            </nav>
            
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-orange-700/80 z-50 transform transition-transform duration-300 ease-in-out rounded-tl-[50px] rounded-bl-[50px] 
                            ${open ? "translate-x-0" : "translate-x-full"} md:hidden`}
            >
                <button className="text-white text-3xl absolute top-5 right-5" onClick={handleOpenMenu}>
                    ×
                </button>
                <nav className="flex flex-col items-start mt-20 space-y-6 px-6">
                    {menuItem.map((item) => (
                        <div key={item.id} className="flex flex-col space-y-4 w-full text-center">
                            <Link
                                to={item.link}
                                className="text-white text-2xl m-auto hover:underline"
                                onClick={handleOpenMenu}
                            >
                                {item.name}
                            </Link>
                            <div className="w-full border-t-[1px] border-white"></div>
                        </div>
                    ))}
                    <p className="fixed bottom-8 left-0 right-0 text-center text-white">
                        &copy; Rede de Ensino Alfatec - 2024
                    </p>
                </nav>
            </div>
        </header>
    );
}
