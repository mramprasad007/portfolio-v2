import { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { text: 'Ram is a fantastic engineer to work with.' },
  { text: 'Highly recommended for complex React projects.' },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  function next() {
    setIndex((i) => (i + 1) % testimonials.length);
  }

  return (
    <section
      id="testimonials"
      className="py-20 px-4 bg-navy text-white flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold text-mint mb-8">Testimonials</h2>
      <motion.blockquote
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl text-center mb-4"
      >
        {testimonials[index].text}
      </motion.blockquote>
      <button onClick={next} className="text-mint underline">
        Next
      </button>
    </section>
  );
}
