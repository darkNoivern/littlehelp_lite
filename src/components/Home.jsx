import React from 'react'
import { useNavigate } from 'react-router-dom'
import notebook from '../images/notebook.svg'
import faq from '../images/faq.svg'
import upload from '../images/upload.svg'
import grade from '../images/grade.svg'
import gengar from '../images/gengar.png'
import { IconButton } from '@mui/material'
import { styled } from '@mui/system'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/home.css'

const FooterButton = styled(IconButton)({
    color: '#000000',
});
const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="bg-blue home-welcome-height flexy">
                <div className="style-welcome-page mt-4">

                    <div className="row mx-0">
                        <div className="col col-lg-6 col-12 mb-5 home-page-title flexy abril">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nihil!
                        </div>
                        <div className="col col-lg-6 col-12 mb-5 flexy">
                            <img src={gengar} alt="" className='home-page-logo' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="gradient"></div>
            <div className="bg-inverse d-flex justify-content-center align-items-center py-3">
                <div className="row route-store mx-0 my-5">
                    <div className="col col-lg-6 col-12 route-store-container flexy">
                        <div className='text-center' onClick={() => { navigate('/studymaterial') }}>
                            <img className='home-svg-icons' src={notebook} alt="" />
                            <div className='text-center mt-3 home-svg-captions mouse-rat'>
                                Study Material
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-12 flexy route-store-container">
                        <div className='text-center' onClick={() => { navigate('/upload') }}>
                            <img src={upload} className='home-svg-icons' alt="" />
                            <div className='text-center mt-3 home-svg-captions mouse-rat'>
                                Upload
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-12 route-store-container flexy">
                        <div className='text-center' onClick={() => { navigate('/pointer') }}>
                            <img src={grade} className='home-svg-icons' alt="" />
                            <div className='text-center mt-3 home-svg-captions mouse-rat'>
                                Pointer Calculator
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-12 route-store-container flexy">
                        <div className='text-center' onClick={() => { navigate('/faq') }}>
                            <img src={faq} className='home-svg-icons' alt="" />
                            <div className='text-center mt-3 home-svg-captions mouse-rat'>Discuss Queries</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inverse-gradient"></div>
            <div className="bg-blue mouse-rat flexy">
            <div className="home-about my-5">
                <div className="abril home-about-title mb-4">About</div>
                <div className="mouse-rat home-about-desc">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae natus deleniti blanditiis voluptas officiis non magni architecto, eaque libero, culpa dolores impedit cumque nihil perferendis. Sapiente quam, laudantium maiores qui odit, maxime adipisci consectetur animi illum repellendus expedita provident nostrum tenetur consequatur natus deserunt sint perferendis corrupti quae repellat officia?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae natus deleniti blanditiis voluptas officiis non magni architecto, eaque libero, culpa dolores impedit cumque nihil perferendis. Sapiente quam, laudantium maiores qui odit, maxime adipisci consectetur animi illum repellendus expedita provident nostrum tenetur consequatur natus deserunt sint perferendis corrupti quae repellat officia?
                </p>
                </div>
            </div>
            </div>
            <div className="gradient"></div>
            <div className="footer bg-inverse flexy">
                <div>
                    <div className='d-flex justify-content-between my-3'>
                        <FooterButton>
                            <FacebookOutlinedIcon fontSize="large" />
                        </FooterButton>
                        <FooterButton>
                            <TwitterIcon fontSize="large" />
                        </FooterButton>
                        <FooterButton>
                            <AlternateEmailIcon fontSize="large" />
                        </FooterButton>
                        <FooterButton>
                            <GitHubIcon fontSize="large" />
                        </FooterButton>
                    </div>
                    <div className='mouse-rat text-center'> © Copyright 2023 NITDGP  </div>
                </div>
            </div>
        </>
    )
}

export default Home
