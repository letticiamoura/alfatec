import enf from "../assets/enf.jpg";
import ele from "../assets/ele.jpg";
import adm from "../assets/adm.jpg";
import log from "../assets/log1.jpg";
import sdt from "../assets/sdt.jpg";

import CardCourse from "../components/CardCourse";

export default function Courses() {

    const courses = [
        {id: 1, img: adm, name: "Administração", link: "/adm"},
        {id: 2, img: ele, name: "Eletrotécnica", link: "/elet"},
        {id: 3, img: enf, name: "Enfermagem", link: "/enf"},
        {id: 4, img: log, name: "Logística", link: "/log"},
        {id: 5, img: sdt, name: "Segurança do Trabalho", link: "/sdt"}
    ]
    return (
        <section className="h-auto px-5 py-5 bg-zinc-100">

            <h1 className="pb-5 text-3xl font-bold text-orange-500 md:text-center md:text-4xl">Venha conhecer <br />
                <span className="text-4xl font-extrabold md:text-5xl">nossos cursos</span>
            </h1>
            
            <div className="flex flex-col md:flex-row md:space-x-20 md:overflow-x-scroll">
                { 
                    courses.map((course) => (
                        <div key={course.id} className="py-3 w-full">
                            <CardCourse
                                img={course.img}
                                title={course.name}
                                link={course.link}
                            />
                        </div>
                    ))
                }
            </div>

        </section>
    );
}
