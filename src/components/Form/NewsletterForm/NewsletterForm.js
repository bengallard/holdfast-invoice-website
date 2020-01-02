import React, { Component } from 'react'

import classes from './NewsletterForm.module.css'
import Form from '../Form/Form'
import FormItem from '../Form/FormInput/FormInput'

class NewsletterForm extends Component {
    state = {
        title: "Want to stay in the know?",
        subtitle: "Sign-up to our newsletter and recieve occasional updates and tips!",
        submitMsgTitle: "Thanks for signing up!",
        submitMsg: "Please check your email for confirmation.",
        buttonText: "Sign me up!",
        formItems: [
            <FormItem key="name" elementType="input" type="text" title="Name" required />,
            <FormItem key="email" elementType="input" type="email" title="Email" required />,
        ],
        loading: false,
        submitted: false
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.setState({loading: true})
    }
    
    render() {
        return (
            <div className={classes.NewsletterForm}>
                <Form 
                    submitSelected={this.submitHandler}
                    title={this.state.title} 
                    subtitle={this.state.subtitle}
                    items={this.state.formItems} 
                    buttonText={this.state.buttonText}
                    submitMsgTitle={this.state.submitMsgTitle}
                    submitMsg={this.state.submitMsg}
                    submitted={this.state.submitted} 
                    loading={this.state.loading}/>
            </div>
        )
    }
}

export default NewsletterForm