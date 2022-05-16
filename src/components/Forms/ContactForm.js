import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function ContactForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendForm = (evt) => {
    evt.preventDefault()
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "name": name,
      "email": email,
      "subject": subject,
      "message": message,
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("https://apex.oracle.com/pls/apex/ardc/forms/contact", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="nameInputField">
        <Form.Control type="text" placeholder="Nome *" value={name} onChange={(e) => setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="emailInputField">
        <Form.Control type="email" placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="subjectInputField">
        <Form.Control type="text" placeholder="Assunto *" value={subject} onChange={(e) => setSubject(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="subjectMessageField">
        <Form.Control type="text" placeholder="Mensagem / Comentário" value={message} onChange={(e) => setMessage(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!name || !email || !subject || !message} onClick={sendForm}>
        Enviar mensagem
      </Button>
    </Form>
    );
  }
  
  export default ContactForm;
  