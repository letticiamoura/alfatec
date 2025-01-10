import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";

interface ICourseLaoutProps {
    title: string;
    img: string;
}

export default function CourseLayout({img, title}: ICourseLaoutProps) {
    return(
        <div className="h-screen">
            <div>
                <Link to="/"><BsArrowLeftShort size={100} color="#fff" className="absolute p-5 z-10"/></Link>

                <img src={img} alt={title} className="md:h-[70vh] md:w-full md:object-cover brightness-50"/>
                
                <h1 className="font-extrabold text-orange-500 text-4xl font-sans text-center py-5">{title}</h1>
            </div>

        </div>
    )
}