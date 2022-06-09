import React from "react";
import { Button } from "./Button";
import './Footer.css'
import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <div className="footer-container">
            <section className="footer-subscription">
        	    <p className="footer-subscription-heading">
                    Junte-se a esta aventura para receber nossas melhores promoções
                </p>
                <p className="footer-subscription-text">
                    Você pode se desinscrever a qualquer hora
                </p>
                <div className="input-areas">
                    <form>
                        <input type='email' name="email"  className="footer-input" placeholder="Seu email" />
                        <Button buttonStyle='btn--outline'>Se inscrever</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2> Sobre Nós </h2>
                        <Link to='/sign-up'> Como funciona </Link>
                        <Link to='/' > Relatos </Link>
                        <Link to='/' > Carreiras </Link>
                        <Link to='/' > Investidores </Link>
                        <Link to='/' > Termos de serviço </Link>
                    </div>
                    <div className="footer-link-items">
                        <h2> Sobre Nós </h2>
                        <Link to='/sign-up'> Como funciona </Link>
                        <Link to='/' > Relatos </Link>
                        <Link to='/' > Carreiras </Link>
                        <Link to='/' > Investidores </Link>
                        <Link to='/' > Termos de serviço </Link>
                    </div>
                    <div className="footer-link-items">
                        <h2> Sobre Nós </h2>
                        <Link to='/sign-up'> Como funciona </Link>
                        <Link to='/' > Relatos </Link>
                        <Link to='/' > Carreiras </Link>
                        <Link to='/' > Investidores </Link>
                        <Link to='/' > Termos de serviço </Link>
                    </div>
                    <div className="footer-link-items">
                        <h2> Sobre Nós </h2>
                        <Link to='/sign-up'> Como funciona </Link>
                        <Link to='/' > Relatos </Link>
                        <Link to='/' > Carreiras </Link>
                        <Link to='/' > Investidores </Link>
                        <Link to='/' > Termos de serviço </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}