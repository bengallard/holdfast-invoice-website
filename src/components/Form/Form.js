import React from 'react'

import classes from './Form.module.css'
import FormInput from './FormInput/FormInput'

const Form = (props) => {
    let formItems = []
    for (let key in props.items) {
        formItems.push({
            id: key,
            elementType: props.items[key].elementType,
            config: props.items[key].elementConfig
        })
    }
    let form = <form className={classes.Form} onSubmit={props.submitSelected}>
        <h2>{props.title}</h2>
        <h4>{props.subtitle}</h4>
        {formItems.map(formItem => {
            return (
                <FormInput 
                    key={formItem.id}
                    elementType={formItem.elementType}
                    config={formItem.config}
                    value={formItem.value}
                    changed={(event) => props.inputChanged(event, formItem.id)} />
            )
        } )}
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