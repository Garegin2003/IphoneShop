import React from "react";
import './ContactForm.css'

function ContactForm() {
    return(
        <div className="contact-form">
            <form>
                <label>Name</label>
                <input type={'text'} placeholder={'Enter your Name'} />
                <label>Message</label>
                <textarea placeholder="Enter your message"></textarea>
            </form>
        </div>
    )
}

export default ContactForm