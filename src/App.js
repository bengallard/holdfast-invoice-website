import React from 'react'
import { Route } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <Layout>
      <Route path='/about-us' exact component={About} />
      <Route path='/contact-us' exact component={Contact} />
      <Route path='/' exact component={Home} />
    </Layout>
  )
}

export default App;
