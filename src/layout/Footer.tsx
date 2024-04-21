
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

function Footer() {

    return(

        <footer className="bg-orange-500 text-white p-8 text-center relative left-0 bottom-0 border-t-2">

            <ul className="flex justify-center list-none">

                 <li>

                    <a className="text-slate-white text-4xl hover:text-orange mr-16 text-center" href='https://www.instagram.com/alfatecoficial/' target="_blank"> <FaInstagram /> </a>

                </li>

                <li>
                    <a className="text-slate-white text-4xl hover:text-orange mr-16 text-center" href='https://wa.me/qr/WNHKFCYDO6EXJ1' target="_blank"> <FaWhatsapp /> </a>
                </li>

                <li>
                    
                    <a className="text-slate-white text-4xl hover:text-orange mr-12 text-center" href='https://www.facebook.com/rededeensinoalfatec?mibextid=kFxxJD' target="_blank"> <FaFacebook /> </a>

                </li>
                
            </ul>

            <p className="mt-2 text-xl font-medium"> 
                <span className="text-orange-200"> Rede de Ensino Alfatec</span> 
                <span className="font-bold text-orange-200"> &copy; </span>2024
            </p>

        </footer>
            
    )
}

export default Footer;