import React from 'react'
import ganesh from '../logos/ganesh.png'

const AstrologersPageCard = (props) => {
    return (
        <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-start border my-2" style={{width:'95%',maxWidth:'650px'}}>
            <div >
                <img className="mt-4 ms-2" style={{height:'64%',maxHeight:"140px"}} src={props.i} alt="" />
            </div>
            <div>
                <h5 className="mt-3 mb-0 ms-2 text-start" >{props.n}</h5>
                <div className="d-flex ">
                <p className="mt-0 ms-0 me-4 text-start ms-2" style={{fontSize:"70%"}}>Cofeecy Reading, Falit Jyotishi, Kundali GrahDosh Vastu,Astrology, Vedic Astrology<br/>English, Hindi<br/><strong>&#8377;{props.price}/min</strong></p>
                
                </div>
                <div className="d-flex justify-content-left">
                <button className="btn  btn-sm mt-0 mb-2 text-light ms-2" style={{backgroundColor:"#ff6702"}}>Talk on call</button>
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default AstrologersPageCard
