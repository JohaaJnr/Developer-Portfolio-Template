import React from 'react'
import { Consumer } from './Context'
import { Link } from 'react-router-dom'
const Profile = () => {
    return (
        <Consumer>
            { value => {
                return(
                    <div className='col-md-4 text-center'>
                    <div className="card border-none align-items-center text-white " style={{ width: "100%", height: "100vh", background: "rgb(0,0,0,0)" }}>
                    <div className="card-body align-items-center mt-5">
                            <div className='card-img'>
                                <img className='rounded-circle' src={value.profileImg} alt='profileImg' style={{ height: "120px" }} />
                            </div>
                            <h5 className='card-title mt-2'>{value.userName}</h5>
                            <p className='card-text'><span className="badge bg-light text-dark"> {value.title} </span></p>
                            <p className='card-text'>Social Links</p>
                            <div className='d-flex justify-content-center text-center'>
                                <a className='social-link px-1' target='_blank' rel='noreferrer' href={value.githubUrl}><i className="bi bi-github"></i></a>
                                <a className='social-link px-1' target='_blank' rel='noreferrer' href={value.linkedIn}><i className="bi bi-linkedin"></i></a>
                                <a className='social-link px-1' target='_blank' rel='noreferrer' href={value.fbUrl}><i className="bi bi-facebook"></i></a>
                            </div>

                            <p className='card-text mt-3'><i className="bi bi-envelope-check-fill"></i>&ensp;{value.email}</p>
                            <p className='card-text mt-3'><i className="bi bi-telephone-fill"></i>&ensp; {value.phoneNo} </p>
                            <p><Link to='/Document.pdf' target='_blank' className='btn btn-outline-light' >Download CV</Link></p>
                        </div>
                    </div>
                </div>
                )
            }}
        </Consumer>
    )
}

export default Profile
