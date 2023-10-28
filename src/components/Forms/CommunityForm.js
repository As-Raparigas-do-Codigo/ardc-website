import React, { useEffect, useState, useRef } from 'react';
import { Form, Stack } from 'react-bootstrap';
import { SuccessToastMessage, ErrorToastMessage } from 'components/Forms/Toasts';
import formConstants from 'constants/forms';

function CommunityForm({ translation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [city, setCity] = useState(''); // dropdown
  const [schoolYear, setSchoolYear] = useState(''); //dropdown
  const [workField, setWorkField] = useState(''); //dropdown
  const [reskill, setReskill] = useState(false); //dropdown
  const [reskillDesc, setReskillDesc] = useState(''); //dropdown
  const [currentSituation, setCurrentSituation] = useState(false); //dropdown
  const [foundUs, setFoundUs] = useState(false);
  const [validForm, setValidForm] = useState(false);

  const birthYearSelect = useRef(null);
  const citySelect = useRef(null);
  const schoolYearSelect = useRef(null);
  const workFieldSelect = useRef(null);
  const currentSituationSelect = useRef(null);
  const foundUsSelect = useRef(null);

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
    setValidForm(false);

    //set first option to be like a label
    birthYearSelect.current.classList.add('label-option');
    citySelect.current.classList.add('label-option');
    schoolYearSelect.current.classList.add('label-option');
    workFieldSelect.current.classList.add('label-option');
    currentSituationSelect.current.classList.add('label-option');
    foundUsSelect.current.classList.add('label-option');
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

  const selectLabelStyle = (e) => {
    if (e.target.value == e.target.firstChild.value) {
      e.target.classList.add('label-option');
    } else {
      e.target.classList.remove('label-option');
    }
  };

  const handleFormWasSubmitted = (evt) => {
    evt.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Access-Control-Allow-Origin', '*');
    var formData = JSON.stringify({
      person_name: name,
      email,
      birth_year: birthYear,
      city,
      school_year: schoolYear,
      work_field: workField,
      reskilling: reskill ? 1 : 0,
      reskilling_course: reskillDesc,
      current_situation: currentSituation,
      found_us: foundUs
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      mode: 'no-cors',
      body: formData,
      redirect: 'follow'
    };
    setSending(true);
    hideToasts();
    fetch('https://apex.oracle.com/pls/apex/ardc/forms/community_access', requestOptions)
      .then((response) => response.text())
      .then(() => {
        showSuccessToast();
        resetData();
      })
      .catch((err) => {
        console.log(err);
        showErrorToast();
      })
      .finally(() => {
        setSending(false);
        setShowCaptcha(true);
      });
  };

  const yearsRange = Array.from(new Array(120), (_, index) => new Date().getFullYear() - index);

  useEffect(() => {
    const validateEmail = () => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    if (
      name.length > 0 &&
      email.length > 0 &&
      birthYear.length > 0 &&
      city.length > 0 &&
      workField.length > 0 &&
      currentSituation.length > 0 &&
      foundUs.length > 0 &&
      !sending &&
      validateEmail()
    ) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [name, email, birthYear, sending, city, workField, currentSituation, foundUs]);

  return (
    <>
      <SuccessToastMessage
        show={successToast}
        onClose={hideSuccessToast}
        translation={translation}
      />
      <ErrorToastMessage show={errorToast} onClose={hideErrorToast} translation={translation} />
      <Form id="comunidade-form">
        <Stack gap={3}>
          <Form.Group className="mb-3 display-flex-webkit" controlId="nameInputField">
            <Form.Control
              required
              type="text"
              name="nameInputField"
              placeholder={translation('CommunityPage-CommunityForm-NameLabel')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength="200"
            />
            <span className={'asterisk-required'}>*</span>
          </Form.Group>
          <Form.Group className="mb-3 display-flex-webkit" controlId="emailInputField">
            <Form.Control
              required
              type="email"
              name="emailInputField"
              placeholder={translation('CommunityPage-CommunityForm-EmailLabel')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className={'asterisk-required'}>*</span>
          </Form.Group>

          <Form.Group className="mb-3 display-flex-webkit" controlId="cityInputField">
            <Form.Select
              ref={citySelect}
              className="label-option"
              required
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                selectLabelStyle(e);
              }}
              name="cityInputField"
              aria-label="Localização">
              <option value="">Localização</option>
              {formConstants.cities.map((city, idx) => {
                return (
                  <option key={'city-' + idx} value={city}>
                    {city}
                  </option>
                );
              })}
            </Form.Select>
            <span className={'asterisk-required'}>*</span>
          </Form.Group>
          <Form.Group className="mb-3 display-flex-webkit" controlId="birthYearInputField">
            <Form.Select
              ref={birthYearSelect}
              className="label-option"
              required
              value={birthYear}
              onChange={(e) => {
                setBirthYear(e.target.value);
                selectLabelStyle(e);
              }}
              name="birthYearInputField"
              aria-label="Ano de Nascimento">
              <option value="">Ano de Nascimento</option>
              {yearsRange.map(function (year) {
                return (
                  <option key={'year-' + year} value={year}>
                    {year}
                  </option>
                );
              })}
            </Form.Select>
            <span className={'asterisk-required'}>*</span>
          </Form.Group>
          <Form.Group className="mb-3 display-flex-webkit" controlId="schoolYearInputField">
            <Form.Select
              ref={schoolYearSelect}
              className="label-option"
              required
              value={schoolYear}
              onChange={(e) => {
                setSchoolYear(e.target.value);
                selectLabelStyle(e);
              }}
              name="schoolYearField"
              aria-label="Escolaridade">
              <option value="">Escolaridade</option>
              {Object.keys(formConstants.educationLevelList).map(function (edulevel) {
                return (
                  <option key={'edulevel-' + edulevel} value={edulevel}>
                    {formConstants.educationLevelList[edulevel]}
                  </option>
                );
              })}
            </Form.Select>
            <span className={'asterisk-required'}>*</span>
          </Form.Group>
          <Form.Group className="mb-3 display-flex-webkit" controlId="workFieldInputField">
            <Form.Select
              ref={workFieldSelect}
              required
              className="label-option"
              value={workField}
              onChange={(e) => {
                setWorkField(e.target.value);
                selectLabelStyle(e);
              }}
              name="workFieldInputField"
              aria-label="Área de formação/trabalho">
              <option value="">Área de formação/trabalho</option>
              {Object.keys(formConstants.workFieldsList).map(function (work) {
                return (
                  <option key={'work-' + work} value={work}>
                    {formConstants.workFieldsList[work]}
                  </option>
                );
              })}
            </Form.Select>
            <span className={'asterisk-required'}>*</span>
          </Form.Group>
          <Form.Group className="mb-3" controlId="reskillInputField">
            <Form.Label className="label-option me-3">Em mudança de carreira?</Form.Label>

            <Form.Check // prettier-ignore
              inline
              value={reskill}
              onChange={(e) => setReskill(e.target.checked)}
              type="checkbox"
              id={'reskill-1'}
            />
            {reskill && (
              <Form.Group className="mt-3" controlId="reskillDescField">
                <Form.Control
                  type="text"
                  name="reskillDescField"
                  placeholder={'Onde?'}
                  onChange={(e) => setReskillDesc(e.target.value)}
                />
              </Form.Group>
            )}
          </Form.Group>
          <Form.Group className="mb-3 display-flex-webkit" controlId="currentSituationInputField">
            <Form.Select
              ref={currentSituationSelect}
              required
              value={currentSituation}
              className="label-option"
              onChange={(e) => {
                setCurrentSituation(e.target.value);
                selectLabelStyle(e);
              }}
              name="currentSituationInputField"
              aria-label="Situação Atual">
              <option value="">Situação Atual</option>
              {Object.keys(formConstants.currentSituationList).map(function (currsit) {
                return (
                  <option key={'currsit-' + currsit} value={currsit}>
                    {formConstants.currentSituationList[currsit]}
                  </option>
                );
              })}
            </Form.Select>
            <span className={'asterisk-required'}>*</span>
          </Form.Group>
          <Form.Group className="mb-3 display-flex-webkit" controlId="foundUsInputField">
            <Form.Select
              ref={foundUsSelect}
              required
              value={foundUs}
              className="label-option"
              onChange={(e) => {
                setFoundUs(e.target.value);
                selectLabelStyle(e);
              }}
              name="foundUsInputField"
              aria-label="Onde conheceste As Raparigas do Código?">
              <option value="">Onde conheceste As Raparigas do Código?</option>
              {Object.keys(formConstants.foundUsList).map(function (found) {
                return (
                  <option key={'found-' + found} value={found}>
                    {formConstants.foundUsList[found]}
                  </option>
                );
              })}
            </Form.Select>
            <span className={'asterisk-required'}>*</span>
          </Form.Group>
        </Stack>

        <div className="justify-content-between">
          {
            <p className="mandatory-hint">
              {translation('CommunityPage-CommunityForm-MandatoryLabel')}
            </p>
          }

          {
            <button
              className="button-primary"
              type="submit"
              disabled={!validForm}
              onClick={handleFormWasSubmitted}>
              {translation('CommunityPage-CommunityForm-SubmitButton')}
            </button>
          }
        </div>
      </Form>
    </>
  );
}

export default CommunityForm;
