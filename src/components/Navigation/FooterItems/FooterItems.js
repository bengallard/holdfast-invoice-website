import React from 'react'

import classes from './FooterItems.module.css'
import FooterItem from './FooterItem/FooterItem'

const footerItems = (props) => (
    <ul className={classes.FooterItems}>
        <FooterItem link="/" exact>Home</FooterItem>
        <FooterItem link="/about-us">Our Story</FooterItem>
        <FooterItem link="/contact-us">Contact Us</FooterItem>
        <FooterItem link="/privacy-policy">Privacy Policy</FooterItem>
    </ul>
)

export default footerItems