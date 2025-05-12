import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTicketAlt,
  FaMusic,
  FaGlassCheers,
  FaCameraRetro,
  FaGift,
} from "react-icons/fa";

export default function EventSection() {
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
          ¡Hola! Soy{" "}
          <span className="text-nilton-neon">Valentino Guevara Felipe</span>
        </motion.h1>

        <motion.p
          className="font-semibold text-base md:text-xl lg:text-xl text-gray-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <span className="font-bold">Hoy 25 de marzo</span> es mi tan esperado
          evento: <span className="font-bold text-nilton-neon">VALETONO</span>
        </motion.p>

        <div className="space-y-6 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <FaCalendarAlt className="text-nilton-neon text-2xl" />
            <div>
              <h3 className="font-bold text-lg text-white">Fecha del Evento</h3>
              <p className="text-gray-300">25 de marzo de 2025 a las 7:00 pm</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <FaMapMarkerAlt className="text-nilton-blue text-2xl" />
            <div>
              <h3 className="font-bold text-lg text-white">Ubicación</h3>
              <p className="text-gray-300">Av. Miguel Grau Mz Ñ Lt. 10</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <FaTicketAlt className="text-nilton-neon text-2xl" />
            <div>
              <h3 className="font-bold text-lg text-white">
                Reserva tu Entrada
              </h3>
              <p className="text-gray-300">
                ¡Asegura tu lugar y vive una experiencia única!
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 space-y-6">
          <h2 className="font-bold text-2xl text-white mb-4">
            Actividades Destacadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center gap-4"
            >
              <FaMusic className="text-nilton-blue text-2xl" />
              <p className="text-gray-300">DJ y Shows en Vivo</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex items-center gap-4"
            >
              <FaGlassCheers className="text-nilton-neon text-2xl" />
              <p className="text-gray-300">Bar Premium</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center gap-4"
            >
              <FaCameraRetro className="text-nilton-blue text-2xl" />
              <p className="text-gray-300">Zona de Fotos Exclusiva</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex items-center gap-4"
            >
              <FaGift className="text-nilton-neon text-2xl" />
              <p className="text-gray-300">Sorpresas Especiales</p>
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
            src="vale-photo-1.png"
            alt="Evento VALETONO"
            className="relative w-full max-w-sm rounded-full shadow-[0_10px_20px_-5px_rgba(0,0,0,0.6)] object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}
