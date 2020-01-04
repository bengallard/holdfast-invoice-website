import React from 'react'

import classes from './About.module.css'
import NewsletterForm from '../../../containers/Form/NewsletterForm/NewsletterForm'
import FooterMenu from '../../Navigation/FooterMenu/FooterMenu'

const about = (props) => (
    <div>
        <div className={classes.About}>
            <h2>Designed specifically for fitness professionals</h2>
            <p>Intended to be the quickest invoicing solution for client based appointment businesses, Holdfast Invoice was designed by fitness professionals for fitness professionals.</p>
            <p>Holdfast Invoice is optimised for your appointment and group-client based small business.</p>
            <p>Designed specifically for Personal Trainers, Yoga Instructors, Massage Therapists and any appointment based businesses.</p>
            <p>We've created an app that takes care of your invoicing for you, utilising a simple, no fuss user interface making invoicing fast.</p>
            <p>Tracking your invoices is fast and easy with built-in email and invoice management.</p>
        </div>
        <NewsletterForm />
        <FooterMenu />
    </div>
    
)

export default about