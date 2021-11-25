import React from "react";
import menu from "../../assets/Menu.png";
import style from './header.module.css'

const Header = () => {
    return (
        <header className={style['header-container']}>
            <img src={menu} alt={'menu'}/>
            <div>
                <span className={style['header-title']}>INTERNATIONAL WEBSITE</span>
                <span className={style['header-title']}>MY DUCATI</span>
            </div>
        </header>
    )
}

export default Header