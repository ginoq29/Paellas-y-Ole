import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const pulseAnimation: any = {
    initial: { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.7)' },
    animate: {
      boxShadow: ['0 0 0 0 rgba(37, 211, 102, 0.7)', '0 0 0 10px rgba(37, 211, 102, 0)', '0 0 0 0 rgba(37, 211, 102, 0)'],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  return (
    <section id="contacto" className="py-16 bg-[#cb2d3e]" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="p-8 md:p-12" variants={itemVariants}>
            {/* Título centrado */}
            <div className="text-center mb-12 relative">
              <motion.h2
                className="text-4xl font-['Playfair_Display'] font-bold text-[#4a3728] mb-2 inline-block relative"
                variants={itemVariants}
              >
                Contacta con Nosotros
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#f8b400] mt-2"></span>
              </motion.h2>
            </div>

            {/* Dos columnas */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {/* Columna izquierda - mensaje */}
              <div className="bg-[#f9f5f0] p-8 rounded-lg shadow-sm">
  <p className="text-lg md:text-xl text-[#4a3728] leading-relaxed font-['Playfair_Display'] italic">
    ¿Listo para disfrutar de la auténtica paella española? <br />
    <span className="block mt-2">Contáctanos y te ayudaremos a crear una experiencia inolvidable para tu evento.</span>
  </p>
</div>

              {/* Columna derecha - datos de contacto */}
              <div className="bg-[#f9f5f0] p-6 rounded-lg shadow-sm space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#cb2d3e] rounded-full p-2 mr-4 flex-shrink-0">
                    <FaPhone className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Teléfono</h4>
                    <p>+51 952 942 616</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#cb2d3e] rounded-full p-2 mr-4 flex-shrink-0">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p>info@paellasyole.es</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#cb2d3e] rounded-full p-2 mr-4 flex-shrink-0">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Ubicación</h4>
                    <p>Servicio a domicilio en toda la ciudad</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Botón de WhatsApp y mensaje final */}
            <div className="text-center">
              <motion.a
                href="https://wa.me/51952942616?text=Hola%20Paellas%20y%20Olé,%20estoy%20interesado%20en%20su%20servicio%20de%20paellas%20para%20un%20evento."
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                initial="initial"
                animate="animate"
                variants={pulseAnimation}
              >
                <FaWhatsapp className="text-xl mr-2" /> Contáctanos por WhatsApp
              </motion.a>

              <div className="mt-6">
                <h3 className="text-3xl font-['Dancing_Script'] text-[#cb2d3e] mb-2">¡Te esperamos!</h3>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
