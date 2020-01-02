import React from 'react'

import classes from './NewsletterForm.module.css'
import Form from '../Form/Form'
import FormItem from '../Form/FormInput/FormInput'

const NewsletterForm = (props) => {
    let formItems = [
        <FormItem key="name" elementType="input" type="text" title="Name" required />,
        <FormItem key="email" elementType="input" type="email" title="Email" required />,
    ]
    const title = "Want to stay in the know?"
    const subtitle = "Sign-up to our newsletter and recieve occasional updates and tips!"

    const submitMsgTitle = "Thanks for signing up!"
    const submitMsg = "Please check your email for confirmation."

    return (
        <div className={classes.NewsletterForm}>
            <Form 
                title={title} 
                subtitle={subtitle}
                items={formItems} 
                buttonText="Sign me up!"
                submitMsgTitle={submitMsgTitle}
                submitMsg={submitMsg}
                submitted={false} />
        </div>
        
    )
}

export default NewsletterForm