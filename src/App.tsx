import './App.css'

function App() {
  return (
    <div className="container my-5">
      <header className="text-center mb-5">
        <h1>Ram Prasad</h1>
        <h2 className="lead">Principal Software Engineer</h2>
        <p>Chennai | 9620582351</p>
      </header>

      <section className="mb-5">
        <h3>About Me</h3>
        <p>
          Principal Software Engineer with over 8 years of extensive experience in front-end
          focused full stack development. Proven track record of optimizing performance and
          deploying scalable applications in the cloud.
        </p>
      </section>

      <section className="mb-5">
        <h3>Skills</h3>
        <ul className="list-inline">
          <li className="list-inline-item badge bg-primary m-1">React</li>
          <li className="list-inline-item badge bg-primary m-1">HTML5</li>
          <li className="list-inline-item badge bg-primary m-1">CSS3</li>
          <li className="list-inline-item badge bg-primary m-1">JavaScript</li>
          <li className="list-inline-item badge bg-primary m-1">AWS</li>
          <li className="list-inline-item badge bg-primary m-1">Node.js</li>
          <li className="list-inline-item badge bg-primary m-1">Express.js</li>
          <li className="list-inline-item badge bg-primary m-1">SQL</li>
        </ul>
      </section>

      <section className="mb-5">
        <h3>Work Experience</h3>
        <div className="mb-4">
          <h5>Principal Software Engineer, Innova Solutions</h5>
          <small className="text-muted">July 2021 – Present</small>
          <ul>
            <li>Designed and developed full-stack applications using React and Node/Express.</li>
            <li>Created REST services backed by PostgreSQL and integrated BI dashboards.</li>
            <li>Built AWS infrastructure with CloudFormation and deployed with Docker to Fargate.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h5>Senior Software Development Engineer, Squareshift</h5>
          <small className="text-muted">Oct 2020 – Jun 2021</small>
          <ul>
            <li>Implemented reporting features in React connected to an AWS Datalake.</li>
            <li>Maintained Datalake infrastructure using Athena, Glue, Lambda and Spark.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h5>Software Development Engineer, Coda Global</h5>
          <small className="text-muted">Dec 2018 – Sep 2020</small>
          <ul>
            <li>Developed Angular applications for workflow management.</li>
            <li>Implemented AWS solutions for a GPS IoT tracking platform.</li>
            <li>Drove DevOps automation and best practices.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h5>Senior Systems Engineer, Infosys Limited</h5>
          <small className="text-muted">Oct 2015 – Nov 2018</small>
          <ul>
            <li>Created web and mobile applications using Angular, React and Ionic.</li>
          </ul>
        </div>
      </section>

      <section className="mb-5">
        <h3>Education</h3>
        <p>St. Joseph's College of Engineering, Chennai — Bachelor of Engineering (May 2015)</p>
      </section>

      <section className="mb-5">
        <h3>Certifications</h3>
        <ul>
          <li>AWS Certified Solution Architect Professional</li>
          <li>AWS Certified DevOps Professional</li>
          <li>AWS Certified Machine Learning Specialty</li>
        </ul>
      </section>

      <footer className="text-center mt-5">
        <a href="https://www.linkedin.com/in/ramprasad94" className="me-3">LinkedIn</a>
        <a href="https://www.credly.com/users/ramprasad94">AWS Certification Badges</a>
      </footer>
    </div>
  )
}

export default App
