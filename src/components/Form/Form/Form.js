import React from 'react'

import classes from './Form.module.css'
import FormItem from './FormItem/FormItem'

const Form = (props) => {
    let form = <form className={classes.Form}>
        <h2>{props.title}</h2>
        <h4>{props.subtitle}</h4>
        {props.items.map(formItem => formItem)}
        <button>{(props.buttonText) ? props.buttonText : "Submit"}</button>
    </form>

    if (props.submitted) {
        form = <div className={classes.SubmitMsg}>
        <h2>{props.submitMsgTitle}</h2> 
        <p>{props.submitMsg}</p>
    </div>
    }

    return form
}

export default Form