import React, {useEffect, useRef, useState} from 'react'
import style from './slider.module.css'
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import Slides from "../../Container/Slides";
import Card from "../../components/CardSLider";
import axios from "axios";
import {Router, Switch} from "react-router-dom";
import { Route } from 'react-router-dom';

const Slider = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('  http://localhost:8000/products')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        console.log('data',data)
    }, [])


    return (
        <div className={style['bg-container']}>
            <div className={style['wrapper']}>
             <Header/>
             <Logo/>
             <Slides data={data} />
             <Card data={data}/>
            </div>
            <Router>
                {/* eslint-disable-next-line no-restricted-globals */}
                <Switch location={location}>
                    {
                        data.map(item => {
                            return (
                                <Route path='/' exact  />
                            )
                        })
                    }
                </Switch>
            </Router>
        </div>
    )
}

export default Slider