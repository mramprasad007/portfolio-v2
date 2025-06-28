import { motion } from 'framer-motion';

const jobs = [
  {
    company: 'Innova Solutions',
    role: 'Principal Software Engineer',
    period: '2021 – Present',
    bullets: [
      'Designed and developed full-stack applications using React and Node/Express.',
      'Integrated BI dashboards and PostgreSQL-backed REST services.',
      'Dockerised infrastructure and deployed to AWS Fargate.',
    ],
  },
  {
    company: 'Squareshift',
    role: 'Senior Software Development Engineer',
    period: '2020 – 2021',
    bullets: [
      'Implemented reporting features connected to AWS Datalake.',
      'Maintained Athena, Glue and Spark infrastructure.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-navy text-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-mint">Experience</h2>
      </div>
      <div className="space-y-8 max-w-3xl mx-auto">
        {jobs.map((job) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold">
              {job.role} – {job.company}
            </h3>
            <span className="text-sm text-mint">{job.period}</span>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
