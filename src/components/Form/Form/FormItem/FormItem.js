import React from 'react'

import classes from './FormItem.module.css'
import Aux from '../../../../hoc/Aux/Aux'

const FormItem = (props) => {
    let inputElement = null
    switch (props.elementType) {
        case ('input'):
            inputElement = <input type={props.type} required={props.required} />
        default:
            inputElement = <input type={props.type} required={props.required} />
    }
    
    return (
        <div className={classes.FormItem}>
            <h5>{props.title}</h5>
            {inputElement}
        </div>
    )
    
}

export default FormItem