import React from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import arrowLeft from '../../assets/images/chevron_left.png';
import arrowRight from '../../assets/images/chevron_right.png';
import quotes from '../../assets/images/quotation-marks-1.png';
import './QuoteCarouse.css';

class QuoteSlider extends React.Component {
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

  quotes = [
    {
      id: 1,
      quote:
        '..There are many things about my experience with Binks that I have really enjoyed, though the convenience of the pick-up and drop has been huge for me because I really dislike wasting time waiting at boutiques.',
      author: '- Hita K, MG Road',
    },
    {
      id: 2,
      quote:
        'Got an express order done for my daughter right after lockdown. A pattu pavadai set & half saree. I haven not experienced tailoring like this before. So seamless, so professional. I highly recommend it!',
      author: '- Sangeetha M, Battarahalli',
    },
    {
      id: 3,
      quote:
        'Loved the way they seamlessly handled my orders and patiently designed each item according to my preference. Plus, they saved me a ton of hassle by picking up the fabric and delivering the clothes at my doorstep.',
      author: '- Sayanti K, C V Raman Nagar',
    },
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
        className="focus:outline-none mx-5 w-20"
        onClick={onClick}
        disabled={isEdge}
      >
        {pointer}
      </button>
    );
  }

  render() {
    return (
      <div className="bg-remy w-full">
        <div className="max-w-6xl">
          <Carousel renderArrow={this.myArrow} transitionMs={700}>
            {this.quotes.map((quote, index) => (
              <div
                className="flex flex-col justify-center py-10 focus:outline-none"
                key={index}
              >
                <img
                  className="border rounded-lg h-8 w-8 sm:h-14 sm:w-14 border-none"
                  src={quotes}
                  alt="quote"
                />
                <div className="text-eastbay sm:text-xl leading-relaxed font-light mt-5 mb-3 px-3 sm:px-4 tracking-wider">
                  {quote.quote}
                </div>
                <div className="text-hibiscus-500 text-right tracking-wider font-light">
                  {quote.author}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default QuoteSlider;
