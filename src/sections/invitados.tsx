import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import InvitadoEspecial from "@/components/invitado";

export default function InvitadosSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const invitados = [
    { imagen: "daza.jpeg", titulo: "Daza 2025" },
    { imagen: "peso-pluma.webp", titulo: "Peso Pluma (Lujan)" },
    { imagen: "osito-peru.webp", titulo: "Osito Perú (Osorio)" },
    { imagen: "dj.jpg", titulo: "Dj. Torres" },
    { imagen: "america.webp", titulo: "América Odar" },
    { imagen: "padre-domingo.jpg", titulo: "Padre Domingo" },
  ];

  return (
    <div className="relative z-10 flex flex-col items-center px-8 py-12 lg:px-20 lg:py-16 gap-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center gap-4 text-center mb-8"
      >
        <FaStar className="text-nilton-neon text-5xl" />
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white">
          Invitados Especiales
        </h1>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : -50 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center w-full lg:w-1/2"
        >
          <div className="relative w-3/4 lg:w-full max-w-md flex items-center justify-center">
            <img
              src="vale-photo-3.png"
              alt="Invitado Principal"
              className="w-full rounded-full object-cover shadow-[0_10px_20px_-5px_rgba(0,0,0,0.6)]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center"
        >
          {invitados.map((invitado, index) => (
            <InvitadoEspecial
              key={index}
              imagen={invitado.imagen}
              titulo={invitado.titulo}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
