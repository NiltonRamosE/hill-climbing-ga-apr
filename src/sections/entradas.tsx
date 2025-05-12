import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import {
  FaTicketAlt,
  FaCreditCard,
  FaCheckCircle,
  FaTimes,
} from "react-icons/fa";

export default function EntradasSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (image: string) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center px-8 py-12 lg:px-20 lg:py-16 space-y-8 overflow-hidden">
      <motion.div
        className="flex items-center justify-center gap-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <FaTicketAlt className="text-nilton-neon text-5xl" />
        <motion.h1
          className="font-bold text-3xl md:text-4xl lg:text-5xl text-white"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          ¡Reserva tu Entrada Ahora!
        </motion.h1>
      </motion.div>

      <motion.p
        className="text-gray-300 text-center md:text-lg lg:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Asegura tu lugar en el <span className="font-bold">VALETONO 2025</span>{" "}
        este <span className="font-bold">25 de marzo</span>. ¡No te pierdas esta
        experiencia única!
      </motion.p>
      <motion.p
        className="text-gray-300 text-center md:text-lg lg:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Puedes yapear al siguiente número para el regalo del cumpleañero: {" "}
        <span className="font-bold">923224736</span>
      </motion.p>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-12 mt-8">
        <motion.div
          className="flex flex-col items-center text-center bg-nilton-blue rounded-xl p-6 shadow-md shadow-nilton-dark w-full md:w-1/3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <FaTicketAlt className="text-nilton-neon text-4xl mb-4" />
          <h3 className="font-bold text-white text-lg">Entrada General</h3>
          <p className="text-gray-300 text-sm mt-2">
            Acceso completo al evento.
          </p>
          <span className="font-bold text-white text-2xl mt-4">S/. 10</span>
          <button
            onClick={() => openModal("yape-nilton.jpeg")}
            className="mt-4 px-6 py-2 bg-nilton-neon text-white font-semibold rounded-lg shadow-md hover:bg-nilton-dark transition"
          >
            Comprar Ahora
          </button>
        </motion.div>

        <motion.div
          className="flex flex-col items-center text-center bg-nilton-neon rounded-xl p-6 shadow-md shadow-nilton-dark w-full md:w-1/3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <FaCreditCard className="text-nilton-dark text-4xl mb-4" />
          <h3 className="font-bold text-white text-lg">Entrada VIP</h3>
          <p className="text-gray-300 text-sm mt-2">
            Acceso prioritario y áreas exclusivas. ¡Compra ya!
          </p>
          <span className="font-bold text-white text-2xl mt-4">S/. 25</span>
          <button
            onClick={() => openModal("yape-nilton.jpeg")}
            className="mt-4 px-6 py-2 bg-nilton-blue text-white font-semibold rounded-lg shadow-md hover:bg-nilton-dark transition"
          >
            Comprar VIP
          </button>
        </motion.div>

        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative bg-nilton-dark rounded-lg p-4 shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 max-h-[80vh] overflow-hidden">
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-white text-2xl hover:text-gray-300 transition"
                >
                  <FaTimes />
                </button>

                {/* Imagen */}
                <div className="flex items-center justify-center max-h-[60vh] overflow-hidden">
                  <img
                    src={modalImage}
                    alt="Modal de Entrada"
                    className="w-full h-auto rounded-lg object-contain"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        className="flex items-center justify-center gap-4 mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <FaCheckCircle className="text-nilton-neon text-4xl" />
        <p className="text-gray-300 text-lg font-medium">
          ¡Tu reserva está 100% garantizada!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="relative flex justify-center mt-8"
      >
        <div className="relative w-64 h-64 flex items-center justify-center">
          <img
            src="vale-photo-2.jpg"
            alt="Entradas VALETONO"
            className="w-full h-full rounded-full object-cover shadow-[0_10px_20px_-5px_rgba(0,0,0,0.6)]"
          />
        </div>
      </motion.div>
    </div>
  );
}
