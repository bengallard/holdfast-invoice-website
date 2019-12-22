import React from 'react'

import classes from './Toolbar.module.css'
import Aux from '../../../hoc/Aux/Aux'
import Logo from '../../Logo/Logo'
import AppStoreButton from '../../AppStoreButton/AppStoreButton'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => (
    <div className={classes.Toolbar}>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
        <DrawerToggle />
    </div>
)

export default toolbar