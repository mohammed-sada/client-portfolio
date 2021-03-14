import React, { useState } from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import emailjs from "emailjs-com"

// const Thanks = () => {
//   return (
//     <div className="section-title">
//       <h2>Thanks !</h2>
//       <div className="underline"></div>
//     </div>
//   )
// }

const Contact = () => {
  const [state, setstate] = useState(0)

  // if (state === 1) return <Thanks />

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
    setstate(1)
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <section className="contact-page">
        <article className="contact-form">
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
        </article>
      </section>
    </Layout>
  )
}

export default Contact
