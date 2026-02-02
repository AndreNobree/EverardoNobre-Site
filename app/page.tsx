import Image from "next/image";
import  { inter, poppins } from "./fonts";


export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#f5f5f5]">
      
      <div className="absolute top-0 left-0 w-full h-16 z-20 flex items-center px-6 text-white border-b border-gray-400 bg-black/20">
        <div className="w-70% h-auto m-auto flex">
          <p className={`${inter.className} mr-120`}>
            (85) 9 9998-0870
          </p>
          <p className="font ml-120">
            <img src="/whatsapp.png" alt="whatsapp Icon" className="inline-block w-6 h-6 mr-4" />
            <img src="/linkedin.png" alt="linkedin Icon" className="inline-block w-6 h-6 mr-4" />
            <img src="/facebook.png" alt="facebook Icon" className="inline-block w-6 h-6 mr-4" />
            <img src="/instagram.png" alt="instagram Icon" className="inline-block w-6 h-6 mr-4" />
          </p>
        </div>
      </div>
      
      <div className="absolute top-25 left-0 w-full h-16 z-20 flex items-center px-6 text-white justify-between">
        <div className="h-auto flex ml-10">
           <img src="/icon.png" alt="Logo" className="w-15 h-12"/>
           <h2 className={`${poppins.className} ml-4 text-xl font-bold`}>Everardo Nobre<br></br><p className="text-sm font-light">Advogado</p></h2>
        </div>
        <div>
          <nav>
            <ul className="flex space-x-8">
              <li className={`${inter.className} hover:text-gray-300 cursor-pointer`}>Home</li>
              <li className={`${inter.className} hover:text-gray-300 cursor-pointer`}>Quem Somos</li>
              <li className={`${inter.className} hover:text-gray-300 cursor-pointer`}>Áreas de Atuação</li>
              <li className={`${inter.className} hover:text-gray-300 cursor-pointer`}>Equipe</li>
              <li className={`${inter.className} hover:text-gray-300 cursor-pointer`}>Contato</li>
            </ul>
          </nav>
        </div>
        <div>
          <button className={`${poppins.className} bg-[#606C6A] hover:bg-[#277BC3] text-white font-light py-3 px-5 rounded mr-10  cursor-pointer`}>Fale Conosco</button>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center text-white">
        <h1 className={`${poppins.className} text-4xl md:text-6xl font-bold mb-4`}>Resolvendo problemas, criando soluções</h1>
        <p className={`${inter.className} text-lg md:text-2xl mb-6`}>Comprometidos com a excelência e a justiça</p>
        <button className={`${poppins.className} bg-[#606C6A] hover:bg-[#277BC3] text-white font-light py-3 px-6 rounded  cursor-pointer`}>Agende uma Consultoria</button>
      </div>

      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-3/4 md:w-1/2 bg-white bg-opacity-90 p-6 rounded shadow-lg mt-20">
        <form action="">
          <h2 className={`${poppins.className} text-2xl font-bold mb-4 text-center text-[#606C6A]`}>Solicite uma Consultoria</h2>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              placeholder="Nome"
              className="flex-1 mb-4 md:mb-0 p-3 border border-gray-300 rounded text-[#606C6A]"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 mb-4 md:mb-0 p-3 border border-gray-300 rounded text-[#606C6A]"
            />
            <input
              type="tel"
              placeholder="Telefone"
              className="flex-1 mb-4 md:mb-0 p-3 border border-gray-300 rounded text-[#606C6A]"
            />
          </div>
          <button
            type="submit"
            className={`${poppins.className} mt-4 w-full bg-[#606C6A] hover:bg-[#277BC3] text-white font-light py-3 px-6 rounded cursor-pointer`}
          >
            Solicitar Consultoria
          </button>
        </form>
      </div>

      <Image
        src="/fundo.jpeg"
        alt="Fundo"
        width={1920}
        height={600}
        className="w-full h-[800px] object-cover z-0  brightness-65"
        priority
      />

    </div>
  );
}
