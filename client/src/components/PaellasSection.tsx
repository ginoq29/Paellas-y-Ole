import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { paellas } from "@/data/paellas";

export default function PaellasSection() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="paellas" className="py-16 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl font-['Playfair_Display'] font-bold text-[#4a3728] mb-8 relative inline-block"
            variants={itemVariants}
          >
            Nuestras Paellas
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#f8b400]"></span>
          </motion.h2>
          <motion.p
            className="text-lg text-[#4a3728] mb-12 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Disfruta nuestras paellas artesanales preparadas en vivo. Ingredientes frescos, tradición mediterránea y mucho sabor.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {paellas.map((paella) => (
            <motion.div
              key={paella.id}
              className="flex flex-col bg-[#f9f5f0] rounded-lg overflow-hidden shadow-md h-full"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="w-full h-64 overflow-hidden flex items-center justify-center">

                <img
                  src={paella.image}
                  alt={paella.title}
                  className="h-full object-contain"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-2xl font-['Playfair_Display'] font-semibold text-[#4a3728] mb-2">
                  {paella.title}
                </h3>
                <p className="text-gray-600 mb-4">{paella.description}</p>

                <div className="mt-auto text-[#cb2d3e] font-semibold">
                  <span>{paella.size}</span>
                  {!paella.evento && (
                    <span className="block">{paella.price} por persona</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
