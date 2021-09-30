import React from 'react'
import Horoscope from './Horoscope'
import Offers from './Offers'
import Quote from './Quote'
import Astrologers from './Astrologers'
import Reports from './Reports'
import Question from './Question'
import Reviews from './Reviews'
import Footer from './Footer'

const Home = () => {
    return (
        <>
        <div className="">
            <Quote/>
            
            <Offers/>
            
            <Horoscope/>

            <Astrologers/>

            <Reports/>

            <Question/>

            <Reviews/>

            <div className="container mb-5 mt-4">
                <p className="" style={{fontSize:"80%",color:"#949494"}}>&copy; Copyright 2020 All Rights Reserved</p>
            </div>
            
            
        </div>
        </>
    )
}

export default Home
