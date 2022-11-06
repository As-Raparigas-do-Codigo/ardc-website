import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { useTranslation, initReactI18next } from 'react-i18next';
import AboutUs from 'pages/About';
import Contact from 'pages/Contact';
import Events from 'pages/Events';
import Home from 'pages/Home';
import Mentorship from 'pages/Mentorship';
import PrivacyPolicy from 'pages/PrivacyPolicy';
import Team from 'pages/Team';
import Workshops from 'pages/Workshops';
import Footer from 'components/Footer';
import NavBar from 'components/NavBarComponent';
import Social from 'components/Social';
import SiteRoutes from 'data/Routes';
import translationsEN from 'data/locales/translations_en.json';
import translationsPT from 'data/locales/translations_pt.json';

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationsEN },
      pt: { translation: translationsPT }
    },
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

function App() {
  const { t } = useTranslation();
  const changeLanguageHandler = () => {
    console.log('Changing language ...')
    i18n.changeLanguage('en')
  }
  return (
    <div className='App'>
      <Router>
        <header>
          <Social changeLanguage={changeLanguageHandler}/>
          <NavBar translation={t}/>
        </header>
        <Routes>
          <Route exact path={SiteRoutes(t).About} element={<AboutUs translation={t}/>} />
          <Route exact path={SiteRoutes(t).Contacts} element={<Contact translation={t}/>} />
          <Route exact path={SiteRoutes(t).Events} element={<Events translation={t}/>} />
          <Route exact path={SiteRoutes(t).Home} element={<Home translation={t}/>} />
          <Route exact path={SiteRoutes(t).Mentorships} element={<Mentorship translation={t}/>} />
          <Route exact path={SiteRoutes(t).PrivacyPolicy} element={<PrivacyPolicy translation={t}/>} />
          <Route exact path={SiteRoutes(t).Team} element={<Team translation={t}/>} />
          <Route exact path={SiteRoutes(t).Workshops} element={<Workshops translation={t}/>} />
        </Routes>
        <Footer translation={t} />
      </Router>
    </div>
  );
}

export default App;
