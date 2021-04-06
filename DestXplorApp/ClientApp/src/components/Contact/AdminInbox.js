import React, { useState, useEffect } from 'react';

import { createAPIEndpoint, ENDPOINTS } from '../../API/api';

import ContactMessage from './ContactMessage';

const AdminInbox = () => {

  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.CONTACT).fetchAll()
      .then(res => {
        let contactList = res.data.map(contact => ({
          id: contact.id,
          name: contact.name,
          subject: contact.subject,
          message: contact.message
        }));
        setContactList(contactList);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="container py-5">
      <h2 className="mb-5">Inbox</h2>
      <div className="row">
        {contactList.map(c => {
          return (
            <ContactMessage
              key={c.id}
              name={c.name}
              subject={c.subject}
              message={c.message}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AdminInbox;