import React from 'react'
import ganesh from '../logos/ganesh.png'


const AstrologerCard = (props) => {
    return (
        <div >
            <div className="card " style={{ width: "100%", display: "inline-block" }}>
                <img src={props.i} style={{ height: "50%"}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h6 className="card-title">{props.n}</h6>
                        <strong style={{ color: "#FF8F00" }}>4.3</strong>
                    </div>
                    <p className="card-text text-start text-secondary" style={{ fontSize: "80%" }}>Cofee Cup Reading</p>
                    <div className="d-flex justify-content-between">
                        <div style={{ whiteSpace: 'pre', lineHeight: "14px" }} className="mt-1">
                            <span> &#8377;500/</span><br/><span>min</span>
                        </div>
                        <a href="/" style={{ height: "40px",backgroundColor:"#ff6702" }} className="btn text-light">Talk Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AstrologerCard
