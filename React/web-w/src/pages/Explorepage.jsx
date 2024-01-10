import React from 'react'
import Category from '../component/Category'
import Carousal from '../component/Carousal'
export default function Explorepage() {
    return (
        <div>

            <div className=" mt-5 p-4">
                <div className='text-center mt-2 mb-2'>
                    <h1>Explore More Topics
                    </h1>
                </div>
            </div>
            <div className='container col-md-8 mt-1 mb-4 border-bottom'>
                <Carousal></Carousal>
            </div>

            <div className="container">
                <div className="row mt-4 mb-2">
                    <Category></Category>
                </div>
            </div>


        </div>
    )
}