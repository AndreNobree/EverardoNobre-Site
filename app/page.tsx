"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { inter, poppins } from "./fonts";


export default function Home() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const formatTelefone = (value: string) => {
    return value
      .replace(/\D/g, "")                 
      .replace(/^(\d{2})(\d)/, "($1) $2") 
      .replace(/(\d)(\d{4})$/, "$1-$2")   
      .slice(0, 15);                      
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mensagem = `
      Olá, gostaria de solicitar uma consultoria.

      Nome: ${nome}
      Email: ${email}
      Telefone: ${telefone}
    `.trim();

    const textoCodificado = encodeURIComponent(mensagem);

    const url = `https://api.whatsapp.com/send/?phone=5585999980870&text=${textoCodificado}&type=phone_number&app_absent=0`;

    window.open(url, "_blank");
  };



  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="relative min-h-screen bg-[#f5f5f5] overflow-x-hidden" id="home">
      <header className="w-full">
        <div className="h-12 bg-black text-white flex items-center">
          <div className="max-w-6xl w-full mx-auto px-6 flex justify-between items-center">
            <p className={`${inter.className} text-sm`}>
              (85) 9 9998-0870
            </p>

            <div className="flex gap-3">
              <a href="https://api.whatsapp.com/send/?phone=5585999980870&text=Olá+gostaria+de+Solicitar+uma+Consultoria%21&type=phone_number&app_absent=0" target="_blank"><img src="/whatsapp.png" className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/in/everardo-nobre-advogado-b93397140/" target="_blank"><img src="/linkedin.png" className="w-5 h-5" /></a>
              <a href="https://www.facebook.com/eveverardo.nobre?locale=pt_BR" target="_blank"><img src="/facebook.png" className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/everardonobreadv/" target="_blank"><img src="/instagram.png" className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div
        className={`
          fixed
          left-0
          w-full
          h-20
          bg-black/40
          backdrop-blur-sm
          text-white
          z-50
          transition-all
          duration-300
          ${scrolled ? "top-0" : "top-12"}
        `}
      >


          <div className="max-w-6xl w-full mx-auto px-6 h-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/icon.png" alt="Logo" className="w-14 h-10" />
              <div>
                <h2 className={`${poppins.className} font-bold`}>
                  Everardo Nobre
                </h2>
                <p className="text-xs opacity-80">Advogado</p>
              </div>
            </div>

            <nav className="hidden md:block">
              <ul className="flex gap-8 text-sm">
                <li><a href="#home">Home</a></li>
                <li><a href="#quemsomos">Quem Somos</a></li>
                <li><a href="#equipe">Equipe</a></li>
                <li><a href="#atuacao">Áreas</a></li>
                <li><a href="#consultoria">Contato</a></li>
              </ul>
            </nav>

            <button className="hidden md:block bg-[#1A357E] px-5 py-2 rounded text-sm cursor-pointer hover:bg-[#277BC3] transition"  onClick={() => window.location.href = "#consultoria"}>
              Fale Conosco
            </button>
          </div>
        </div>
      </header>


      <section className="relative h-[650px] pt-32">
        <Image
          src="/fundo.jpeg"
          alt="Fundo"
          fill
          priority
          className="object-cover brightness-75"
        />

        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className={`${poppins.className} text-3xl md:text-5xl font-bold mb-4`}>
            Resolvendo problemas, criando soluções
          </h1>

          <p className={`${inter.className} max-w-xl mb-6`}>
            Comprometidos com a excelência e a justiça em cada atendimento.
          </p>

          <button className="bg-[#1A357E] hover:bg-[#277BC3] transition px-6 py-3 rounded cursor-pointer font-light" onClick={() => window.location.href = "#consultoria"}>
            Agende uma Consultoria
          </button>
        </div>
      </section>

      <section className="relative z-20 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className={`${poppins.className} text-3xl font-bold mb-6  text-[#1A357E] `}>
            Entre em Contato
          </h2>
          <p className={`${inter.className} max-w-2xl mx-auto mb-8 text-[#1A357E] `}>
            Estamos prontos para ajudar você a resolver seus problemas jurídicos. Entre em contato conosco para agendar uma consultoria ou esclarecer suas dúvidas.
          </p>
          <button className="bg-[#1A357E] text-[#fff] px-6 py-3 rounded cursor-pointer font-light" onClick={() => window.location.href = "#consultoria"}>
            Fale Conosco
          </button>
        </div>
      </section>

      <section className="relative z-20 bg-white py-20 px-6 pt-20" id="quemsomos">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className={`${poppins.className} text-3xl font-bold text-[#606C6A] mb-6`}>
              Quem Somos
            </h2>

            <p className={`${inter.className} text-gray-600 mb-4 leading-relaxed`}>
              Somos um escritório de Advocacia atuando <strong className="text-[#1A357E]">desde 1989</strong>,
              com compromisso, ética e excelência na defesa dos interesses de nossos clientes.
              Oferecemos soluções jurídicas eficientes, com total transparência e foco em resultados sólidos.
            </p>

            <p className={`${inter.className} text-gray-600 leading-relaxed`}>
              Atuamos nas áreas <strong className="text-[#1A357E]">criminal, juri, trabalhista, cível, empresarial e consumidor</strong>,
              sempre buscando a melhor estratégia para cada caso, com foco na satisfação
              e confiança de nossos clientes.
            </p>
          </div>

          <div className="bg-[#f5f5f5] p-8 rounded shadow">
            <h3 className={`${poppins.className} text-xl font-semibold text-[#1A357E] mb-4`}>
              Nossa Missão
            </h3>

            <p className={`${inter.className} text-gray-600 leading-relaxed`}>
              Atuar com responsabilidade e dedicação, promovendo a justiça e construindo
              relações duradouras baseadas na confiança, no respeito e na ética profissional.
            </p>
          </div>

        </div>
      </section>
      <section className="relative z-20 bg-white py-20 px-6" id="equipe">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className={`${poppins.className} text-3xl font-bold text-[#606C6A] mb-6`}>
              Fundador
            </h2>

            <p className={`${inter.className} text-gray-600 mb-4 leading-relaxed`}>
              <strong className="text-[#1A357E]">Everardo Nobre</strong> 
              <span className="text-sm text-gray-500"> (OAB/CE 7979)</span> é o fundador do escritório e
              possui uma trajetória sólida na advocacia, marcada pela seriedade,
              comprometimento e excelência técnica.
            </p>

            <p className={`${inter.className} text-gray-600 mb-4 leading-relaxed`}>
              Ao longo de sua carreira, já atuou em <strong className="text-[#1A357E]">mais de 10 mil causas</strong>,
              oferecendo assessoria jurídica estratégica e soluções eficazes para
              clientes em diferentes áreas do Direito.
            </p>

            <p className={`${inter.className} text-gray-600 leading-relaxed`}>
              Sua liderança é pautada pela ética, transparência e foco em resultados,
              valores que sustentam o crescimento e a credibilidade do escritório.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/perfil.png"
              alt="Everardo Nobre - Advogado"
              width={400}
              height={400}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>

        </div>
      </section>


      <section className="relative z-20 bg-[#1A357E] text-white py-20 px-6" id="atuacao">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className={`${poppins.className} text-3xl font-bold mb-6`}>
            Áreas de Atuação
          </h2>
          <p className={`${inter.className} max-w-2xl mx-auto mb-8`}>
            Nosso escritório oferece uma ampla gama de serviços jurídicos para atender às diversas necessidades de nossos clientes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Direito Criminal",
              "Tribunal do Juri",
              "Direito Trabalhista",
              "Direito Cível",
              "Direito Empresarial",
              "Direito do Consumidor",
            ].map((area) => (
              <div key={area} className="bg-white bg-opacity-20 p-6 rounded shadow hover:bg-opacity-30  hover: transition cursor-pointer">
                <h3 className={`${poppins.className} text-xl font-semibold text-[#1A357E]`}>
                  {area}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 bg-white py-20 px-6" id="consultoria">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className={`${poppins.className} text-3xl font-bold mb-6 text-[#1A357E] `}>
            Motivo para nos escolher
          </h2>
          <p className={`${inter.className} max-w-2xl mx-auto mb-8 text-[#1A357E]`}>
            Escolher o escritório de advocacia certo é crucial para garantir que seus interesses sejam protegidos e que você receba a melhor representação possível.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Online e Presencial",
              "Formação Qualificada",
              "Experiência Comprovada",
              "Equipe Especializada",
              "Atendimento Personalizado",
              "Resultados Eficientes",
            ].map((motivo) => (
              <div key={motivo} className="bg-[#f5f5f5] p-6 rounded shadow hover:bg-gray-100 transition cursor-pointer">
                <h3 className={`${poppins.className} text-xl font-semibold text-[#1A357E]`}>
                  {motivo}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 bg-[#1A357E] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <form onSubmit={handleSubmit}>
            <h2 className={`${poppins.className} text-2xl font-bold mb-10 text-center text-[#fff]`}>
              Solicite uma Consultoria
            </h2>

            <div className="flex flex-col gap-4 2xl:flex-row 2xl:gap-4">
              <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                className="flex-1 p-3 border border-gray-300 rounded text-[#fff]"
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 p-3 border border-gray-300 rounded text-[#fff]"
              />

              <input
                type="tel"
                placeholder="Telefone"
                value={telefone}
                onChange={(e) => setTelefone(formatTelefone(e.target.value))}
                required
                className="flex-1 p-3 border border-gray-300 rounded text-[#fff]"
              />


            </div>

            <button
              type="submit"
              className={`${poppins.className} mt-10 w-full bg-[#fff] hover:bg-[#fff] text-[#1A357E] font-light py-3 px-6 rounded cursor-pointer transition`}
            >
              Solicitar Consultoria
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-black text-white py-6">
        <div className="max-w-6xl mx-auto text-center text-sm">
          &copy; {new Date().getFullYear()} Everardo Nobre - Advogado. Todos os direitos reservados.
        </div>
      </footer>

    </div>
  );
}
