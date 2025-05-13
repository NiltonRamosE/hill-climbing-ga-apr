import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";

const integrantes = [
  {
    nombre: "ALCANTARA ZUÑIGA ALEX",
    rol: "Diseñador UX/UI",
    descripcion: "Creativo, detallista y enfocado en la experiencia del usuario.",
    imagen: "https://ui-avatars.com/api/?name=Alex+Alcantara&background=0D8ABC&color=fff",
  },
  {
    nombre: "PANTA PISCOCHE DIEGO",
    rol: "Desarrollador Backend",
    descripcion: "Apasionado por la lógica, la eficiencia y las bases de datos.",
    imagen: "https://ui-avatars.com/api/?name=Diego+Panta&background=0D8ABC&color=fff",
  },
  {
    nombre: "RAMOS ENCARNACION NILTON",
    rol: "FullStack Developer",
    descripcion: "Visionario tecnológico con pasión por soluciones prácticas.",
    imagen: "https://ui-avatars.com/api/?name=Nilton+Ramos&background=0D8ABC&color=fff",
  },
];

export default function NosotrosSection() {
  return (
    <div className="relative z-10 flex flex-col items-center px-8 py-12 lg:px-20 lg:py-16 gap-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center gap-4 text-center mb-8"
      >
        <FaUsers className="text-nilton-neon text-5xl" />
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white">
          Acerca De Nosotros
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"
      >
        {integrantes.map((miembro, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 flex flex-col items-center text-white shadow-md transition duration-300"
          >
            <img
              src={miembro.imagen}
              alt={miembro.nombre}
              className="w-24 h-24 rounded-full mb-4 border-4 border-nilton-neon object-cover"
            />
            <h3 className="text-xl font-semibold text-center">{miembro.nombre}</h3>
            <p className="text-sm text-nilton-neon font-medium">{miembro.rol}</p>
            <p className="text-center mt-2 text-sm opacity-80">{miembro.descripcion}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
