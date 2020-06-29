import React, { Component } from 'react';
import CardVanne from './CardVanne';
import Carousel from 'react-elastic-carousel';
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

        return (
            <Carousel  itemsToShow={3} 
            itemsToScroll={1} 
            itemPadding={[10, 30]}
            
            >
                {items.map(item => <div key={item.id}><CardVanne></CardVanne></div>)}
            </Carousel>
        );
    }
}

export default CardSlider;
