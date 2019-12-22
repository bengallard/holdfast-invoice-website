import React from 'react';
import Layout from './hoc/Layout/Layout'

import HeroImage from './components/HeroImage/HeroImage'
import FooterMenu from './components/Navigation/FooterMenu/FooterMenu'

function App() {
  return (
    <Layout>
      <HeroImage />
      <hr />

      <form>
          <h3>Contact</h3>
          <div>
            <div>Name*</div>
            <input type='text' />
          </div>
          <div>
            <div>Email*</div>
            <input type='text' />
          </div>
          <div>
            <p></p>
            <div>Message*</div>
            <input type='text' />
          </div>
          <p></p>
          <button>Submit</button>
          <p></p>
      </form>
      <hr />

      <FooterMenu />
    </Layout>
  );
}

export default App;
