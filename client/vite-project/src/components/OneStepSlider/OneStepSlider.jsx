import React,{useState} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FiveThousandPackage from '../OneStepPackage/FiveThousandPackage';
import TenThousandPackage from '../OneStepPackage/TenThousandPackage';
import TwentyFiveThousandPackage from '../OneStepPackage/TwentyFiveThousandPackage';
import FifityThousandPackage from '../OneStepPackage/FifityThousandPackage';
import OneLacPackage from '../OneStepPackage/OneLacPackage';
const OneStepSlider = () => {

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [priceBtn, setPriceBtn] = useState({
      priceBtn5k: true,
      priceBtn10k: false,
      priceBtn25k: false,
      priceBtn50k: false,
      priceBtn100k: false,
    });
    const handlePriceButton = (price,index) => {
      setCurrentSlideIndex(index);
      if (price === "5k") {
        setPriceBtn({ ...priceBtn, priceBtn5k: true,priceBtn10k: false, priceBtn25k: false, priceBtn50k: false,priceBtn100k: false});
      } else if (price === "10k") {
        setPriceBtn({ ...priceBtn, priceBtn5k: false ,priceBtn10k: true, priceBtn25k: false, priceBtn50k: false,priceBtn100k: false});
      } else if (price === "25k") {
        setPriceBtn({ ...priceBtn, priceBtn5k: false,priceBtn10k: false, priceBtn25k: true, priceBtn50k: false,priceBtn100k: false});
      } else if (price === "50k") {
        setPriceBtn({ ...priceBtn, priceBtn5k: false,priceBtn10k: false, priceBtn25k: false, priceBtn50k: true,priceBtn100k: false});
      } else if (price === "100k") {
        setPriceBtn({ ...priceBtn, priceBtn5k: false,priceBtn10k: false, priceBtn25k: false, priceBtn50k: false,priceBtn100k: true});
      }
    }


  const settings = {
    className: "center",
    centerMode: true,
    arrows: false,
    dots: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1025, // Medium devices (tablets, 768px and up)
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768, // Small devices (landscape phones, 576px and up)
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='d-flex gap-md-3 gap-2 justify-content-center d-md-none mb-3'>
        <button type="button" className={`price-btn ${priceBtn.priceBtn5k ? 'activeClass' : ''}`} onClick={() => handlePriceButton("5k", 0)}>$5k</button>
        <button type="button" className={`price-btn ${priceBtn.priceBtn10k ? 'activeClass' : ''}`} onClick={() => handlePriceButton("10k", 1)}>$10k</button>
        <button type="button" className={`price-btn ${priceBtn.priceBtn25k ? 'activeClass' : ''}`} onClick={() => handlePriceButton("25k", 2)}>$25k</button>
        <button type="button" className={`price-btn ${priceBtn.priceBtn50k ? 'activeClass' : ''}`} onClick={() => handlePriceButton("50k", 3)}>$50k</button>
        <button type="button" className={`price-btn ${priceBtn.priceBtn100k ? 'activeClass' : ''}`} onClick={() => handlePriceButton("100k", 4)}>$100k</button>
      </div>
      <div className="slider-container">
        <Slider {...settings} ref={slider => {
        slider?.slickGoTo(currentSlideIndex)}} >
          <div>
            <FiveThousandPackage />
          </div>
          <div>
            <TenThousandPackage />
          </div>
          <div>
            <TwentyFiveThousandPackage />
          </div>
          <div>
            <FifityThousandPackage />
          </div>
          <div>
            <OneLacPackage />
          </div>
        </Slider>
      </div>
    </>

  )
}

export default OneStepSlider
