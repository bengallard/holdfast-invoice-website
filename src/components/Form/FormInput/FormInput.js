import React from 'react'

import classes from './FormInput.module.css'

const formInput = (props) => {
    let inputElement = null
    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
                {...props.config}
                onChange={props.changed} />
            break
        case ('textarea'):
            inputElement = <textarea 
                {...props.config} 
                onChange={props.changed} />
            break
        default:
            inputElement = <input 
                {...props.config} 
                onChange={props.changed} />
    }
    return (
        <div className={classes.FormInput}>
            <h5>{props.config.title}</h5>
            {inputElement}
        </div>
    )
    
}

export default formInput