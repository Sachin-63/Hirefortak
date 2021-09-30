import React from 'react'
import zodiac1 from '../logos/zodiac1.png' 
import zodiac2 from '../logos/zodiac2.png' 
import zodiac3 from '../logos/zodiac3.png' 
import zodiac4 from '../logos/zodiac4.png' 
import zodiac5 from '../logos/zodiac5.png' 
import zodiac6 from '../logos/zodiac6.png' 
import zodiac7 from '../logos/zodiac7.png' 
import zodiac8 from '../logos/zodiac8.png' 
import zodiac9 from '../logos/zodiac9.png' 
import zodiac10 from '../logos/zodiac10.png' 
import zodiac11 from '../logos/zodiac11.png' 
import zodiac12 from '../logos/zodiac12.png'  

const Horoscope = () => {
    return (
        <div>
            <div  className=" mt-3 d-flex justify-content-between">
                <div className=""><strong>Daily Horoscope</strong></div>
                <div className=" "><strong><a href="/"  style={{color:"#ff6702",textDecoration:"none"}}>See All&gt;</a></strong></div>
            </div>
            <div className="">
                <p className="text-start" style={{fontSize:"80%",color:"#686868"}}>Read tour daily horoscope based on your sunsign, select your zodiac sign and give the riight start to your day.</p>
            </div>
            <div style={{overflow:"auto",whiteSpace:"nowrap",height:"30%"}}>
                <a className="text-dark text-decoration-none mx-2" style={{display:"inline-block",}} href="/"><img style={{height:"100px"}} src={zodiac1} alt="" /><p >Aries</p></a>
                <a className="text-dark text-decoration-none mx-2" style={{display:"inline-block",}} href="/"><img style={{height:"100px"}} src={zodiac2} alt="" /><p >Taurus</p></a>
                <a className="text-dark text-decoration-none mx-2" style={{display:"inline-block",}} href="/"><img style={{height:"100px"}} src={zodiac3} alt="" /><p >Gemini</p></a>
                <a className="text-dark text-decoration-none mx-2" style={{display:"inline-block",}} href="/"><img style={{height:"100px"}} src={zodiac4} alt="" /><p >Cancer</p></a>
                <a className="text-dark text-decoration-none mx-2" style={{display:"inline-block",}} href="/"><img style={{height:"100px"}} src={zodiac5} alt="" /><p >Leo</p></a>
                <a className="text-dark text-decoration-none mx-2" style={{display:"inline-block",}} href="/"><img style={{height:"100px"}} src={zodiac6} alt="" /><p >Virgo</p></a>
                <a className="text-dark text-decoration-none mx-2" style={{display:"inline-block",}} href="/"><img style={{height:"100px"}} src={zodiac12} alt="" /><p >Libra</p></a>
                <a className="text-dark text-decoration-none mx-2" style={{display:"inline-block",}} href="/"><img style={{height:"100px"}} src={zodiac7} alt="" /><p >Scorpio</p></a>
                <a className="text-dark text-decoration-none mx-2" style={{display:"inline-block",}} href="/"><img style={{height:"100px"}} src={zodiac8} alt="" /><p >Saggitaurius</p></a>
                <a className="text-dark text-decoration-none mx-2" style={{display:"inline-block",}} href="/"><img style={{height:"100px"}} src={zodiac9} alt="" /><p >Capricorn</p></a>
                <a className="text-dark text-decoration-none mx-2" style={{display:"inline-block",}} href="/"><img style={{height:"100px"}} src={zodiac10} alt="" /><p >Aquorius</p></a>
                <a className="text-dark text-decoration-none mx-2" style={{display:"inline-block",}} href="/"><img style={{height:"100px"}} src={zodiac11} alt="" /><p >Pisces</p></a>
            </div>
        </div>
    )
}

export default Horoscope
