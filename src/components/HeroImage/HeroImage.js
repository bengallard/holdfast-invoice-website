import React from 'react'

import image from '../../assets/hero-image.jpg'
import classes from './HeroImage.module.css'

const heroImage = (props) => (
    <div className={classes.HeroImage}>
        <img src={image} alt="infinity-invoice-hero" />
        <h3>Subtitle</h3>
    </div>
)

export default heroImage