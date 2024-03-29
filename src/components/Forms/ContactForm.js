import React, { useEffect, useState } from 'react';
import { Form, Stack } from 'react-bootstrap';
import { SuccessToastMessage, ErrorToastMessage } from 'components/Forms/Toasts';
import { validateEmail } from 'helpers/utils/ValidateEmail';

function ContactForm({ translation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [validForm, setValidForm] = useState(false);

  const resetData = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setValidForm(false);
  };

  // eslint-disable-next-line no-unused-vars
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

  const handleFormWasSubmitted = () => {
    let myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Access-Control-Allow-Origin', '*');
    let raw = JSON.stringify({
      name: name,
      email: email,
      subject: subject,
      message: message
    });
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      mode: 'no-cors',
      body: raw,
      redirect: 'follow'
    };
    setSending(true);
    hideToasts();
    fetch('https://apex.oracle.com/pls/apex/ardc/forms/contact', requestOptions)
      .then((res) => {
        if (res.status == 200) {
          showSuccessToast();
          resetData();
        } else {
          showErrorToast();
        }
      })
      .catch((err) => {
        console.log('Error:' + err);
        showErrorToast();
      })
      .finally(() => {
        setSending(false);
      });
  };

  useEffect(() => {
    if (
      name.length > 0 &&
      email.length > 0 &&
      subject.length > 0 &&
      !sending &&
      validateEmail(email)
    ) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [name, email, subject, sending]);

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
          <Form.Group className="mb-3 display-flex-webkit" controlId="nameInputField">
            <Form.Control
              type="text"
              placeholder={translation('ContactsPage-ContactFormSection-NameLabel')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              enabled={showCaptcha.toString()}
            />
            <span className={'asterisk-required'}>*</span>
          </Form.Group>
          <Form.Group className="mb-3 display-flex-webkit" controlId="emailInputField">
            <Form.Control
              type="email"
              placeholder={translation('ContactsPage-ContactFormSection-EmailLabel')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              enabled={showCaptcha.toString()}
            />
            <span className={'asterisk-required'}>*</span>
          </Form.Group>
          <Form.Group className="mb-3 display-flex-webkit" controlId="subjectInputField">
            <Form.Control
              type="text"
              placeholder="Assunto"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              enabled={showCaptcha.toString()}
            />
            <span className={'asterisk-required'}>*</span>
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
        <div className="justify-content-between">
          {
            <p className="mandatory-hint">
              {translation('ContactsPage-ContactFormSection-MandatoryLabel')}
            </p>
          }
          {
            <button
              className="button-primary"
              type="submit"
              disabled={!validForm}
              onClick={handleFormWasSubmitted}>
              {translation('ContactsPage-ContactFormSection-SendMessageButton')}
            </button>
          }
        </div>
      </Form>
    </>
  );
}

export default ContactForm;
