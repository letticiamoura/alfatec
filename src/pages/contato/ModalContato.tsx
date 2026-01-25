import { useState } from "react";
import { BiPhone, BiUser, BiX } from "react-icons/bi";
import { BsSend } from "react-icons/bs";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
  courses: string[];
};

export default function ModalContato({ open, onClose, courses }: ContactModalProps) {
  
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [course, setCourse] = useState(courses[0] ?? "");

    if (!open) return null;

    const handleSend = () => {
        const message = `Olá! Me chamo ${name}. Meu WhatsApp é ${phone}. Tenho interesse no curso: ${course}.`;
        const url = `https://wa.me/5585994000447?text=${encodeURIComponent(
        message
        )}`;
        window.open(url, "_blank");
    };
    
    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 sm:items-center">
        
        <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl animate-in fade-in zoom-in duration-200">
            
            <div className="flex items-center justify-between rounded-t-3xl bg-gradient-to-r from-purple-600 to-orange-500 px-6 py-4 text-white">
            <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/20 p-2">
                <BsSend size={18} />
                </div>
                <h2 className="text-lg font-bold">Quero me Matricular</h2>
            </div>

            <button
                onClick={onClose}
                className="hover:cursor-pointer rounded-full p-1 transition hover:bg-white/20"
            >
                <BiX size={22} />
            </button>
            </div>
            
            <div className="space-y-5 px-6 py-6">
            
            {/* Nome */}
            <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                Nome Completo
                </label>
                <div className="flex items-center gap-3 rounded-2xl border border-gray-300 px-4 transition focus-within:border-orange-500">
                <BiUser className="text-gray-400" />
                <input
                    type="text"
                    placeholder="Digite seu nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full py-3 text-sm outline-none"
                />
                </div>
            </div>

            {/* Telefone */}
            <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                Telefone (WhatsApp)
                </label>
                <div className="flex items-center gap-3 rounded-2xl border border-gray-300 px-4 transition focus-within:border-orange-500">
                <BiPhone className="text-gray-400" />
                <input
                    type="tel"
                    placeholder="(85) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full py-3 text-sm outline-none"
                />
                </div>
            </div>

            {/* Curso */}
            <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                Curso de Interesse
                </label>
                <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-orange-500"
                >
                {courses.map((c) => (
                    <option key={c} value={c}>
                    {c}
                    </option>
                ))}
                </select>
            </div>
            </div>

            <div className="flex flex-col gap-3 px-6 pb-6 sm:flex-row">
            <button
                onClick={onClose}
                className="w-full hover:cursor-pointer rounded-2xl border border-orange-500 py-3 text-sm font-semibold text-orange-500 transition hover:bg-orange-50"
            >
                Cancelar
            </button>

            <button
                onClick={handleSend}
                disabled={!name || !phone}
                className="hover:cursor-pointer flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 py-3 text-sm font-semibold text-white transition hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
                <BsSend size={16} />
                Enviar via WhatsApp
            </button>
            </div>
        </div>
        </div>
    );
}