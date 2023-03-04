import React, { useState } from 'react';
import { Form, Stack } from 'react-bootstrap';
import { SuccessToastMessage, ErrorToastMessage } from 'components/Forms/Toasts';
import Reaptcha from 'reaptcha';

function CommunityForm({ translation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mentorshipType, setMentorshipType] = useState(1);
  const [frontendChecked, setFrontendChecked] = useState(false);
  const [backendChecked, setBackendChecked] = useState(false);
  const [projectMgmtChecked, setProjectMgmtChecked] = useState(false);
  const [uxuiChecked, setUXUIChecked] = useState(false);
  const [message, setMessage] = useState('');

  const resetData = () => {
    setMentorshipType('');
    setFrontendChecked('');
    setBackendChecked('');
    setProjectMgmtChecked('');
    setUXUIChecked('');
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

  const handleFormWasSubmitted = (evt) => {
    evt.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Content-Type', 'application/json');
    var raw = JSON.stringify({
      name: name,
      email: email,
      mentorship_type: mentorshipType,
      front_end: frontendChecked ? 1 : 0,
      back_end: backendChecked ? 1 : 0,
      project_mgmt: projectMgmtChecked ? 1 : 0,
      ux_ui: uxuiChecked ? 1 : 0,
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
    fetch('https://apex.oracle.com/pls/apex/ardc/forms/mentorship', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .then(() => {
        showSuccessToast();
        resetData();
      })
      .catch((error) => {
        console.log('error', error);
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
              name="nameInputField"
              placeholder={translation('CommunityPage-CommunityForm-NameLabel')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              size="lg"
              maxLength="200"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="emailInputField">
            <Form.Control
              type="email"
              name="emailInputField"
              placeholder={translation('CommunityPage-CommunityForm-EmailLabel')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="lg"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="subjectMessageField">
            <Form.Control
              type="text"
              as="textarea"
              rows="3"
              placeholder={translation('CommunityPage-CommunityForm-MessageLabel')}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              size="lg"
              maxLength="500"
            />
          </Form.Group>
        </Stack>

        <div className="d-flex justify-content-between">
          {!showCaptcha && (
            <p className="mandatory-hint">
              {translation('CommunityPage-CommunityForm-MandatoryLabel')}
            </p>
          )}
          {!showCaptcha && (
            <button
              className="button-primary"
              type="submit"
              disabled={!name || !email || !message || sending}
              onClick={handleFormWasSubmitted}>
              {translation('CommunityPage-CommunityForm-SubmitButton')}
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

export default CommunityForm;
