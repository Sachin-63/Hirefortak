import React from 'react'
import ganesh from '../logos/ganesh.png'
import offer1 from '../logos/offer1.png'
import offer2 from '../logos/offer2.png'
import offer3 from '../logos/offer3.png'
import offer4 from '../logos/offer4.png'
import offer5 from '../logos/offer5.png'

const Offers = () => {
    return (
        <div>
            <div style={{overflow:"auto",whiteSpace:"nowrap",height:"30%"}}>
                <a className="mx-2" style={{display:"inline-block",}} href="/"><img style={{height:"120px"}} src={offer1} alt="" /></a>
                <a className="mx-2" style={{display:"inline-block",}} href="/"><img style={{height:"120px"}} src={offer2} alt="" /></a>
                <a className="mx-2" style={{display:"inline-block",}} href="/"><img style={{height:"120px"}} src={offer3} alt="" /></a>
                <a className="mx-2" style={{display:"inline-block",}} href="/"><img style={{height:"120px"}} src={offer4} alt="" /></a>
                <a className="mx-2" style={{display:"inline-block",}} href="/"><img style={{height:"120px"}} src={offer5} alt="" /></a>
            </div>
        </div>
    )
}

export default Offers
