import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBrain, FaCogs, FaChartLine, FaSearch } from "react-icons/fa";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-center px-12 pt-10 lg:pt-10 mb-5">
      {/* Texto principal */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : -50 }}
        transition={{ duration: 0.8 }}
        className="text-left lg:w-2/3 lg:pr-8"
      >
        <motion.h1
          className="font-bold text-3xl md:text-5xl lg:text-5xl leading-tight text-white mb-4"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          Optimización Inteligente con{" "}
          <span className="text-nilton-neon">Algoritmos Evolutivos</span>
        </motion.h1>

        <motion.p
          className="font-semibold text-base md:text-xl lg:text-xl text-gray-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Explora el poder del <span className="text-nilton-neon">Hill Climbing</span> y los{" "}
          <span className="text-nilton-neon">Algoritmos Genéticos</span> para resolver problemas complejos
          en entornos dinámicos.
        </motion.p>

        <div className="mt-10 space-y-6">
          <h2 className="font-bold text-2xl text-white mb-4">
            Características Clave
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center gap-4"
            >
              <FaBrain className="text-nilton-blue text-2xl" />
              <p className="text-gray-300">Inspiración biológica para resolver desafíos complejos</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex items-center gap-4"
            >
              <FaCogs className="text-nilton-neon text-2xl" />
              <p className="text-gray-300">Adaptación y evolución de soluciones</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center gap-4"
            >
              <FaChartLine className="text-nilton-blue text-2xl" />
              <p className="text-gray-300">Optimización basada en rendimiento</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex items-center gap-4"
            >
              <FaSearch className="text-nilton-neon text-2xl" />
              <p className="text-gray-300">Búsqueda local y global inteligente</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="relative flex justify-center lg:justify-end mb-8"
      >
        <div className="relative w-3/4 lg:w-full max-w-md flex items-center justify-center">
          <img
            src="hill-climbing.png"
            alt="Optimización Evolutiva"
            className="relative w-full max-w-sm object-contain "
          />
        </div>
      </motion.div>
    </div>
  );
}
