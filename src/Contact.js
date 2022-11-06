import React from 'react'
import { useState } from 'react'
import './css/Contact.css'
import './css/home.css'
import IG from './I4G.png'
import Vector from './Vector.png'


export default function Contact() {
    const [Message, setMessage] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)
    const [check, setCheck] = useState(false)

    const validate = () => {
        return check;
    };

    const handleSubmit=(e)=> {
        e.preventDefault();
        if(Message.length==0 || firstname.length==0 || lastname.length==0 || email.length==0) {
            setError(true)
        }
        console.log(Message)
        e.target.reset();
        
    }

    return(
        <main id='contact-main'>
            <div className="main-container">
            <div className="title">
            <h1>Contact Me</h1>
            <h4>Hi there, contact me to ask me about anything you have in mind.</h4>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="first space">
                <div className="name-input">
                    <label for="first_name" className="label">First name</label>
                    <input type="text" placeholder="Enter your first name" id="first_name" className="input-pad" onChange={e=>setFirstname(e.target.value)} />
                    {error?
                <p className='error'>first name can not be empty</p>: ''}
                </div>
                
                <div className="name-input">
                    <label for="last_name" className="label">Last name</label>
                    <input type="text" placeholder="Enter your last name" id="last_name" className="input-pad" onChange={e=>setLastname(e.target.value)}/>
                    {error?
                <p className='error'>last name can not be empty</p>: ''}
                </div>
            </div>

            <div className="second">
                <label for="email" className="label">Email</label>
                <input type="email" name="" id="email" placeholder="dikehdaniel2020@gmail.com" className="space input-pad" onChange={e=>setEmail(e.target.value)}/>
                {error?
                <p className='error'>email can not be empty</p>: ''}

                <label for="message" className="label">Message</label>
                <textarea name="" id="message" className="input-pad space" cols="20" rows="10" placeholder="Send me a message and I'll reply you as soon as possible..." onChange={e=>setMessage(e.target.value)}></textarea>
                {error?
                <p className='error'>Please enter a message</p>: ''}
            </div>

            <div className="check-margin">
                <input type="checkbox" name="" id="check" onChange={(e) => setCheck(e.target.value)}/>You agree to providing your data to (name) who may contact you.
            </div>

            <button id="btn__submit" type='submit' disabled={!validate()}>Send message</button>
            
        </form>

        </div>
        <footer>
                <div>
                    <img src={Vector} id="zuri" />
                    <p className='footer-text'>HNG Internship 9 Frontend Task</p>
                    <img src={IG} id="ig" />
                </div>  
        </footer>
    </main>
    )
}