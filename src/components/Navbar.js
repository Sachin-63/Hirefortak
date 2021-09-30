import React from 'react'
import hamburger from '../logos/hamburger.png'
import logo from '../logos/logo.png'
import profile from '../logos/profile.png'
import { Link } from 'react-router-dom'



const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{height:"50px",boxShadow:"0px 4px 3px rgba(0,0,0,0.08),0px 1px 1px rgba(0,0,0,0.1)"}}>
                <div className="container-fluid d-flex justify-content-between">
                    <Link className="navbar-brand" to="/"><img src={hamburger} alt="" style={{height:"20px"}} /></Link>
                    <Link className="navbar-brand" to="/"><img src={logo} alt="" style={{height:"35px"}}/></Link>
                    <Link className="navbar-brand align-middle"  to="/profile"><img className="align-middle" src={profile} alt="" style={{height:"30px"}}/></Link>   
                </div>
            </nav>

        </div>
    )
}

export default Navbar
