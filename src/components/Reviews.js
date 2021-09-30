import React from 'react'
import ReviewCard from './ReviewCard'

const Reviews = () => {
    return (
        <div className="my-2">
            <div  className=" my-2 d-flex justify-content-between">
                <div className=""><strong>Hear from our Happy customers!</strong></div>
            </div>
            <div style={{overflow:"auto",whiteSpace:"nowrap",height:""}}>
            <a className="mx-2 text-dark text-decoration-none" style={{display:"inline-block",width:"65%",maxWidth:'300px'}} href="/"><ReviewCard n="Gagan Deep" c="Etawah, India"/></a>
            <a className="mx-2 text-dark text-decoration-none" style={{display:"inline-block",width:"65%",maxWidth:'300px'}} href="/"><ReviewCard n="Jatin Garg" c="Bhopal, India"/></a>
            <a className="mx-2 text-dark text-decoration-none" style={{display:"inline-block",width:"65%",maxWidth:'300px'}} href="/"><ReviewCard n="Harsh Jha" c="Jhansi, India"/></a>
            <a className="mx-2 text-dark text-decoration-none" style={{display:"inline-block",width:"65%",maxWidth:'300px'}} href="/"><ReviewCard n="Deepak Kumar" c="Bihar, India"/></a>
            <a className="mx-2 text-dark text-decoration-none" style={{display:"inline-block",width:"65%",maxWidth:'300px'}} href="/"><ReviewCard n="Utkarsh Verma" c="Mumbai, India"/></a>
            <a className="mx-2 text-dark text-decoration-none" style={{display:"inline-block",width:"65%",maxWidth:'300px'}} href="/"><ReviewCard n="Aditya Singh" c="Delhi, India"/></a>
            </div>
        </div>
    )
}

export default Reviews
