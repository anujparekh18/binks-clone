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
import { Transition } from '@headlessui/react';

function App() {
  return (
    <div className="font-sans mx-auto">
      <Transition
        show={true}
        appear={true}
        enter="transition duration-700"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        // enterFrom="transform translate-y-56 opacity-50"
        // enterTo="transform translate-y-0 opacity-100"
      >
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
      </Transition>
    </div>
  );
}
export default App;
