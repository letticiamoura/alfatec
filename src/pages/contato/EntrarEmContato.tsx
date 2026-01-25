import { useState } from "react";
import { BiPhone, BiUser } from "react-icons/bi";
import { BsSend } from "react-icons/bs";

export default function EntrarEmContato() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");

  const courses = [
    "Técnico em Administração",
    "Técnico em Eletrotécnica",
    "Técnico em Enfermagem",
    "Técnico em Informática",
    "Técnico em Logística",
    "Técnico em Segurança do Trabalho",
  ];

  const handleSend = () => {
    const message = `Olá! Me chamo ${name}. Meu WhatsApp é ${phone}. Tenho interesse no curso: ${course}.`;
    const url = `https://wa.me/5585994000447?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="pt-30 w-full bg-gradient-to-r from-purple-600 to-orange-500 py-16 px-4">
      <div className="mx-auto w-full max-w-xl rounded-3xl bg-white shadow-2xl">
        
        <div className="rounded-t-3xl px-6 py-5 text-center">
          <h2 className="text-4xl font-bold text-fuchsia-900">
            Quero me <span className="font-extrabold text-orange-400">Matricular</span>
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Preencha os dados e fale conosco pelo WhatsApp
          </p>
        </div>

        <div className="space-y-5 px-6 py-6">
            
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Nome Completo
            </label>
            <div className="flex items-center gap-3 rounded-2xl border border-gray-300 px-4 focus-within:border-orange-500">
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

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Telefone (WhatsApp)
            </label>
            <div className="flex items-center gap-3 rounded-2xl border border-gray-300 px-4 focus-within:border-orange-500">
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

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Curso de Interesse
            </label>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-orange-500"
            >
              <option value="" disabled>
                Selecione um curso
              </option>
              {courses.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="px-6 pb-6">
          <button
            onClick={handleSend}
            disabled={!name || !phone || !course}
            className="flex hover:cursor-pointer w-full items-center justify-center gap-2 rounded-2xl bg-green-500 py-4 text-sm font-semibold text-white transition hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <BsSend size={16} />
            Enviar via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}