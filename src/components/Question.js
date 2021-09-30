import React from 'react'

const Question = () => {
    return (
        <div>
            <div className=" mt-3 d-flex justify-content-between">
                <div className=""><strong>Ask a Question</strong></div>
            </div>
            <div className="">
                <p className="text-start" style={{ fontSize: "80%", color: "#686868" }}>Seek accurate answers to your life problems and guide you towards the right path. Whether the problem is related to love, self, life, business, money, education or work, our astrologers will do an in depth study of your birth chart provide personalized responses along with remedies.</p>
            </div>
            <div className="mb-4" style={{backgroundColor:"#F1F2FA"}}>
                <div className=" mt-2 d-flex justify-content-between">
                    <div className="mx-2 my-2"><strong>Choose Category</strong></div>
                </div>
                <div className="container ">
                    <select class="form-select mb-3" aria-label="Default select example">
                        <option value="0">Select a Category: Love, Bussiness, etc</option>
                        <option value="1">Love</option>
                        <option value="2">Bussiness</option>
                        <option value="3">Education</option>
                        <option value="4">Work</option>
                        <option value="5">Life</option>
                        <option value="6">Self</option>
                    </select>
                </div>
                <div className="d-flex justify-content-between">
                <p className="mx-3 mt-2 "><strong>&#8377;99</strong> (Including GST)</p>
                <a className="btn text-light mb-2 mx-3" style={{backgroundColor:"#ff6702"}} role="button" href="/">Ask a Question</a>
                </div>
            </div>
        </div>
    )
}

export default Question
