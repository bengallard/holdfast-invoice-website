import React, { Component } from 'react'

import classes from './ContactForm.module.css'
import Form from '../../../components/Form/Form'
import axios from '../../../axios-message'

class ContactForm extends Component {
    state = {
        title: "Have a question?",
        subtitle: "Let us know how we're doing! Feel free to leave your feedback or ask a question here.",
        submitMsgTitle: "Thank you for getting in touch",
        submitMsg: "We have recieved your message and will respond within 24hrs.",
        buttonText: "Send",
        formInputs: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    title: 'Name',
                    placeholder: '',
                    required: true
                },
                value: '',
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    title: 'Email',
                    placeholder: '',
                    required: true
                },
                value: '',
            },
            message: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    title: 'Message',
                    placeholder: '',
                    required: true
                },
                value: '',
            }
        },
        loading: false,
        submitted: false
    }

    submitFormHandler = (event) => {
        event.preventDefault()
        this.setState({loading: true})
        const customerSignupData = {}
        for (let formInputId in this.state.formInputs) {
            customerSignupData[formInputId] = this.state.formInputs[formInputId].value
        }
        console.log(customerSignupData)
        axios.post('/customer-messages.json', customerSignupData)
            .then(response => {
                console.log('success')
                this.setState(
                    {loading: false, submitted: true}
                )
            })
            .catch(error => {
                console.log('failed:', error)
                this.setState(
                    {loading: false, submitted: false}
                )
            })
    }

    inputChangedHandler = (event, inputId) => {
        const updatedFormInputs = {...this.state.formInputs}
        const updatedFormItem = {...updatedFormInputs[inputId]}
        updatedFormItem.value = event.target.value
        updatedFormInputs[inputId] = updatedFormItem
        this.setState({ formInputs: updatedFormInputs })
    }

    render() {
        return (
            <div className={classes.ContactForm}>
                <Form 
                    submitSelected={this.submitFormHandler}
                    title={this.state.title} 
                    subtitle={this.state.subtitle}
                    items={this.state.formInputs} 
                    buttonText={this.state.buttonText}
                    submitMsgTitle={this.state.submitMsgTitle}
                    submitMsg={this.state.submitMsg}
                    submitted={this.state.submitted}
                    loading={this.state.loading}
                    inputChanged={(event, inputId) => this.inputChangedHandler(event, inputId)} />
            </div>
        )
    }
}

export default ContactForm