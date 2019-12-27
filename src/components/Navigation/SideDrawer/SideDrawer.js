import React from 'react'

import classes from './SideDrawer.module.css'
import Aux from '../../../hoc/Aux/Aux'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import FooterItems from '../FooterItems/FooterItems'
import Backdrop from '../UI/Backdrop/Backdrop'
import AppStoreButton from '../../AppStoreButton/AppStoreButton'

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
                <div className={classes.AppStoreButton}>
                    <AppStoreButton link="https://apps.apple.com/app/holdfast-invoice/id1478543802?ls=1" />
                </div>
                <nav>
                    <FooterItems />
                </nav>
            </div>
        </Aux>
    )
}

export default sideDrawer