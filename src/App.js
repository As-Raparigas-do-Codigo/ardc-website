import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import i18n from 'i18next';
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
import translationsEN from 'data/locales/translations_en.json';
import translationsPT from 'data/locales/translations_pt.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: translationsPT },
      en: { translation: translationsEN }
    },
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

function App() {
  const { t } = useTranslation();
  const [currentLang, setLang] = useState('pt');
  const changeLanguageHandler = () => {
    if (currentLang == 'pt') {
      i18n.changeLanguage('en')
      setLang('en')
      if (location.pathname == '/sobre') {
        location.pathname = '/about'
      } else if (location.pathname == '/contactos') {
        location.pathname = '/contacts'
      } else if (location.pathname == '/eventos') {
        location.pathname = '/events'
      } else if (location.pathname == '/mentorias') {
        location.pathname = '/mentorships'
      } else if (location.pathname == '/privacidade') {
        location.pathname = '/privacy'
      } else if (location.pathname == '/equipa') {
        location.pathname = '/team'
      }
    } else {
      i18n.changeLanguage('pt')
      setLang('pt')
      if (location.pathname == '/about') {
        location.pathname = '/sobre'
      } else if (location.pathname == '/contacts') {
        location.pathname = '/contactos'
      } else if (location.pathname == '/events') {
        location.pathname = '/eventos'
      } else if (location.pathname == '/mentorships') {
        location.pathname = '/mentorias'
      } else if (location.pathname == '/privacy') {
        location.pathname = '/privacidade'
      } else if (location.pathname == '/team') {
        location.pathname = '/equipa'
      }
    }
  }
  return (
    <div className='App'>
      <Router>
        <header>
          <Social changeLanguage={changeLanguageHandler} currentLang={currentLang}/>
          <NavBar translation={t} />
        </header>
        <Routes>
          <Route exact path='/about' element={<AboutUs translation={t}/>} />
          <Route exact path='/sobre' element={<AboutUs translation={t}/>} />
          <Route exact path='/contacts' element={<Contact translation={t}/>} />
          <Route exact path='/contactos' element={<Contact translation={t}/>} />
          <Route exact path='/events' element={<Events translation={t}/>} />
          <Route exact path='/eventos' element={<Events translation={t}/>} />
          <Route exact path='/' element={<Home translation={t}/>} />
          <Route exact path='/mentorships' element={<Mentorship translation={t}/>} />
          <Route exact path='/mentorias' element={<Mentorship translation={t}/>} />
          <Route exact path='/privacy' element={<PrivacyPolicy translation={t}/>} />
          <Route exact path='/privacidade' element={<PrivacyPolicy translation={t}/>} />
          <Route exact path='/team' element={<Team translation={t}/>} />
          <Route exact path='/equipa' element={<Team translation={t}/>} />
          <Route exact path='/workshops' element={<Workshops translation={t}/>} />
        </Routes>
        <Footer translation={t} />
      </Router>
    </div>
  );
}

export default App;
