import React from 'react'
import { Link } from 'react-router-dom'
import { Consumer } from './Context'
import './Portfolio.css'
const Portfolio = () => {
    return (
        <Consumer>
            { value => {
                return(
                    <div className='col-md-8'>
            <div className="card border-none text-white " style={{ maxwidth: "100%", height: "100vh", maxHeight: "120vh", background: "rgb(0,0,0,0)" }}>
                <div className="card-header d-flex justify-content-between">
                    <Link to="#" className='fs-5 fw-bold' style={{ color: "white" }}>Portfolio</Link>
                    <div className='mx-2'>
                        <Link to='/About' className='text-white px-1'>About</Link> / <Link to='/Resume' className='text-white px-1'>Resume</Link>
                    </div>
                </div>
                <div className="card-body">
                    
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab"  aria-selected="true">All</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="react-tab" data-bs-toggle="tab" data-bs-target="#react" type="button" role="tab"  aria-selected="false">React</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="node-tab" data-bs-toggle="tab" data-bs-target="#node" type="button" role="tab"  aria-selected="false">Node</button>
                        </li>
                       
                    </ul>
                    

                    <div className="tab-content scrollspy-example" id="myTabContent">

                        <div className="tab-pane fade show active " id="all" role="tabpanel" aria-labelledby="all-tab">
                            <div className='mt-3'>
                                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3 '>

                           {
                               value.Projects[0].React.map( e => {
                                    return(
                                        <div className='col'>
                                            <div id='project' className="card" style={{ maxwidth: "18rem", maxHeight: "18rem", background: "rgb(0,0,0,0)" }}>
                                                <img src={e.projectImg} className="card-img-top" alt="projects" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{e.title}</h5>

                                                    <a target='_blank' rel="noreferrer" href={e.projectUrl} className="btn btn-outline-light">Visit Project</a>
                                                </div>
                                            </div>

                                        </div>
                                    )
                               })
                           }

                           {
                               value.Projects[1].Node.map(e=>{
                                   return(
                                    <div className='col'>
                                    <div id='project' className="card" style={{ maxwidth: "18rem", maxHeight: "18rem", background: "rgb(0,0,0,0)" }}>
                                        <img src={e.projectImg} className="card-img-top" alt="projects" />
                                        <div className="card-body">
                                            <h5 className="card-title">{e.title}</h5>

                                            <a target='_blank' rel="noreferrer" href={e.projectUrl} className="btn btn-outline-light">Visit Project</a>
                                        </div>
                                    </div>

                                </div>
                                   )
                               })
                           }

                         

                                </div>
                            </div>

                        </div>



                        <div className="tab-pane fade" id="react" role="tabpanel" aria-labelledby="react-tab">

                            <div className='mt-3'>
                                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>

                                {
                               value.Projects[0].React.map( e => {
                                    return(
                                        <div className='col'>
                                            <div id='project' className="card" style={{ maxwidth: "18rem", maxHeight: "18rem", background: "rgb(0,0,0,0)" }}>
                                                <img src={e.projectImg} className="card-img-top" alt="projects" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{e.title}</h5>

                                                    <a target='_blank' rel="noreferrer" href={e.projectUrl} className="btn btn-outline-light">Visit Project</a>
                                                </div>
                                            </div>

                                        </div>
                                    )
                               })
                           }

                                </div>
                            </div>
                        </div>



                        <div className="tab-pane fade" id="node" role="tabpanel" aria-labelledby="node-tab">
                            <div className='mt-3'>
                                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3 '>

                            {
                               value.Projects[1].Node.map(e=>{
                                   return(
                                    <div className='col'>
                                    <div id='project' className="card" style={{ maxwidth: "18rem", maxHeight: "18rem", background: "rgb(0,0,0,0)" }}>
                                        <img src={e.projectImg} className="card-img-top" alt="projects" />
                                        <div className="card-body">
                                            <h5 className="card-title">{e.title}</h5>

                                            <a target='_blank' rel="noreferrer" href={e.projectUrl} className="btn btn-outline-light">Visit Project</a>
                                        </div>
                                    </div>

                                </div>
                                   )
                               })
                           }


                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="laravel" role="tabpanel" aria-labelledby="laravel-tab">
                            <div className='mt-3'>
                            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3 '>
                            
                          

                            </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
                )
            } }
        </Consumer>
    )
}

export default Portfolio
