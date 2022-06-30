import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-blue">
                <div className="container-fluid">
                    <Link exact to="/" className="navbar-brand fred">
                        Void
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <NavLink
                                activeclassname="active"
                                className="nav-link"
                                exact to="/" >
                                Home
                            </NavLink>
                            <NavLink
                                activeclassname="active"
                                className="nav-link ms-1"
                                exact to="/studymaterial" >
                                Study Material
                            </NavLink>
                            <NavLink
                                activeclassname="active"
                                className="nav-link ms-1"
                                exact to="/upload" >
                                Upload
                            </NavLink>
                            <NavLink
                                activeclassname="active"
                                className="nav-link ms-1"
                                exact to="/faq" >
                                Discussions
                            </NavLink>
                            <NavLink
                                activeclassname="active"
                                className="nav-link ms-1"
                                exact to="/pointer" >
                                Pointer
                            </NavLink>
                        </div>

                        <div className="navbar-nav ms-auto">

                            <NavLink
                                activeclassname="active"
                                className="nav-link ms-1"
                                exact to="/signin">
                                SignIn
                            </NavLink>
                            <NavLink
                                activeclassname="active"
                                className="nav-link ms-1"
                                exact to="/signup">
                                SignUp
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>       
        </>
    )
}

export default Navbar