import React, {useState} from "react"
import {FaBars, FaTwitter} from 'react-icons/fa'


 const Navbar = () => {

    return(
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src="https://raw.githubusercontent.com/john-smilga/react-projects/e44b541e002fca44db1e07b2d0a5275824f6d0e6/11-navbar/setup/src/logo.svg" alt="logo" />
                    <button className="nav-toggle">
                        <FaBars/>
                    </button>
                </div>
                
                <div className="links-container show-container"></div>
                <ul className="social-icons"></ul>
            </div>
        </nav>
    )
}

export default Navbar

