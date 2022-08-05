import React from 'react';
import './home.css'
const SmallCards = () => {
     return (
        <>
        <div>
            <div>
                <h5>FIND WHAT MOVES YOU</h5>
                <p>Whether you’re a complete beginner or you want to step up your routine, get the full studio experience at home with thousands of classes for body, mind, and spirit.</p>
            </div>
            <div className='d-flex flex-wrap'>
                <div className="col-lg-3 col-md-6 col-sm-12 p-4">
                <img src="https://alomoves.s3.amazonaws.com/manual_uploads/shared/home/categories/Jan_2022_Update/YOGA_IMAGE_1.jpg" className='smallcard'></img>
                <p>From Ashtanga to Vinyasa, make mindful movement a daily ritual.</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 p-4">
                <img src="https://alomoves.s3.amazonaws.com/manual_uploads/shared/home/categories/Jan_2022_Update/YOGA_IMAGE_1.jpg" className='smallcard'></img>
                <p>From Ashtanga to Vinyasa, make mindful movement a daily ritual.</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 p-4">
                <img src="https://alomoves.s3.amazonaws.com/manual_uploads/shared/home/categories/Jan_2022_Update/YOGA_IMAGE_1.jpg" className='smallcard'></img>
                <p>From Ashtanga to Vinyasa, make mindful movement a daily ritual.</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 p-4">
                <img src="https://alomoves.s3.amazonaws.com/manual_uploads/shared/home/categories/Jan_2022_Update/YOGA_IMAGE_1.jpg" className='smallcard'></img>
                <p>From Ashtanga to Vinyasa, make mindful movement a daily ritual.</p>
                </div>
            </div>
        </div>
            
        </>

    )
}

export default SmallCards;
