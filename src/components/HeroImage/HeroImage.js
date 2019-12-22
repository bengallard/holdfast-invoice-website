import React from 'react'

import image from '../../assets/hero-image.jpg'
import classes from './HeroImage.module.css'

const heroImage = (props) => (
    <div className={classes.HeroImage}>
        <img src={image} alt="infinity-invoice-hero" />
        <h1>The ultimate in appointment and group-based-client invoicing</h1>
    </div>
)

export default heroImage