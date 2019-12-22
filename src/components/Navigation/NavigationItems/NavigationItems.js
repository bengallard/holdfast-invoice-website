import React from 'react'

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'
import AppStoreButton from '../../AppStoreButton/AppStoreButton'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Home</NavigationItem>
        <NavigationItem link="/">Our Story</NavigationItem>
        <NavigationItem link="/">Contact Us</NavigationItem>
        <NavigationItem link="/">
            <div className={classes.AppStoreButton}>
                <AppStoreButton />
            </div>
        </NavigationItem>
    </ul>
)

export default navigationItems