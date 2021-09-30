import React from 'react'

const ReviewCard = (props) => {
    return (
        <div >
            <div className="card" style={{whiteSpace:"normal"}} >
            <div className="card-body" >
                <p  className="card-text mb-5" style={{fontSize:'80%'}}><i style={{color:"blue"}} className="fas fa-quote-left mx-2"></i>I discussed with Mr. Arvind ji and I'm very satisfied with the discussion. He has very good knowledge and understanding and told correctly. My questions are clearly answered and I want to contact with him further for my family as well. Thank you for your support.<i style={{color:"blue"}} className="fas fa-quote-right mx-2"></i></p>
                <br/>
                <br/>
                <h5 className="card-title  position-absolute start-50 translate-middle mb-0" style={{zIndex:"102",bottom:"5%",width:"100%"}}>{props.n}</h5>
                <p className="my-0 position-absolute start-50 translate-middle" style={{fontSize:"60%",zIndex:"102"}}>{props.c}</p>
                <div className="align-bottom position-absolute bottom-0 start-50 translate-middle-x" style={{backgroundColor:"#F1F2FA",height:"28%",width:"100%",opacity:"100%",zIndex:"100"}}></div>
                <i className=" position-absolute  start-50 translate-middle-x fas fa-user-circle" style={{zIndex:"102",bottom:"20%",fontSize:"320%",color:"#ff6702"}}></i>
                
            </div>
            </div>
        </div>
    )
}

export default ReviewCard
