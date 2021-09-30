import React from 'react'
import ReportCard from './ReportCard'
import report1 from '../logos/report1.png'


const Reports = () => {
    return (
        <div>
            <div  className=" mt-3 d-flex justify-content-between">
                <div className=""><strong>Reports</strong></div>
                <div className=" "><strong><a href="/"  style={{color:"#ff6702",textDecoration:"none"}}>See All&gt;</a></strong></div>
            </div>
            <div className="">
                <p className="text-start" style={{fontSize:"80%",color:"#686868"}}>Astrology report or what is commonly known as Horoscope report is basically an in depth look at your birth chart. Horoscope report will look at various planetary positions in your birth charts and also derive relationships and angle to understand your personality and trait.</p>
            </div>
            <div style={{overflow:"auto",whiteSpace:"nowrap",height:"40%"}}>
            <a className="mx-2 text-dark text-decoration-none" style={{display:"inline-block",width:"70%",maxWidth:'300px'}} href="/"><ReportCard i={report1}/></a>
            <a className="mx-2 text-dark text-decoration-none" style={{display:"inline-block",width:"70%",maxWidth:'300px'}} href="/"><ReportCard i={report1}/></a>
            <a className="mx-2 text-dark text-decoration-none" style={{display:"inline-block",width:"70%",maxWidth:'300px'}} href="/"><ReportCard i={report1}/></a>
            <a className="mx-2 text-dark text-decoration-none" style={{display:"inline-block",width:"70%",maxWidth:'300px'}} href="/"><ReportCard i={report1}/></a>
            <a className="mx-2 text-dark text-decoration-none" style={{display:"inline-block",width:"70%",maxWidth:'300px'}} href="/"><ReportCard i={report1}/></a>
            </div>
        </div>
    )
}

export default Reports
