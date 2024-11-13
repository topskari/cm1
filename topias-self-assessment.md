# Topias Self-Assessment  of Code


## ContactListManager.jsx

```js
// ContactListManager.jsx - State Initialization and Input Handlers
import React, { useState } from "react";
import "./ContactListManager.css";
import Contact from "./Contact";

function ContactListManager() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Handle input change for name and validate input
  function handleNameChange(event) {
    const { value } = event.target;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setName(value);
    }
  }

  // Handle input change for email and validate input
  function handleEmailChange(event) {
    const { value } = event.target;
    if (/^[a-zA-Z0-9._%+-@]*$/.test(value)) {
      setEmail(value);
    }
  }

  // Handle input change for phone and validate input
  function handlePhoneChange(event) {
    const { value } = event.target;
    if (/^\d*$/.test(value)) {
      setPhone(value);
    }
  }
}
```

**Assessment**: 
- The state initialization and input handlers are well-structured and follow React best practices.
- The input validation ensures that only appropriate characters are entered for each field.

```js
// ContactListManager.jsx - Add and Delete Contact Functions
function addContact() {
  if (name.trim() !== "" && email.trim() !== "" && phone.trim() !== "") {
    setContacts((prevContacts) => [...prevContacts, { name, email, phone }]);
    setName("");
    setEmail("");
    setPhone("");
  }
}

function deleteContact(index) {
  const updatedContacts = contacts.filter((_, i) => i !== index);
  setContacts(updatedContacts);
}

```

**Assessment**: 
- The `addContact` and `deleteContact` functions are straightforward and effectively manage the state of the contact list.
- The input fields and buttons are correctly set up to handle user interactions.


```js
// ContactListManager.jsx - Render Method
return (
  <div className="contact-list">
    <h1>Contact List Manager</h1>
    <div>
      <input
        type="text"
        placeholder="Enter contact name..."
        value={name}
        onChange={handleNameChange}
        maxLength={11}
      />
      <input
        type="text"
        placeholder="Enter contact email ..."
        value={email}
        onChange={handleEmailChange}
        maxLength={11}
      />
      <input
        type="tel"
        placeholder="Enter contact phone ..."
        value={phone}
        onChange={handlePhoneChange}
        pattern="[0-9]*"
        maxLength={11}
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
```

**Assessment**: 
- The return statement is well-structured and clearly lays out the components and their relationships.
- The use of `map` to render the list of contacts is efficient and follows React best practices.
- The input fields are correctly bound to the state and have appropriate attributes for validation and length restriction.
- The `button` elements are correctly set up to handle adding and deleting contacts.
- The `Contact` component is used effectively to display individual contact information.

## Contact.jsx

```js
import React from "react";

function Contact({ contact }) {
  return (
    <div>
      <span>{contact.name}</span>
      <span>{contact.email}</span>
      <span>{contact.phone}</span>
    </div>
  );
}

export default Contact;
```

**Assessment**: 
- The `Contact` component is simple and effectively displays the contact information.
- The use of destructuring for props makes the code cleaner and more readable.

Copilot was used to generate most of this assessment.