import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import AboutUs from 'pages/About';
import Contact from 'pages/Contact';
import Activities from 'pages/Activities';
import Home from 'pages/Home';
import Community from 'pages/Community';
import Collaborate from 'pages/Collaborate';
import PrivacyPolicy from 'pages/PrivacyPolicy';
import Team from 'pages/Team';
import Workshops from 'pages/Workshops';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import Social from 'components/Social';
import translationsEN from 'data/locales/translations_en.json';
import translationsPT from 'data/locales/translations_pt.json';
import NotFound404 from 'pages/NotFound404';
import Constants from 'constants';

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: translationsPT },
    en: { translation: translationsEN }
  },
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false
  }
});
/* eslint-disable */
function App() {
  const { t } = useTranslation();
  const [currentLang, setLang] = useState('pt');
  const changeLanguageHandler = () => {
    if (currentLang == 'pt') {
      i18n.changeLanguage('en');
      setLang('en');
    } else {
      i18n.changeLanguage('pt');
      setLang('pt');
    }
  };
  return (
    <div className="App">
      <Router>
        <header>
          <Social changeLanguage={changeLanguageHandler} currentLang={currentLang} />
          <NavBar translation={t} />
        </header>
        <Routes>
          <Route path={Constants.Routes.NotFound404} element={<NotFound404 translation={t} />} />
          <Route exact path={Constants.Routes.About} element={<AboutUs translation={t} />} />
          <Route exact path={Constants.Routes.Contacts} element={<Contact translation={t} />} />
          <Route
            exact
            path={Constants.Routes.Activities}
            element={<Activities translation={t} />}
          />
          <Route exact path={Constants.Routes.Home} element={<Home translation={t} />} />
          <Route
            exact
            path={Constants.Routes.Collaborate}
            element={<Collaborate translation={t} />}
          />
          <Route exact path={Constants.Routes.Community} element={<Community translation={t} />} />
          <Route
            exact
            path={Constants.Routes.PrivacyPolicy}
            element={<PrivacyPolicy translation={t} />}
          />
          <Route exact path={Constants.Routes.Team} element={<Team translation={t} />} />
          <Route exact path={Constants.Routes.Workshops} element={<Workshops translation={t} />} />
        </Routes>
        <Footer translation={t} />
      </Router>
    </div>
  );
}
/* eslint-enable */
export default App;
