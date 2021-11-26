import React, {Fragment} from 'react'
import style from './card.module.css'


const Card = ({data}) => {
    return (
        <div className={style['container-card']}>
            <div className={style['wrapper-card']}>
                    {
                        data.map((item) => {
                            if(window.location.hash === `monster?${item.id}`) {
                                    return (
                                        <Fragment  key={item.id}>
                                            <ul>
                                                <li className={style['item']}>
                                                    <span className={style['title']}>Displacement</span>
                                                    <span className={style['content']}>{item.displacement}</span>
                                                </li>
                                                <li  className={style['item']}>
                                                    <span className={style['title']}>Horse Power</span>
                                                    <span className={style['content']}>{item.horsePower}</span>
                                                </li>
                                                <li  className={style['item']}>
                                                    <span className={style['title']}>Torque</span>
                                                    <span className={style['content']}>{item.torque}</span>
                                                </li>
                                                <li className={style['item']}>
                                                    <span className={style['title']}>Dry Weight</span>
                                                    <span className={style['content']}>{item.dryWeight}</span>
                                                </li>
                                                <li className={style['item']}>
                                                    <span className={style['title']}>Seat Height</span>
                                                    <span className={style['content']}>{item.seatHeight}</span>
                                                </li>
                                                <li className={style['item']}>
                                                    <span className={style['title']}>Safety</span>
                                                    <span className={style['content']}>{item.safety}</span>
                                                </li>
                                            </ul>
                                        </Fragment>
                                    )
                            }
                        })
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