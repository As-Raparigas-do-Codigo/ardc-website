import React, { useState } from "react";
import { Form, Stack } from "react-bootstrap";
import { SuccessToastMessage, ErrorToastMessage } from "components/Forms/Toasts";

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

  const resetData = () => {
    setName('');
    setEmail('');
    setCity('');
    setWebsite('');
    setMentorChecked('');
    setSpeakerChecked('');
    setContentChecked('');
    setSocialMediaChecked('');
    setEventOrgChecked('');
    setPromotionChecked('');
    setTechnicalChecked('');
    setOtherChecked('');
    setFoundUsInstaChecked('');
    setFoundUsWebsiteChecked('');
    setFoundUsLinkedinChecked('');
    setFoundUsFacebookChecked('');
    setFoundUsOtherChecked('');
    setMessage('');
  };

  const [sending, setSending] = useState(false);

  const [successToast, setSuccessToast] = useState(false);
  const hideSuccessToast = () => setSuccessToast(false);
  const showSuccessToast = () => setSuccessToast(true);

  const [errorToast, setErrorToast] = useState(false);
  const hideErrorToast = () => setErrorToast(false);
  const showErrorToast = () => setErrorToast(true);

  const hideToasts = () => {
    hideSuccessToast();
    hideErrorToast();
  };

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
    setSending(true);
    hideToasts();
    fetch("https://apex.oracle.com/pls/apex/ardc/forms/collaborator", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .then(() => {
        showSuccessToast();
        resetData();
      })
      .catch(error => {
        console.log('error', error);
        showErrorToast();
      })
      .finally(() => setSending(false));
  }

  return (
    <>
      <SuccessToastMessage show={successToast} onClose={hideSuccessToast} />
      <ErrorToastMessage show={errorToast} onClose={hideErrorToast} />
      <Form>
        <Form.Group className="mb-3" controlId="nameInputField">
          <Form.Control type="text" placeholder="Nome *" value={name} onChange={(e) => setName(e.target.value)} size="lg" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="emailInputField">
          <Form.Control type="email" placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)} size="lg" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cityInputField">
          <Form.Control type="text" placeholder="Cidade *" value={city} onChange={(e) => setCity(e.target.value)} size="lg" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="websiteInputField">
          <Form.Control type="url" placeholder="Website / LinkedIn *" value={website} onChange={(e) => setWebsite(e.target.value)} size="lg" />
        </Form.Group>
        <Form.Group className="mt-5 mb-2" controlId="collaborationAreasField">
          <Stack gap={3}>
            <Form.Label>Em que actividades gostarias de colaborar? *</Form.Label>
            <Form.Check type="checkbox" id="mentor" checked={mentorChecked} label="Ser mentor/a" onChange={(e) => setMentorChecked(e.target.checked ? true : false)} />
            <Form.Check type="checkbox" id="speaker" checked={speakerChecked} label="Ser orador/a (escolas, workshops, aulas)" onChange={(e) => setSpeakerChecked(e.target.checked ? true : false)} />
            <Form.Check type="checkbox" id="content" checked={contentChecked} label="Criação de conteúdo social (Instagram, notícias, etc.)" onChange={(e) => setContentChecked(e.target.checked ? true : false)} />
            <Form.Check type="checkbox" id="socialMedia" checked={socialMediaChecked} label="Gestão de imagem e redes sociais" onChange={(e) => setSocialMediaChecked(e.target.checked ? true : false)} />
            <Form.Check type="checkbox" id="eventOrg" checked={eventOrgChecked} label="Organização de eventos (encontros, workshops)" onChange={(e) => setEventOrgChecked(e.target.checked ? true : false)} />
            <Form.Check type="checkbox" id="promotion" checked={promotionChecked} label="Divulgação" onChange={(e) => setPromotionChecked(e.target.checked ? true : false)} />
            <Form.Check type="checkbox" id="technical" checked={technicalChecked} label="Colaboração técnica (gestão do website)" onChange={(e) => setTechnicalChecked(e.target.checked ? true : false)} />
            <Form.Check type="checkbox" id="other" checked={otherChecked} label="Outras" onChange={(e) => setOtherChecked(e.target.checked ? true : false)} />
          </Stack>
        </Form.Group>
        <Form.Group className="mt-5 mb-2" controlId="howDidYouFindUsField">
          <Stack gap={3}>
            <Form.Label>Como tomaste conhecimento da nossa comunidade? *</Form.Label>
            <Form.Check type="checkbox" id="foundUsInsta" checked={foundUsInstaChecked} label="Instagram" onChange={(e) => setFoundUsInstaChecked(e.target.checked ? true : false)} />
            <Form.Check type="checkbox" id="foundUsWebsite" checked={foundUsWebsiteChecked} label="Website" onChange={(e) => setFoundUsWebsiteChecked(e.target.checked ? true : false)} />
            <Form.Check type="checkbox" id="foundUsLinkedin" checked={foundUsLinkedinChecked} label="LinkedIn" onChange={(e) => setFoundUsLinkedinChecked(e.target.checked ? true : false)} />
            <Form.Check type="checkbox" id="foundUsFacebook" checked={foundUsFacebookChecked} label="Facebook" onChange={(e) => setFoundUsFacebookChecked(e.target.checked ? true : false)} />
            <Form.Check type="checkbox" id="foundUsOther" checked={foundUsOtherChecked} label="Outro" onChange={(e) => setFoundUsOtherChecked(e.target.checked ? true : false)} />
          </Stack>
        </Form.Group>
        <Form.Group className="mt-5 mb-2" controlId="subjectMessageField">
          <Form.Label>Fala-nos um pouco sobre ti e de que forma gostarias de colaborar. *</Form.Label>
          <Form.Control type="text" as="textarea" rows="3" placeholder="Mensagem / Comentário" value={message} onChange={(e) => setMessage(e.target.value)} size="lg" />
        </Form.Group>
        <div className="d-flex justify-content-between">
          <p className="mandatory-hint">* Preenchimento obrigatório</p>
          <button className="button-primary" type="submit" disabled={!name || !email || !city || !website || !message || sending} onClick={sendForm}>
            Submeter
          </button>
        </div>
      </Form>
    </>
  );
}

export default CollaboratorForm;
