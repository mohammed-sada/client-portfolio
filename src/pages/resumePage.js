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
          <button className="btn center-btn print-btn-above">
            <Link className="white-color" to="/resumePdf">
              printable version
            </Link>
          </button>
          <small className="buttons resume-links">
            <a className="social-link" href="www.google.com">
              <FaLinkedin />
            </a>
            <a className="social-link" href="www.google.com">
              <FaGithub />
            </a>
          </small>
          <br />
        </center>
        <h1 id="tim-hopper">Abhishek Yadav</h1>
        <hr />
        <blockquote>
          <p>💻 Experienced machine learning engineer / Geophysicist / Data scientist  </p>
        </blockquote>
        <hr />
        <h2 id="experience">Experience</h2>
        <h4 id="dtn-remote-data-science-architect-august-2020-present">
          <a href="https://polarcus.com/" rel="noreferrer" target="_blank">
            Polarcus
          </a>{" "}
          | Dec 2019 – present <br />
          Senior QC Geophysicist / Data Scientist <em></em>
        </h4>
        <ul>
          <li>
            Pioneered an outlier detection system by utilizing machine learning
            algorithms, facilitating the identification of anomalous recording
            sensors with a 90% accuracy rate, simultaneously reducing time to
            identify faulty sensors by 70%. (Data volume 1 TB/Day from more than
            5000 sensors)
          </li>
          <li>
            Automating key processes, delivering a tangible increase in
            efficiency.
          </li>
          <li>
            Created ETL pipeline to extract features from proprietary seismic
            data in SEG-D format using python.
          </li>
          <li>
            Creating FMEAs, RACI Charts, Control Charts, Process Maps, SIPOCs, Fish Bone Diagrams 
            for more than 30 existing procedures.
          </li>
          <li>
            Designing, developing, and deploying a broad range of data analytics
            web apps, significantly enhancing operational capabilities.
          </li>
          <li>
            Gathering functional requirements from stakeholders throughout the
            organization to define deliverables and ensure cloud solution
            delivered proposed benefits.
          </li>
          <li>
            Proposed a method to facilitate the radio transfer of data to multiple 
            locations in offshore operations simultaneously in real time which assisted in 
            decision making and quick response and feedback from the client. Saving more than 200 
            thousand dollars through rapid identification and mitigation of problems and 
            streamlined communication.
          </li>
          <li>
            Acting as a main stakeholder in strategic planning, leveraging
            analytics to provide insights to key decision-makers, enabling
            informed planning at a project, operational, and strategic level.
          </li>
          <li>
            Automating key processes, delivering a tangible increase in
            efficiency.
          </li>
          <li>
            Strategize and lead development of infrastructure for big data
            usability and accessibility
          </li>
        </ul>
        <h4 id="blackberry-cylance-remote-senior-data-scientist-nov-2017-may-2020">
          <a href="http://www.polarcus.com/" rel="noreferrer" target="_blank">
            Polarcus
          </a>{" "}
          | Jan 2015 – Dec 2019<br />
          QC Geophysicist / Data Scientist<em></em>
        </h4>
        <ul>
          <li>
            Performed wavelet analysis for hyperparameter optimization of filters to 
            be applied to data on multiple projects
          </li>
          <li>
            Created a 3d seismic data volume visualization and slicing tool using python.
          </li>
          <li>
            Designed and implemented data cleaning , processing modelling workflows utilizing
             various statistical and signal processing techniques like 
            fourier analysis, median filtering , kalman filters, deconvolution , trace data velocity correction 
            , stacking and data migration.
          </li>
          <li>
            Deployed scalable compute on AWS using docker and kubernetes to perform extraction of different seismic attributes like sweetness, 
            dip , chaos on large seismic datasets leveraging the use of distributed computing using dask.
          </li>
        </ul>
        <h4 id="distil-networks-remote-data-scientist-oct-2015-nov-2017">
          <a
            href="http://www.iongeo.com/"
            rel="noreferrer"
            target="_blank"
          >
            ION GX Technology
          </a>{" "}
          | Jan 2012 – Dec 2014 <br />
          QC Geophysicist / Data Scientist<em></em>
        </h4>
        <ul>
          <li>
            Designed, implemented, monitored and optimized various data quality control and processing 
            workflows to monitor and assess the quality of large data volumes in both real time and offline.
          </li>
          <li>
            Used python to perform Statistical Data analysis of different types of spatio temporal data, 
            time series, logs and textual data.
          </li>
          <li>
            Used python to create project specific / client specific data processing / QC and visualization workflows.
          </li>
          <li>
            Wrote high quality technical reports for internal and external stakeholders which were peer-reviewed by 
            scientific support teams.
          </li>
          <li>
            Assist with training and development of junior staff and contractors by conducting inhouse training sessions.
          </li>
          <li>
            Assist with process and procedures creation, review and modification.
          </li>
          <li>
            Assist in rigging and derigging of on-board data centers.
          </li>
        </ul>
        <h2 className="heading2" id="education">
          Education
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
              <strong>Key Courses: </strong>Calculus, Linear Algebra,  Bioinformatics
                Database programming, Statistics, Computational Biology
              </em>
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
                <strong>Programming Languages:</strong>{" "}
                Python, Javascript, SQL
              </li>
              <li>
                <strong>Deep learning tools:</strong> Tensorflow,
                PyTorch
               
              </li>
              <li>
                <strong>Machine Learning Tools:</strong> Scikit-Learn, Azure ML,
                MLFlow
              </li>
              <li>
                <strong>Data Processing Tools:</strong> Amazon Web Services
                (Batch, Lambda, ECS, S3, SQS), Apache Storm/streamparse, Apache
                Spark/Pyspark, Pandas, Scikit-learn, Impala, Hive, Dask
              </li>
              <li>
                <strong>Infrastructure and Configuration Tools</strong>:
                Terraform, Ansible, Saltstack
              </li>
              <li>
                <strong>Data Stores:</strong> Postgres, Elasticsearch,
                Cassandra, MongoDB, Redis, MySQL
              </li>
            </ul>
          </dd>
          <dt>Blogs</dt>
          <br />
          <dd>
            <p>Interesting blogs on various topics </p>
            <p>
              <a
                href="https://yadavabhi.com/"
                rel="noreferrer"
                target="_blank"
              >
                blog1
              </a>{" "}
              ·{" "}
              <a
                href="https://yadavabhi.com/"
                rel="noreferrer"
                target="_blank"
              >
                blog2
              </a>{" "}
              ·{" "}
              <a
                href="https://yadavabhi.com/"
                rel="noreferrer"
                target="_blank"
              >
                blog3
              </a>{" "}
              ·{" "}
              <a
                href="https://yadavabhi.com/"
                rel="noreferrer"
                target="_blank"
              >
                blog4
              </a>{" "}
              ·{" "}
              <a
                href="https://yadavabhi.com/"
                rel="noreferrer"
                target="_blank"
              >
                blog5
              </a>{" "}
              ·{" "}
              <a
                href="https://yadavabhi.com/"
                rel="noreferrer"
                target="_blank"
              >
                blog6
              </a>
            </p>
          </dd>
        </dl>
        <h2 className="heading2" id="personal-projects">
          Personal Projects
        </h2>
        <ul>
          <li>
            <a href="https://yadavabhi.com/" rel="noreferrer" target="_blank">
              proj1
            </a>
            : Description
          </li>
          <li>
            <a href="https://yadavabhi.com/" rel="noreferrer" target="_blank">
              proj2
            </a>
            : Description 
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
        <button className="btn center-btn print-btn">
          <Link className="print-btn-below" to="/resumePdf">
            printable version
          </Link>
        </button>
      </div>
    </Layout>
  )
}

export default resumePage
