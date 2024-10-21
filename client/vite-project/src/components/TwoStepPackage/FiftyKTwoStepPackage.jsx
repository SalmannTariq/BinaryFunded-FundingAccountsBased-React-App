import React, { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiLock } from "react-icons/ci";
import { FiMinus, FiPlus } from 'react-icons/fi'
import { tradingCourse, profitTarget, profitSplit, maxDrawDown, dailyDrawDown, payouts, refund, Phase1,Phase2} from '../Home/ToolTipTexts';
const FiftyKTwoStepPackage = () => {
    const [user,setUser] = useState(null);
    const navigate = useNavigate();
    const currentDate = new Date();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentMonth = currentDate.getMonth();
    const currentMonthName = monthNames[currentMonth];

    const [percentage50000, setPercentage50000] = useState(8);
    const [phaseTwo50000, setPhaseTwo50000] = useState(5);
    const [profitPercentage50000, setProfitPercentage50000] = useState(80);
    const [valueOne50000, setValueOne50000] = useState(224);
    const[lineThroughValue50000,setLineThroughValue50000] = useState(263)

    useEffect(() => {
        updateValue();
        onAuthStateChanged(auth,(user)=>{
            if(user)
                {
                    setUser(true);
                }
                else{
                    setUser(false);
                }
        })
    }, [percentage50000, profitPercentage50000]);

    const subtractPercentage = (type) => {
        if (type === '$50,000') {
            setPercentage50000(prevPercentage => prevPercentage !== 8 ? prevPercentage - 2 : prevPercentage);
            setPhaseTwo50000(prevPercentage => prevPercentage !== 5 ? prevPercentage - 2 : prevPercentage);
        }
    };

    const addPercentage = (type) => {
        if (type === '$50,000') {
            setPercentage50000(prevPercentage => prevPercentage !== 10 ? prevPercentage + 2 : prevPercentage);
            setPhaseTwo50000(prevPercentage => prevPercentage !== 7 ? prevPercentage + 2 : prevPercentage);
        }
    }

    const subtractProfitPercentage = (type) => {
        if (type === '$50,000') {
            setProfitPercentage50000(prevProfitPercentage => prevProfitPercentage > 70 ? prevProfitPercentage - 10 : prevProfitPercentage);
        }
    };

    const addProfitPercentage = (type) => {
        if (type === '$50,000') {
            setProfitPercentage50000(prevProfitPercentage => prevProfitPercentage < 90 ? prevProfitPercentage + 10 : prevProfitPercentage);
        }
    };


    const updateValue = () => {
        if (percentage50000 === 8 && phaseTwo50000 === 5 && profitPercentage50000 === 70) {
            setValueOne50000(186);
            setLineThroughValue50000(248);

        } else if (percentage50000 === 8 && phaseTwo50000 === 5 && profitPercentage50000 === 80) {
            setValueOne50000(197);
            setLineThroughValue50000(263);

        } else if (percentage50000 === 8 && phaseTwo50000 === 5 && profitPercentage50000 === 90) {
            setValueOne50000(231);
            setLineThroughValue50000(308);

        } else if (percentage50000 === 10 && phaseTwo50000 === 7 && profitPercentage50000 === 70) {
            setValueOne50000(164);
            setLineThroughValue50000(218);

        } else if (percentage50000 === 10 && phaseTwo50000 === 7 && profitPercentage50000 === 80) {
            setValueOne50000(175);
            setLineThroughValue50000(233);

        } else if (percentage50000 === 10 && phaseTwo50000 === 7 && profitPercentage50000 === 90) {
            setValueOne50000(209);
            setLineThroughValue50000(278);
        }
    }
    const handleStartNow = ()=>{
        if(user)
            {
                navigate("/checkout");
            }
            else{
                navigate("/Login")
            }
    }
  return (
    <div>
       <div className="oneStep p-3">
                <h2 className='text-white text-start mainValue-text '>$50,000</h2>
                    <p className='text-white text-start pb-3'>Virtual capital <IoIosInformationCircleOutline /></p>
                    <p className='text-secondary d-lg-none' data-toggle="tooltip" style={{cursor:"pointer"}} data-placement="bottom" title={tradingCourse}>Trading Course (12 videos, 12h+) <IoIosInformationCircleOutline className='text-white' /></p>
                    <button className='access-btn'> <CiLock /> Full access</button>
                    <div className='row pb-3 pt-5'   >
                        <div className="col-3 p-0">
                            <button className="subtract-btn" onClick={()=>subtractPercentage('$50,000')}><FiMinus /></button>
                        </div>
                        <div className="col-6 p-0">
                        <p className='text-secondary d-lg-none mb-0' data-toggle="tooltip" style={{cursor:"pointer"}} data-placement="bottom" title={Phase1}>Profit Target: Phase 1 <IoIosInformationCircleOutline className='text-white' /></p>
                            <p className='text-white'>{percentage50000} %</p>
                        </div>
                        <div className="col-3 p-0">
                            <button className="add-btn" onClick={()=>addPercentage('$50,000')}><FiPlus /></button>
                        </div>
                    </div>
                    <div className='row pb-3'   >
                        <div className="col-3 p-0">
                            <button className="subtract-btn disabled"><FiMinus /></button>
                        </div>
                        <div className="col-6 p-0">
                        <p className='text-secondary d-lg-none mb-0' data-toggle="tooltip" style={{cursor:"pointer"}} data-placement="bottom" title={Phase2}>Profit Target: Phase 2 <IoIosInformationCircleOutline className='text-white' /></p>
                            <p className='text-white'>{phaseTwo50000} %</p>
                        </div>
                        <div className="col-3 p-0">
                            <button className="add-btn disabled" ><FiPlus /></button>
                        </div>
                    </div>
                    <div className='row data pb-3'   >
                        <div className="col-3 p-0">
                            <button className='subtract-btn disabled'><FiMinus /></button>
                        </div>
                        <div className="col-6 p-0">
                        <p className='mb-0 text-secondary d-lg-none' data-toggle="tooltip" style={{cursor:"pointer"}} data-placement="bottom" title={maxDrawDown}>Max Drawdown (Traling) <IoIosInformationCircleOutline className='text-white' /></p>
                            <p className='text-white'>6 %</p>
                        </div>
                        <div className="col-3 p-0">
                            <button className='add-btn disabled'><FiPlus /></button>
                        </div>
                    </div>
                    <div className='row data pb-3'   >
                        <div className="col-3 p-0">
                            <button className='subtract-btn disabled'><FiMinus /></button>
                        </div>
                        <div className="col-6 p-0">
                        <p className='mb-0 text-secondary d-lg-none' data-toggle="tooltip" style={{cursor:"pointer"}} data-placement="bottom" title={dailyDrawDown}>Daily Drawdown <IoIosInformationCircleOutline className='text-white' /></p>
                            <p className='text-white'>3 %</p>
                        </div>
                        <div className="col-3 p-0">
                            <button className='add-btn disabled'><FiPlus /></button>
                        </div>
                    </div>
                    <div className='row data pb-3'   >
                        <div className="col-3 p-0">
                            <button className='subtract-btn disabled'><FiMinus /></button>
                        </div>
                        <div className="col-6 p-0">
                        <p className='mb-0 text-secondary d-lg-none' data-toggle="tooltip" style={{cursor:"pointer"}} data-placement="bottom" title={payouts}>Payouts <IoIosInformationCircleOutline className='text-white' /></p>
                            <p className='text-white'>Bi Weekly</p>
                        </div>
                        <div className="col-3 p-0">
                            <button className='add-btn disabled'><FiPlus /></button>
                        </div>
                    </div>
                    <div className='row data pb-3'   >
                        <div className="col-3 p-0">
                            <button className='subtract-btn'onClick={()=>subtractProfitPercentage('$50,000')}><FiMinus /></button>
                        </div>
                        <div className="col-6 p-0">
                        <p className='mb-0 text-secondary d-lg-none' data-toggle="tooltip" style={{cursor:"pointer"}} data-placement="bottom" title={profitSplit}>Profit Split <IoIosInformationCircleOutline className='text-white' /></p>
                            <p className='text-white' >{profitPercentage50000} %</p>
                        </div>
                        <div className="col-3 p-0">
                            <button className='add-btn'onClick={()=>addProfitPercentage('$50,000')}><FiPlus /></button>
                        </div>
                    </div>
                    <div className='row pb-3'   >
                        <div className="col-3 p-0">
                            <button className='subtract-btn disabled'><FiMinus /></button>
                        </div>
                        <div className="col-6 p-0">
                        <p className='mb-0 text-secondary d-lg-none' data-toggle="tooltip" style={{cursor:"pointer"}} data-placement="bottom" title={refund}>Refund <IoIosInformationCircleOutline className='text-white' /></p>
                            <p className='text-white'>100 %</p>
                        </div>
                        <div className="col-3 p-0">
                            <button className='add-btn disabled'><FiPlus /></button>
                        </div>
                    </div>
                    <div className='row pb-3'   >
                        <div className="col-3 p-0">
                            <button className='subtract-btn disabled'><FiMinus /></button>
                        </div>
                        <div className="col-6 p-0">
                            <p className='text-white'>Unlimited</p>
                        </div>
                        <div className="col-3 p-0">
                            <button className='add-btn disabled'><FiPlus /></button>
                        </div>
                    </div>
                    <div>
                        <p className='profit-value-text text-start'>${valueOne50000} <span className='text-dark fs-5'><s>${lineThroughValue50000}</s></span></p>
                    </div>
                    <div className='month-name'>
                        {currentMonthName}
                    </div>
                    <div className='mt-3'>
                        <button type='button' className='start-now-btn' onClick={handleStartNow}>Start Now</button>
                    </div>
                </div>
    </div>
  )
}

export default FiftyKTwoStepPackage
