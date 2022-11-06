import './css/home.css'
import React from 'react'
import ProfileImage from './profile-image.jpg'
import Slack from './slack.png'
import Github from './github.png'
import Phoneshare from './phone1.png'
import Pcshare from './pc1.png'
import IG from './I4G.png'
import Vector from './Vector.png'
import Contact from './Contact'
import Camera from './camera-01.png'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <div id='main'>
            <section id="profile">
                <div className="profile-pic">
                    <img src={ProfileImage} alt="" id="profile_img" />
                    <span id='profile-hover'></span>
                    <img src={Camera} id='camera' />
                </div>
                <h2 id="twitter"><a href="https://twitter.com/Danishadow081" target='_blank'>Danishadow081</a></h2>
                <h2 id="slack"><a href="">DaniD</a></h2>
            </section>
            <div>
                <a href=""><img src={Pcshare} alt="" className='shareBtn' id='pc'/></a>
                <a href=""><img src={Phoneshare} alt="" className='shareBtn' id='phone'/></a>
                <div id='share-hover-container'>
                    <span className='share-hover'>share</span>
                </div>
            </div>


            <section id="links">
                <a href="https://twitter.com/Danishadow081" target='_blank' className='btn-links'>Twitter Link</a>
                <a href="https://training.zuri.team/" className='btn-links' id="btn__zuri" target='_blank'>Zuri Team</a>
                <a href="http://books.zuri.team/" className='btn-links' id="books" target='_blank'>Zuri Books</a>
                <a href="https://books.zuri.team/" className='btn-links' id="book__python" target='_blank'>Python Books</a>
                <a href="https://background.zuri.team/" className='btn-links' id="pitch" target='_blank'>Background Check for Coders</a>
                <a href="https://books.zuri.team/design-rules" className='btn-links' id="book__design" target='_blank'>Design Books</a>
                <Link to='/contact' className='btn-links' id='contact'>Contact Me</Link>
            </section>

            <section className="social-section">
                <a href="https://app.slack.com/client/T042F7V19Q8/C041V6WKAUS/rimeto_profile/U048D1C0JNN" id='social-slack' target='_blank'><img src={Slack} /></a>
                <a href="https://github.com/081dikeh" target='_blank'><img src={Github} /></a>
            </section>

            <footer>
                <div>
                    <img src={Vector} id="zuri" />
                    <p className='footer-text'>HNG Internship 9 Frontend Task</p>
                    <img src={IG} id="ig" />
                </div>  
            </footer>
        </div>
    )
}