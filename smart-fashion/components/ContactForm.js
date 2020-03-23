import React, { useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import "../styles/contact_form.scss";

const ContactForm = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const updateForm = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    axios({
      method: "POST",
      url: "http://localhost:3000/api/sendMail",
      data: form
    })
      .then(function() {
        console.log("Email successfully sent!");
        resetForm();
        setHasSubmitted(true);
        setIsLoading(false);
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  };

  const DisplayMessage = () => {
    if (hasSubmitted) {
      return (
        <div className="display-message">
          Thank you for contacting us! We will get back to you shortly.
        </div>
      );
    } else {
      return <div className="display-message"></div>;
    }
  };

  return (
    <section id="contact">
      <form id="contact-form" onSubmit={handleSubmit} method="POST">
        <h1>Any Questions? How can we help?</h1>
        <p id="description">
          Call or text us today at <strong>+66 88-8782866</strong> or send an
          email message below.
        </p>
        <div id="questions">
          <div id="names">
            <input
              className="name-inputs"
              name="firstName"
              value={form.firstName}
              onChange={e => updateForm(e)}
              placeholder="First Name"
            />
            <input
              className="name-inputs"
              name="lastName"
              value={form.lastName}
              onChange={e => updateForm(e)}
              placeholder="Last Name"
            />
          </div>
          <input
            id="contact-email"
            name="email"
            value={form.email}
            onChange={e => updateForm(e)}
            placeholder="Email Address"
          />
          <textarea
            rows="5"
            id="contact-message"
            name="message"
            value={form.message}
            onChange={e => updateForm(e)}
            placeholder="Message"
          ></textarea>
          <div id="submit-row">
            <DisplayMessage />
            <button type="submit">
              {isLoading ? (
                <ClipLoader
                  size={20}
                  color={"rgb(7, 156, 241)"}
                  loading={true}
                />
              ) : (
                <p>Send</p>
              )}
            </button>
          </div>
        </div>
      </form>
      <h2>Come Visit Us!</h2>
      {/* <iframe
        width="100%"
        height="450"
        frameborder="0"
        src="https://www.google.com/maps/embed/v1/place?q=log no 16 first floor) Night Bazaar Chiang mai 104/1Changklan RD, Mueang Chiang Mai District, Chiang Mai 50100, Thailand&zoom=15&key=AIzaSyAyXtl0f5Ko-DAWifQ-3cYXbF6D6k2jDPo"
        allowfullscreen
      ></iframe> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.2195900390375!2d98.99967820264601!3d18.785009074932685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3aa6729e9c57%3A0x22c9cf90613823fe!2sSmart%20fashion!5e0!3m2!1sen!2sus!4v1584898591079!5m2!1sen!2sus"
        width="600"
        height="450"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
      {/* <iframe
        width="100%"
        height="450"
        frameborder="0"
        src="https://www.google.com/maps/embed/v1/place?q=&zoom=15&key=AIzaSyAu73jk5mnuAK7qpH-RWErhfCjsQfn5xXY"
        allowfullscreen
      ></iframe> */}
    </section>
  );
};

export default ContactForm;
