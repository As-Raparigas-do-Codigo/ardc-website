import React from 'react';
import PageLayout from 'components/PageLayout';
import { Container, Row } from 'react-bootstrap';
import { Routes } from 'Constants';
import { SiteContent } from 'data/SiteContent';
import './privacy-policy.scss';

function PrivacyPolicy() {
  const breadcrumbs = [
    {
      label: SiteContent.HomePage.PageName,
      href: Routes.Home
    },
    {
      label: SiteContent.PrivacyPolicyPage.PageName
    }
  ];

  return (
    <PageLayout
      title={SiteContent.PrivacyPolicyPage.PageName}
      description={SiteContent.PrivacyPolicyPage.Descriptiion}
      breadcrumbsData={breadcrumbs}>
      <Container fluid="md" className="padding-top-first-section">
        <Row>
          <p>
            {SiteContent.PrivacyPolicyPage.Text_p1}
          </p>
          <p>
            {SiteContent.PrivacyPolicyPage.Text_p2}
          </p>
          <p>
            {SiteContent.PrivacyPolicyPage.Text_p3}
          </p>
          <p>
            {SiteContent.PrivacyPolicyPage.Text_p4}
          </p>
          <p>
            {SiteContent.PrivacyPolicyPage.Text_p5}
          </p>
          <p>
            {SiteContent.PrivacyPolicyPage.Text_p6}
          </p>
          <h2 className="fw-bold">{SiteContent.PrivacyPolicyPage.Title}</h2>
          <h5>O que são cookies?</h5>
          <p>
            Como é prática comum em quase todos os sites profissionais, este site usa cookies, que
            são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta
            página descreve quais informações eles coletam, como as usamos e por que às vezes
            precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que
            esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou
            &apos;quebrar&apos; certos elementos da funcionalidade do site.
          </p>
          <h5>Como usamos os cookies?</h5>
          <p>
            Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos
            casos, não existem opções padrão do setor para desativar os cookies sem desativar
            completamente a funcionalidade e os recursos que eles adicionam a este site. É
            recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não
            deles, caso sejam usados para fornecer um serviço que você usa.
          </p>
          <h5>Desativar cookies</h5>
          <p>
            Você pode impedir a configuração de cookies ajustando as configurações do seu navegador
            (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a
            desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você
            visita. A desativação de cookies geralmente resultará na desativação de determinadas
            funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os
            cookies.
          </p>
          <h5> Cookies que definimos</h5>
          <ul>
            <li>
              <p className="fw-bold">1. Cookies relacionados à conta</p>
            </li>
            <li>
              <p>
                Se você criar uma conta connosco, usaremos cookies para o gerenciamento do processo
                de inscrição e administração geral. Esses cookies geralmente serão excluídos quando
                você sair do sistema, porém, em alguns casos, eles poderão permanecer posteriormente
                para lembrar as preferências do seu site ao sair.
              </p>
            </li>
            <li>
              <p className="fw-bold">2. Cookies relacionados ao login</p>
            </li>
            <li>
              <p>
                Utilizamos cookies quando você está logado, para que possamos lembrar dessa ação.
                Isso evita que você precise fazer login sempre que visitar uma nova página. Esses
                cookies são normalmente removidos ou limpos quando você efetua logout para garantir
                que você possa acessar apenas a recursos e áreas restritas ao efetuar login.
              </p>
            </li>
            <li>
              <p className="fw-bold">3. Cookies relacionados a boletins por e-mail</p>
            </li>
            <li>
              <p>
                Este site oferece serviços de assinatura de boletim informativo ou e-mail e os
                cookies podem ser usados paralembrar se você já está registrado e se deve mostrar
                determinadas notificações válidas apenas para utilizadors inscritos / não inscritos.
              </p>
            </li>
            <li>
              <p className="fw-bold">4. Pedidos processando cookies relacionados</p>
            </li>
            <li>
              <p>
                Este site oferece facilidades de comércio eletrônico ou pagamento e alguns cookies
                são essenciais para garantir que seu pedido seja lembrado entre as páginas, para que
                possamos processá-lo adequadamente.
              </p>
            </li>
            <li>
              <p className="fw-bold">5. Cookies relacionados a pesquisas</p>
            </li>
            <li>
              <p>
                Periodicamente, oferecemos pesquisas e questionários para fornecer informações
                interessantes, ferramentas úteis ou para entender nossa base de utilizadors com mais
                precisão. Essas pesquisas podem usar cookies para lembrar quem já participou numa
                pesquisa ou para fornecer resultados precisos após a alteração das páginas.
              </p>
            </li>
            <li>
              <p className="fw-bold">6. Cookies relacionados a formulários</p>
            </li>
            <li>
              <p>
                Quando você envia dados por meio de um formulário como os encontrados nas páginas de
                contacto ou nos formulários de comentários, os cookies podem ser configurados para
                lembrar os detalhes do utilizador para correspondência futura.
              </p>
            </li>
            <li>
              <p className="fw-bold">7. Cookies de preferências do site</p>
            </li>
            <li>
              <p>
                Para proporcionar uma ótima experiência neste site, fornecemos a funcionalidade para
                definir suas preferências de como esse site é executado quando você o usa. Para
                lembrar suas preferências, precisamos definir cookies para que essas informações
                possam ser chamadas sempre que você interagir com uma página for afetada por suas
                preferências.
              </p>
            </li>
          </ul>
          <h3>Cookies de Terceiros</h3>
          <p>
            Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A
            secção a seguir detalha quais cookies de terceiros você pode encontrar através deste
            site.
          </p>
          <ul>
            <li className="special-quote-list">
              <p>
                Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas
                e confiáveis da Web, para nos ajudar a entender como você usa o site e como podemos
                melhorar sua experiência. Esses cookies podem rastrear itens como quanto tempo você
                gasta no site e as páginas visitadas, para que possamos continuar produzindo
                conteúdo atraente.
              </p>
            </li>
            <p>
              Para mais informações sobre cookies do Google Analytics, consulte a página oficial do
              Google Analytics.
            </p>
            <li className="special-quote-list">
              <p>
                As análises de terceiros são usadas para rastrear e medir o uso deste site, para que
                possamos continuar produzindo conteúdo atrativo. Esses cookies podem rastrear itens
                como o tempo que você passa no site ou as páginas visitadas, o que nos ajuda a
                entender como podemos melhorar o site para você.
              </p>
            </li>
            <li className="special-quote-list">
              <p>
                Periodicamente, testamos novos recursos e fazemos alterações subtis na maneira como
                o site se apresenta. Quando ainda estamos testando novos recursos, esses cookies
                podem ser usados para garantir que você receba uma experiência consistente enquanto
                estiver no site, enquanto entendemos quais otimizações os nossos utilizadors mais
                apreciam.
              </p>
            </li>
          </ul>
          <p>
            À medida que vendemos produtos, é importante entendermos as estatísticas sobre quantos
            visitantes de nosso site realmente compram e, portanto, esse é o tipo de dados que esses
            cookies rastrearão. Isso é importante para você, pois significa que podemos fazer
            previsões de negócios com precisão que nos permitem analizar nossos custos de
            publicidade e produtos para garantir o melhor preço possível.
          </p>
          <h3>Compromisso de Utilizador</h3>
          <p>
            O utilizador se compromete a fazer uso adequado dos conteúdos e da informação que o As
            Raparigas do Código oferece no site e com caráter enunciativo, mas não limitativo:
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
                C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do As
                Raparigas do Código, de seus fornecedores ou terceiros, para introduzir ou
                disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software
                que sejam capazes de causar danos anteriormente mencionados. Mais informações
              </p>
            </li>
          </ul>
          <h3>Mais Informações</h3>
          <p>
            Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que
            você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies
            ativados, caso interaja com um dos recursos que você usa em nosso site.
          </p>
        </Row>
      </Container>
    </PageLayout>
  );
}
export default PrivacyPolicy;
