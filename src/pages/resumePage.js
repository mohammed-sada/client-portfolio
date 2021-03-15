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
          <p>💻 Experienced machine learning engineer / Geophysicist</p>
        </blockquote>
        <hr />
        <h2 id="experience">Experience</h2>
        <h4 id="dtn-remote-data-science-architect-august-2020-present">
          <a href="https://dtn.com/" rel="noreferrer" target="_blank">
            Polarcus
          </a>{" "}
          | <em>Dec 2019 – present</em> <br />
          Senior QC Geophysicist / Data Scientist <em></em>
        </h4>
        <ul>
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
            Designing, developing, and deploying a broad range of data analytics
            web apps, significantly enhancing operational capabilities.
          </li>
          <li>
            Gathering functional requirements from stakeholders throughout the
            organization to define deliverables and ensure cloud solution
            delivered proposed benefits.
          </li>
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
            Strategize and lead development of infrastructure for big data
            usability and accessibility
          </li>
        </ul>
        <h4 id="blackberry-cylance-remote-senior-data-scientist-nov-2017-may-2020">
          <a href="http://www.cylance.com/" rel="noreferrer" target="_blank">
            Polarcus
          </a>{" "}
          | <em>Jan 2015 – Dec 2019</em> <br />
          QC Geophysicist / Data Scientist<em></em>
        </h4>
        <ul>
          <li>
            Lead development of data lake and feature store using serverless AWS
            infrastructure
          </li>
          <li>
            Developed and maintained Python packages for data ingestion,
            cleaning, and standardization
          </li>
          <li>
            Guided data science team in best practices for Python development
            and software testing
          </li>
          <li>
            Researched machine learning techniques for dynamic detection of
            malware
          </li>
        </ul>
        <h4 id="distil-networks-remote-data-scientist-oct-2015-nov-2017">
          <a
            href="http://www.distilnetworks.com/"
            rel="noreferrer"
            target="_blank"
          >
            ION GX Technology
          </a>{" "}
          | <em>Jan 2012 – Dec 2014</em> <br />
          QC Geophysicist / Data Scientist<em></em>
        </h4>
        <ul>
          <li>
            Researched and developed machine learning techniques for detection
            of malicious web bots
          </li>
          <li>
            Lead research for validation of JavaScript-based client
            fingerprinting technique
          </li>
          <li>
            Constructed hierarchical Bayesian models for analysis of internet
            user behavior
          </li>
          <li>
            Primary developer of real-time identification platform for malicious
            web bots on Apache Storm
          </li>
          <li>
            Developed Python-based, internal tools for fast querying of data
            warehouse
          </li>
          <li>
            Introduced team to best practices in Python development and data
            analysis
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
                Key Courses: Graph Data Mining, Machine Learning, Bayesian
                Networks, Linear Programming, Statistics, Computational Biology
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
              software development, and backend engineering.
            </p>
            <ul>
              <li>
                <strong>Programming Languages (high proficiency):</strong>{" "}
                Python
              </li>
              <li>
                <strong>Programming Languages (some proficiency):</strong> C++,
                Go, C#, Mathematica, R, SQL, Java, Javascript
              </li>
              <li>
                <strong>Machine Learning Tools:</strong> Scikit-Learn, PyTorch,
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
                href="https://github.com/python/cpython/commits?author=tdhopper"
                rel="noreferrer"
                target="_blank"
              >
                cpython
              </a>{" "}
              ·{" "}
              <a
                href="https://datamicroscopes.github.io/"
                rel="noreferrer"
                target="_blank"
              >
                datamicroscopes
              </a>{" "}
              ·{" "}
              <a
                href="https://github.com/parsely/streamparse/commits?author=tdhopper"
                rel="noreferrer"
                target="_blank"
              >
                Streamparse
              </a>{" "}
              ·{" "}
              <a
                href="https://github.com/conda/conda/commits?author=tdhopper"
                rel="noreferrer"
                target="_blank"
              >
                Conda
              </a>{" "}
              ·{" "}
              <a
                href="https://github.com/ariddell/lda/commits?author=tdhopper"
                rel="noreferrer"
                target="_blank"
              >
                lda
              </a>{" "}
              ·{" "}
              <a
                href="https://github.com/pandas-dev/pandas/commits?author=tdhopper"
                rel="noreferrer"
                target="_blank"
              >
                Pandas
              </a>
            </p>
          </dd>
        </dl>
        <h2 className="heading2" id="personal-projects">
          Personal Projects
        </h2>
        <ul>
          <li>
            <a href="https://pythonplot.com/" rel="noreferrer" target="_blank">
              pythonplot.com
            </a>
            : A Rosetta Stone of Python plotting libraries for exploratory data
            analysis
          </li>
          <li>
            <a href="https://dp.tdhopper.com/" rel="noreferrer" target="_blank">
              Notes on Dirichlet Processes
            </a>
            : Derivations, code, and notes on Dirichlet processes for
            nonparametric Bayesian methods
          </li>
        </ul>
        <hr />
        <blockquote>
          <p>
            <a href="https://tdhopper.com/" rel="noreferrer" target="_blank">
              yadavabhi.com
            </a>{" "}
            •{" "}
            <a href="mailto:tdhopper@gmail.com" class="email">
              abhishake88@gmail.com
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
