import { motion } from 'framer-motion';

const certs = [
  'AWS Certified Solution Architect Professional',
  'AWS Certified DevOps Professional',
  'AWS Certified Machine Learning Specialty',
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 bg-navy text-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-mint">Certifications</h2>
      </div>
      <ul className="max-w-xl mx-auto list-disc list-inside space-y-2">
        {certs.map((c) => (
          <motion.li
            key={c}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {c}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
