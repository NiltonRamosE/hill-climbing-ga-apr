import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/partials/navbar";
import { Footer } from "@/partials/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-gradient-to-br from-nilton-dark via-nilton-blue to-nilton-neon">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-nilton-dark via-nilton-blue to-nilton-neon opacity-70"></div>
        
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-nilton-neon opacity-50 blur-3xl animate-move-light-1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-nilton-blue opacity-50 blur-3xl animate-move-light-2"></div>

        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 50 }).map((_, index) => (
            <div
              key={index}
              className="absolute w-1 h-1 bg-nilton-light rounded-full opacity-75 blur-sm animate-particles-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="container mx-auto px-6 flex-grow pt-14 pb-8">
          <AnimatePresence mode="wait">
            {mounted && (
              <motion.div
                key="content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </div>
  );
}
