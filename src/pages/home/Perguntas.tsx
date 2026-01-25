import CardFaq from "../../components/CardFaq";

export default function Perguntas() {
  const faq = [
    {
      id: 1,
      title: "Quais são as formas de pagamento?",
      description:
        "Aceitamos pagamento à vista com desconto, cartão de crédito em até 12x, boleto bancário e PIX. Também oferecemos condições especiais para empresas.",
    },
    {
      id: 2,
      title: "Os cursos têm certificado?",
      description:
        "Sim! Todos os nossos cursos possuem certificado de conclusão válido em todo o território nacional, reconhecido pelo MEC quando aplicável.",
    },
    {
      id: 3,
      title: "Vocês oferecem cursos online?",
      description:
        "Atualmente focamos em cursos presenciais para garantir a melhor experiência de aprendizado prático. Estamos desenvolvendo opções híbridas para o futuro.",
    },
    {
      id: 4,
      title: "Há estágio ou encaminhamento para emprego?",
      description:
        "Sim! Temos parcerias com diversas empresas da região e oferecemos apoio na elaboração de currículo e preparação para entrevistas. Muitos alunos são contratados ainda durante o curso.",
    },
  ];

  return (
    <section className="bg-white py-14">
      
      <div className="px-6 md:px-10 mb-12">
        
        <div className="flex flex-col items-center text-center space-y-5">
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-fuchsia-100 text-fuchsia-600 text-base md:text-lg font-medium shadow-md">
            Dúvidas frequentes
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            Perguntas{" "}
            <strong className="text-orange-500">Frequentes</strong>
          </h2>

          <p className="max-w-2xl font-medium text-lg md:text-xl text-gray-700">
            Encontre respostas para as principais dúvidas sobre nossos cursos.
          </p>
        </div>
      </div>

      <div className="flex justify-center px-6">
        <div className="w-full max-w-3xl space-y-4">
          {faq.map((item) => (
            <CardFaq
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}