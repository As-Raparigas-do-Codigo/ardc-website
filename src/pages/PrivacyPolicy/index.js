import React from 'react';
import PageLayout from 'components/PageLayout';
import { Container, Row } from 'react-bootstrap';
import Constants from 'constants';
import './privacy-policy.scss';

function PrivacyPolicy({ translation }) {
  const breadcrumbs = [
    {
      label: translation('HomePage-PageName'),
      href: Constants.Routes.Home
    },
    {
      label: translation('PrivacyPolicyPage-PageName')
    }
  ];

  return (
    <PageLayout
      title={translation('PrivacyPolicyPage-PageName')}
      description={translation('PrivacyPolicyPage-Description')}
      breadcrumbsData={breadcrumbs}>
      <Container fluid="md">
        <Row>
          <p>{translation('PrivacyPolicyPage-Text_p1')}</p>
          <p>{translation('PrivacyPolicyPage-Text_p2')}</p>
          <p>{translation('PrivacyPolicyPage-Text_p3')}</p>
          <p>{translation('PrivacyPolicyPage-Text_p4')}</p>
          <p>{translation('PrivacyPolicyPage-Text_p5')}</p>
          <p>{translation('PrivacyPolicyPage-Text_p6')}</p>
          <h2 className="fw-bold">{translation('PrivacyPolicyPage-Title')}</h2>
          <h5>O que são cookies?</h5>
          <p>
            Como é prática comum em quase todos os sites, este site usa cookies, que
            são pequenos ficheiros guardados no computador que ajudam a melhorar a experiência do utilizador. Esta
            página descreve quais as informações que estas cookies recolhem, como as usamos e a razão pela qual
            precisamos de as armazenar. Descrevemos ainda como poderá impedir que
            estas cookies sejam armazenados, no entanto, isso poderá reduzir ou
            &apos;partir&apos; certas funcionalidades do site.
          </p>
          <h5>Como usamos as cookies?</h5>
          <p>
            Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos
            casos, não existem opções padrão do setor para desativar cookies sem desativar
            completamente a funcionalidade e os recursos que estam adicionam ao site. Recomendamos que
            deixe todas as cookies activas caso não tenha certeza se precisa ou não
            delas, caso sejam usadas para fornecer um serviço que usa.
          </p>
          <h5>Desativar cookies</h5>
          <p>
            Pode desactivar cookies ajustando as configurações do seu browser
            (consulte a Ajuda do browser para saber como o fazer). Esteja ciente de que a
            desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você
            visita. A desativação de cookies geralmente resultará na desativação de determinadas
            funcionalidades e recursos deste site.
          </p>
          <h5> Cookies que definimos</h5>
          <ul>
            <li>
              <p className="fw-bold">7. Cookies de preferências do site</p>
            </li>
            <li>
              <p>
                Em certas situações, podemos guardar cookies de forma a conhecer-mos as suas 
                preferências de utilização do site.
              </p>
            </li>
          </ul>
          <h3>Cookies de Terceiros</h3>
          <p>
            Em alguns casos especiais, também usamos cookies fornecidas por terceiros. A
            secção a seguir detalha quais cookies de terceiros que pode encontrar neste
            site.
          </p>
          <ul>
            <li className="special-quote-list">
              <p>
                Este site utiliza o Google Analytics, que é uma das soluções de análise mais difundidas
                e confiáveis da Web, para nos ajudar a entender como é utilizado o site e como podemos
                continuar a melhorar a sua experiência. Estas cookies podem monitorizar dados como o tempo 
                gasto no site e as páginas visitadas, para que possamos continuar a produzir
                conteúdo atraente.
              </p>
            </li>
            <p>
              Para mais informações sobre as cookies do Google Analytics, consulte a página oficial do
              Google Analytics.
            </p>
          </ul>
          <h3>Compromisso de Utilizador</h3>
          <p>
            O utilizador compromete-se a fazer uso adequado dos conteúdos e da informação que "As
            Raparigas do Código" oferecem no site e com caráter enunciativo, mas não limitativo:
          </p>
          <ul>
            <li className="ms-5">
              <p>
                A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem
                pública;
              </p>
            </li>
            <li className="ms-5">
              <p>
                B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, apostas
                online ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou
                contra os direitos humanos;
              </p>
            </li>
            <li className="ms-5">
              <p>
                C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) d' "As
                Raparigas do Código", dos seus fornecedores ou terceiros, para introduzir ou
                disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software
                que sejam capazes de causar danos anteriormente mencionados.
              </p>
            </li>
          </ul>
          <h3>Mais Informações</h3>
          <p>
            Esperemos que este documento seja esclarecedor e, como mencionado anteriormente, 
             se não tiver a certeza se precisa ou não de determinadas cookies, 
               geralmente é mais seguro deixá-las activas.
          </p>
        </Row>
      </Container>
    </PageLayout>
  );
}
export default PrivacyPolicy;
