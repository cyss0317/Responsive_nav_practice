import React, {useState} from "react"
import {FaBars, FaTwitter} from 'react-icons/fa'
import { links, social } from './data'



 const Navbar = () => {
     let size = document.querySelector("window.innerWidth")
     console.log("size",size)
     //  window.innerWidth.addEventListener("change", console.log(window.innerWidth))
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    window.onresize = function(){
        console.log(window.innerWidth)
        console.log('resize')
        setScreenSize(window.innerWidth)
    }

    const onSumbitResize = e => {
        e.preventDefault()
        window.innerWidth = screenSize
    }

    return(
        
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <form onSubmit={e => onSumbitResize(e)}>
                        <input type="number" onChange={(e) => setScreenSize(e.target.value)} />
                        <h1 className="screen-size" >{screenSize}</h1>
                        <button > changeSize</button>
                    </form>
                    <img src="https://raw.githubusercontent.com/john-smilga/react-projects/e44b541e002fca44db1e07b2d0a5275824f6d0e6/11-navbar/setup/src/logo.svg" alt="logo" />
                    <button className="nav-toggle">
                        <FaBars/>
                    </button>
                </div>
                
                <div className="links-container show-container">
                    <ul className="links">
                        <li>
                            <a href="#">home</a>
                        </li>
                        <li>
                            <a href="#">about</a>
                        </li>
                        <li>
                            <a href="#">contact</a>
                        </li>
                        <li>
                            <a href="#">products</a>
                        </li>
                    </ul>
                </div>

                <ul className="social-icons">
                    <li>
                        <a href="https://www.twitter.com">
                            <FaTwitter/>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

