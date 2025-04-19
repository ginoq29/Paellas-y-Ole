import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logoImage from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#4a3728] text-[#f2e8dc] py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div>
            <img src={logoImage} alt="Paellas y Olé" className="h-16 mb-4" />
            <p className="text-sm">
              Llevamos a tu evento la tradición más entrañable de la cocina española con pasión, sabor y mucha experiencia.
            </p>
            <p className="mt-4 font-semibold">Síguenos:</p>
            <div className="flex space-x-3 mt-2">
              <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full p-2 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full p-2 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full p-2 transition-colors">
                <FaTiktok />
              </a>
              <a href="https://wa.me/51952942616" className="bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full p-2 transition-colors">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2 text-[#f8b400]" /> +51 952 942 616
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-[#f8b400]" /> info@paellasyole.es
              </li>
            </ul>
          </div>

          {/* Navegación rápida */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-[#f8b400]">Inicio</a></li>
              <li><a href="#ofrecemos" className="hover:text-[#f8b400]">¿Qué ofrecemos?</a></li>
              <li><a href="#paellas" className="hover:text-[#f8b400]">Nuestras paellas</a></li>
              <li><a href="#delicias" className="hover:text-[#f8b400]">Delicias de España</a></li>
              <li><a href="#contacto" className="hover:text-[#f8b400]">Contacto</a></li>
              <li><a href="#calendario" className="hover:text-[#f8b400]">Consulta fechas disponibles</a></li>
            </ul>
          </div>

          {/* Libro de reclamaciones */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Atención al cliente</h4>
            <a
              href="#"
              className="inline-block bg-[#f8b400] text-[#4a3728] font-bold px-4 py-2 rounded hover:bg-yellow-400 text-sm"
            >
              Libro de Reclamaciones
            </a>
          </div>
        </div>

        <div className="border-t border-[#f2e8dc]/30 mt-12 pt-6 text-center text-xs">
          &copy; {new Date().getFullYear()} Paellas y Olé. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
