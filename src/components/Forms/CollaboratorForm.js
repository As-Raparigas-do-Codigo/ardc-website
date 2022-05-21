import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function CollaboratorForm() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [website, setWebsite] = useState('');
  const [mentorChecked, setMentorChecked] = useState(false);
  const [speakerChecked, setSpeakerChecked] = useState(false);
  const [contentChecked, setContentChecked] = useState(false);
  const [socialMediaChecked, setSocialMediaChecked] = useState(false);
  const [eventOrgChecked, setEventOrgChecked] = useState(false);
  const [promotionChecked, setPromotionChecked] = useState(false);
  const [technicalChecked, setTechnicalChecked] = useState(false);
  const [otherChecked, setOtherChecked] = useState(false);
  const [foundUsInstaChecked, setFoundUsInstaChecked] = useState(false);
  const [foundUsWebsiteChecked, setFoundUsWebsiteChecked] = useState(false);
  const [foundUsLinkedinChecked, setFoundUsLinkedinChecked] = useState(false);
  const [foundUsFacebookChecked, setFoundUsFacebookChecked] = useState(false);
  const [foundUsOtherChecked, setFoundUsOtherChecked] = useState(false);
  const [message, setMessage] = useState('');

  const sendForm = (evt) => {
    evt.preventDefault()
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "name": name,
      "email": email,
      "city": city,
      "website": website,
      "mentor": mentorChecked ? 1 : 0,
      "speaker": speakerChecked ? 1 : 0,
      "content": contentChecked ? 1 : 0,
      "social_media_mgmt": socialMediaChecked ? 1 : 0,
      "event_org": eventOrgChecked ? 1 : 0,
      "promotion": promotionChecked ? 1 : 0,
      "technical": technicalChecked ? 1 : 0,
      "other": otherChecked ? 1 : 0,
      "found_us_instagram": foundUsInstaChecked ? 1 : 0,
      "found_us_website": foundUsWebsiteChecked ? 1 : 0,
      "found_us_linkedin": foundUsLinkedinChecked ? 1 : 0,
      "found_us_facebook": foundUsFacebookChecked ? 1 : 0,
      "found_us_other": foundUsOtherChecked ? 1 : 0,
      "message": message,
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("https://apex.oracle.com/pls/apex/ardc/forms/collaborator", requestOptions)
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
      <Form.Group className="mb-3" controlId="cityInputField">
        <Form.Control type="text" placeholder="Cidade *" value={city} onChange={(e) => setCity(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="websiteInputField">
        <Form.Control type="url" placeholder="Website / LinkedIn *" value={website} onChange={(e) => setWebsite(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="collaborationAreasField">
        <Form.Label>Em que actividades gostarias de colaborar? *</Form.Label>
        <Form.Check type="checkbox" checked={mentorChecked} label="Ser mentor/a" onChange={(e) => setMentorChecked(e.target.checked ? true : false)}/>
        <Form.Check type="checkbox" checked={speakerChecked} label="Ser orador/a (escolas, workshops, aulas)" onChange={(e) =>  setSpeakerChecked(e.target.checked ? true : false)}/>
        <Form.Check type="checkbox" checked={contentChecked} label="Criação de conteúdo social (Instagram, notícias, etc.)" onChange={(e) =>  setContentChecked(e.target.checked ? true : false)}/>
        <Form.Check type="checkbox" checked={socialMediaChecked}  label="Gestão de imagem e redes sociais" onChange={(e) =>  setSocialMediaChecked(e.target.checked ? true : false)}/>
        <Form.Check type="checkbox" checked={eventOrgChecked} label="Organização de eventos (encontros, workshops)" onChange={(e) => setEventOrgChecked(e.target.checked ? true : false)}/>
        <Form.Check type="checkbox" checked={promotionChecked} label="Divulgação" onChange={(e) =>  setPromotionChecked(e.target.checked ? true : false)}/>
        <Form.Check type="checkbox" checked={technicalChecked} label="Colaboração técnica (gestão do website)" onChange={(e) =>  setTechnicalChecked(e.target.checked ? true : false)}/>
        <Form.Check type="checkbox" checked={otherChecked}  label="Outras" onChange={(e) =>  setOtherChecked(e.target.checked ? true : false)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="howDidYouFindUsField">
        <Form.Label>Como tomaste conhecimento da nossa comunidade? *</Form.Label>
        <Form.Check type="checkbox" checked={foundUsInstaChecked} label="Instagram" onChange={(e) => setFoundUsInstaChecked(e.target.checked ? true : false)}/>
        <Form.Check type="checkbox" checked={foundUsWebsiteChecked} label="Website" onChange={(e) =>  setFoundUsWebsiteChecked(e.target.checked ? true : false)}/>
        <Form.Check type="checkbox" checked={foundUsLinkedinChecked} label="LinkedIn" onChange={(e) => setFoundUsLinkedinChecked(e.target.checked ? true : false)}/>
        <Form.Check type="checkbox" checked={foundUsFacebookChecked} label="Facebook" onChange={(e) => setFoundUsFacebookChecked(e.target.checked ? true : false)}/>
        <Form.Check type="checkbox" checked={foundUsOtherChecked} label="Outro" onChange={(e) => setFoundUsOtherChecked(e.target.checked ? true : false)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="subjectMessageField">
        <Form.Label>Fala-nos um pouco sobre ti e de que forma gostarias de colaborar. *</Form.Label>
        <Form.Control type="text" placeholder="Mensagem / Comentário" value={message} onChange={(e) => setMessage(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!name || !email || !city || !website || !message } onClick={sendForm}>
        Submeter
      </Button>
    </Form>
    );
  }
  
  export default CollaboratorForm;
  