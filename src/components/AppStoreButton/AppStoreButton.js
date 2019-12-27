import React from 'react'

import classes from './AppStoreButton.module.css'
import appStoreImage from '../../assets/Download_on_the_App_Store_Badge_US-UK_blk_092917.png'

const appStoreButton = (props) => (
        <a className={classes.AppStoreButton} href={props.link}>
            <img src={appStoreImage} alt="iOS App Store" />
        </a>
)

export default appStoreButton