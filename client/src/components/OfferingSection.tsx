import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaUtensils, FaHome, FaUsers } from "react-icons/fa";

export default function OfferingSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="ofrecemos" className="py-16 bg-[#f2e8dc]" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl font-['Playfair_Display'] font-bold text-[#4a3728] mb-8 relative inline-block"
            variants={itemVariants}
          >
            ¿Qué Ofrecemos?
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#f8b400]"></span>
          </motion.h2>

          <motion.p
            className="text-lg text-[#4a3728] mb-6"
            variants={itemVariants}
          >
            En <strong>Paellas y Olé</strong> creamos una experiencia inolvidable al más puro estilo mediterráneo.  
            Nuestras paellas tradicionales preparadas en vivo no son solo comida,  
            son un espectáculo de aromas, sabores y emociones pensado para celebrar, compartir y recordar.  
            Llevamos a tu mesa la tradición española más entrañable.
          </motion.p>

          <motion.p
            className="text-lg text-[#4a3728] mb-8"
            variants={itemVariants}
          >
            Nuestro servicio incluye todo lo necesario: ingredientes frescos, equipamiento completo  
            y la presencia de un chef profesional que cocina frente a tus invitados.  
            Tú solo encárgate de disfrutar. <strong>Porque una buena paella no se come solo… ¡se comparte!</strong>
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="text-[#cb2d3e] mb-4">
                <FaUtensils className="text-4xl mx-auto" />
              </div>
              <h3 className="text-xl font-['Playfair_Display'] font-semibold mb-3">
                Ingredientes Auténticos
              </h3>
              <p className="text-gray-600">
                Utilizamos arroz bomba, azafrán español y productos frescos del día para garantizar el auténtico sabor mediterráneo.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="text-[#cb2d3e] mb-4">
                <FaHome className="text-4xl mx-auto" />
              </div>
              <h3 className="text-xl font-['Playfair_Display'] font-semibold mb-3">
                Servicio a Domicilio
              </h3>
              <p className="text-gray-600">
                Llevamos la experiencia completa a tu evento o reunión familiar, donde nuestros chefs y cocineros prepararán las paellas frente a tus invitados.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="text-[#cb2d3e] mb-4">
                <FaUsers className="text-4xl mx-auto" />
              </div>
              <h3 className="text-xl font-['Playfair_Display'] font-semibold mb-3">
                Para Toda Ocasión
              </h3>
              <p className="text-gray-600">
                Ideal para celebraciones familiares, eventos corporativos o simplemente para disfrutar de una comida especial.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
