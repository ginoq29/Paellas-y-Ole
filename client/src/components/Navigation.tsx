import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
// Logo eliminado, ya no se importa

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const menuItems = ["inicio", "ofrecemos", "paellas", "delicias", "contacto", "calendario"];

  const getLabel = (id: string) => {
    switch (id) {
      case "inicio": return "Inicio";
      case "ofrecemos": return "¿Qué Ofrecemos?";
      case "paellas": return "Nuestras Paellas";
      case "delicias": return "Delicias de España";
      case "contacto": return "Contacto";
      case "calendario": return "Fechas disponibles";
      default: return id;
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            {/* Logo eliminado */}
          </div>

          <div className="hidden md:flex space-x-8">
            {menuItems.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavLinkClick(e, id)}
                className="font-medium text-[#4a3728] hover:text-[#cb2d3e] transition-colors"
              >
                {getLabel(id)}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-[#cb2d3e] focus:outline-none">
              <FaBars className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: mobileMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-3 space-y-3 border-t border-gray-200">
            {menuItems.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavLinkClick(e, id)}
                className="block font-medium text-[#4a3728] hover:text-[#cb2d3e] transition-colors py-2"
              >
                {getLabel(id)}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
