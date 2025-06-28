import { motion } from 'framer-motion';

const roles = [
  {
    title: 'Frontend Developer',
    tools: [
      'React',
      'Angular',
      'TypeScript',
      'Tailwind',
      'Ionic',
      'React-Native',
    ],
  },
  {
    title: 'Cloud / DevOps Engineer',
    tools: ['AWS SA Pro', 'DevOps Pro', 'Docker', 'CI/CD', 'Terraform'],
  },
  {
    title: 'Mentor',
    tools: ['Agile practices', 'guiding junior devs', 'code reviews'],
  },
];

export default function Roles() {
  return (
    <section id="roles" className="py-20 px-4 bg-navy text-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-mint">Roles</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {roles.map((role) => (
          <motion.div
            key={role.title}
            className="bg-[#112240] p-6 rounded shadow hover:-translate-y-1 transition transform"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              {role.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
