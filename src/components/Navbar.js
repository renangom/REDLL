import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route ,Link} from 'react-router-dom'
import { Button } from "./Button";
import './Navbar.css'

export default function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960 ) {
            setButton(false)
        }else{
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)
    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        REDLL <i className="fab fa-typo3"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Início
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/servicos' className="nav-links" onClick={closeMobileMenu}>
                                Serviços
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/produtos' className="nav-links" onClick={closeMobileMenu}>
                                Produtos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/logar' className="nav-links-mobile" onClick={closeMobileMenu}>
                                Logar
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>LOGAR</Button>}
                </div>
            </nav>
        </>
    )
}
