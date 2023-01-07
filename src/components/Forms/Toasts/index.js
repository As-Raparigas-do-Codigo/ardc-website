import React from 'react';
import ToastMessage from 'components/Toast';
import Constants from 'constants';

export const SuccessToastMessage = ({ show = false, onClose, translation }) => (
  <ToastMessage
    show={show}
    onClose={onClose}
    autohide={true}
    delay={5000}
    title={translation('Toast-MessageSentSuccessfully')}
    variant="success">
    <p>{translation('Toast-ContactSentSuccessfully')}</p>
  </ToastMessage>
);

export const ErrorToastMessage = ({ show = false, onClose, translation }) => (
  <ToastMessage
    show={show}
    onClose={onClose}
    autohide={false}
    title={translation('Toast-UnexpectedErrorOccurred')}
    variant="danger">
    <p>
      {translation('Toast-ErrorMessageWithEmail')}
      <a className="text-danger" href={`mailto:${Constants.Email}`}>
        {Constants.Email}
      </a>
      .
    </p>
  </ToastMessage>
);
