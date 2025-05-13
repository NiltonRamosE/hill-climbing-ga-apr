"use client";

import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";

import EventSection from "@/sections/evento";
import EntradasSection from "@/sections/entradas";
import GASection from "@/sections/InfografiaAlgoritmoGenetico";
import UbicacionSection from "@/sections/ubicacion";

export default function IndexPage() {

  return (
    <DefaultLayout>
      <section className="relative overflow-visible mt-8" id="event">
        <EventSection />
      </section>

      <motion.section
        id="entradas"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <EntradasSection />
      </motion.section>

      <motion.section
        id="invitados"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <GASection />
      </motion.section>
      <motion.section
        id="ubicacion"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <UbicacionSection />
      </motion.section>
    </DefaultLayout>
  );
}
