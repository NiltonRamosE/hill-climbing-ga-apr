"use client";

import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";

import HeroSection from "@/sections/hero";
import GASection from "@/sections/InfografiaAlgoritmoGenetico";
import NosotrosSection from "@/sections/nosotros";
import HillClimbingSection from "@/sections/hillClimbing";

export default function IndexPage() {

  return (
    <DefaultLayout>
      <section className="relative overflow-visible mt-8" id="hero">
        <HeroSection />
      </section>
      <motion.section
        id="hill-climbing"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <HillClimbingSection />
      </motion.section>
      <motion.section
        id="algoritmo-geneticos"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <GASection />
      </motion.section>
      <motion.section
        id="nosotros"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <NosotrosSection />
      </motion.section>
    </DefaultLayout>
  );
}
