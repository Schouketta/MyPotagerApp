import React, { Component } from 'react';
import CardVanne from './CardVanne';
/*import Carousel from 'react-elastic-carousel';*/
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./MainContent.css";



class CardSlider extends Component {
    
    state = {
        items: [
          {id: 1, title: 'item #1'},
          {id: 2, title: 'item #2'},
          {id: 3, title: 'item #3'},
          {id: 4, title: 'item #4'},
          {id: 5, title: 'item #5'}
        ]
      }

    render() {

        const { items } = this.state;

        var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };

        return (
          <Slider className="sliderContainer" {...settings}>
            {items.map(item => <div className="slider" key={item.id}><CardVanne></CardVanne></div>)}
          </Slider>
        );
      }

}

export default CardSlider;
