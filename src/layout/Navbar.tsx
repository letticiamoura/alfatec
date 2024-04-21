import { useState } from "react"

import hum from "../assets/hum.png";

export default function Navbar() {

    const [ open, setOpen ] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return(
        <header className="p-10 h-24 z-50 absolute left-[1px] flex justify-around items-center">

            <img src={hum} alt="Menu" onClick={handleOpen} className="h-[8vh] absolute left-5"/>

            {open &&
            <h1 className="text-5xl text-center text-orange-500 font-serif font-extrabold">Alfatec</h1>}

            <nav className="hidden lg:block">
                <ul className="flex justify-around items-center">
                    <li className="text-2xl mr-10 text-white">
                        <a href="#home">Inicio</a>
                    </li>
                    <li className="text-2xl mr-10 text-white">
                        <a href="#about">A Alfatec</a>
                    </li>
                    <li className="text-2xl mr-10 text-white">
                        <a href="#courses">Cursos</a>
                    </li>
                    <li className="text-2xl mr-10 text-white">
                        <a href="#contact">Contato</a>
                    </li>
                </ul>
            </nav>

        </header>
    )
}