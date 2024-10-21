import React, { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiLock } from "react-icons/ci";
import { FiMinus, FiPlus } from 'react-icons/fi'
import { tradingCourse, profitTarget, profitSplit, maxDrawDown, dailyDrawDown, payouts, refund, Phase1,Phase2} from '../Home/ToolTipTexts';
const LacTwoStepPackage = () => {
    const [user,setUser] = useState(null);
    const navigate = useNavigate();
    const currentDate = new Date();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentMonth = currentDate.getMonth();
    const currentMonthName = monthNames[currentMonth];

    const [percentage100000, setPercentage100000] = useState(8);
    const [phaseTwo100000, setPhaseTwo100000] = useState(5);
    const [profitPercentage100000, setProfitPercentage100000] = useState(80);
    const [valueOne100000, setValueOne100000] = useState(397);
    const[lineThroughValue100000,setLineThroughValue100000] = useState(466)

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
    }, [percentage100000, profitPercentage100000]);

    const subtractPercentage = (type) => {
        if (type === '$100,000') {
            setPercentage100000(prevPercentage => prevPercentage !== 8 ? prevPercentage - 2 : prevPercentage);
                setPhaseTwo100000(prevPercentage => prevPercentage !== 5 ? prevPercentage - 2 : prevPercentage);
        }
    };

    const addPercentage = (type) => {
        if (type === '$100,000') {
            setPercentage100000(prevPercentage => prevPercentage !== 10 ? prevPercentage + 2 : prevPercentage);
            setPhaseTwo100000(prevPercentage => prevPercentage !== 7 ? prevPercentage + 2 : prevPercentage);
        }
    }

    const subtractProfitPercentage = (type) => {
        if (type === '$100,000') {
            setProfitPercentage100000(prevProfitPercentage => prevProfitPercentage > 70 ? prevProfitPercentage - 10 : prevProfitPercentage);
        }
    };

    const addProfitPercentage = (type) => {
        if (type === '$100,000') {
            setProfitPercentage100000(prevProfitPercentage => prevProfitPercentage < 90 ? prevProfitPercentage + 10 : prevProfitPercentage);
        }
    };


    const updateValue = () => {
        if (percentage100000 === 8 && phaseTwo100000 === 5 && profitPercentage100000 === 70) {
            setValueOne100000(329);
            setLineThroughValue100000(439);

        } else if (percentage100000 === 8 && phaseTwo100000 === 5 && profitPercentage100000 === 80) {
            setValueOne100000(349);
            setLineThroughValue100000(466);

        } else if (percentage100000 === 8 && phaseTwo100000 === 5 && profitPercentage100000 === 90) {
            setValueOne100000(409);
            setLineThroughValue100000(545);

        } else if (percentage100000 === 10 && phaseTwo100000 === 7 && profitPercentage100000 === 70) {
            setValueOne100000(290);
            setLineThroughValue100000(386);

        } else if (percentage100000 === 10 && phaseTwo100000 === 7 && profitPercentage100000 === 80) {
            setValueOne100000(309);
            setLineThroughValue100000(413);

        } else if (percentage100000 === 10 && phaseTwo100000 === 7 && profitPercentage100000 === 90) {
            setValueOne100000(369);
            setLineThroughValue100000(492);
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
       <span class="badge most-popular-2Step position-absolute">Most Popular</span>
                <h2 className='text-white text-start mainValue-text'>$100,000</h2>
                    <p className='text-white text-start pb-3'>Virtual capital <IoIosInformationCircleOutline /></p>
                    <p className='text-secondary d-lg-none' data-toggle="tooltip" style={{cursor:"pointer"}} data-placement="bottom" title={tradingCourse}>Trading Course (12 videos, 12h+) <IoIosInformationCircleOutline className='text-white' /></p>
                    <button className='access-btn'> <CiLock /> Full access</button>
                    <div className='row pb-3 pt-5'   >
                        <div className="col-3 p-0">
                            <button className="subtract-btn" onClick={()=>subtractPercentage('$100,000')}><FiMinus /></button>
                        </div>
                        <div className="col-6 p-0">
                        <p className='text-secondary d-lg-none mb-0' data-toggle="tooltip" style={{cursor:"pointer"}} data-placement="bottom" title={Phase1}>Profit Target: Phase 1 <IoIosInformationCircleOutline className='text-white' /></p>
                            <p className='text-white'>{percentage100000} %</p>
                        </div>
                        <div className="col-3 p-0">
                            <button className="add-btn" onClick={()=>addPercentage('$100,000')}><FiPlus /></button>
                        </div>
                    </div>
                    <div className='row pb-3'   >
                        <div className="col-3 p-0">
                            <button className="subtract-btn disabled"><FiMinus /></button>
                        </div>
                        <div className="col-6 p-0">
                        <p className='text-secondary d-lg-none mb-0' data-toggle="tooltip" style={{cursor:"pointer"}} data-placement="bottom" title={Phase2}>Profit Target: Phase 2 <IoIosInformationCircleOutline className='text-white' /></p>
                            <p className='text-white'>{phaseTwo100000} %</p>
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
                            <button className='subtract-btn'onClick={()=>subtractProfitPercentage('$100,000')}><FiMinus /></button>
                        </div>
                        <div className="col-6 p-0">
                        <p className='mb-0 text-secondary d-lg-none' data-toggle="tooltip" style={{cursor:"pointer"}} data-placement="bottom" title={profitSplit}>Profit Split <IoIosInformationCircleOutline className='text-white' /></p>
                            <p className='text-white' >{profitPercentage100000} %</p>
                        </div>
                        <div className="col-3 p-0">
                            <button className='add-btn'onClick={()=>addProfitPercentage('$100,000')}><FiPlus /></button>
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
                        <p className='profit-value-text text-start'>${valueOne100000} <span className='text-dark fs-5'><s>${lineThroughValue100000}</s></span></p>
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

export default LacTwoStepPackage
