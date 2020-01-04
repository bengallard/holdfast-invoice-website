import React, { Component } from 'react'

import classes from './NewsletterForm.module.css'
import Form from '../../../components/Form/Form'
import axios from '../../../axios-sign-up'

class NewsletterForm extends Component {
    state = {
        title: "Want to stay in the know?",
        subtitle: "Sign-up to our newsletter and recieve occasional updates and tips!",
        submitMsgTitle: "Thanks for signing up!",
        submitMsg: "Please check your email for confirmation.",
        buttonText: "Sign me up!",
        formInputs: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    title: 'Name',
                    placeholder: '',
                    required: true
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    title: 'Email',
                    placeholder: '',
                    required: true
                },
                value: ''
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
        axios.post('/newsletter-signup.json', customerSignupData)
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
            <div className={classes.NewsletterForm}>
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

export default NewsletterForm