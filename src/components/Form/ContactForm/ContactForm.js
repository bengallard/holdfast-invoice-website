import React, { Component } from 'react'

import classes from './ContactForm.module.css'
import Form from '../Form/Form'
import FormItem from '../Form/FormInput/FormInput'

class ContactForm extends Component {
    state = {
        title: "Have a question?",
        subtitle: "Let us know how we're doing! Feel free to leave your feedback or ask a question here.",
        submitMsgTitle: "Thank you for getting in touch",
        submitMsg: "We have recieved your message and will respond within 24hrs.",
        buttonText: "Send",
        formItems: [
            <FormItem elementType="input" type="text" title="Name" required />,
            <FormItem elementType="input" type="email" title="Email" required />,
            <FormItem elementType="textarea" type="text" title="Message" required />
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
            <div className={classes.ContactForm}>
                <Form 
                    submitSelected={this.submitHandler}
                    title={this.state.title} 
                    subtitle={this.state.subtitle}
                    items={this.state.formItems} 
                    buttonText={this.state.buttonText}
                    submitMsgTitle={this.state.submitMsgTitle}
                    submitMsg={this.state.submitMsg}
                    submitted={this.state.submitted}
                    loading={this.state.loading} />
            </div>
        )
    }
}

export default ContactForm