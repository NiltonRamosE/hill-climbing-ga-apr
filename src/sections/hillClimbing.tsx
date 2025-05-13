import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-center px-12 pt-10 lg:pt-10 mb-5">
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
          Algoritmo <span className="text-nilton-neon">Hill Climbing</span>
        </motion.h1>

        <motion.p
          className="font-semibold text-base md:text-xl lg:text-xl text-gray-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Hill Climbing es un algoritmo de búsqueda heurística utilizado para
          encontrar soluciones óptimas incrementando progresivamente una
          solución inicial. Se aplica en problemas de optimización y toma de
          decisiones en inteligencia artificial y robótica.
        </motion.p>

        <div className="mt-10 space-y-6">
          <h2 className="font-bold text-2xl text-white mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-gray-300">
            El algoritmo evalúa soluciones vecinas y se desplaza hacia la que
            ofrece la mejor mejora. Este proceso se repite hasta que no se
            encuentra una mejor opción: un "pico" local.
          </p>

          <h2 className="font-bold text-2xl text-white mt-6 mb-4">
            Pseudocódigo del Algoritmo
          </h2>
          <pre className="text-sm bg-black/30 p-4 rounded text-gray-200 overflow-x-auto">
            <code>
              {`1. current ← estado inicial
2. loop:
3.     vecino ← mejor estado vecino de current
4.     si vecino es mejor que current:
5.         current ← vecino
6.     sino:
7.         return current`}
            </code>
          </pre>

          <h2 className="font-bold text-2xl text-white mt-6 mb-4">
            Ventajas y Desventajas
          </h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-2">
            <li>
              <strong>✔️ Simple y fácil de implementar.</strong>
            </li>
            <li>
              <strong>✔️ Rápido en espacios de búsqueda pequeños.</strong>
            </li>
            <li>
              <strong>❌ Puede quedarse atrapado en óptimos locales.</strong>
            </li>
            <li>
              <strong>
                ❌ No explora múltiples soluciones como otros algoritmos.
              </strong>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
