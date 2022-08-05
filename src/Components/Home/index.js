import React from 'react';
import './home.css'
import SmallCards from './smallhorizontalcards';
import VideoSection from './videosection';
const Home = () => {
    const url = "https://alomoves.s3.amazonaws.com/manual_uploads/shared/home/instructors/Jan_2022_Update/BIANCA_MELAS_POS_1.jpg"
    return (
        <>
            <div>
                <VideoSection></VideoSection>
                <SmallCards></SmallCards>
            </div>
        </>

    )
}

export default Home;
