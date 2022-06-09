import React from "react";
import CardItem from "./CardItem";
import './Cards.css'

export default function Cards() {
    return(
        <div className="cards">
            <h1> Aprecie estes lugares belos! </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem  src="images/img-9.jpg"  text="Explore a cachoeira escondida"
                        label="Aventura" path="/services" />
                        <CardItem  src="images/img-6.jpg"  text="Uma população amistosa"
                        label="Cultura" path="/services" />
                    </ul>
                    <ul className="cards__items">
                        <CardItem  src="images/img-3.jpg"  text="Explore a cachoeira escondida"
                        label="Aventura" path="/services" />
                        <CardItem  src="images/img-1.jpg"  text="Uma população amistosa"
                        label="Cultura" path="/services" />
                        <CardItem  src="images/img-2.jpg"  text="Uma população amistosa"
                        label="Cultura" path="/services" />
                    </ul>
                </div>
            </div>
        </div>
    )
}