import React, {useEffect, useState} from 'react'
import style from './slider.module.css'
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import axios from "axios";
// import Slides from "../../Container/Slides";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../store/action/products";

const Slider = () => {
    // const [data, setData] = useState([])
    const products = useSelector(state => state)
    console.log(products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [])

    
    return (
        <div className={style['bg-container']}>
            <div className={style['wrapper']}>
             <Header/>
             <Logo/>
            {/*<Slides />red*/}
            </div>
        </div>
    )
}

export default React.memo(Slider);