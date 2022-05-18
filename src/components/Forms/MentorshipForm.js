import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function MentorshipForm() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mentorshipType, setMentorshipType] = useState(1);
  const [frontendChecked, setFrontendChecked] = useState(false);
  const [backendChecked, setBackendChecked] = useState(false);
  const [projectMgmtChecked, setProjectMgmtChecked] = useState(false);
  const [uxuiChecked, setUXUIChecked] = useState(false);
  const [message, setMessage] = useState('');

  const sendForm = (evt) => {
    evt.preventDefault()
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "name": name,
      "email": email,
      "mentorship_type": mentorshipType,
      "front_end": frontendChecked ? 1 : 0,
      "back_end": backendChecked ? 1 : 0,
      "project_mgmt": projectMgmtChecked ? 1 : 0,
      "ux_ui": uxuiChecked ? 1 : 0,
      "message": message,
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("https://apex.oracle.com/pls/apex/ardc/forms/mentorship", requestOptions)
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
      <Form.Group className="mb-3" controlId="mentorshipTypeField">
        <Form.Label>Que tipo de mentorias procuras? *</Form.Label>
        <Form.Check type="radio" name="mentorshipType" checked={mentorshipType === 1} value={1} label="Individual" onChange={(e) => setMentorshipType(e.target.checked ? 1 : 2)}/>
        <Form.Check type="radio" name="mentorshipType" checked={mentorshipType === 2} value={2} label="Em grupo"   onChange={(e) => setMentorshipType(e.target.checked ? 2 : 1)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="mentorshipAreas">
        <Form.Label>Em que área(s) procuras mentoria? *</Form.Label>
        <Form.Check type="checkbox" checked={frontendChecked} label="Frontend Development" onChange={(e) => setFrontendChecked(e.target.checked ? true : false)}/>
        <Form.Check type="checkbox" checked={backendChecked} label="Backend Development" onChange={(e) =>  setBackendChecked(e.target.checked ? true : false)}/>
        <Form.Check type="checkbox" checked={uxuiChecked} label="UX / UI Design" onChange={(e) =>  setUXUIChecked(e.target.checked ? true : false)}/>
        <Form.Check type="checkbox" checked={projectMgmtChecked}  label="Project Management" onChange={(e) =>  setProjectMgmtChecked(e.target.checked ? true : false)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="subjectMessageField">
        <Form.Control type="text" placeholder="Mensagem / Comentário" value={message} onChange={(e) => setMessage(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!name || !email || !message } onClick={sendForm}>
        Submeter
      </Button>
    </Form>
    );
  }
  
  export default MentorshipForm;
  