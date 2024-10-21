import React, { useState,useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import './Home.css'
import { tradingCourse, profitTarget, profitSplit, maxDrawDown, dailyDrawDown, payouts, bonus, timeLimit, oneTimeFee, Phase1, Phase2, maxWithdraw } from './ToolTipTexts'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import candles from '../../assets/Candles.png'
import candle1 from '../../assets/candle-1-01.png'
import candle2 from '../../assets/candle-2-01.png'
import candle3 from '../../assets/candle-3-01.png'
import candle4 from '../../assets/candle-4-01.png'
// Social Icons
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
// Icons
import { CiGlobe } from "react-icons/ci";
import { TbCash } from "react-icons/tb";
import { TbMoodDollar } from "react-icons/tb";
import { TbHours24 } from "react-icons/tb";
import { IoIosPeople } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { TbTargetArrow } from "react-icons/tb";
import { FaArrowTrendDown } from "react-icons/fa6";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { GiCash } from "react-icons/gi";
import { AiOutlineSplitCells } from "react-icons/ai";
import { TbReload } from "react-icons/tb";
import { FaBusinessTime } from "react-icons/fa";
import { IoPricetagOutline } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { FaPlay } from 'react-icons/fa';
import { TiSupport } from "react-icons/ti";
// images
import chooseIcon from '../../assets/choose.png'
import tradeIcon from '../../assets/trade.png'
import coinsIcon from '../../assets/coins.png'
import image from '../../assets/gradient-img.png'

import OneStep from '../OneStepPackage/OneStep';
import TwoStep from '../TwoStepPackage/TwoStep';
import TwoStepLite from '../TwoStepLitePackage/TwoStepLite';
import crypto from '../../assets/crypto.svg'
import debitCard from '../../assets/debit-card.svg'
import bankTransfer from '../../assets/bank-transfer.svg'
import videoThumbnail from '../../assets/video-thumbnail.jpg'
import PriceRanger from './PriceRanger';
import OneStepSlider from '../OneStepSlider/OneStepSlider';
import TwoStepSlider from '../TwoStepSlider/TwoStepSlider';

import Footer from '../Footer/Footer';
import TwoStepLiteSlider from "../TwoStepLiteSlider/TwoStepLiteSlider"
// import TwoStepLiteSlider from '../TwoStepLiteSLider/TwoStepLiteSlider';
import NavbarWhenUserLogin from '../Navbar/NavbarWhenUserLogin';
import Navbar from '../Navbar/Navbar';

const Home = () => {

  const[user,setUser] = useState(null)
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user)
        {
          setUser(true);
        }
        else{
          setUser(false);
        }
    })
  })
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1025, // Medium devices (tablets, 768px and up)
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint:993,
        settings:{
          slidesToShow:2
        }
      },
      {
        breakpoint: 768, // Small devices (landscape phones, 576px and up)
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576, // Extra small devices (portrait phones, 576px and below)
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  // For FAQ
  const [GeneralFaq, setGeneralFaq] = useState(true);
  const [RuleFaq, setRuleFaq] = useState(false);
  const [ChallengeFaq, setChallnegeFaq] = useState(false);
  function generalFaq() {
    setGeneralFaq(true)
    setRuleFaq(false)
    setChallnegeFaq(false)
  }
  function rulesFAQ() {
    setRuleFaq(true)
    setGeneralFaq(false)
    setChallnegeFaq(false)
  }
  function challengesFaq() {
    setChallnegeFaq(true)
    setRuleFaq(false)
    setGeneralFaq(false)
  }
  // package buttons
  const [onestep, setOneStep] = useState(true)
  const [twostep, setTwoStep] = useState(false)
  const [twosteplite, setTwoStepLite] = useState(false)
  const oneStep = () => {
    setOneStep(true);
    setTwoStep(false)
    setTwoStepLite(false);
  }
  const twoStep = () => {
    setTwoStep(true);
    setOneStep(false);
    setTwoStepLite(false);
  }
  const twoStepLite = () => {
    setTwoStepLite(true);
    setTwoStep(false)
    setOneStep(false);
  }
  return (
    <div>
      {user ? <NavbarWhenUserLogin /> : <Navbar/>}
      {/* 1st Section */}
      <section className='container main-section'>
        <div className='ai-inovation'>
          <p>New: Our AI Integration Just Landed</p>
        </div>
        <div>
          <p className='rank-text'>The #1 Binary Options Funding Company
          </p>
        </div>
        <h1 className='main-text'>Operate with our capital</h1>
        <p className='sub-text'>Trade up to $100,000 and receive 90% of your profits. We cover the losses.</p>

        <div className='btns'>
          <button className="start-btn" type="submit">Start Now</button>
          <button className="demo-btn" type="submit">More Info</button>
        </div>
        <div className='social-icons'>
          <FaInstagram className='icon' />
          <FaXTwitter className='icon' />
          <FaTelegramPlane className='icon' />
          <FaDiscord className='icon' />
        </div>
        <div className='candles-section'>
          <img src={candles} className='candles-box-1' />
          <img src={candles} className='candles-box-2' />
        </div>
      </section>
      {/* 1st section End */}
      {/* 2nd Section */}
      <section className=''>
      <Slider {...settings}>
  <div className='d-flex justify-content-center'>
    <div className="card" style={{ width: '18rem' }}>
      <CiGlobe className='card-icon' />
      <div className="card-body">
        <h5 className="card-title">Phase</h5>
        <p className="card-text">For any account size</p>
      </div>
    </div>
  </div>
  <div className='d-flex justify-content-center'>
    <div className="card" style={{ width: '18rem' }}>
      <TbCash className='card-icon' />
      <div className="card-body">
        <h5 className="card-title">$321,000 USD</h5>
        <p className="card-text">Capital paid to traders</p>
      </div>
    </div>
  </div>
  <div className='d-flex justify-content-center'>
    <div className="card" style={{ width: '18rem' }}>
      <TbMoodDollar className='card-icon' />
      <div className="card-body">
        <h5 className="card-title">$100k</h5>
        <p className="card-text">Accounts from 1.5k to 100k</p>
      </div>
    </div>
  </div>
  <div className='d-flex justify-content-center'>
    <div className="card" style={{ width: '18rem' }}>
      <div>
        <TbHours24 className='card-icon' />
      </div>
      <div className="card-body">
        <h5 className="card-title">24/7</h5>
        <p className="card-text">Trade every day of the year. OTC allowed</p>
      </div>
    </div>
  </div>
  <div className='d-flex justify-content-center'>
    <div className="card" style={{ width: '18rem' }}>
      <IoIosPeople className='card-icon' />
      <div className="card-body">
        <h5 className="card-title">90%</h5>
        <p className="card-text">of the profits generated for you</p>
      </div>
    </div>
  </div>
</Slider>

      </section>
      {/* 2nd section end */}
      {/* 3rd section */}
      <section className='py-5'>
        <div className='build-scale'>
          <div className="row p-md-5 py-4 px-2">
            <div className="col-lg-8">
              <p className='scale-text'>Scale</p>
              <h1 className='title'>You are a Trader of<span> Binary Options</span></h1>
              <p className='sub-title'>We support you on all platforms: QUOTEX, BINOMO, IQOPTION…</p>
              <p className='desc-text'>At BinaryFunded we look for talented traders, and that is why our funding program is based on a single-phase examination.

After completing the exam you receive an account (on your preferred platform) with a balance of up to $100,000.</p>
            </div>
            <div className="col-lg-4 scale-candles">
              <img src={candle2} className='scale-candle-img-1' alt='' />
              <img src={candle1} className='scale-candle-img-2' alt='' />
              <img src={candle4} className='scale-candle-img-3' alt='' />
              <img src={candle3} className='scale-candle-img-4' alt='' />
            </div>
          </div>
        </div>
      </section>
      {/* 3rd section end */}
      {/* 4th section */}
      <section>
        <div className='container'>
          <p className='text-center text'>This is how it works</p>
          <h1 className='text-white text-center fw-bold'>How to anchor yourself in  <span className='binaryadv-text'>Binary Options</span> </h1>
          <div className="row py-5 selection-row justify-content-center">
            {/* Choose column */}
            <div className="col-lg-4 text-center ">
              <div className="row choose-col">
                <div className="col-lg-8">
                  <div className='num-img' >
                    <h2 className='number'>01.</h2>
                    <img src={chooseIcon} alt='Choose Icon' />
                  </div>
                  <h2 className='text-white choose-text'>Choose</h2>
                  <p className='selection-text'>Choose the size of the funded account you want to obtain</p>
                </div>
                <div className="col-lg-4">
                  <img src={image} className='gradient-img' alt='' />
                </div>
              </div>
            </div>
            {/* Trade column */}
            <div className="col-lg-4 text-center">
              <div className="row trade-col">
                <div className="col-lg-8">
                  <div className='num-img' >
                    <h2 className='number'>02.</h2>
                    <img src={tradeIcon} alt='Trade Icon' />
                  </div>
                  <h2 className='text-white trade-text'>Trade</h2>
                  <p className='selection-text'>Successfully complete the exam without breaking any of the rules</p>
                </div>
                <div className="col-lg-4">
                  <img src={image} className='gradient-img' alt='' />
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-center funded-col">
              <div className='num-img'>
                <h2 className='number'>03.</h2>
                <img src={coinsIcon} alt='Coins Icon' />
              </div>
              <h2 className='text-white getfunded-text'>Choose Funds</h2>
              <p className='selection-text'>Congratulations! You now have access to an account funded with the chosen capital.</p>
            </div>
          </div>
        </div>
      </section>
      {/* 4th sectin end */}
      {/* 5th section */}
      <section>
        <div className="container py-5">
          <h1 className='text-white fw-bold'>Choose the balance of your <br /><span className='yourTerm-text'>Funded Account.</span> </h1>
          <p className='text-white'>After making the payment you will be provided with an account to take the Exam. Once completed you will have access to an account funded with the chosen capital!</p>
          <div className='d-flex justify-content-center gap-md-3 gap-2 my-5'>
            <button type='button' className={`onestep-package-btns ${onestep ? `activeClass` : ``}`} onClick={oneStep}><span className='badge popular-badge'>popular</span>One-Step</button>
            <button type='button' className={`twostep-package-btns ${twostep ? `activeClass` : ``}`} onClick={twoStep}>Two-Step</button>
            <button type='button' className={`twostepLite-package-btns ${twosteplite ? `activeClass` : ``}`} onClick={twoStepLite}><span className='badge new-badge'>New</span>Two-Step<span className='LITE-badge'>LITE</span></button>
          </div>
          {onestep &&
            <div className="row">
              <div className="col-lg-2 d-lg-flex d-none flex-column gap-3 trading-challenge">
                <div className='row align-items-center py-1' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={tradingCourse}>
                  <div className="col-lg-2">
                    <CiVideoOn className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>Trading Course</h6>
                    <p className='mb-0'>12 videos, 12h+</p>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
                <div className='row align-items-center pt-4' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={profitTarget}>
                  <div className="col-lg-2">
                    <TbTargetArrow className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>Profit Target</h6>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
                <div className='row align-items-center pt-2' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={maxDrawDown}>
                  <div className="col-lg-2">
                    <FaArrowTrendDown className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>Max Drawdown<br /><span>Trailing</span></h6>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
                <div className='row align-items-center py-1' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={dailyDrawDown}>
                  <div className="col-lg-2">
                    <HiMiniArrowsUpDown className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>Daily Drawdown</h6>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
                <div className='row align-items-center py-1' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={payouts}>
                  <div className="col-lg-2">
                    <GiCash className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>Payouts</h6>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
                <div className='row align-items-center pt-2 mt-1' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={profitSplit}>
                  <div className="col-lg-2">
                    <AiOutlineSplitCells className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>Profit Split</h6>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
                <div className='row align-items-center pt-3 mt-1' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={bonus}>
                  <div className="col-lg-2">
                    <TbReload className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>Bonus</h6>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
                <div className='row align-items-center pt-2 mt-1' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={timeLimit}>
                  <div className="col-lg-2">
                    <FaBusinessTime className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>Time Limit</h6>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
                <div className='row align-items-center pt-4 mt-2' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={oneTimeFee}>
                  <div className="col-lg-2">
                    <IoPricetagOutline className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>One-Time Fee</h6>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
              </div>
              <div className="col-lg-10">
                <div className='d-none d-lg-block'>
                  <OneStep />
                </div>
                <div className='d-lg-none d-block'>
                  <OneStepSlider />
                </div>
              </div>
            </div>
          }
          {/* Two Step */}
          {twostep &&
            <div className="row">
              <div className="col-lg-2 d-lg-flex d-none flex-column gap-2 trading-challenge">
                <div className='row align-items-center py-1' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={tradingCourse}>
                  <div className="col-lg-2">
                    <CiVideoOn className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>Trading Course</h6>
                    <p className='mb-0'>12 videos, 12h+</p>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
                <div className='row align-items-center pt-4' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={Phase1}>
                  <div className="col-lg-2">
                    <TbTargetArrow className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>Profit Target</h6>
                    <p className='text-secondary mb-0'>Phase 1</p>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
                <div className='row align-items-center pt-1' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={Phase2}>
                  <div className="col-lg-2">
                    <TbTargetArrow className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>Profit Target</h6>
                    <p className='text-secondary mb-0'>Phase 2</p>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
                <div className='row align-items-center pt-2' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={maxDrawDown}>
                  <div className="col-lg-2">
                    <FaArrowTrendDown className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>Max Drawdown<br /><span>Trailing</span></h6>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
                <div className='row align-items-center pt-2' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={dailyDrawDown}>
                  <div className="col-lg-2">
                    <HiMiniArrowsUpDown className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>Daily Drawdown</h6>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
                <div className='row align-items-center pt-3' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={payouts}>
                  <div className="col-lg-2">
                    <GiCash className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>Payouts</h6>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
                <div className='row align-items-center pt-4' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={profitSplit}>
                  <div className="col-lg-2">
                    <AiOutlineSplitCells className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>Profit Split</h6>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
                <div className='row align-items-center pt-4' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={bonus}>
                  <div className="col-lg-2">
                    <TbReload className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>Bonus</h6>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
                <div className='row align-items-center pt-4' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={timeLimit}>
                  <div className="col-lg-2">
                    <FaBusinessTime className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>Time Limit</h6>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
                <div className='row align-items-center pt-4 mt-3' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={oneTimeFee}>
                  <div className="col-lg-2">
                    <IoPricetagOutline className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>One-Time Fee</h6>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
              </div>
              <div className="col-lg-10">
                <div className='d-lg-block d-none'>
                  <TwoStep />
                </div>
                <div className='d-lg-none d-block'>
                  <TwoStepSlider />
                </div>
              </div>
            </div>
          }
          {/* Two Step Lite */}
          {twosteplite &&
            <div className="row">
              <div className="col-lg-2 d-lg-flex d-none flex-column gap-2 trading-challenge">
                <div className='row align-items-center py-1' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={tradingCourse}>
                  <div className="col-lg-2">
                    <CiVideoOn className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>Trading Course</h6>
                    <p className='mb-0'>12 videos, 12h+</p>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
                <div className='row align-items-center pt-4' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={Phase1}>
                  <div className="col-lg-2">
                    <TbTargetArrow className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>Profit Target</h6>
                    <p className='text-secondary mb-0'>Phase 1</p>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
                <div className='row align-items-center pt-1' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={Phase2}>
                  <div className="col-lg-2">
                    <TbTargetArrow className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>Profit Target</h6>
                    <p className='text-secondary mb-0'>Phase 2</p>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
                <div className='row align-items-center pt-2' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={maxDrawDown}>
                  <div className="col-lg-2">
                    <FaArrowTrendDown className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>Max Drawdown<br /><span>Trailing</span></h6>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
                <div className='row align-items-center pt-2' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={dailyDrawDown}>
                  <div className="col-lg-2">
                    <HiMiniArrowsUpDown className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>Daily Drawdown</h6>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
                <div className='row align-items-center pt-3' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={payouts}>
                  <div className="col-lg-2">
                    <GiCash className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>Payouts</h6>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
                <div className='row align-items-center pt-4' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={profitSplit}>
                  <div className="col-lg-2">
                    <AiOutlineSplitCells className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>Profit Split</h6>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
                <div className='row align-items-center pt-4' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={bonus}>
                  <div className="col-lg-2">
                    <TbReload className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>Bonus</h6>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
                <div className='row align-items-center pt-4' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={timeLimit}>
                  <div className="col-lg-2">
                    <FaBusinessTime className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>Time Limit</h6>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
                <div className='row align-items-center pt-4 mt-4' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={maxWithdraw}>
                  <div className="col-lg-2">
                    <IoWalletOutline className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>Max Withdrawal</h6>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
                <div className='row align-items-center pt-4 mt-3' data-toggle="tooltip" style={{ cursor: "pointer" }} data-placement="bottom" title={oneTimeFee}>
                  <div className="col-lg-2">
                    <IoPricetagOutline className='text-white' />
                  </div>
                  <div className="col-lg-8 pe-0 text-white">
                    <h6 className='mb-0'>One-Time Fee</h6>
                  </div>
                  <div className="col-lg-2">
                    <IoIosInformationCircleOutline className='text-white' />
                  </div>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="row">
                  <div className="col-lg-12">
                    <div className='d-none d-lg-block'>
                      <TwoStepLite />
                    </div>
                    <div className='d-block d-lg-none'>
                      <TwoStepLiteSlider />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          }
        </div>
      </section>
      {/* 6th section */}
      <section className='py-5'>
        <div className='container'>
          <div className="row">
            <div className="col-lg-7">
              <h1 className='payout-text'>Fast & Reliable <span>Payouts</span></h1>
              <p className='text-white text-center text-md-start'>Enjoy hassle-free payouts as a reward for your simulated trading. Because you shouldn’t wait for your money.</p>
            </div>
            <div className="col-lg-5 d-flex justify-content-md-end justify-content-center align-items-end gap-2">
              <div className='border-end'>
                <div className='time-payout'>
                  <IoMdTime className='time-icon' />
                  <h6 className='mb-0'>3h</h6>
                </div>
                <p className='text-white'>Avg Payout Time</p>
              </div>
              <div>
                <div className='customer-support'>
                  <TiSupport className='support-icon' />
                  <h6 className='mb-0'>24/5</h6>
                </div>
                <p className='text-white'>Customer Support</p>
              </div>
            </div>
          </div>
          {/* Payment cards */}
          <div className="row py-3">
            <div className="col-lg-4 col-sm-6 d-flex justify-content-center justify-content-md-start">
              {/* Bank Transfer Card */}
              <div className="card payout-card-width">
                <div className="card-body">
                  <h5 className="card-title bankcard-title mb-0">Bank Transfer</h5>
                  <p className="card-text">Money in the bank within hours of your request.</p>
                  <div className='payoutcards-img'>
                    <img src={bankTransfer} />
                  </div>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 d-flex justify-content-center justify-content-md-start">
              {/* Crypto payout Card */}
              <div className="card payout-card-width" >
                <div className="card-body">
                  <h5 className="card-title cryptocard-title mb-0">Crypto Payouts</h5>
                  <p className="card-text mb-0">We support payouts via USDC and other stablecoins.</p>
                  <div className='payoutcards-img'>
                    <img src={crypto} />
                  </div>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 d-flex justify-content-center justify-content-lg-start">
              {/* Debit Payout card */}
              <div className="card payout-card-width">
                <div className="card-body">
                  <h5 className="card-title visacard-title mb-0">Debit Card</h5>
                  <p className="card-text">Use your profits directly with our branded VISA cards.</p>
                  <div className='payoutcards-img'>
                    <img src={debitCard} />
                  </div>

                </div>
              </div>
            </div>
          </div>
          {/* Price ranger */}

          <div className="row py-5">
            <div className="col-lg-6">
              <h1 className='fw-bold how-much-text text-center text-md-start'>How Much Can You Make?</h1>
              <p className='text-white text-center text-md-start'>Make your living by trading full-time. Without risking your own capital. Based on our data, an average full-time trader has a monthly profit rate of 4.3%.</p>
              {/* Video Section */}
              <a href='https://www.youtube.com/watch?v=9pOXYTOUeqg' className='text-decoration-none' target='_blank'>
                <div className="row px-2 py-3 video-row">
                  <div className="col-sm-5 position-relative">
                    <img src={videoThumbnail} className='w-100' alt='Video thumbnail' style={{ borderRadius: '10px' }} />
                    <button className='interview-btn mb-0'><FaPlay className="play-icon" />   Interview</button>
                  </div>
                  <div className="col-sm-7">
                    <h5 className='text-white fw-bold'>How a 20 yo Student Makes Money as a Day Trader </h5>
                    <p className='text-white'>Watch our interview with Ayush, an emerging day trader from India</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              {/* write profit ranger code here */}
              <div className='pricerange-bg'>
                <PriceRanger />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* last Section */}
      <section className='container'>
        <div className='text-sm-center pb-md-5 pb-3'>
          <p className='text'>Any Questions?</p>
          <h1 className='text-white fw-bold display-5'>Frequently <span className='asked-text'>Asked</span></h1>
          <p className='text-white'>Read some key information about binary funded.</p>
        </div>

        <div className='d-flex justify-content-center gap-md-5 gap-sm-3 gap-2'>
          <button className={`faq-buttons ${GeneralFaq ? 'active' : ''}`} onClick={generalFaq} >General</button>
          <button className={`faq-buttons ${RuleFaq ? 'active' : ''}`} onClick={rulesFAQ}>Rules</button>
          <button className={`faq-buttons ${ChallengeFaq ? 'active' : ''}`} onClick={challengesFaq}>Challenges</button>
        </div>
        {/* General FAQs */}
        {GeneralFaq &&
          <div class="accordion  py-5 general-FAQ" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  Who is eligible to signup for binaryfunded accounts?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  To sign up for a binaryfunded account, you must meet the following criteria:
                  <ul>
                    <li>Reside in a country where we accept traders. Please note that individuals from the following countries are not accepted: Cuba, Iran, Lebanon, Syria, North Korea, Libya, Sudan, Somalia, Vietnam, Russia, Pakistan, and Yemen</li>
                    <li>Be of legal age to trade</li>
                    <li>Be able to verify your identity with KYC (Know Your Customer) documents</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  How do i get started with binaryfunded?
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  To get started with binaryfunded and make the most of the opportunities available, follow these steps:
                  <ul>
                    <li>Create an Account: Visit the main binaryfunded website and sign up for an account.</li>
                    <li>Select Your Account Size: Go to the binaryfunded challenge dashboard and choose the account size you want to purchase.</li>
                    <li>Make Payment: Proceed with the payment by clicking the buy button and selecting your preferred payment method.</li>
                    <li>Receive Account Credentials: Upon completion of the transaction, you will receive your account credentials.</li>
                    <li> Start Trading: With your account set up, you are now ready to begin trading as a binaryfunded trader at your convenience.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  What is the trading environment like for binaryfunded, and what are the phases involved?
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  All phases of trading with binaryfunded occur within a simulated trading environment using demo accounts. Even in Phase 3 Simulated Prop Trading, accounts may appear as "Real" under our brokers but remain simulated demo accounts.
                  <br />
                  <br />
                  It's important to note that the information provided on the website is for general informational and instructive purposes only and does not constitute investment advice. Additionally, leveraged products such as CFDs and FX trading carry a high risk of loss, and users should be aware of local laws and regulations regarding trading activities
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                  What payment methods does binaryfunded accept, and what should i be aware of when making cryptocurrency payments?
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  binaryfunded accepts payments via credit card and cryptocurrency. Please refer to the image below for the types of cards and crypto assets accepted.
                  <br />
                  <br />
                  When making cryptocurrency payments, ensure that you are sending the asset or coin to the correct network to avoid any issues with payment receipt and the delivery of your credentials.
                </div>
              </div>
            </div>
          </div>
        }
        {/* Rule Faq */}
        {RuleFaq &&
          <div class="accordion py-5 rule-FAQ" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  What are the prohibited simulated trading practices at binaryfunded?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  At binaryfunded, traders have flexibility in choosing their simulated trading styles and strategies, but certain practices are prohibited to maintain fairness. Here's a comprehensive list of prohibited simulated trading practices:
                  <ul>
                    <li>Copy Trading: This involves mimicking trades of other traders across multiple accounts using market-purchased Expert Advisors (EAs).</li>
                    <li>Simulated Reverse Trading/Group Simulated Hedging: Engaging in simulated reverse trades across multiple accounts or coordinating opposing positions across prop firms or simulated prop firms to exploit rules is forbidden.</li>
                    <li>Demo Account Management Services: Purchasing or providing live account or demo account management services, or sharing account information, is strictly prohibited.</li>
                    <li>Simulated HFT (High-Frequency Trading): Engaging in simulated high-frequency trading methods is not allowed.</li>
                  </ul>
                  Violating any of these rules will result in immediate failure and closure of the demo account. These restrictions are in place to ensure a fair and transparent simulated trading environment.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  What actions are prohibited when engaging in simulated trading at binaryfunded?
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  It's essential to adhere to certain rules and guidelines when participating in simulated trading at binaryfunded. Here's a list of prohibited actions:
                  <ul>
                    <li>Using simulated trading strategies that exploit errors in the services, such as price display errors or delayed updates.</li>
                    <li>Executing simulated trades using an external or slow data feed.</li>
                    <li>Engaging in simulated trades with the intent to manipulate trading, including entering into simultaneous opposite positions.</li>
                    <li>Conducting simulated trades that contradict the terms and conditions of the provider and the trading platform.</li>
                    <li>Using software, artificial intelligence, ultra-high-speed techniques, or mass data entry methods that may manipulate or abuse the system.Using software, artificial intelligence, ultra-high-speed techniques, or mass data entry methods that may manipulate or abuse the system.</li>
                    <li>Performing simulated trades in a manner that contradicts typical trading practices or raises concerns about potential harm to the provider.</li>
                  </ul>
                  Violation of these prohibitions may result in consequences such as termination of trading privileges or closure of accounts. These rules are in place to maintain a fair and transparent trading environment.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  What should traders know about holding simulated trades overnight at binaryfunded?
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  At binaryfunded, traders have the flexibility to hold simulated trades overnight across all simulated account types and phases. Here's what you need to know:
                  <ul>
                    <li> Overnight Simulated Trade Holding: Traders can keep their simulated positions open beyond the daily trading session to capitalize on potential price movements outside regular trading hours.</li>
                    <li>Swap Fees: Holding simulated trades overnight may incur swap fees, also known as rollover or overnight financing charges. These fees reflect the cost of maintaining a position in the market and are primarily influenced by interest rate differentials between currencies.</li>
                    <li>3-Day Swap Fee: Every Wednesday, simulated positions held overnight will incur a 3-day swap fee instead of the usual overnight rollover, resulting in higher fees. Traders are advised to review their open positions and take necessary actions ahead of this weekly occurrence.</li>
                  </ul>
                  Swap fees are charged to reflect interest costs incurred by brokers for maintaining open positions. They are calculated based on position size, prevailing interest rates, and currency pairs involved. It's important for traders to understand the swap fee structure applicable to their demo accounts before deciding to hold simulated trades overnight.
                  <br />
                  <br />
                  At binaryfunded, we prioritize transparency regarding swap fees and encourage traders to assess their strategies accordingly. For further questions or information on swap fees or swap-free demo accounts, please contact our support team for assistance.
                </div>
              </div>
            </div>
          </div>
        }
        {/* Challenges FAQ */}
        {ChallengeFaq &&
          <div class="accordion py-5 challenge-FAQ" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Why are daily drawdown and maximum drawdown rule important at binaryfunded, and what are the consequences of violating these rules?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  At binaryfunded, we prioritize risk management and the protection of demo account capital balances. To achieve this, we enforce daily drawdown and maximum drawdown rules. Here's what you need to know:
                  <ul>
                    <li>Daily Simulated Drawdown Rule: This rule sets the maximum allowable simulated loss a trader can incur in a single trading day. Exceeding this limit can lead to demo account termination. By enforcing this rule, we aim to prevent excessive losses and protect traders from significant drawdowns.</li>
                    <li>Maximum Simulated Drawdown Rule: This rule defines the threshold for the maximum cumulative simulated loss a trader can experience throughout the evaluation challenge. If this limit is surpassed, the demo account will be terminated, resulting in a failure of the challenge.</li>
                  </ul>
                  Adhering to these drawdown rules is crucial for responsible risk management and sustainable trading. They create a fair and secure simulated trading environment where traders can focus on growth while avoiding significant drawdowns that could undermine their performance.
                  <br />
                  <br />
                  It's essential for traders to monitor their positions, implement effective risk management techniques, and adhere to drawdown rules to maintain a successful trading journey. We provide guidance and support to help traders navigate these rules and develop risk-conscious trading strategies.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  How does binaryfunded evaluation process work, and what is the benefit of offering unlimited time for evaluation trading accounts?
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  At binaryfunded, we provide traders with evaluation simulated trading demo accounts, offering unlimited time to complete the evaluation process. Here's how it works:
                  <ul>
                    <li>Evaluation Trading Accounts: These demo accounts allow traders to showcase their trading abilities and potentially qualify for a prop trading demo account, where traders may receive payouts based on net gains from simulated trading.</li>
                    <li>Unlimited Time: Unlike other firms with strict time limitations, we offer traders flexibility by not imposing a set time limit for completing the evaluation. Traders can trade, analyze performance, and meet evaluation criteria at their own pace.</li>
                    <li>Evaluation Criteria: While there's no fixed time limit, traders must meet specific criteria such as profit targets, risk management skills, and consistent performance to qualify for a prop trading demo account. Unlimited time allows traders to focus on refining strategies and improving performance without feeling rushed.</li>
                  </ul>
                  By providing unlimited time for evaluation trading accounts, we aim to create a supportive environment where traders can develop and refine their trading abilities at their own pace
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Why is it prohibited to change passwords for demo accounts during challenges or simulated prop trading at binaryfunded?
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  At binaryfunded, maintaining the integrity and fairness of our challenges is paramount. Therefore, it's strictly prohibited to change master or investor passwords of demo accounts participating in challenges or simulated prop trading. Here's why:
                  <ul>
                    <li>Ensuring Integrity: Keeping original passwords allows for proper monitoring and evaluation of trading activities, ensuring transparency and consistency throughout the process.</li>
                    <li>Violation of Rules: Altering passwords undermines the integrity of the challenge and is considered a violation of the rules, resulting in automatic failure and disqualification from trading.</li>
                  </ul>
                  To maintain eligibility and increase your chances of success, it's essential to keep master and investor passwords unchanged throughout the entire challenge duration.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                  What is the 'Traders Daily Stop Loss rule at binaryfunded', and how is it calculated?
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  The 'Trader's Daily Stop-Loss' rule, also known as the daily stop-loss, is an important rule implemented at binaryfunded to protect traders' simulated equity. Here's an explanation:
                  <ul>
                    <li>Definition: This rule sets a predetermined limit on the daily simulated equity decrease that traders can incur at any moment of the day (EE(S)T – Eastern European Summer Time).</li>
                    <li>Calculation: The daily simulated equity decrease is calculated using the formula: Current daily loss = demo account simulated balance at the start of the day - current simulated equity.</li>
                  </ul>
                  Adhering to this rule helps traders manage risk effectively and prevent excessive losses. It ensures that traders maintain control over their trading activities and avoid significant drawdowns that could jeopardize their trading performance.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                  What is the simulated gain target at binaryfunded, and how does it affect trading phases and strategies?
                </button>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  At binaryfunded, the simulated gain target plays a crucial role in trading phases and strategies. Here's what you need to know:
                  <ul>
                    <li>Definition: The simulated gain target represents the specified percentage of the initial demo account balance that traders aim to achieve through closed positions. This target is typically set between 5-10% of the initial balance.</li>
                    <li>Trading Period: Traders have unlimited time to meet the simulated gain target, allowing flexibility in trading strategies and approaches.</li>
                    <li>Example: For instance, in a Challenge with $10,000 simulated capital and a 5% simulated gain target, traders aim to reach $500 in simulated gains. After completing the Verification period (Phase 2), the minimum simulated gain target is removed.</li>
                    <li>Phase Advancement: Meeting the simulated gain target is essential for advancing through trading phases or earning commissions. However, once the target is achieved, traders can continue trading in Phase 3 without restrictions on simulated gains, as long as they adhere to other rules and objectives.</li>
                  </ul>
                  Understanding and achieving the simulated gain target is vital for traders to progress through phases and demonstrate trading proficiency at binaryfunded.
                </div>
              </div>
            </div>
          </div>
        }
      </section>
      <Footer />
    </div>
  )
}

export default Home
