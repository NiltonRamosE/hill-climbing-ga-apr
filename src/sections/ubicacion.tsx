import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function UbicacionSection() {
  return (
    <div className="relative z-10 flex flex-col items-center px-8 py-12 lg:px-20 lg:py-16 gap-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center gap-4 text-center mb-8"
      >
        <FaMapMarkerAlt className="text-nilton-neon text-5xl" />
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white">
          Nuestra Ubicación
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-center gap-8 w-full"
      >
        <div className="bg-nilton-dark rounded-lg shadow-md p-6 md:p-8 text-center md:text-left w-full md:w-1/2 space-y-6">
          <h2 className="font-bold text-2xl text-nilton-neon border-b border-gray-700 pb-2">
            📍 Detalles del Evento
          </h2>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-nilton-blue text-3xl" />
            <div>
              <h3 className="font-semibold text-white text-lg">Ubicación</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Av. Miguel Grau Mz Ñ Lt. 10
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-4 text-gray-400 text-sm">
            ¡No te pierdas este evento exclusivo, asegúrate de llegar temprano
            para una experiencia inolvidable!
          </div>
        </div>

        <div className="w-full md:w-1/2 h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Ubicación VALETONO"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1969.8968176963801!2d-78.57348797239864!3d-9.082555626043305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ab81001c64451d%3A0x8da26ffd6776ef3f!2sCentro%20Pastoral%20Alexnet!5e0!3m2!1ses-419!2spe!4v1740233968381!5m2!1ses-419!2spe"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}
