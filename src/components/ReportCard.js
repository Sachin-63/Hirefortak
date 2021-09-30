import React from 'react'


const ReportCard = (props) => {
    return (
        <div>
            <div className="card bg-dark text-white">
                <img src={props.i} className="card-img" alt="..."/>
                <div class =" d-flex justify-content-between" >
                <p className="text-light mx-2 mb-3 position-absolute bottom-0 start-0 " style={{zIndex:"101"}}>&#8377;500/min</p>
                <a className="btn  mx-2 mb-1  text-light position-absolute bottom-0 end-0 " style={{opacity:"100%",backgroundColor:"#ff6702",zIndex:"101"}} role="button" href="/">Buy Now</a>
                <div className="align-bottom position-absolute bottom-0 start-50 translate-middle-x" style={{backgroundColor:"black",height:"28%",width:"100%",opacity:"40%",zIndex:"100"}}></div>
                
                
                </div>
            </div>
        </div>
    )
}

export default ReportCard
