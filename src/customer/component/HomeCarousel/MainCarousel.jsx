import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';


const MainCarousel = () => {
    
    const items = MainCarouselData.map( (item) => <img className='cursor-pointer'
    role='presentation' src={item.image} alt=''/>)

    return (
        <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
        paddingRight={10}
        paddingLeft={10}
        animationType='slide'
        />
    )
}

export default MainCarousel;