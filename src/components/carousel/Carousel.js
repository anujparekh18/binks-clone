import React from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import Dress1 from '../../assets/images/dresses/dress1.jpg';
import Dress2 from '../../assets/images/dresses/dress2.jpg';
import Dress3 from '../../assets/images/dresses/dress3.jpg';
import Dress4 from '../../assets/images/dresses/dress4.jpg';
import Dress5 from '../../assets/images/dresses/dress5.jpg';
import Dress6 from '../../assets/images/dresses/dress6.jpeg';
import Dress7 from '../../assets/images/dresses/dress7.jpeg';
import Dress8 from '../../assets/images/dresses/dress8.jpg';
import Dress9 from '../../assets/images/dresses/dress9.jpg';
import Dress10 from '../../assets/images/dresses/dress10.jpg';
import Dress11 from '../../assets/images/dresses/dress11.jpg';
import Dress12 from '../../assets/images/dresses/dress12.jpg';
import arrowLeft from '../../assets/images/chevron_left.png';
import arrowRight from '../../assets/images/chevron_right.png';

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 850, itemsToShow: 3 },
      { width: 1150, itemsToShow: 4 },
      { width: 1450, itemsToShow: 4 },
      { width: 1750, itemsToShow: 6 },
    ];
  }

  images = [
    { id: 1, url: Dress1 },
    { id: 2, url: Dress2 },
    { id: 3, url: Dress3 },
    { id: 4, url: Dress4 },
    { id: 5, url: Dress5 },
    { id: 6, url: Dress6 },
    { id: 7, url: Dress7 },
    { id: 8, url: Dress8 },
    { id: 9, url: Dress9 },
    { id: 10, url: Dress10 },
    { id: 11, url: Dress11 },
    { id: 12, url: Dress12 },
  ];

  myArrow({ type, onClick, isEdge }) {
    const pointer =
      type === consts.PREV ? (
        <img className="h-10 w-10" src={arrowLeft} alt="leftArrow" />
      ) : (
        <img className="h-10 w-10" src={arrowRight} alt="rightArrow" />
      );
    return (
      <button
        className="focus:outline-none"
        onClick={onClick}
        disabled={isEdge}
      >
        {pointer}
      </button>
    );
  }

  render() {
    return (
      <div className="relative">
        <Carousel
          breakPoints={this.breakPoints}
          pagination={false}
          renderArrow={this.myArrow}
        >
          {this.images.map((item, index) => (
            <div
              className="flex justify-center items-center h-96 w-full mr-2 focus:outline-none"
              key={index}
            >
              <img
                className="border rounded-lg h-full w-full"
                src={item.url}
                alt={item.id}
              />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default ImageSlider;
