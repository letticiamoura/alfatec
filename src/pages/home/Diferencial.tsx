import { BsFillLaptopFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { PiCertificateBold } from "react-icons/pi";
import Card from "../../components/Card";

export default function Diferencial() {

    const cardDiferencial = [
        {
            id: 0, 
            title:"Professores Qualificados", 
            icon: <HiMiniAcademicCap />, 
            description:"Instrutores com experiência de mercado e didática comprovada."
        },
        {
            id: 1, 
            title:"Infraestrutura Moderna", 
            icon: <BsFillLaptopFill />, 
            description:"Laboratórios equipados com tecnologia de ponta para sua formação"
        },
        {
            id: 2, 
            title:"Horários Flexíveis", 
            icon: <FaClock />, 
            description:"Turmas manhã, tarde e noite para você estudar quando puder."
        },
        {
            id: 3, 
            title:"Certificação Reconhecida", 
            icon: <PiCertificateBold  />, 
            description:"Certificados válidos em todo o território nacional."
        },
    ]

    return (
        <section className="relative">
        
            <div
                className="
                absolute -top-19 left-0 w-full h-32 bg-gradient-to-b from-transparent via-white to-white pointer-events-none"
            />
            <div className="relative bg-white px-6 md:px-10 py-10">
                <div className="flex flex-col items-center space-y-5 justify-center">
                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-fuchsia-100 text-fuchsia-600 text-base md:text-lg font-medium shadow-md">
                    Por que escolher a Alfatec?
                </div>

                <h2 className="text-4xl font-bold">Nossos <strong className="text-orange-500">Diferenciais</strong></h2>

                <p className="font-medium text-xl text-gray-800">Tudo o que você precisa para construir uma carreira de sucesso está aqui.</p>
                </div>

            </div>

            <div
            className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-6
                px-5
                md:px-10
                max-w-6xl
                mx-auto
            "
            >
            {cardDiferencial.map((card) => (
                <div
                key={card.id}
                className="group w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                    <Card
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                    />
                </div>
            ))}
            </div>

        </section>
    );
}
