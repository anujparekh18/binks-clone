import React from 'react';
import Header from './components/Header';
import Intro1 from './components/Intro1';
import Cards from './components/Cards';
import Slides from './components/Slides';
import Products from './components/Products';
import FabricSource from './components/FabricSource';
import Perks from './components/Perks';
import Sisterhood from './components/Sisterhood';
import FAQ from './components/FAQ.js';
import InstaPhotos from './components/InstaPhotos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans mx-auto">
      <Header />
      <Intro1 />
      <Cards />
      <Slides />
      <Products />
      <FabricSource />
      <Perks />
      <Sisterhood />
      <FAQ />
      <InstaPhotos />
      <Footer />
    </div>
  );
}
export default App;
