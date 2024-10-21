import React,{useState} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TenThousandLitePackage from '../TwoStepLitePackage/TenThousandLitePackage';
import TwentyFiveThousandPackage from '../TwoStepLitePackage/TwentyFiveThousandPackage';
import FiftyThousandLitePackage from '../TwoStepLitePackage/FiftyThousandLitePackage';
import LacLitePackage from '../TwoStepLitePackage/LacLitePackage';
const TwoStepLiteSlider = () => {

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [priceBtn, setPriceBtn] = useState({
    priceBtn10k: true,
    priceBtn25k: false,
    priceBtn50k: false,
    priceBtn100k: false,
  });
  const handlePriceButton = (price) => {
    if (price === "10k") {
      setPriceBtn({ ...priceBtn, priceBtn5k: false, priceBtn10k: true, priceBtn25k: false, priceBtn50k: false, priceBtn100k: false });
      setCurrentSlideIndex(0);
    } else if (price === "25k") {
      setPriceBtn({ ...priceBtn, priceBtn5k: false, priceBtn10k: false, priceBtn25k: true, priceBtn50k: false, priceBtn100k: false });
      setCurrentSlideIndex(1);
    } else if (price === "50k") {
      setPriceBtn({ ...priceBtn, priceBtn5k: false, priceBtn10k: false, priceBtn25k: false, priceBtn50k: true, priceBtn100k: false });
      setCurrentSlideIndex(2);
    } else if (price === "100k") {
      setPriceBtn({ ...priceBtn, priceBtn5k: false, priceBtn10k: false, priceBtn25k: false, priceBtn50k: false, priceBtn100k: true });
      setCurrentSlideIndex(3);
    }
  }
    const settings = {
        className: "center",
        centerMode: true,
        arrows:false,
        dots:false,
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
        <button type="button" className={`price-btn ${priceBtn.priceBtn10k ? 'activeClass' : ''}`} onClick={() => handlePriceButton("10k")}>$10k</button>
        <button type="button" className={`price-btn ${priceBtn.priceBtn25k ? 'activeClass' : ''}`} onClick={() => handlePriceButton("25k")}>$25k</button>
        <button type="button" className={`price-btn ${priceBtn.priceBtn50k ? 'activeClass' : ''}`} onClick={() => handlePriceButton("50k")}>$50k</button>
        <button type="button" className={`price-btn ${priceBtn.priceBtn100k ? 'activeClass' : ''}`} onClick={() => handlePriceButton("100k")}>$100k</button>
      </div>
      <div className="slider-container">
      <Slider {...settings} ref={slider => {
        slider?.slickGoTo(currentSlideIndex)}}>
        <div>
            <TenThousandLitePackage />
        </div>
        <div>
          <TwentyFiveThousandPackage />
        </div>
        <div>
          <FiftyThousandLitePackage />
        </div>
        <div>
          <LacLitePackage/>
        </div>
      </Slider>
    </div>
    </>

  )
}

export default TwoStepLiteSlider
