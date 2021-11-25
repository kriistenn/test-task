import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Navigation, Pagination} from 'swiper';
// import "swiper/css/navigation"
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import red from '../../assets/moto_red.png'
import white from '../../assets/moto_white.png'
import black from '../../assets/moto_black.png'

import style from './slides.module.css'

SwiperCore.use([Navigation]);
// SwiperCore.use([Pagination]);

const Slides = () => {
    // const pagination = {
    //     "clickable": true,
    //     "renderBullet": function (index, className) {
    //         return '<span class=\"' + className + '\">' + (index + 1) + '</span>';
    //     }
    // }

    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                // pagination={pagination}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
            >
                <SwiperSlide>
                    <div>
                        <h2 className={style['number']}>797</h2>
                        <img src={white}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <h2 className={style['number']}>797</h2>
                        <img src={red}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <h2 className={style['number']}>797</h2>
                        <img src={black}/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slides