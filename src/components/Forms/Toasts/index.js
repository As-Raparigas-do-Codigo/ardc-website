import React from "react";
import ToastMessage from "components/Toast";
import Constants from "Constants";

export const SuccessToastMessage = ({ show = false, onClose }) => (
  <ToastMessage
    show={show}
    onClose={onClose}
    autohide={true}
    delay={5000}
    title="Obrigado! A tua mensagem foi enviada com sucesso. :D"
    variant="success"
  >
    <p>
      Agradecemos o teu interesse no nosso projecto. Alguém da nossa equipa irá entrar em contacto contigo, o mais depressa possível.
    </p>
  </ToastMessage>
);

export const ErrorToastMessage = ({ show = false, onClose }) => (
  <ToastMessage
    show={show}
    onClose={onClose}
    autohide={false}
    title="Oops! Algo de inesperado aconteceu. :("
    variant="danger"
  >
    <p>
      Pedimos desculpa mas, por motivos técnicos, não foi possível submeter o teu pedido. Tenta novamente ou contacta-nos através do email <a href={`mailto:${Constants.Email}`}>{Constants.Email}</a>.
    </p>
  </ToastMessage>
);
