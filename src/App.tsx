import './App.css'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="text-white font-inter">
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-[#0A192F] px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Ram Prasad
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg sm:text-xl max-w-xl"
        >
          Principal Software Engineer focused on building scalable cloud applications.
        </motion.p>
        <a
          href="#contact"
          className="mt-8 bg-[#64FFDA] text-[#0A192F] font-semibold px-6 py-3 rounded-md"
        >
          Get in touch
        </a>
      </section>

      <section id="about" className="py-16 px-4 bg-[#112240]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">About</h2>
          <p>
            Principal Software Engineer with over 8 years of experience in front-end focused full stack development. Proven track record of optimizing performance and deploying scalable applications in the cloud.
          </p>
        </div>
      </section>

      <section id="roles" className="py-16 px-4 bg-[#0A192F]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-[#112240] rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
            <ul className="list-disc pl-4 text-sm">
              <li>React</li>
              <li>HTML5 / CSS3</li>
              <li>JavaScript / TypeScript</li>
            </ul>
          </div>
          <div className="p-6 bg-[#112240] rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Cloud / DevOps Engineer</h3>
            <ul className="list-disc pl-4 text-sm">
              <li>AWS Solution Architecture</li>
              <li>CI/CD</li>
              <li>Docker</li>
            </ul>
          </div>
          <div className="p-6 bg-[#112240] rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Mentor</h3>
            <ul className="list-disc pl-4 text-sm">
              <li>Agile best practices</li>
              <li>Guiding junior devs</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="py-16 px-4 bg-[#112240]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Key Skills</h2>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="bg-[#64FFDA] text-[#0A192F] px-3 py-1 rounded-full">React</span>
            <span className="bg-[#64FFDA] text-[#0A192F] px-3 py-1 rounded-full">HTML5</span>
            <span className="bg-[#64FFDA] text-[#0A192F] px-3 py-1 rounded-full">CSS3</span>
            <span className="bg-[#64FFDA] text-[#0A192F] px-3 py-1 rounded-full">JavaScript</span>
            <span className="bg-[#64FFDA] text-[#0A192F] px-3 py-1 rounded-full">AWS</span>
            <span className="bg-[#64FFDA] text-[#0A192F] px-3 py-1 rounded-full">Node.js</span>
            <span className="bg-[#64FFDA] text-[#0A192F] px-3 py-1 rounded-full">Express.js</span>
            <span className="bg-[#64FFDA] text-[#0A192F] px-3 py-1 rounded-full">SQL</span>
          </div>
        </div>
      </section>

      <section id="experience" className="py-16 px-4 bg-[#0A192F]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Innova Solutions</h3>
              <span className="text-sm">July 2021 – Present</span>
              <ul className="list-disc pl-5 text-sm">
                <li>Designed and developed full-stack applications using React and Node/Express.</li>
                <li>Created REST services backed by PostgreSQL and integrated BI dashboards.</li>
                <li>Built AWS infrastructure with CloudFormation and deployed with Docker to Fargate.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Squareshift</h3>
              <span className="text-sm">Oct 2020 – Jun 2021</span>
              <ul className="list-disc pl-5 text-sm">
                <li>Implemented reporting features in React connected to an AWS Datalake.</li>
                <li>Maintained Datalake infrastructure using Athena, Glue, Lambda and Spark.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Coda Global</h3>
              <span className="text-sm">Dec 2018 – Sep 2020</span>
              <ul className="list-disc pl-5 text-sm">
                <li>Developed Angular applications for workflow management.</li>
                <li>Implemented AWS solutions for a GPS IoT tracking platform.</li>
                <li>Drove DevOps automation and best practices.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Infosys Limited</h3>
              <span className="text-sm">Oct 2015 – Nov 2018</span>
              <ul className="list-disc pl-5 text-sm">
                <li>Created web and mobile applications using Angular, React and Ionic.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="py-16 px-4 bg-[#112240]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <ul className="space-y-2">
            <li>AWS Certified Solution Architect Professional</li>
            <li>AWS Certified DevOps Professional</li>
            <li>AWS Certified Machine Learning Specialty</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 bg-[#0A192F] text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="mb-2">
          Email:{' '}
          <a href="mailto:ramprasad@example.com" className="text-[#64FFDA]">
            ramprasad@example.com
          </a>
        </p>
        <p className="mb-2">
          LinkedIn:{' '}
          <a href="https://www.linkedin.com/in/ramprasad94" className="text-[#64FFDA]">
            /in/ramprasad94
          </a>
        </p>
        <p>Phone: 9620582351</p>
      </section>
    </div>
  )
}

export default App
