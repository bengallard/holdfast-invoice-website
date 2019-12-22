import React from 'react'

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Home</NavigationItem>
        <NavigationItem link="/">About Us</NavigationItem>
        <NavigationItem link="/">Contact</NavigationItem>
        <NavigationItem link="/">Privacy Policy</NavigationItem>
    </ul>
)

export default navigationItems