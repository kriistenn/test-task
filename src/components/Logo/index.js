import React from "react";
import logo from '../../assets/logo.png'
import logoTitle from '../../assets/bottomLogo.png'
import style from './logo.module.css'

const Logo = () => {
    return (
        <div className={style['logo-container']}>
           <a href={'https://romarkcode.com/'}>
               <img src={logo} className={style['logo']} alt={'logo'}/>
           </a>
            <img className={style['logo-title']} src={logoTitle} alt={'logo-title'}/>
        </div>
    )
}

export default Logo