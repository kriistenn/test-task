import React, {useEffect, useState} from 'react'
import style from './slider.module.css'
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import axios from "axios";
import Slides from "../../Container/Slides";
import {Route, Switch} from "react-router-dom";
import Card from "../../components/Card";
// import Slides from "../../Container/Slides";

const Slider = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/products')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <div className={style['bg-container']}>
            <div className={style['wrapper']}>
             <Header/>
             <Logo/>
            <Slides data={data} />
            {/*<Card data={data}/>*/}
            </div>
                <Switch>
                    <Route path='monster:id' exact component={Card}/>
                </Switch>

        </div>
    )
}

export default Slider;