import { BiCalendar } from "react-icons/bi";
import { CiMonitor } from "react-icons/ci";

export type CourseCardProps = {
  categoria: string;
  titulo: string;
  descricao: string;
  preco: number;
  periodo: string;
  meses: number;
  imageUrl: string;
  onClick?: () => void;
};

export default function CardCurso({ categoria, titulo, descricao, preco, periodo, meses, imageUrl, onClick }: CourseCardProps) {
    
    return (
        <div className="group flex h-full max-w-md flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        
            <div className="relative">
                <img
                    src={imageUrl}
                    alt={titulo}
                    className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-48"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"/>
                    <span className="absolute right-4 top-4 rounded-full bg-orange-500/90 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
                        {categoria}
                    </span>
                </div>

                <div className="flex flex-1 flex-col space-y-4 p-5 sm:p-6">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                            {titulo}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-gray-600">
                            {descricao}
                        </p>
                    </div>

                    <div className="flex items-center gap-2 text-2xl font-extrabold text-orange-500">
                        R$ {preco.toFixed(2)}
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <CiMonitor className="h-4 w-4 text-purple-600" />
                            <span>{periodo}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <BiCalendar className="h-4 w-4 text-purple-600" />
                            <span>{meses} meses</span>
                        </div>
                    </div>
                    
                    <button
                        onClick={onClick}
                        className="mt-auto w-full rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:from-orange-600 hover:to-orange-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 hover:cursor-pointer"
                    >
                        Tenho Interesse
                    </button>
                </div>

            </div>
    );
}