import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import emailjs from "emailjs-com"


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
                        <button type="submit" className="submit-btn btn">submit here</button>
                    </form>
                </article>
                <article className="contact-info">
                    <h2>Abhishek Yadav</h2>
                    <hr/>
                    <br/>
                    <h3>South City 2</h3>
                    <h3>Gurugram Haryana</h3>
                    <hr/>
                    <br />
                    <h3>+91 8708995972</h3>
                    <h3>abhishake88@gmail.com</h3>
                </article>
            </section>
        </Layout>
    )
}

export default Contact
