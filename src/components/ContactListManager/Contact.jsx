const Contact = ({ contact }) => {
    return (
        <ul className="contact">
            <li>Name: {contact.name}</li>
            <li>Email: {contact.email}</li>
            <li>Phone: {contact.phone}</li>
        </ul>
    );
}

export default Contact;