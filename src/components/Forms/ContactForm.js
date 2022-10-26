import React, { useState } from 'react';
import { Form, Stack } from 'react-bootstrap';
import { SuccessToastMessage, ErrorToastMessage } from 'components/Forms/Toasts';
import Reaptcha from 'reaptcha';
import SiteContent from 'data/SiteContent';

function ContactForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const resetData = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const [showCaptcha, setShowCaptcha] = useState(true);
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

  const onVerify = () => {
    setShowCaptcha(false)
  }

  const handleFormWasSubmitted = () => {
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Content-Type', 'application/json');
    var raw = JSON.stringify({
      name: name,
      email: email,
      subject: subject,
      message: message
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    setSending(true);
    hideToasts();
    fetch('https://apex.oracle.com/pls/apex/ardc/forms/contact', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .then(() => {
        showSuccessToast();
        resetData();
      })
      .catch(() => {
        showErrorToast();
      })
      .finally(() => {
        setSending(false)
        showCaptcha(true)
      }
    );
  }

  return (
    <>
      <SuccessToastMessage show={successToast} onClose={hideSuccessToast} />
      <ErrorToastMessage show={errorToast} onClose={hideErrorToast} />
      <Form>
        <Stack gap={3}>
          <Form.Group className="mb-3" controlId="nameInputField">
            <Form.Control
              type="text"
              placeholder={SiteContent.ContactsPage.ContactFormSection.NameLabel}
              value={name}
              onChange={(e) => setName(e.target.value)}
              size="lg"
              enabled={showCaptcha}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="emailInputField">
            <Form.Control
              type="email"
              placeholder={SiteContent.ContactsPage.ContactFormSection.EmailLabel}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="lg"
              enabled={showCaptcha}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="subjectInputField">
            <Form.Control
              type="text"
              placeholder="Assunto *"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              size="lg"
              enabled={showCaptcha}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="subjectMessageField">
            <Form.Control
              type="text"
              as="textarea"
              rows="3"
              placeholder={SiteContent.ContactsPage.ContactFormSection.MessageLabel}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              size="lg"
              enabled={showCaptcha}
            />
          </Form.Group>
        </Stack>
        <div className="d-flex justify-content-between">
          {
            !showCaptcha && (
              <p className="mandatory-hint">
                {SiteContent.ContactsPage.ContactFormSection.MandatoryLabel}
              </p>
            )
          }
          {
            !showCaptcha && (
              <button
                className="button-primary"
                type="submit"
                disabled={!name || !email || !subject || !message || sending}
                onClick={handleFormWasSubmitted}>
                {SiteContent.ContactsPage.ContactFormSection.SendMessageButton}
              </button>
            )
          }
          {
            /* this is a test recaptcha */
            showCaptcha && (
              <Reaptcha 
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onVerify={onVerify}/>
            )
          }
        </div>
      </Form>
    </>
  );
}

export default ContactForm;
