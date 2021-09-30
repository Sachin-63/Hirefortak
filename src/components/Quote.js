import React from 'react'
import ganesh from '../logos/ganesh.png'

const Quote = () => {
    return (
        <div >
            
            <div className="row d-flex justify-content-center mt-5" style={{height:"30%"}}>
                <div className="col-5 mt-4 mb-0 px-0">
                <p className="px-0" style={{width:"100%",fontSize:"2.5vw",position:"relative",right:"-10%",top:"20px",bottom:"0"}}><i style={{color:"blue"}} className="fas fa-quote-left mx-2"></i>There is no better boat than horoscope to help a man cross over a sea of life.<i style={{color:"blue",width:"1px"}} className="fas fa-quote-right mx-2"></i></p>
                </div>
                <div className="col-5 px-0">
                <img className="ms-0 px-0" src={ganesh} style={{width:"80%",maxWidth:"250px",display:"inline",position:"relative",left:"0%"}} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Quote
