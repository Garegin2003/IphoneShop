import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactReq from "../ContactReq/ContactReq";
import './ContactUs.css'

function ContactUs() {
    return(
            <div className="contact-us">
                <ContactReq />
                <ContactForm />
            </div>
    )
  
}
export default ContactUs
