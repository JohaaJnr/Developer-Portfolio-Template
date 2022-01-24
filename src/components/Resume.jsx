import React from 'react'
import './Resume.css'
import { Link } from 'react-router-dom'
import { Consumer } from './Context'
const Resume = () => {
    return (
        <Consumer>
            { value => {
                return(
                    <div className='col-md-8'>
            <div className="card border-none text-white" style={{ maxwidth: "100%", height: "100vh", maxHeight: "120vh", background: "rgb(0,0,0,0)" }}>
            <div className="card-header d-flex justify-content-between">
                    <Link to="#" className='fs-5 fw-bold' style={{ color: "white" }}>Resume</Link>
                    <div className='mx-2'>
                        <Link to='/About' className='text-white px-1'>About</Link> / 
                         <Link to='/Portfolio' className='text-white px-1'>Portfolio</Link>
                    </div>
                </div>
                <div className='card-body mt-3'>
                    <div className='row'>
                        
                        <div className='col-md-6'>
                        <h5 className='card-title'><i className="bi bi-mortarboard-fill"></i>&ensp;Education</h5>
                            <ul className="timeline">
                                <li>
                                    <p className='card-text'> {value.Education.gradSchool.name} </p>
                                    <p className="card-text">{value.Education.gradSchool.timelapse}</p>
                                    <p> {value.Education.gradSchool.dept} </p>
                                </li>
                                <li>
                                    <p className='card-text'> {value.Education.college.name} </p>
                                    <p className="card-text"> {value.Education.college.timelapse} </p>
                                    
                                    <p> {value.Education.college.dept} </p>
                                </li>
                                <li>
                                    <p className='card-text'>{value.Education.school.name}</p>
                                    
                                    <p className="card-text">{value.Education.school.timelapse}</p>
                                    <p>{value.Education.school.dept}</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-6'>
                            <h5 className='card-title'><i className="bi bi-briefcase-fill"></i>&ensp;Work Experience</h5>
                            <ul className="timeline">
                               {
                                   value.Professional.map(e=>{
                                     return(
                                        <li>
                                        <p className='card-text'>{e.company}</p>
                                        <p className='card-text'>{e.position}</p>
                                        <p className="card-text">{e.timelapse}</p>
                                        
                                        </li>
                                     )
                                   })
                               }
                              
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                )
            }}
        </Consumer>
    )
}

export default Resume
