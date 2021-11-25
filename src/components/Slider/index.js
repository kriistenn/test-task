import React from 'react'
import style from './slider.module.css'
import Header from "../Header";
import Logo from "../Logo";
import Slides from "../Slides";
import Card from "../CardSLider";

const Slider = () => {
    return (
        <div className={style['bg-container']}>
            <div className={style['wrapper']}>
             <Header/>
             <Logo/>
             <Slides/>
             <Card/>
            </div>
        </div>
    )
}

export default Slider