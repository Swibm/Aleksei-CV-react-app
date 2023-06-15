import React, { useState } from 'react'
import '../styles/contactsPage.css'
import { socialLinks,contactsInfo } from "../constants";

const ContactsPage = () => {

    return (
        <div className='contacts-block'>
            <h4>My contacts</h4>
            <div className='contacts'>
                
                <div className='contact'>
                    <a  className='social-icon'
                        style={{backgroundImage: `url(${socialLinks.linkedin})`}}
                    />
                    <p>{contactsInfo.linkedin}</p>
                </div>

                <div className='contact'>
                    <a  className='social-icon'
                        style={{backgroundImage: `url(${socialLinks.gmail})`}}
                        />
                    <p>{contactsInfo.gmail}</p>
                </div>

                <div className='contact'>
                    <a className='social-icon' style={{backgroundImage: `url(${socialLinks.telegram})`}}/>
                    <p> {contactsInfo.telegram} </p>
                </div>

                <div className='contact'>
                    <a className='social-icon' style={{backgroundImage: `url(${socialLinks.phone})`}}/>
                    <p> {contactsInfo.phone} </p>
                </div>

                <div className='contact'>
                    <a className='social-icon' style={{backgroundImage: `url(${socialLinks.instagram})`}}/>
                    <p>@_a__kim_</p>
            </div>
            </div>
        </div>
    )
    }

export default ContactsPage