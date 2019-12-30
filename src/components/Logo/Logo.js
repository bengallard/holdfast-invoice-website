import React from 'react'
import { Link } from 'react-router-dom'

import logoImage from '../../assets/holdfast-invoice-logo.png'
import classes from './Logo.module.css'

const logo = (props) => (
    <div className={classes.Logo}>
        <Link to='/'>
            <img src={logoImage} alt="Holdfast Invoice Logo" />
        </Link>
    </div>
)

export default logo