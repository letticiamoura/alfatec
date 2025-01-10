import enf from "../assets/enf.jpg";
import ele from "../assets/ele.jpg";
import adm from "../assets/adm.jpg";
import log from "../assets/log1.jpg";
import sdt from "../assets/sdt.jpg";

import CardCourse from "../components/CardCourse";

export default function Courses() {
    const courses = [
        { id: 1, img: adm, name: "Administração", link: "/administracao" },
        { id: 2, img: ele, name: "Eletrotécnica", link: "/eletrotecnica" },
        { id: 3, img: enf, name: "Enfermagem", link: "/enfermagem" },
        { id: 4, img: log, name: "Logística", link: "/logistica" },
        { id: 7, img: sdt, name: "Segurança do Trabalho", link: "/sdt" },
    ];

    return (
        <section className="h-auto px-5 py-10 bg-zinc-100">
            <h1 className="pb-8 text-3xl font-bold text-orange-500 text-center md:text-4xl">
                Venha conhecer <br />
                <span className="text-4xl font-extrabold md:text-5xl">nossos cursos</span>
            </h1>

            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {courses.map((course) => (
                    <CardCourse
                        key={course.id}
                        img={course.img}
                        title={course.name}
                        link={course.link}
                    />
                ))}
            </div>
        </section>
    );
}