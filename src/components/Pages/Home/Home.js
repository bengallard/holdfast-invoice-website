import React from 'react'

import Hero from '../../Hero/Hero'
import ContactForm from '../../Form/ContactForm/ContactForm'
import NewsletterForm from '../../Form/NewsletterForm/NewsletterForm'
import FooterMenu from '../../Navigation/FooterMenu/FooterMenu'

const home = (props) => (
    <div>
        <Hero />
        <NewsletterForm />
        <FooterMenu />
    </div>
)

export default home