import React from 'react'
import search from '../logos/search.png'
import filter from '../logos/filter.png'
import sort from '../logos/sort.png'

import AstrologersPageCard from './AstrologersPageCard'
import astrologer1 from '../logos/astrologer1.png'
import astrologer2 from '../logos/astrologer2.png'
import astrologer3 from '../logos/astrologer3.png'
import astrologer4 from '../logos/astrologer4.png'
import astrologer5 from '../logos/astrologer5.png'


const AstrologersPage = () => {

    return (
        <>
            <div className="position-absolute container" style={{ top: "40px" }}>
                <div className=" mt-3 d-flex justify-content-between">
                    <div className="mt-2"><h4>Talk to an Astrologer</h4></div>
                    <div className="dropdown">

                        <button  className="btn mx-0 position-absolute  " role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ right: "10px" }} ><img className='mx-0' style={{ width: '30px' }} src={sort} alt="" /></button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink" >
                            <li><input class=" mx-2 my-2 form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="mx-2 my-2 form-check-label" for="flexRadioDefault1" >
                                    <div >
                                    Default radio
                                    </div>
                                </label></li>
                            <li><input class=" mx-2 my-2 form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="mx-2 my-2 form-check-label" for="flexRadioDefault1">
                                    Default radio
                                </label></li>
                            <li><input class=" mx-2 my-2 form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="mx-2 my-2 form-check-label" for="flexRadioDefault1">
                                    Default radio
                                </label></li>
                            

                        </ul>
                        <button className="btn mx-0 position-absolute" style={{ right: "60px" }}><img className='mx-0' style={{ width: '30px' }} src={filter} alt="" /></button>
                        <button className="btn mx-0 position-absolute" style={{ right: "110px" }}><img className='mx-0' style={{ width: '30px' }} src={search} alt="" /></button>
                    </div>

                </div>
                <div>

                    
                </div>
                <div className="">
                    <AstrologersPageCard i={astrologer1} exp="20" price={300} n="Arvind Shukla" />
                    <AstrologersPageCard i={astrologer2} exp="10" price={150} n="Vidya Triwedi" />
                    <AstrologersPageCard i={astrologer3} exp="15" price={200} n="Sonali Dubey" />
                    <AstrologersPageCard i={astrologer4} exp="16" price={250} n="Sunita Chaubey" />
                    <AstrologersPageCard i={astrologer5} exp="18" price={280} n="Praveen Mishra" />
                    <p><br />&copy; Copyright 2020 All Rights Reserved</p>
                </div>

            </div>
        </>
    )
}

export default AstrologersPage
