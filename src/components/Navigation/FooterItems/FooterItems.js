import React from 'react'

import classes from './FooterItems.module.css'
import FooterItem from './FooterItem/FooterItem'

const footerItems = (props) => (
    <ul className={classes.FooterItems}>
        <FooterItem link="/">Home</FooterItem>
        <FooterItem link="/">Our Story</FooterItem>
        <FooterItem link="/">Contact Us</FooterItem>
        <FooterItem link="/">Privacy Policy</FooterItem>
    </ul>
)

export default footerItems