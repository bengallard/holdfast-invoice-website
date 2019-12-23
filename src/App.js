import React from 'react';
import Layout from './hoc/Layout/Layout'

import HeroImage from './components/HeroImage/Hero'
import ContactForm from './components/ContactForm/ContactForm'
import FooterMenu from './components/Navigation/FooterMenu/FooterMenu'

function App() {
  return (
    <Layout>
      <HeroImage />
      <ContactForm />
      <FooterMenu />
    </Layout>
  );
}

export default App;
