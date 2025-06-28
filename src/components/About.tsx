import { motion } from 'framer-motion';

const bio = `Ram Prasad is a versatile engineer with over eight years of experience building fast, intuitive web apps. He specialises in front‑end development but is equally comfortable architecting full‑stack solutions in the cloud. Having led teams across multiple domains, he focuses on crafting performant React applications, implementing DevOps best practices and mentoring junior developers. From single‑page products to enterprise platforms, Ram combines user‑centric design with robust engineering to deliver value quickly.`;

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-navy text-white flex justify-center"
    >
      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-mint">About</h2>
        <p>{bio}</p>
      </motion.div>
    </section>
  );
}
