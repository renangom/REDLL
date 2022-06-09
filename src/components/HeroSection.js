import React from "react";
import { Button } from "./Button";
import './HeroSection.css';
import '../App.css'

export default function HeroSection() {
    return(
        <div className="hero-container">
            <video src="../../public/videos/video-2.mp4" />
            <h1>A Aventura te espera</h1>
            <p> O que você está esperando?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> Comece </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'> Assista o Trailler
                <i className="far fa-play-circle"/> </Button> 
            </div>
        </div>
    )
}