import React from 'react';

import '../../App.css';

const ContactMessage = (props) => {
  return (
    <div className="container row box--shadow my-2 py-2">
      <div class="flex-column col-9">
        <h5>{props.name}</h5>
        <p className="font-weight-bold">{props.subject}</p>
        <p>{props.message}</p>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}

export default ContactMessage;