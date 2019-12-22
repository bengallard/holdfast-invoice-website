import React from 'react';
import Layout from './hoc/Layout/Layout'

import HeroImage from './components/HeroImage/HeroImage'

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
          
          <hr />
          <button>Submit</button>
      </form>
    </Layout>
  );
}

export default App;
