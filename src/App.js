import React from 'react';
import Layout from './hoc/Layout/Layout'

import Hero from './components/Hero/Hero'
import ContactForm from './components/ContactForm/ContactForm'
import FooterMenu from './components/Navigation/FooterMenu/FooterMenu'

function App() {
  return (
    <Layout>
      <Hero />
      <ContactForm />
      <FooterMenu />
    </Layout>
  );
}

export default App;
