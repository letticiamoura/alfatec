import { useState } from "react";
import { BiSearch } from "react-icons/bi";

import curso from "../../assets/course-admin.jpg";
import CardCurso from "../../components/CardCurso";
import ModalContato from "../contato/ModalContato";

export default function Cursos() {
    
    const [search, setSearch] = useState("");
    
    const [open, setOpen] = useState(false);
    const [cursoSelecionado, setCursoSelecionado] = useState<string | null>(null);

    const cursos = [
        {
            id: 1,
            titulo: "Técnico em Eletrotécnica",
            categoria: "Eletrotécnica",
            preco: 450,
            periodo: "Manhã ou Noite",
            meses: 18,
            image: curso,
            description: "Formação voltada para instalações elétricas, manutenção e sistemas industriais, com forte base prática."
        },
        {
            id: 2,
            titulo: "Técnico em Enfermagem",
            categoria: "Enfermagem",
            preco: 480,
            periodo: "Manhã ou Noite",
            meses: 24,
            image: curso,
            description: "Capacitação completa para atuação na área da saúde, unindo teoria, prática e preparo para o cuidado humanizado."
        },
        {
            id: 3,
            titulo: "Técnico em Administração",
            categoria: "Administração",
            preco: 420,
            periodo: "Manhã ou Noite",
            meses: 18,
            image: curso,
            description: "Formação voltada para gestão, finanças e rotinas administrativas."
        },
        {
            id: 4,
            titulo: "Técnico em Logística",
            categoria: "Logística",
            preco: 430,
            periodo: "Manhã ou Noite",
            meses: 18,
            image: curso,
            description: "Foco em cadeia de suprimentos, transporte e gestão de estoque."
        },
        {
            id: 5,
            titulo: "Técnico em Segurança do Trabalho",
            categoria: "Segurança do Trabalho",
            preco: 460,
            periodo: "Manhã ou Noite",
            meses: 18,
            image: curso,
            description: "Formação para prevenção de riscos e promoção da segurança laboral."
        },
        {
            id: 6,
            titulo: "Técnico em Informática",
            categoria: "Informática",
            preco: 400,
            periodo: "Manhã ou Noite",
            meses: 18,
            image: curso,
            description: "Aprenda programação, redes, manutenção e sistemas computacionais.",
        },
    ];

    const cursosFiltrados = cursos.filter((curso) =>
        `${curso.titulo} ${curso.categoria}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    return (
        <section className="relative bg-gray-50 pt-20">
            <div className="mx-auto max-w-7xl px-5 py-10">
            
                <div className="flex flex-col items-center space-y-4 text-center">
                    <span className="rounded-full bg-fuchsia-100 px-6 py-2 text-sm font-semibold text-fuchsia-600 shadow">
                        Catálogo de Cursos
                    </span>

                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Nossos <span className="text-orange-500">Cursos</span>
                    </h2>

                    <p className="max-w-2xl text-base text-gray-700 sm:text-lg">
                        Escolha o curso ideal para sua carreira. Todos com certificado
                        reconhecido e metodologia prática.
                    </p>

                    <div className="mt-4 flex w-full max-w-md items-center gap-2 rounded-2xl border border-gray-300 bg-white px-4 py-3 shadow-sm focus-within:border-orange-500">
                        <BiSearch className="text-gray-500" size={20} />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Buscar por curso ou categoria"
                            className="w-full outline-none text-sm"
                        />
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        cursosFiltrados.length > 0 ? (
                            cursosFiltrados.map((curso) => (
                                <CardCurso
                                    key={curso.id}
                                    categoria={curso.categoria}
                                    titulo={curso.titulo}
                                    descricao={curso.description}
                                    preco={curso.preco}
                                    periodo={curso.periodo}
                                    meses={curso.meses}
                                    imageUrl={curso.image}
                                    onClick={() => {
                                        setCursoSelecionado(curso.titulo);
                                        setOpen(true);
                                    }}
                                />
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500">
                            Nenhum curso encontrado 
                        </p>
                    )}
                </div>
            </div>
            <ModalContato
                open={open}
                onClose={() => setOpen(false)}
                courses={
                    cursoSelecionado
                    ? [cursoSelecionado]
                    : cursos.map((c) => c.titulo)
                }
            />
        </section>
    );
}
