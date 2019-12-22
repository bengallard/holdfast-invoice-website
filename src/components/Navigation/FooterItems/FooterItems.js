import React from 'react'

import classes from './FooterItems.module.css'
import FooterItem from './FooterItem/FooterItem'

const footerItems = (props) => (
    <ul className={classes.FooterItems}>
        <FooterItem>Home</FooterItem>
        <FooterItem>Our Story</FooterItem>
        <FooterItem>Contact Us</FooterItem>
        <FooterItem>Privacy Policy</FooterItem>
    </ul>
)

export default footerItems