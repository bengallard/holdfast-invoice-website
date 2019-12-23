import React from 'react'

import classes from './ContactForm.module.css'

const ContactForm = (props) => (
    <div className={classes.ContactForm}>
            <h3>Contact Us</h3>
            <form>
                <div>Name*</div>
                <input type='text' required={true} />
                <div>Email*</div>
                <input type='email' required={true} />
                <div>Message*</div>
                <input type='text' required={true} multiple={true} />
                <button>Submit</button>
            </form>
        </div>
)

export default ContactForm