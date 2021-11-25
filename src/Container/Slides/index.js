import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Navigation, History} from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import red from '../../../public/'
// import white from '../../assets/moto_white.png'
// import black from '../../assets/moto_black.png'
import style from './slides.module.css'
SwiperCore.use([Navigation]);
SwiperCore.use([History])

const Slides = ({data}) => {
    console.log(`../../assets/${data.img}`)
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
            >
                {
                    // eslint-disable-next-line array-callback-return
                    data.map(item => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        <div>
                                            <h2 className={style['number']}>{item.number}</h2>
                                            <img alt={'img'} src={require(`../../../public/${item.img}`).default}/>
                                        </div>
                                    </SwiperSlide>
                                )
                    })
                }

            </Swiper>
        </div>
    )
}

export default Slides