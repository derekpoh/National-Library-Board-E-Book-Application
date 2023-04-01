import React from 'react';
import CarouselCard from './CarouselCard';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel = ({books}) => {
    return(    
        <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={80}
        totalSlides={11}
        visibleSlides={5}
      >   
        <Slider >
           {books.map((book, index) =>
          <Slide key={index} >
          <CarouselCard book={book} key={book._id} />
          </Slide>
          )} 
        </Slider>
        <div className="buttons">
        <ButtonBack className="button">⇽</ButtonBack>
        <ButtonNext className="button">⇾</ButtonNext>
        </div>
      </CarouselProvider>
        )
}

export default Carousel

