import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', level: 5 },
  { name: 'CSS3', level: 5 },
  { name: 'JavaScript', level: 5 },
  { name: 'AWS', level: 5 },
  { name: 'Node', level: 4 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-navy text-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-mint">Skills</h2>
      </div>
      <div className="space-y-4 max-w-xl mx-auto">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="flex items-center"
            initial={{ width: 0 }}
            whileInView={{ width: `${(skill.level / 5) * 100}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-32">{skill.name}</div>
            <div className="flex-1 h-3 bg-[#112240] rounded">
              <div
                className="h-3 bg-mint rounded"
                style={{ width: `${(skill.level / 5) * 100}%` }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
