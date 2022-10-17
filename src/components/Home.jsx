import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (    
                <div className='col-md-8'>
                    <div class="card border-none text-white " style={{ width: "100%", height: "100vh", background: "rgb(0,0,0,0)" }}>
                        <div class="card-header d-flex justify-content-between">
                            <Link to="#" className='fs-5 fw-bold' style={{ color: "white"}}>About</Link>
                            <div className='mx-2'>
                                <Link to='/Portfolio' className='text-white px-1'>Portfolio</Link> /  
                                 <Link to='/Resume' className='text-white px-1'>Resume</Link>
                            </div>
                        </div>
                        <div class="card-body">
                            
                            <h5 class="card-title">Hello, I'm a full stack MERN developer. I'd love to develop and deploy scaleable website and web APIs.
                                I have 2 year(s) of learning experience in developing full stack web application.</h5>
                                <p className='card-text'>Interested? Give a call or send a mail. I'd love to hear from you.</p>

                                <div className='mt-3 mb-3'>
                                    <h3 className='card-title'>My Expertise</h3>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                    <div id="expertise" class="card text-white border-light mb-3" style={{ maxWidth: "15rem", maxHeight: "12rem", background: "rgb(0,0,0,0)" }}>
                                       
                                        <div class="card-body">

                                            <h5 class="card-title"><i class="bi bi-front"></i>&ensp;Frontend Development</h5>
                                            <p class="card-text">Build Interective Frontend with ReactJS, EJS, Blade, Tailwind, Bootstrap and Clean HTML/CSS</p>
                                        </div>
                                    </div>
                                    <div id="expertise" class="card text-white border-light mb-3" style={{ maxWidth: "15rem", maxHeight: "12rem", background: "rgb(0,0,0,0)" }}>
                                       
                                       <div class="card-body">
                                           <h5 class="card-title"><i class="bi bi-server"></i>&ensp;Database</h5>
                                           <p class="card-text">Interect with SQL/NoSQL database on the cloud. Complex query building and writting migrating script</p>
                                       </div>
                                   </div>
                                    </div>
                                    <div className='col-md-6'>
                                    <div id="expertise" class="card text-white border-light mb-3" style={{ maxWidth: "15rem", maxHeight: "12rem", background: "rgb(0,0,0,0)" }}>

                                        <div class="card-body">
                                            <h5 class="card-title"><i class="bi bi-hdd-rack-fill"></i>&ensp;Backend Development</h5>
                                            <p class="card-text">Managing backend, database, building REST API and API Routes with ExpressJS / Laravel </p>
                                        </div>
                                    </div>
                                    <div id="expertise" class="card text-white border-light mb-3" style={{ maxWidth: "15rem", maxHeight: "10rem", background: "rgb(0,0,0,0)" }}>

                                        <div class="card-body">
                                            <h5 class="card-title"><i class="bi bi-plug-fill"></i>&ensp;API Integration</h5>
                                            <p class="card-text mb-4">Integrate 3rd party API's on the server. Scraping API from other sources </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
           
    )
}

export default Home
