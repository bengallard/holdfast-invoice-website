import React from 'react'

import classes from './FooterMenu.module.css'
import FooterItems from '../FooterItems/FooterItems'
import AppStoreButton from '../../AppStoreButton/AppStoreButton'

const footerMenu = (props) => (
    <div className={classes.FooterMenu}>
        <cite>© Ben Gallard, 2019</cite>
        <div className={classes.AppStoreButton}>
                <AppStoreButton link="https://apps.apple.com/app/holdfast-invoice/id1478543802?ls=1" />
            </div>
        <nav>
            <FooterItems />
        </nav>
    </div>
)

export default footerMenu