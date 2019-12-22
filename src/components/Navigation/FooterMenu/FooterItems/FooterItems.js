import React from 'react'

import classes from './FooterItems.module.css'
import FooterItem from './FooterItem/FooterItem'

const FooterItems = (props) => (
    <ul className={classes.FooterItems}>
        <FooterItem>Home</FooterItem>
        <FooterItem>About Us</FooterItem>
        <FooterItem>Contact Us</FooterItem>
        <FooterItem>Privacy Policy</FooterItem>
    </ul>
)

export default FooterItems