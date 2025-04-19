import { motion } from "framer-motion";
import logoImage from "../assets/logo.png";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <img 
        src="https://images.unsplash.com/photo-1515443961218-a51367888e4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
        alt="Paella española tradicional" 
        className="absolute w-full h-full object-cover"
      />

      <div className="container mx-auto px-4 z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex justify-center mb-6"
            variants={itemVariants}
          >
            <div className="p-3 rounded-lg">
              <img 
                src={logoImage} 
                alt="Paellas y Olé" 
                className="w-80 md:w-96 drop-shadow-lg"
              />
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <a 
              href="https://wa.me/51952942616?text=Hola,%20quiero%20reservar%20una%20paella%20con%20Paellas%20y%20Olé%20🍤🔥" 
              target="_blank"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-4 px-8 rounded-lg transition-colors inline-block text-lg"
            >
              ¡Reserva tu paella ahora!
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
