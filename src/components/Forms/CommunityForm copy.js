import React, { useEffect, useState } from 'react';
import { Form, Stack } from 'react-bootstrap';
import { SuccessToastMessage, ErrorToastMessage } from 'components/Forms/Toasts';
import APEX from 'services/apex-api';
import formConstants from 'constants/forms';
import Reaptcha from 'reaptcha';
import { REST } from 'discord.js';

function CommunityForm({ translation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [city, setCity] = useState(''); // dropdown
  const [schoolYear, setSchoolYear] = useState(''); //dropdown
  const [workField, setWorkField] = useState(''); //dropdown
  const [reskill, setReskill] = useState(false); //dropdown
  const [reskillDesc, setReskillDesc] = useState(false); //dropdown
  const [currentSituation, setCurrentSituation] = useState(false); //dropdown
  const [foundUs] = useState(false);
  const [validated, setValidated] = useState(false);

  const resetData = () => {
    setName('');
    setEmail('');
    setBirthYear('');
    setCity('');
    setSchoolYear('');
    setWorkField('');
    setReskill('');
    setReskillDesc('');
    setCurrentSituation('');
    setFoundUs('');
  };

  const [showCaptcha, setShowCaptcha] = useState(true);
  // const [sending, setSending] = useState(false);

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

  const validForm = () => {
    let validation = true;

    [name, email, birthYear, city, schoolYear, workField, currentSituation, foundUs].forEach(
      (inputField) => {
        inputField.length == 0 ? (validation = false) : '';
      }
    );

    setValidated(validation);
  };

  useEffect(() => {
    validForm();
  });

  const handleFormWasSubmitted = (evt) => {
    evt.preventDefault();

    var formData = JSON.stringify({
      name,
      email,
      birthyear: birthYear,
      city,
      still_in_school: schoolYear,
      work_field: workField,
      reskilling: reskill ? 1 : 0,
      reskilling_course: reskillDesc,
      current_situation: currentSituation,
      found_us: foundUs
    });

    // setSending(true);
    hideToasts();

    APEX.postCommunityForm(formData)
      .then(() => {
        showSuccessToast();
        resetData();
      })
      .catch((error) => {
        console.log('error', error);
        showErrorToast();
      })
      .finally(() => {
        // setSending(false);
        showCaptcha(true);
      });
  };

  const yearsRange = Array.from(new Array(120), (_, index) => new Date().getFullYear() - index);

  return (
    <>
      <SuccessToastMessage
        show={successToast}
        onClose={hideSuccessToast}
        translation={translation}
      />
      <ErrorToastMessage show={errorToast} onClose={hideErrorToast} translation={translation} />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Stack gap={3}>
          <Form.Group noValidate validated={validated} className="mb-3" controlId="nameInputField">
            <Form.Control
              required
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
              required
              type="email"
              name="emailInputField"
              placeholder={translation('CommunityPage-CommunityForm-EmailLabel')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="lg"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="cityInputField">
            <Form.Select
              required
              onChange={(e) => setCity(e.target.value)}
              name="cityInputField"
              aria-label="Localização">
              <option>Localização</option>
              {formConstants.cities.map((city, idx) => {
                return (
                  <option key={'city-' + idx} value={city}>
                    {city}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="birthYearInputField">
            <Form.Select
              required
              onChange={(e) => setBirthYear(e.target.value)}
              name="birthYearInputField"
              aria-label="Ano de Nascimento">
              <option>Ano de Nascimento</option>
              {yearsRange.map(function (year) {
                return (
                  <option key={'year-' + year} value={year}>
                    {year}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="eduLevelInputField">
            <Form.Select
              required
              onChange={(e) => setSchoolYear(e.target.value)}
              name="eduLevelInputField"
              aria-label="Escolaridade">
              <option>Escolaridade</option>
              {Object.keys(formConstants.educationLevelList).map(function (edulevel) {
                return (
                  <option key={'edulevel-' + edulevel} value={edulevel}>
                    {formConstants.educationLevelList[edulevel]}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="workFieldInputField">
            <Form.Select
              required
              onChange={(e) => setWorkField(e.target.value)}
              name="workFieldInputField"
              aria-label="Área de formação/trabalho">
              <option>Área de formação/trabalho</option>
              {Object.keys(formConstants.workFieldsList).map(function (work) {
                return (
                  <option key={'work-' + work} value={work}>
                    {formConstants.workFieldsList[work]}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="reskillInputField">
            <Form.Label>Em mudança de carreira? </Form.Label>
            <Form.Check // prettier-ignore
              inline
              onChange={(e) => setReskill(e.target.checked)}
              type="checkbox"
              id={'reskill-1'}
            />
            {reskill && (
              <Form.Group className="mb-3" controlId="reskillDescField">
                <Form.Control
                  type="text"
                  name="reskillDescField"
                  placeholder={'Onde?'}
                  onChange={(e) => setReskillDesc(e.target.value)}
                  size="lg"
                />
              </Form.Group>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="currentSituationInputField">
            <Form.Select
              required
              onChange={(e) => setCurrentSituation(e.target.value)}
              name="currentSituationInputField"
              aria-label="Situação Atual">
              <option>Situação Atual</option>
              {Object.keys(formConstants.currentSituationList).map(function (currsit) {
                return (
                  <option key={'currsit-' + currsit} value={currsit}>
                    {formConstants.currentSituationList[currsit]}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="foundUsInputField">
            <Form.Select
              required
              onChange={(e) => setCurrentSituation(e.target.value)}
              name="foundUsInputField"
              aria-label="Onde conheceste As Raparigas do Código?">
              <option>Onde conheceste As Raparigas do Código?</option>
              {Object.keys(formConstants.foundUsList).map(function (found) {
                return (
                  <option key={'found-' + found} value={found}>
                    {formConstants.foundUsList[found]}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
        </Stack>

        <div className="d-flex justify-content-between">
          <p className="mandatory-hint">
            {translation('CommunityPage-CommunityForm-MandatoryLabel')}
          </p>

          <button
            className="button-primary"
            type="submit"
            disabled={!validForm}
            onClick={handleFormWasSubmitted}>
            {translation('CommunityPage-CommunityForm-SubmitButton')}
          </button>
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
