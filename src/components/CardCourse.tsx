import { Link } from "react-router-dom";

interface ICardCourseProps {
    img: string;
    title: string;
    link: string;
}

export default function CardCourse({img, title, link}:ICardCourseProps) {
    return(
        <Link to={link} className="relative rounded-md h-40 w-2/2 hover:scale-105 md:flex md:flex-row md:h-[50vh] md:w-[20vw]">
                <img src={img} alt={`Curso de ${title}`} className="w-full object-cover h-40 md:h-auto" />
                <h1 className="font-serif absolute inset-0 flex items-center justify-center text-white hover:transition-colors hover:text-orange-500 text-2xl font-bold bg-black bg-opacity-50">
                    {title}
                </h1>
        </Link>
    )
}