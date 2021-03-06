import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'
import Home from './components/Pages/Home/Home'
import About from './components/Pages/About/About'
import Contact from './components/Pages/Contact/Contact'
import PrivacyPolicy from './components/Pages/PrivacyPolicy/PrivacyPolicy'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/about-us' exact component={About} />
        <Route path='/contact-us' exact component={Contact} />
        <Route path='/privacy-policy' exact component={PrivacyPolicy} />
        <Route path='/' exact component={Home} />
        <Route render={() => <h1 style={{textAlign: 'center'}}>Page not found</h1>} />
      </Switch>
    </Layout>
  )
}

export default App;
