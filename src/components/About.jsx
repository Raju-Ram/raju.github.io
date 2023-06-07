import React from 'react'
import './About.css'
import car from './MyImage/pr3.jpeg';
import cara from './MyImage/imh4.png';
import RajuCvpdf from './rajucv.pdf'

export const About = () => {
        return (
                <div className='mainbox'>

                        <div className='Aboutbox1'>

                                <h1>Kumawatraj...!</h1>
                                <h3>Web developer.........</h3>
                                <h4>
                                        <a href='https://classroom.google.com/'><span>Email:</span>Rk9653488@gmail.com</a>

                                </h4>
                                <h5><span>Contect:</span>7689833851</h5>
                        </div>
                        <div className='Aboutbox2'>
                                <div className='Aboutbox2parent'>
                                        <img src={car} alt="this is car image" />
                                </div>

                                <div className='Aboutbox2parent2'>
                                        <h1>About me..</h1>
                                        <h3>HI there! My name is kumawatraj and I'm a web developer.I love creating beautiful experiences that work for both bussinesses and users. I enjoy working through data and numbers to create impactful web site.</h3>
                                        <br></br>
                                        <h3>I devote my spare time to coffee, Sports ,Movies and my friends.</h3>
                                        <br></br>
                                        <br></br>
                                        <br></br>



                                        <div className='iconecss'>
                                                <ul>
                                                        <li>
                                                                <a href="https://www.facebook.com/">
                                                                        <span></span>
                                                                        <span></span>
                                                                        <span></span>
                                                                        <span></span>
                                                                        <span class="fa fa-facebook"></span>
                                                                </a>
                                                        </li>
                                                        <li>
                                                                <a href="https://twitter.com/?lang=en-in">
                                                                        <span></span>
                                                                        <span></span>
                                                                        <span></span>
                                                                        <span></span>
                                                                        <span class="fa fa-twitter"></span>
                                                                </a>
                                                        </li>
                                                        <li>
                                                                <a href="https://www.instagram.com/">
                                                                        <span></span>
                                                                        <span></span>
                                                                        <span></span>
                                                                        <span></span>
                                                                        <span class="fa fa-instagram"></span>
                                                                </a>
                                                        </li>
                                                        <li>
                                                                <a href="https://www.linkedin.com/feed/">
                                                                        <span></span>
                                                                        <span></span>
                                                                        <span></span>
                                                                        <span></span>
                                                                        <span class="fa fa-linkedin"></span>
                                                                </a>
                                                        </li>
                                                </ul>
                                        </div>
                                </div>


                        </div>
                        <div className='Aboutbox3'>

                                <a href={RajuCvpdf} target="_blank" rel='sdfghjk' download="rajudownlode">
                                        <button className='button12' >
                                                Downlode Resume
                                        </button>
                                </a>

                                <br></br><br></br><br></br>


                                <div class="section full-height">
                                        <input class="modal-btn" type="checkbox" id="modal-btn" name="modal-btn" />
                                        <label for="modal-btn">View Resume<i class="uil uil-expand-arrows"></i></label>
                                        <div class="modal">
                                                <div class="modal-wrap" >
                                                <embed src={RajuCvpdf} type="application/pdf" width="100%" height="700px" />

                                                </div>
                                        </div>


                                </div>

                        </div>

                </div>
        )
}
