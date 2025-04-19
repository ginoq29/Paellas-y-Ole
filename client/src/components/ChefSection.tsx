import { motion } from "framer-motion";
import chefImage from "@/assets/chef-gino.jpg";

export default function ChefSection() {
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

  return (
    <section id="chef" className="py-16 bg-[#f9f5f0] mb-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src={chefImage}
            alt="Chef Gino"
            className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
            variants={itemVariants}
          />
          <motion.div className="md:w-1/2 text-[#4a3728]" variants={itemVariants}>
            <h3 className="text-3xl font-bold font-['Playfair_Display'] mb-4">
              Sobre el Fundador
            </h3>
            <p className="mb-4">
              Gino Alejandro Quevedo Goytizolo es chef profesional y creador de Paellas y Olé. Vivió más de 15 años en Europa, donde se sumergió en la cultura mediterránea y su gastronomía. Su conexión con la paella va más allá de la técnica: es emocional. Comprende su esencia como símbolo de encuentro, tradición y celebración.
            </p>
            <p className="mb-4">
              Desde su regreso al Perú, lleva a cada evento la experiencia de compartir una paella como se vive en una mesa mediterránea: sin artificios, con respeto por el producto y la pasión de quien cocina para unir, no solo para alimentar. Su misión es clara: brindar un servicio impecable que conecte culturas, despierte recuerdos y transforme cada reunión en un momento inolvidable.
 </p>
            <p className="mb-4">
Porque una buena paella no se come solo… se comparte.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
