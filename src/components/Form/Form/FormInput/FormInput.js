import React from 'react'

import classes from './FormInput.module.css'

const formInput = (props) => {
    let inputElement = null
    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
                type={props.type} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed} 
                required={props.required}/>
            break
        case ('textarea'):
            inputElement = <textarea 
                type={props.type} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed} 
                required={props.required} />
            break
        default:
            inputElement = <input 
                type={props.type} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed} 
                required={props.required} />
    }

    return (
        <div className={classes.FormInput}>
            <h5>{props.title}</h5>
            {inputElement}
        </div>
    )
    
}

export default formInput