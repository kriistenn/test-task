import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {History, HashNavigation} from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import style from './slides.module.css'
// import Swiper core and required modules
import  {
    Pagination,Navigation
} from 'swiper';
import Card from "../../components/Card";

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);
SwiperCore.use([History])
SwiperCore.use([HashNavigation])

const Slides = ({data}) => {

    return (
        <div>
            <Swiper
                modules={[History]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                // pagination={pagination}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                // hashNavigation={{
                //     "watchState": true
                // }}
                history={{
                    replaceState: true,
                }}
            >
                {
                data.map((item) => (
                <SwiperSlide
                    key={item.id}
                    data-history={`monster/${item.id}`}
                >
                    <div>
                        <h2 className={style['number']}>{item.number}</h2>
                        <img alt={'img'} src={require(`../../../public/${item.img}`).default}/>
                    </div>
                    <Card item={item}/>
                </SwiperSlide>
                ))
                }
            </Swiper>
        </div>
    )
}

export default Slides