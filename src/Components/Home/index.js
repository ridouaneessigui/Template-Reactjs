import React from 'react'
import {HomeS,HomeInfo,HomeTitle,Homeinfo2,HomeDesk,HomeDeskspan,HomeBtn}from'./style.js'
const Home = () => {
    return (
            <HomeS>
            <div className="container">
                <HomeInfo>
                    <HomeTitle>Ridouane essigui</HomeTitle>
                    <Homeinfo2>Creative Director</Homeinfo2>
                    <HomeDesk>
                        Iam a professional <HomeDeskspan>UX Designer</HomeDeskspan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesk>
                    <HomeBtn className="home-btn">Let's Begin</HomeBtn>
                </HomeInfo>
            </div>
        </HomeS>
    )
}

export default Home