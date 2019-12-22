import React from 'react'

import classes from './FooterMenu.module.css'
import FooterItems from '../FooterItems/FooterItems'

const footerMenu = (props) => (
    <div className={classes.FooterMenu}>
        <nav>
            <FooterItems />
        </nav>
    </div>
)

export default footerMenu