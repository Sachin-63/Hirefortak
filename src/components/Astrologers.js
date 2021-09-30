import React from 'react'
import AstrologerCard from './AstrologerCard'
import astrologer1 from '../logos/astrologer1.png'
import astrologer2 from '../logos/astrologer2.png'
import astrologer3 from '../logos/astrologer3.png'
import astrologer4 from '../logos/astrologer4.png'
import astrologer5 from '../logos/astrologer5.png'

const Astrologers = () => {
    return (
        <div >
            <div  className=" mt-3 d-flex justify-content-between" style={{width:"100%"}}>
                <div className=""><strong>Talk to Astrologer</strong></div>
                <div ><strong><a href="/" className="text-end"  style={{color:"#ff6702",textDecoration:"none"}}>See All&gt;</a></strong></div>
            </div>
            <div className="" style={{width:""}}>
                <p className="text-start" style={{fontSize:"80%",color:"#686868"}}>Leading astrologers of India are just a phone call away. Our panel of astrologers not just provides solutions to your life problem but also guide you so that you can take the right path toward growth and prosperity.</p>
            </div>
            <div style={{overflow:"auto",whiteSpace:"nowrap",height:"30%"}}>
                <a className="mx-2 text-dark text-decoration-none" style={{display:"inline-block",width:"50%",maxWidth:'200px'}} href="/"><AstrologerCard i={astrologer1} n="Arvind Shukla"/></a>
                <a className="mx-2 text-dark text-decoration-none" style={{display:"inline-block",width:"50%",maxWidth:'200px'}} href="/"><AstrologerCard i={astrologer3} n="Sonali Dubey"/></a>
                <a className="mx-2 text-dark text-decoration-none" style={{display:"inline-block",width:"50%",maxWidth:'200px'}} href="/"><AstrologerCard i={astrologer2} n="Vidya Triwedi"/></a>
                <a className="mx-2 text-dark text-decoration-none" style={{display:"inline-block",width:"50%",maxWidth:'200px'}} href="/"><AstrologerCard i={astrologer4} n="Sunita Chaubey"/></a>
                <a className="mx-2 text-dark text-decoration-none" style={{display:"inline-block",width:"50%",maxWidth:'200px'}} href="/"><AstrologerCard i={astrologer5} n="Praveen Mishra"/></a>
                
            </div>
        </div>
    )
}

export default Astrologers
