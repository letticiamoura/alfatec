import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-orange-500 text-white py-5">
            <div className="max-w-7xl mx-auto text-center">
                <div className="flex justify-center items-center space-x-5 mt-2">
                    <Link to="https://facebook.com.br" target="_blank">
                     <FaFacebook size={30}/>
                    </Link>
                    <Link to="https://instagram.com.br" target="_blank">
                     <FaInstagram size={30}/>
                    </Link>
                    <Link to="https://whatsapp.com.br" target="_blank">
                     <FaWhatsapp size={30}/>
                    </Link>
                </div>
                <p className="text-lg text-zinc-100">&copy;2024 Todos os direitos reservados</p>
            </div>
        </footer>
    );
}
