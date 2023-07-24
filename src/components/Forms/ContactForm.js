import React, { useState } from 'react';
import { Form, Stack } from 'react-bootstrap';
import { SuccessToastMessage, ErrorToastMessage } from 'components/Forms/Toasts';
import Reaptcha from 'reaptcha';

function ContactForm({ translation }) {
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
    setShowCaptcha(false);
  };

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
        setSending(false);
        showCaptcha(true);
      });
  };

  return (
    <>
      <SuccessToastMessage
        show={successToast}
        onClose={hideSuccessToast}
        translation={translation}
      />
      <ErrorToastMessage show={errorToast} onClose={hideErrorToast} translation={translation} />
      <Form>
        <Stack gap={3}>
          <Form.Group className="mb-3" controlId="nameInputField">
            <Form.Control
              type="text"
              placeholder={translation('ContactsPage-ContactFormSection-NameLabel')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              enabled={showCaptcha.toString()}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="emailInputField">
            <Form.Control
              type="email"
              placeholder={translation('ContactsPage-ContactFormSection-EmailLabel')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              enabled={showCaptcha.toString()}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="subjectInputField">
            <Form.Control
              type="text"
              placeholder="Assunto *"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              enabled={showCaptcha.toString()}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="subjectMessageField">
            <Form.Control
              type="text"
              as="textarea"
              rows="3"
              placeholder={translation('ContactsPage-ContactFormSection-MessageLabel')}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              enabled={showCaptcha.toString()}
            />
          </Form.Group>
        </Stack>
        <div className="d-flex justify-content-between">
          {!showCaptcha && (
            <p className="mandatory-hint">
              {translation('ContactsPage-ContactFormSection-MandatoryLabel')}
            </p>
          )}
          {!showCaptcha && (
            <button
              className="button-primary"
              type="submit"
              disabled={!name || !email || !subject || !message || sending}
              onClick={handleFormWasSubmitted}>
              {translation('ContactsPage-ContactFormSection-SendMessageButton')}
            </button>
          )}
          {
            /* this is a test recaptcha */
            showCaptcha && (
              <Reaptcha sitekey="***REMOVED***" onVerify={onVerify} />
            )
          }
        </div>
      </Form>
    </>
  );
}

export default ContactForm;
