import type { ReactNode } from "react";

type CardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function Card({ icon, title, description }: CardProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      
      {/* Ícone */}
      <div
        className="
          mb-4 flex items-center justify-center
          h-12 w-12 md:h-14 md:w-14
          rounded-xl
          bg-purple-100 text-purple-600
          transition-all duration-300
          group-hover:bg-gradient-to-br
          group-hover:from-purple-500
          group-hover:to-orange-500
          group-hover:text-white
        "
      >
        <span className="text-xl md:text-2xl">
          {icon}
        </span>
      </div>

      {/* Título */}
      <h3 className="mb-2 text-lg md:text-xl font-semibold text-gray-900">
        {title}
      </h3>

      {/* Descrição */}
      <p className="text-sm md:text-base text-center text-gray-600 leading-relaxed">
        {description}
      </p>

    </div>
  );
}