import React from 'react'

import image from '../../assets/hero-image.jpg'
import classes from './Hero.module.css'
import AppStoreButton from '../AppStoreButton/AppStoreButton'

const hero = (props) => (
    <div className={classes.Hero}>
        <img src={image} alt="infinity-invoice-hero" />
        <h2>Client Appointment Invoicing Software for iOS</h2>
        <p>Holdfast Invoice is optimised for your appointment and group-client based small business.</p>
        <p>Designed specifically for Personal Trainers, Yoga Instructors, Massage Therapists and any appointment based businesses.</p>
        <p>We've created an app that takes care of your invoicing for you, utilising a simple, no fuss user interface making invoicing fast.</p>
        <p>Tracking your invoices is fast and easy with built-in email and invoice management.</p>
        <div className={classes.AppStoreButton}>
            <AppStoreButton />
        </div>
    </div>
)

export default hero