import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-navy text-white flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold text-mint mb-8">Contact</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <input
          name="name"
          placeholder="Name"
          className="w-full p-2 rounded bg-[#112240]"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded bg-[#112240]"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="w-full p-2 rounded bg-[#112240]"
          rows={4}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-mint text-navy font-semibold px-4 py-2 rounded w-full"
        >
          Send
        </button>
      </form>
      {sent && (
        <motion.p
          className="mt-4 text-mint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          role="alert"
        >
          Message sent!
        </motion.p>
      )}
    </section>
  );
}
