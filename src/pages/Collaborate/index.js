import React from 'react';
import CollaboratorForm from 'components/Forms/CollaboratorForm';
import NumberedRow from 'components/NumberedRow';
import PageLayout from 'components/PageLayout';
import { Container, Row } from 'react-bootstrap';
import { Routes, SiteContent } from '../../Constants';

const CollaborateFormSection = () => (
  <Container className="my-5 py-5 padding-top-first-section">
    <Row>
      <div className="mb-2 fs-xxl">Queres colaborar connosco?</div>
      <p className="mb-4"></p>
    </Row>
    <Row id="formulario-colaboracao">
      <CollaboratorForm />
    </Row>
  </Container>
);

const CollaborateContent = () => (
  <Container className="mt-5">
    <Row>
      <p className="mb-2">COMO PODES COLABORAR?</p>
      <h2>Baseamo-nos na colaboração entre membros de diferentes áreas.</h2>
      <p className="mb-4">
        Enquanto comunidade, <strong>As Raparigas do Código</strong> baseiam-se na colaboração entre
        membros de diferentes áreas (engenharia, design, educação, marketing, comunicação, entre
        outras). Se gostas de ensinar, de escrever e produzir conteúdo digital, ou estás sempre a
        par das últimas novidades no mundo da tecnologia, gostávamos muito de poder contar contigo!
      </p>
      <p className="mb-4">
        Existem diferentes formas de poderes colaborar connosco, dependendo da tua disponibilidade e
        interesse. Se gostavas de te juntar a nós, preenche o{' '}
        <a href="#formulario-colaboracao">formulário de colaboração</a> ou envia-nos um email para{' '}
        <a href={`mailto=${Constants.Email}`}>{Constants.Email}</a>. Ficamos à tua
        espera!{' '}
      </p>
    </Row>
    <hr></hr>
  </Container>
);

const Collaborate = () => {
  const breadcrumbs = [
    {
      label: SiteContent.Title.Home,
      href: Routes.Home
    },
    {
      label: SiteContent.Title.DoYouWantToCollaborate
    }
  ];
  return (
    <PageLayout
      title={SiteContent.Title.Collaborate}
      description={SiteContent.Subtitle.Collaborate}
      breadcrumbsData={breadcrumbs}
    >
      <Container fluid="md">
        <Row>
          <CollaborateContent />
        </Row>
        <NumberedRow
          number="01"
          title="Desenvolver conteúdo sobre Tecnologia"
          textHtml="<p>Se és um/a curioso/a da tecnologia, conheces imensos livros, filmes, séries ou jogos, as tuas recomendações são preciosas para nós! Se és o/a geek do teu grupo de amigos e conheces os monitores e teclados ponta de gama atuais, porque não partilhar connosco? <strong>Todo o tipo de conteúdo é bem vindo!</strong></p>"
        />
        <NumberedRow
          number="02"
          title="Escrever textos originais sobre temas relacionados com Ciência e Tecnologia"
          textHtml="<p>Podem ser artigos de opinião, críticas, recomendações, crónicas ou notícias. Podes escrever para a nossa rubrica “MulherTech”, ou qualquer outro tema tecnológico que te entusiasme. Se também és versado/a em linguagens de programação, podes escrever um tutorial sobre desenvolvimento web, aplicações android ou data science, por exemplo. <strong>Porque não?</strong></p>"
        />
        <NumberedRow
          number="03"
          title="Realização e Organização de Talks e Workshops"
          textHtml="<p>Se no trabalho não te deixam explicar como resolveste aquele bug, ou ninguém te quer ouvir a falar de automação de testes ao almoço, nós queremos! Podes por exemplo voluntariar-te para dar um workshop ou uma talk sobre um tema à tua escolha. Podes também partilhar a tua experiência no mundo da Tecnologia e inspirar as nossas alunas, <strong>ser um/a role model!</strong></p>"
        />
        <NumberedRow
          number="04"
          title="Realização de Eventos"
          textHtml="<p>Caso tenhas experiência na realização de eventos, gostaríamos de contar com a tua ajuda para a criação de hackatons, webinars, encontros e outras oportunidades de networking. Se achas que a tua empresa gostava de nos receber para uma visita guiada ao mundo tech, entra em contacto connosco!</p>"
        />
        <NumberedRow
          number="05"
          title="Mentoria & Educação"
          textHtml="<p>Se não gostas de falar em público, mas és secretamente um/a ninja do código, podes ajudar alguém a ultrapassar os obstáculos que surgem nos primeiros passos da aprendizagem da programação. Ajudar alguma das nossas alunas a compreender um problema, a resolver um bug, a explicar um conceito ou até incentivá-la a melhorar as suas capacidades com desafios extra. Torna-te um/a mentor/a!</p><p>Se gostas de ensinar, podes colaborar na realização dos nossos workshops através da criação de material ou acompanhamento de aulas, criação de exercícios, projetos ou desafios extra.</p>"
        />
        <NumberedRow
          number="06"
          title="Colaboração Técnica"
          textHtml="<p>Se preferires, podes ajudar-nos na manutenção do website ou no apoio técnico às alunas (instalação de software, troubleshooting).</p>"
        />
        <Row className="px-5 mx-5">
          <CollaborateFormSection />
        </Row>
      </Container>
    </PageLayout>
  );
};

export default Collaborate;
