import React from 'react'

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <div className={classes.NavigationItems}>
        <ul>
            <NavigationItem link="/about-us">Our Story</NavigationItem>
            <NavigationItem link="/contact-us">Contact Us</NavigationItem>
        </ul>
    </div>
    
)

export default navigationItems