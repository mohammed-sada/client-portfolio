import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import "../templates/resume.css"

import { FaLinkedin, FaGithub } from "react-icons/fa"

const resumePage = () => {
  return (
    <Layout>
      <div className="resumePage">
        <center>
          <SEO title="Resume" description="webdev resume" />
          <Link className="white-color" to="/resumePdf">
            <button className="btn center-btn print-btn-above">
              printable version
            </button>
          </Link>
          <small className="buttons resume-links">
            <a
              className="social-link"
              href="https://www.linkedin.com/in/abhishake-yadav-0/"
            >
              <FaLinkedin />
            </a>
            <a
              className="social-link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/pydev2018"
            >
              <FaGithub />
            </a>
          </small>
          <br />
        </center>
        <h1 id="abhi">Abhishake Yadav</h1>
        <hr />
        <blockquote>
          <p>
            💻 Experienced machine learning , AI engineer / Geophysicist / Data
            scientist{" "}
          </p>
        </blockquote>
        <hr />
        <h2 id="experience">Experience</h2>
        <h4 id="dtn-remote-data-science-architect-august-2020-present">
          <a href="https://polarcus.com/" rel="noreferrer" target="_blank">
            Polarcus
          </a>{" "}
          | Dec 2019 – present <br />
          Senior Geophysicist / Data Scientist <em></em>
        </h4>
        <ul>
          <li>
            <strong>Cloud migration:</strong> Performed cost and benefit analysis of compute demand and 
            utilization trends over five years to create predictive resource consumption model to right 
            size and move the data processing infrastructure from offshore (High fixed OPEX model) to a 
            hybrid pay as you go OPEX model in the cloud, reducing OPEX by $1.8M+ every year.
          </li>
          <li>
          <strong>Business analysis:</strong> Conducted more than 33 user interviews to gather functional 
            requirements, assumptions, and constraints from stakeholders throughout the organization to define 
            data mining goals and success criteria and created the overall feature backlog in JIRA to ensure that 
            the design of the cloud solution is aligned with the business objectives. 
          </li>
          <li>
          <strong>Process modelling (BPMN 2.0):</strong> Modelled and transformed more than 42 business procedures, mapping data, 
            assessing, and identifying performance gaps and deficiencies, to develop corrective measures and accelerate improvement.
          </li>
          <li>
          <strong>Data mining:</strong> Delivered more than 10 data collection, description, quality, and exploratory 
            analysis reports by gathering and integrating terabyte-sized volumes of siloed historical data, employing a 
            broad range of analytic tools to outline trends and better understand quality issues, equipment failures, downtime, and revenue impact. 
          </li>
          <li>
          <strong>Machine learning:</strong> Modelling, evaluation, and deployment of different machine learning models for 
            developing a fault identification system facilitating the identification of anomalous recording sensors with an 94% 
            accuracy rate exhibiting potential to mitigate technical downtime.
          </li>
          <li>
          <strong>ML Web app development:</strong> Designing, developing, and deploying a broad range of data analytics web apps and dashboards.
          </li>
          <li>
          <strong>Deep learning:</strong> Using deep learning methods and architectures to test their applications is data 
            interpolation and denoising.
          </li>
          <li>
          <strong>Data transmission:</strong> Introducing a novel method to transfer data to multiple offshore locations 
            simultaneously, streamlining communication, and delivering $200K+ in savings.
          </li>
        </ul>
        <h4 id="blackberry-cylance-remote-senior-data-scientist-nov-2017-may-2020">
          <a href="http://www.polarcus.com/" rel="noreferrer" target="_blank">
            Polarcus
          </a>{" "}
          | Jan 2015 – Dec 2019
          <br />
          Geophysicist / Data Scientist<em></em>
        </h4>
        <ul>
          <li>
          <strong>Data analysis:</strong> Performed complex data analysis on large-scale international projects with a 
            cumulated value of $500M+ for clients such as ExxonMobil, Total, and Shell.
          </li>
          <li>
          <strong>Business intelligence:</strong> Translated data into actionable intelligence, 
            producing detailed reports for key client stakeholders.
          </li>
          <li>
          <strong>Data pipelines:</strong> Architected and introduced novel data ingestion, 
            cleaning, processing, transformation, modeling, and validation workflows, 
            boosting data quality, and simplifying analysis.
          </li>
          <li>
          <strong>Distributed Computing:</strong> Deployed scalable compute on AWS using docker and kubernetes to
            perform extraction of different seismic attributes like sweetness,
            dip , chaos on large seismic datasets leveraging the use of
            distributed computing using dask.
          </li>
          <li>
          <strong>Mentoring:</strong> Organized training workshops and seminars for real-time data quality 
            assurance and fault detection with cross-departmental stakeholders to ensure that data quality 
            guidelines and procedures are well understood.
          </li>
          <li>
          <strong>Infrastructure management:</strong> Troubleshot, serviced, and maintained the on-board data center
            (400 teraflops, 500 terabytes) while monitoring the cloud environment to identify 
            and resolve performance issues promptly.
          </li>
          <li>
          <strong>Automation:</strong> Developed, deployed, and tested automation solutions for data management 
            and quality assurance throughout the project lifecycle, achieving a 15% reduction in errors and improving 
            data quality substantially. 
          </li>
        </ul>
        <h4 id="distil-networks-remote-data-scientist-oct-2015-nov-2017">
          <a href="http://www.iongeo.com/" rel="noreferrer" target="_blank">
            ION GX Technology
          </a>{" "}
          | Jan 2012 – Dec 2014 <br />
          Geophysicist / Data Scientist<em></em>
        </h4>
        <ul>
          <li>
          <strong>Data processing:</strong> Designed, implemented, optimized, and monitored various data quality control 
            and processing solutions to assess the quality of more than 2000-3000 TB of combined data volume, on projects with 
            a cumulated value of $100M+.
          </li>
          <li>
          <strong>Data analysis:</strong> Identified complex patterns and trends, both real time and offline, producing visualizations, 
            reports, findings, and implications to decision-makers potentially saving cumulated value of $300 K+.
          </li>
          <li>
          <strong>Technical reporting:</strong> Produced tailored data analysis, processing, quality, and visualizations 
            depending on individual project particularities creating more than 50 technical reports vetted 
            by scientific experts.
          </li>
        </ul>
        <h2 className="heading2" id="education">
          Education, Licenses and certifications
        </h2>
        <dl>
          <dt>2005-2009</dt>
          <br />
          <dd>
            <p>
              <strong>Bachelor of Technology (B.Tech) (Biotechnology) </strong>{" "}
              Amity University
            </p>
            <p>
              <em>
                <strong>Key Courses: </strong>Calculus, Linear Algebra,
                Bioinformatics, Database programming, Statistics, Computational
                Biology
              </em>
            </p>
            <p>
              <strong>Certifications </strong>{" "}
              Microsoft Azure fundamentals , BPMN foundation and practitioner
            </p>
          </dd>
        </dl>
        <h2 className="heading2" id="technical-experience">
          Technical Experience
        </h2>
        <dl>
          <dt>Technical Tools</dt>
          <br />
          <dd>
            <p>
              I have an experience with a breadth of tools for machine learning,
              deep learning , data exploration and visualization.
            </p>
            <ul>
              <li>
                <strong>Programming Languages:</strong> Python, Javascript, SQL
              </li>
              <li>
                <strong>Deep learning tools:</strong> Tensorflow, PyTorch
              </li>
              <li>
                <strong>Machine Learning Tools:</strong> Scikit-Learn, Azure ML,
                MLFlow
              </li>
              <li>
                <strong>Data Processing Tools:</strong> Amazon Web Services
                (Batch, Lambda, ECS, S3, SQS),
                Spark/Pyspark, Pandas, Scikit-learn, Dask
              </li>
              <li>
                <strong>Infrastructure and Configuration Tools</strong>:
                Terraform
              </li>
              <li>
                <strong>Data Stores:</strong> Postgres, Elasticsearch,
                Cassandra, MongoDB, Redis, MySQL
              </li>
            </ul>
          </dd>
          <dt>Blogs / Apps</dt>
          <br />
          <dd>
            <p>Interesting apps and blogs on various topics </p>
            <p>
              <a href="https://yadavabhi.com/projects/" rel="noreferrer" target="_blank">
                Skin Segmentation
              </a>{" "}
              ·{" "}
              <a href="https://yadavabhi.com/projects/" rel="noreferrer" target="_blank">
                Stock Forecasting
              </a>{" "}
              ·{" "}
              <a href="https://yadavabhi.com/blog/" rel="noreferrer" target="_blank">
                RestAPI
              </a>{" "}
              ·{" "}
              <a href="https://yadavabhi.com/projects/" rel="noreferrer" target="_blank">
                Color compression
              </a>{" "}
              ·{" "}
              <a href="https://yadavabhi.com/projects/" rel="noreferrer" target="_blank">
                Object detection 
              </a>{" "}
              ·{" "}
              <a href="https://yadavabhi.com/projects/" rel="noreferrer" target="_blank">
                Face recognition 
              </a>
            </p>
          </dd>
        </dl>
        <h2 className="heading2" id="personal-projects">
          Personal Projects
        </h2>
        <ul>
          <li>
            <a href="https://yadavabhi.com/blog/" rel="noreferrer" target="_blank">
              Real time data quality control of seismic source 
            </a>
            : Extract multiple statistaical attributes from seismic air gun data in realtime and offline to perform quality control.
          </li>
          <li>
            <a href="https://yadavabhi.com/blog/" rel="noreferrer" target="_blank">
              Outlier detection on multichannel seismic data recording array
            </a>
            : Quickly assess and identify anomalous recording channels from more than 6000-8000 recording sensors.  
          </li>
        </ul>
        <hr />
        <blockquote>
          <p>
            <a href="https://yadavabhi.com/" rel="noreferrer" target="_blank">
              yadavabhi.com
            </a>{" "}
            •{" "}
            <a href="mailto:abhishake.yadav@outlook.com" class="email">
              abhishake.yadav@outlook.com
            </a>{" "}
            (+91) 8708995972
            <br />
            Gurugram, India
          </p>
        </blockquote>
        <Link className="print-btn-below" to="/resumePdf">
          <button className="btn center-btn print-btn">
            printable version
          </button>
        </Link>
      </div>
    </Layout>
  )
}

export default resumePage
