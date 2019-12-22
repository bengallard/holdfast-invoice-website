import React from 'react'

import logoImage from '../../assets/holdfast-invoice-logo.png'
import classes from './Logo.module.css'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={logoImage} alt="Holdfast Invoice Logo" />
    </div>
)

export default logo