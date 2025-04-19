import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function DelightsSection() {
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

  return (
    <section id="delicias" className="py-16 bg-[#f2e8dc]" ref={sectionRef}>
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
            Delicias de España
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#f8b400]"></span>
          </motion.h2>
          <motion.p
            className="text-lg text-[#4a3728] mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            ¿Te encantó el sabor? <br />
            Pronto podrás llevar a casa alguno de nuestros productos Gourmet como:
          </motion.p>
          <motion.ul
            className="text-[#4a3728] text-lg space-y-2"
            variants={itemVariants}
          >
            <li>• Arroz especial para paella</li>
            <li>• Vinos españoles</li>
            <li>• Quesos y Charcutería española</li>
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
