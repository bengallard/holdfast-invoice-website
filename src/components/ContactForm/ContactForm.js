import React from 'react'

import classes from './ContactForm.module.css'

const ContactForm = (props) => {
    const clickedHandler = (event) => {

    }

    let form = <div className={classes.ContactForm}>
        <h2>Contact Us</h2>
        <form>
            <h4>Name*</h4>
            <input type='text' required={true} />
            <h4>Email*</h4>
            <input type='email' required={true} />
            <h4>Message*</h4>
            <input type='text' required={true} multiple={true} />
            <button onClick={clickedHandler}>Submit</button>
        </form>
    </div>

    let sent = props.sent
    if (sent) {
        form = <p style={{textAlign: 'center'}}>Thank you for your message. We have recieved it and will respond within 24hrs.</p>
    }

    return form
    
}

export default ContactForm