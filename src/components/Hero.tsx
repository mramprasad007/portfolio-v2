import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-navy text-white p-4"
    >
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Ram Prasad
      </motion.h1>
      <motion.h2
        className="text-xl md:text-3xl text-mint mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Principal Software Engineer
      </motion.h2>
      <motion.p
        className="max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        8-year front-end-focused full-stack specialist who makes React apps fly.
      </motion.p>
    </section>
  );
}
