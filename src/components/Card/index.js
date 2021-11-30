import React from 'react'
import style from './card.module.css'
import {useLocation} from "react-router-dom";


const Card = ({data}) => {
    const location = useLocation()
    console.log(location.hash)
    console.log(data[1].displacement)
    return (
        <div className={style['container-card']}>
            <div className={style['wrapper-card']}>
                {location.hash === '#monster/0' ?
                        <ul>
                            <li className={style['item']}>
                            <span className={style['title']}>Displacement</span>
                            <span className={style['content']}>{data[1].displacement}</span>
                        </li>
                        <li  className={style['item']}>
                            <span className={style['title']}>Horse Power</span>
                            <span className={style['content']}>{data[1].horsePower}</span>
                        </li>
                        <li  className={style['item']}>
                            <span className={style['title']}>Torque</span>
                            <span className={style['content']}>{data[1].torque}</span>
                        </li>
                        <li className={style['item']}>
                            <span className={style['title']}>Dry Weight</span>
                            <span className={style['content']}>{data[1].dryWeight}</span>
                        </li>
                        <li className={style['item']}>
                            <span className={style['title']}>Seat Height</span>
                            <span className={style['content']}>{data[1].seatHeight}</span>
                        </li>
                        <li className={style['item']}>
                            <span className={style['title']}>Safety</span>
                            <span className={style['content']}>{data[1].safety}</span>
                        </li>
                    </ul> :
                        <ul>
                        <li className={style['item']}>
                            <span className={style['title']}>Displacement</span>
                            <span className={style['content']}>{data[2].displacement}</span>
                        </li>
                        <li  className={style['item']}>
                            <span className={style['title']}>Horse Power</span>
                            <span className={style['content']}>{data[2].horsePower}</span>
                        </li>
                        <li  className={style['item']}>
                            <span className={style['title']}>Torque</span>
                            <span className={style['content']}>{data[2].torque}</span>
                        </li>
                        <li className={style['item']}>
                            <span className={style['title']}>Dry Weight</span>
                            <span className={style['content']}>{data[2].dryWeight}</span>
                        </li>
                        <li className={style['item']}>
                            <span className={style['title']}>Seat Height</span>
                            <span className={style['content']}>{data[2].seatHeight}</span>
                        </li>
                        <li className={style['item']}>
                            <span className={style['title']}>Safety</span>
                            <span className={style['content']}>{data[2].safety}</span>
                        </li>
                    </ul>
                }

                {/*<div className={style['container-choice']}>*/}
                {/*    <div className={style['red']}></div>*/}
                {/*    <div className={style['white']}></div>*/}
                {/*    <div className={style['black']}></div>*/}
                {/*</div>*/}
                <div className={style['container-citation']}>
                    <p className={style['citation']}>
                        Fresh vibes.<br/>
                        Sporty soul.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card