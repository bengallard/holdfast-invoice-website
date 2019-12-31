import React from 'react'

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
            <NavigationItem link="/about-us">Our Story</NavigationItem>
            <NavigationItem link="/contact-us">Contact Us</NavigationItem>
    </ul>
    
)

export default navigationItems