import React from "react";
import ContactInfo from "../ContactInfo/ContactInfo";
import ContactUs from "../ContactUs/ContactUs";
import './Contact.css'

function Contact() {
    return(
        <section className="contact">
            <div className="container">
                    <ContactInfo />
                    <ContactUs />
            </div>
        </section>
    )
}

export default Contact