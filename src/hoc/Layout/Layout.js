import React, { Component } from 'react'

import Aux from '../Aux/Aux'
import classes from './Layout.module.css'

import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawToggledHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        } )
    }

    sideDrawClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    render() {
        return (
            <Aux>
                <Toolbar menuIconClicked={this.sideDrawToggledHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout