import React from 'react'
import './About.css'
import car from './MyImage/pr3.jpeg';
import cara from './MyImage/imh4.png';
import RajuCvpdf from './rajucv.PDF'

export const About = () => {
        return (
                <div>
                <div className='container'>
                        <div className='boxx1'>
                                <h1 id='myHeader1'>Profile</h1>
                                <div className='profile'>
                                        <img src={car} alt="this is car image" />
                                </div>
                                <div>


                                        <div className='bio'>
                                                <label for="fname"><b>Name  :   </b></label>
                                                <label for="fname">Raju Kumawat</label><br /><br />

                                                <label for="fname"><b>Email  :  </b></label>
                                                <label for="fname">Rk9653488@gmail.com</label><br /><br />

                                                <label for="fname"><b>Mobile  :  </b></label>
                                                <label for="fname">7689833851</label><br /><br />

                                                <label for="fname"><b>Address  :  </b></label>
                                                <label for="fname">81, Green park vistar ,niwaru link road Govindpura</label><br /><br />

                                                <label for="fname"><b>Pin code  :  </b></label>
                                                <label for="fname">302012</label><br /><br />

                                                <label for="fname"><b>City  :  </b></label>
                                                <label for="fname">Jaipur</label><br /><br />

                                                <label for="fname"><b>State  :  </b></label>
                                                <label for="fname">Rajastan</label><br /><br />

                                        </div>


                                </div>
                                {/*                                 
                                <a href={RajuCvpdf} target="_blank" rel='sdfghjk'>
                                        <button>
                                                Open pdf
                                        </button>
                                </a> */}


                                <a href={RajuCvpdf} target="_blank" rel='sdfghjk' download="rajudownlode">
                                        <button className='button12' >
                                                Downlode CV
                                        </button>
                                </a>

                                <br></br><br></br>


                                <div class="section full-height">
                                        <input class="modal-btn" type="checkbox" id="modal-btn" name="modal-btn" />
                                        <label for="modal-btn">View CV <i class="uil uil-expand-arrows"></i></label>
                                        <div class="modal">
                                                <div class="modal-wrap">
                                                        <img src={cara} alt="this is car image" />

                                                </div>
                                        </div>


                                </div>





                        </div>
                        <div className='boxx2'>
                                <h1 id='Header'>About me....</h1>
                                <h3>Objective:
                                </h3>
                                <p>Software Engineer with a passion for problem-solving and a drive to create innovative
                                        solutions. Self-motivated and dedicated to continuously learning and growing in my field.
                                </p>
                                <h3>Education:</h3>
                                <p>MSc in Chemistry, University of Technology, Jaipur
                                        Graduated in 2021
                                </p>



                                <h3>Skills:</h3>
                                <p>- JavaScript
                                        - HTML
                                        - CSS
                                        - DBMS
                                        - Bootstrap 4
                                        - PHP
                                        - jQuery
                                        -Laravel
                                </p>





                                <h3>Internship:
                                </h3>
                                <p> <b>● One click it hub and solution, Jaipur
                                        (Aug 2022 - Feb 2023)</b><br></br>
                                        ○ Here I have working as a front end intern.<br></br>
                                        ○ Here I have learn how to create web application and manage them.<br></br>
                                        ○ I have experience Here practical knowledge of HTML5, CSS3, JavaScript,
                                        php and Larval framework.</p>

                                <h2>Thank you for visit my profile.....</h2>




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
                </div>
        )
}
