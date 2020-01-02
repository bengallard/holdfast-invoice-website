import React from 'react'

import classes from './ContactForm.module.css'
import Form from '../Form/Form'
import FormItem from '../Form/FormInput/FormInput'

const contactForm = (props) => {
    let formItems = [
        <FormItem elementType="input" type="text" title="Name" required />,
        <FormItem elementType="input" type="email" title="Email" required />,
        <FormItem elementType="textarea" type="text" title="Message" required />
    ]
    const title = "Have a question?"
    const subtitle = "Let us know how we're doing! Feel free to leave your feedback or ask a question here."

    const submitMsgTitle = "Thank you for getting in touch"
    const submitMsg = "We have recieved your message and will respond within 24hrs."
    

    return (
        <div className={classes.ContactForm}>
            <Form 
                title={title} 
                subtitle={subtitle}
                items={formItems} 
                buttonText="Send"
                submitMsgTitle={submitMsgTitle}
                submitMsg={submitMsg}
                submitted={false} />
        </div>
        
    )
}

export default contactForm