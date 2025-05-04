import React from 'react';
import './styles/global.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import RolesOverview from './components/RolesOverview';
import BannerGraphic from './components/BannerGraphic';
import RecentWork from './components/RecentWork';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div id="root">
      <NavBar />
      <Hero />
      <Intro />
      <RolesOverview />
      <BannerGraphic />
      <RecentWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
