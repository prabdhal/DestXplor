import React, { useState, useEffect } from 'react';

import { createAPIEndpoint, ENDPOINTS } from '../../API/api';

const ContactForm = () => {


  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.CONTACT);
  }, [])

  return (
    <div class="container py-5">
      <h2 className="mb-5">Contact Us</h2>
      <form className="flex-column" style={{ maxWidth: "700px" }}>
        <div className="form-group">
          <input className="form-control" placeholder="Name" required />
        </div>
        <div className="form-group">
          <input className="form-control" placeholder="Subject" required />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Message"
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