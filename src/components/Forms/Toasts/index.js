import React from 'react';
import ToastMessage from 'components/Toast';
import Constants from 'data/Constants';
import SiteContent from 'data/SiteContent';

export const SuccessToastMessage = ({ show = false, onClose }) => (
  <ToastMessage
    show={show}
    onClose={onClose}
    autohide={true}
    delay={5000}
    title={SiteContent.Toast.MessageSentSuccessfully}
    variant="success"
  >
    <p>
      {SiteContent.Toast.ContactSentSuccessfully}
    </p>
  </ToastMessage>
);

export const ErrorToastMessage = ({ show = false, onClose }) => (
  <ToastMessage
    show={show}
    onClose={onClose}
    autohide={false}
    title={SiteContent.Toast.UnexpectedErrorOccurred}
    variant="danger"
  >
    <p>
      {SiteContent.Toast.ErrorMessageWithEmail}
      <a className="text-danger" href={`mailto:${Constants.Email}`}>
        {Constants.Email}
      </a>
      .
    </p>
  </ToastMessage>
);
