import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import emailjs from "emailjs-com"

import { MdLocationOn, MdEmail } from "react-icons/md"
import { BsFillPersonFill } from "react-icons/bs"
import { FaPhone } from "react-icons/fa"

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_yr3x2zs",
        "template_7hc4klm",
        e.target,
        "user_aWufDCljuyh81Ys4vZQex"
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <section className="contact-page">
        <article className="contact-container">
          <div className="contact-form">
            <h3>get in touch</h3>
            <form onSubmit={sendEmail}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="form-control"
                />
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="form-control"
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="message"
                  className="form-control"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn btn">
                submit here
              </button>
            </form>
          </div>
          <article className="contact-info">
            <div>
              <BsFillPersonFill className="contact-icon" />
              <h3>Abhishake Yadav</h3>
            </div>

            <hr />

            <div>
              <MdLocationOn className="contact-icon" />
              <h4>South City 2</h4>
              <h4>Gurugram Haryana</h4>
            </div>

            <hr />

            <div>
              <FaPhone className="contact-icon" />
              <h4>+91 8708995972</h4>
            </div>
            <hr />
            <div>
              <MdEmail className="contact-icon" />
              <h4>abhishake.yadav@outlook.com</h4>
            </div>
          </article>
        </article>
      </section>
    </Layout>
  )
}

export default Contact
