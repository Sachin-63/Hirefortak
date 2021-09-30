import React from 'react'

import { Link } from 'react-router-dom'
import home from '../logos/home.png'
import talk from '../logos/talk.png'
import ask from '../logos/ask.png'
import reports from '../logos/reports.png'


const Footer = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-bottom" style={{height:"60px",boxShadow:"2px 4px 4px rgba(0,0,0,1),1px 1px 5px rgba(0,0,0,1)"}}>
                <div className="container-fluid d-flex justify-content-between mx-3">
                    <Link className="navbar-brand" to="/"><figure><img src={home} alt="" style={{height:"30px"}} /><figcaption style={{fontSize:"60%"}}>Home</figcaption> </figure></Link>
                    <Link className="navbar-brand" to="/astrologers"><figure><img src={talk} alt="" style={{height:"30px"}}/><figcaption style={{fontSize:"60%"}}>Talk to Astrologer</figcaption> </figure></Link>
                    <Link className="navbar-brand" to="/"><figure><img src={ask} alt="" style={{height:"30px",color:"#ff6702"}}/><figcaption style={{fontSize:"60%"}}>Ask Question</figcaption> </figure></Link>
                    <Link className="navbar-brand" to="/"><figure><img src={reports} alt="" style={{height:"30px"}}/><figcaption style={{fontSize:"60%"}}>Reports</figcaption> </figure></Link>
                    
                </div>
            </nav>
        </div>
    )
}

export default Footer
