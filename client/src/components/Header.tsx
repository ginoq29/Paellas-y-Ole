import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    <header className="relative bg-[#cb2d3e]">
      <div className="container mx-auto px-4 py-3 flex justify-end space-x-4">
        <a
          href="https://facebook.com/tu-perfil"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
        >
          <FaFacebookF className="text-white" />
        </a>
        <a
          href="https://instagram.com/tu-perfil"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
        >
          <FaInstagram className="text-white" />
        </a>
        <a
          href="https://tiktok.com/tu-perfil"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
        >
          <FaTiktok className="text-white" />
        </a>
        <a
          href="https://wa.me/51952942616?text=Hola%20Paellas%20y%20Olé,%20quiero%20escribirles%20por%20WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
        >
          <FaWhatsapp className="text-white" />
        </a>
      </div>
    </header>
);
}
