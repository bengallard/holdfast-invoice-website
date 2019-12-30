import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './FooterItem.module.css'

const footerItem = (props) => (
    <li className={classes.FooterItem}>
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active}>{props.children}
        </NavLink>
    </li>
)

export default footerItem