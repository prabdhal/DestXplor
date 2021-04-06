import React, { useState, useEffect } from 'react';

import { createAPIEndpoint, ENDPOINTS } from '../../API/api';

const ContactForm = () => {
  const [contactList, setContactList] = useState([]);
  const [contactName, setContactName] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    setFeedback("");
  }, [])

  const handleSubmit = e => {
    e.preventDefault();

    const contactForm = {
      name: contactName,
      subject: contactSubject,
      message: contactMessage,
    };

    createAPIEndpoint(ENDPOINTS.CONTACT).create(contactForm)
      .then(res => {
        let newContact = res.data;
        setContactList([...contactList, newContact]);
        clearForm();
        setFeedback("Thank you, your message has been sent!");
      })
      .catch(err => console.log(err));
  }

  const clearForm = () => {
    document.getElementById('contactForm').reset();
  }

  const handleNameChange = e => {
    setContactName(e.target.value);
  }

  const handleSubjectChange = e => {
    setContactSubject(e.target.value);
  }

  const handleMessageChange = e => {
    setContactMessage(e.target.value);
  }

  return (
    <div className="container py-5">
      <h2 className="mb-5">Contact Us</h2>
      <p className="text-success">{feedback}</p>
      <form
        className="flex-column"
        id="contactForm"
        style={{ maxWidth: "700px" }}
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Name"
            onChange={handleNameChange}
            required />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Subject"
            onChange={handleSubjectChange}
            required />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Message"
            onChange={handleMessageChange}
            style={{ resize: "none" }}
            rows={5}
            required>
          </textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;