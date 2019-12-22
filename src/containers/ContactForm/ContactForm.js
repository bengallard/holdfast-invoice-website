import React, { Component } from 'react'

import classes from './ContactForm.module.css'

class ContactForm extends Component {
    render() {
        return (
            <div className={classes.ContactForm}>
                <form>
                    <h3>Contact Us</h3>
                    <div>
                        <div>Name*</div>
                        <input type='text' />
                    </div>
                    <div>
                        <div>Email*</div>
                        <input type='text' />
                    </div>
                    <div>
                        <p></p>
                        <div>Message*</div>
                        <input type='text' />
                    </div>
                    <p></p>
                    <button>Submit</button>
                    <p></p>
                </form>
            </div>
        )
    }
}

export default ContactForm