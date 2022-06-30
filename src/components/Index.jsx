import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Pointer from './Pointer'
import StudyMaterial from './StudyMaterial'
import UploadSection from './UploadSection'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Faq from './Faq'

const Index = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/pointer" element={<Pointer />} />
                    <Route exact path="/studymaterial" element={<StudyMaterial />} />
                    <Route exact path="/upload" element={<UploadSection />} />
                    <Route exact path="/signup" element={<SignUp />} />
                    <Route exact path="/signin" element={<SignIn />} />
                    <Route exact path="/faq" element={<Faq />} />
                </Routes>
            </Router> 
        </>
    )
}

export default Index
