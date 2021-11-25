import React, {useEffect} from 'react'
import style from './card.module.css'
import axios from "axios";

const mock = [
    {
        id: 1,
        title: 'Displacement',
        content: '803 cc'
    },
    {
        id: 2,
        title: 'Horse Power',
        content: '803 cc'
    },
    {
        id: 3,
        title: 'Horse Power',
        content: '803 cc'
    },
    {
        id: 4,
        title: 'Horse Power',
        content: '803 cc'
    },
    {
        id: 5,
        title: 'Horse Power',
        content: '803 cc'
    },
    {
        id: 6,
        title: 'Horse Power',
        content: '803 cc'
    }
]


const Card = () => {
    useEffect(() => {
        axios.get(' http://localhost:8000/products')
            .then(res => {
                console.log(res)
            })
    })

    return (
        <div className={style['container-card']}>
            <div className={style['wrapper-card']}>
                <ul>
                    {
                        mock.map((item) => {
                            return (
                                <li key={item.id} className={style['item']}>
                                    <span className={style['title']}>{item.title}</span>
                                    <span className={style['content']}>{item.content}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className={style['container-choice']}>
                    <div className={style['red']}></div>
                    <div className={style['white']}></div>
                    <div className={style['black']}></div>
                </div>
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