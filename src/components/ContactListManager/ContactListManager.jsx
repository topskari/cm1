import React, { useState } from "react";
import "./ContactListManager.css"
import Contact from "./Contact";

function ContactListManager() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Handle input change for name
  function handleNameChange(event) {
    const value = event.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setName(value);
    }
  }

  // Handle input change for email
  function handleEmailChange(event) {
    const value = event.target.value;
    if (/^[a-zA-Z0-9._%+-@]*$/.test(value)) {
      setEmail(value);
    }
  }

  // Handle input change for phone
  function handlePhoneChange(event) {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setPhone(value);
    }
  }

  // Add a new contact to the list
  function addContact() {
    if (name.trim() !== "" && email.trim() !== "" && phone.trim() !== "") {
      setContacts((b) => [...b, { name, email, phone }]);
      setName("");
      setEmail("");
      setPhone("");
      // Clear the input fields
    }
  }

  // Delete a contact from the list
  function deleteContact(index) {
    const updatedcontacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedcontacts);
  }

  return (
    <div className="contact-list">
      <h1>Contact List Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Enter contact name..."
          value={name}
          onChange={handleNameChange}
          maxLength={20}
        />
        <input
          type="text"
          placeholder="Enter contact email ..."
          value={email}
          onChange={handleEmailChange}
          maxLength={20}
        />
        <input
          type="text"
          placeholder="Enter contact phone ..."
          value={phone}
          onChange={handlePhoneChange}
          maxLength={20}
        />
        <button onClick={addContact}>Add Contact</button>
      </div>
      <ol className="contacts-area">
        {contacts.map((contact, index) => (
          <li className="contacts" key={index}>
            <Contact contact={contact} />
            <button onClick={() => deleteContact(index)}>✖</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ContactListManager;