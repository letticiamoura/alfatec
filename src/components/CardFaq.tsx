import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

type ICardFaqProps = {
  title: string;
  description: string;
};

export default function CardFaq({ title, description }: ICardFaqProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        w-full
        rounded-2xl
        border border-gray-200
        bg-white
        p-5 md:p-6
        shadow-sm
        transition-all
        duration-300
        hover:shadow-md
      "
    >
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="
          flex w-full items-center justify-between
          gap-4 text-left
        "
      >
        <h3
          className={`
            text-base md:text-lg font-semibold
            transition-colors duration-300
            ${open ? "text-orange-500" : "text-gray-900"}
          `}
        >
          {title}
        </h3>

        <FiChevronDown
          className={`
            min-w-[24px] text-2xl
            transition-transform duration-300
            ${open ? "rotate-180 text-orange-500" : "text-gray-400"}
          `}
        />
      </button>

      {/* Content */}
      <div
        className={`
          grid transition-all duration-300 ease-in-out
          ${open ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}
        `}
      >
        <div className="overflow-hidden">
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}