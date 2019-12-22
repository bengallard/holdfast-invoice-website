import React from 'react'

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Home</NavigationItem>
        <NavigationItem link="/">About Us</NavigationItem>
        <NavigationItem link="/"><li>Contact</li></NavigationItem>
        <NavigationItem link="/"><li>Privacy Policy</li></NavigationItem>
    </ul>
)

export default navigationItems