import Image from "next/image";
import { inter, poppins } from "./fonts";


export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#f5f5f5] overflow-x-hidden" id="home">
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="h-12 bg-black/60 text-white flex items-center">
          <div className="max-w-6xl w-full mx-auto px-6 flex justify-between items-center">
            <p className={`${inter.className} text-sm`}>
              (85) 9 9998-0870
            </p>

            <div className="flex gap-3">
              <img src="/whatsapp.png" className="w-5 h-5" />
              <img src="/linkedin.png" className="w-5 h-5" />
              <img src="/facebook.png" className="w-5 h-5" />
              <img src="/instagram.png" className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="h-20 bg-black/40 backdrop-blur-sm text-white">
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
                <li className="hover:text-gray-300 cursor-pointer"><a href="#home" className="">Home</a></li>
                <li className="hover:text-gray-300 cursor-pointer"><a href="#quemsomos" className="">Quem Somos</a></li>
                <li className="hover:text-gray-300 cursor-pointer">Áreas</li>
                <li className="hover:text-gray-300 cursor-pointer">Equipe</li>
                <li className="hover:text-gray-300 cursor-pointer">Contato</li>
              </ul>
            </nav>

            <button className="hidden md:block bg-[#277BC3] hover:bg-[#277BC3] transition px-5 py-2 rounded text-sm">
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

          <button className="bg-[#277BC3] hover:bg-[#277BC3] transition px-6 py-3 rounded">
            Agende uma Consultoria
          </button>
        </div>
      </section>

      <section className="relative z-30 -mt-24 pb-20">
        <div className="
          absolute
          top-5/5
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          z-20
          w-[50%]
          2xl:w-3/4
          bg-white
          bg-opacity-90
          p-6
          rounded
          shadow-lg
          mt-25
        ">
          <form>
            <h2 className={`${poppins.className} text-2xl font-bold mb-4 text-center text-[#606C6A]`}>
              Solicite uma Consultoria
            </h2>

            <div className="flex flex-col gap-4 2xl:flex-row 2xl:gap-4">
              <input
                type="text"
                placeholder="Nome"
                className="flex-1 p-3 border border-gray-300 rounded text-[#606C6A]"
              />

              <input
                type="email"
                placeholder="Email"
                className="flex-1 p-3 border border-gray-300 rounded text-[#606C6A]"
              />

              <input
                type="tel"
                placeholder="Telefone"
                className="flex-1 p-3 border border-gray-300 rounded text-[#606C6A]"
              />
            </div>

            <button
              type="submit"
              className={`${poppins.className} mt-4 w-full bg-[#277BC3] hover:bg-[#277BC3] text-white font-light py-3 px-6 rounded`}
            >
              Solicitar Consultoria
            </button>
          </form>
        </div>

        

      </section>
      <section className="relative z-20 bg-white py-20 px-6 pt-80" id="quemsomos">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className={`${poppins.className} text-3xl font-bold text-[#606C6A] mb-6`}>
              Quem Somos
            </h2>

            <p className={`${inter.className} text-gray-600 mb-4 leading-relaxed`}>
              Somos um escritório de Advocacia atuando <strong className="text-[#277BC3]">desde 1989</strong>,
              com compromisso, ética e excelência na defesa dos interesses de nossos clientes.
              Oferecemos soluções jurídicas eficientes, com total transparência e foco em resultados sólidos.
            </p>

            <p className={`${inter.className} text-gray-600 leading-relaxed`}>
              Atuamos nas áreas <strong className="text-[#277BC3]">criminal, juri, trabalhista, cível, empresarial e consumidor</strong>,
              sempre buscando a melhor estratégia para cada caso, com foco na satisfação
              e confiança de nossos clientes.
            </p>
          </div>

          <div className="bg-[#f5f5f5] p-8 rounded shadow">
            <h3 className={`${poppins.className} text-xl font-semibold text-[#277BC3] mb-4`}>
              Nossa Missão
            </h3>

            <p className={`${inter.className} text-gray-600 leading-relaxed`}>
              Atuar com responsabilidade e dedicação, promovendo a justiça e construindo
              relações duradouras baseadas na confiança, no respeito e na ética profissional.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
