import React from 'react'
import search from '../logos/search.png'
import filter from '../logos/filter.png'
import sort from '../logos/sort.png'
import AstrologerCard from './AstrologerCard'
import AstrologersPageCard from './AstrologersPageCard'
import astrologer1 from '../logos/astrologer1.png'
import astrologer2 from '../logos/astrologer2.png'
import astrologer3 from '../logos/astrologer3.png'
import astrologer4 from '../logos/astrologer4.png'
import astrologer5 from '../logos/astrologer5.png'


const AstrologersPage = () => {
    return (
        <>
        <div className="position-absolute container" style={{top:"40px"}}>
            <div className=" mt-3 d-flex justify-content-between">
                <div className=""><h4>Ask a Question</h4></div>
                <div>
                    <button className="btn mx-0 position-absolute" style={{right:"10px"}} ><img className='mx-0' style={{width:'30px'}} src={sort} alt="" /></button>
                    <button className="btn mx-0 position-absolute" style={{right:"50px"}}><img className='mx-0' style={{width:'30px'}} src={filter} alt="" /></button>
                    <button className="btn mx-0 position-absolute" style={{right:"90px"}}><img className='mx-0' style={{width:'30px'}} src={search} alt="" /></button>
                </div>
                
            </div>
            <div className="">
                <AstrologersPageCard i={astrologer1} exp="20" price={300} n="Arvind Shukla"/>
                <AstrologersPageCard i={astrologer2} exp="10" price={150} n="Vidya Triwedi"/>
                <AstrologersPageCard i={astrologer3} exp="15" price={200} n="Sonali Dubey"/>
                <AstrologersPageCard i={astrologer4} exp="16" price={250} n="Sunita Chaubey"/>
                <AstrologersPageCard i={astrologer5} exp="18" price={280} n="Praveen Mishra"/>
                <p><br/>&copy; Copyright 2020 All Rights Reserved</p>
            </div>
            
        </div>
        </>
    )
}

export default AstrologersPage
