import React from 'react'
import Horoscope from './Horoscope'
import Offers from './Offers'
import Quote from './Quote'
import Astrologers from './Astrologers'
import Reports from './Reports'
import Question from './Question'
import Reviews from './Reviews'


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
                <p className="mt-4" style={{fontSize:"80%",color:"#949494",lineHeight:"15px"}}>&copy; Copyright 2020 All Rights Reserved<br/>&copy; Copyright 2020 All Rights Reserved</p>
            </div>

            
            
            
        </div>
        </>
    )
}

export default Home
