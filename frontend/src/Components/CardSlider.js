import React, { Component } from 'react';
import CardVanne from './CardVanne';
/*import Carousel from 'react-elastic-carousel';*/
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./MainContent.css";
import { Card, Button, CardHeader, CardBody,
  CardText, CustomInput} from 'reactstrap';



class CardSlider extends Component {
    
    /*state = {
        items: [
          {id: 1, title: 'item #1'},
          {id: 2, title: 'item #2'},
          {id: 3, title: 'item #3'},
          {id: 4, title: 'item #4'},
          {id: 5, title: 'item #5'}
        ]
      }*/

    constructor(props) 
    {
        super(props);
    
        this.state = {
            activeTab : '1',
            tableauVannes : [
              {id:1, nomVanne:'Vanne Tomates',            adresseIP:'198.178.22', statut:'ON',   type:'fruits'},
              {id:2, nomVanne:'Vanne Framboises/Mures',   adresseIP:'198.178.21', statut:'OFF',  type:'légumes' },
              {id:3, nomVanne:'Vanne Herbes Aromatiques', adresseIP:'197.178.23', statut:'OFF',  type:'herbes aromatiques'},
              {id:4, nomVanne:'Vanne Radis',              adresseIP:'198.178.26', statut:'OFF',  type:'légumes'},
              {id:5, nomVanne:'Vanne Courgettes',         adresseIP:'198.178.28', statut:'ON',   type:'légumes'}

            ],
          };
    
    }

    render() {

        //const { items } = this.state;

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
            {this.state.tableauVannes.map(vanne => 
              <div className="slider" key={vanne.id}>
                <Card> 
                  <CardHeader>{vanne.nomVanne}</CardHeader>
                  <CardBody>
                    <CardText>Statut : {vanne.statut}</CardText>
                    <CardText>IP : {vanne.adresseIP}</CardText>
                    <CustomInput type="switch" id={"switch"+vanne.id} label="Turn on" />
                    <Button className="buttonCardVanne">Attribuer un programme</Button>
                  </CardBody>
                </Card>
                </div>)
            }
          </Slider>
          //{items.map(item => <div className="slider" key={item.id}><CardVanne></CardVanne></div>)}

        );
      }

}

export default CardSlider;
