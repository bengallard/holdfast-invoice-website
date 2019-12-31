import React from 'react'

import Hero from '../Hero/Hero'
import ContactForm from '../Form/ContactForm/ContactForm'
import FooterMenu from '../Navigation/FooterMenu/FooterMenu'

const home = (props) => (
    <div>
        <Hero />
        <ContactForm />
        <FooterMenu />
    </div>
)

export default home