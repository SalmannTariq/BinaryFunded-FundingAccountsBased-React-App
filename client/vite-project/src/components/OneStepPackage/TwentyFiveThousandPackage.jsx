import React, { useState, useEffect } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { CiLock } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { tradingCourse, profitTarget, profitSplit, maxDrawDown, dailyDrawDown, payouts, refund} from '../Home/ToolTipTexts';
const TwentyFiveThousandPackage = () => {
    const [user,setUser] = useState(null)
    const navigate = useNavigate();
    const currentDate = new Date();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentMonth = currentDate.getMonth();
    const currentMonthName = monthNames[currentMonth];

    const [percentage25000, setPercentage25000] = useState(9);
    const [profitPercentage25000, setProfitPercentage25000] = useState(80);
    const [valueOne25000, setValueOne25000] = useState(157);

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
    }, [percentage25000, profitPercentage25000]);

    const subtractPercentage = (type) => {
        if(type === '$25,000'){
            setPercentage25000(prevPercentage => prevPercentage !== 9 ? prevPercentage - 2 : prevPercentage);
        }
    };

    const addPercentage = (type) => {
        if(type === '$25,000'){
            setPercentage25000(prevPercentage => prevPercentage !== 11 ? prevPercentage + 2 : prevPercentage);
        }
    };

    const subtractProfitPercentage = (type) => {
        if(type === '$25,000'){
            setProfitPercentage25000(prevProfitPercentage => prevProfitPercentage > 70 ? prevProfitPercentage - 10 : prevProfitPercentage);
        }
    };

    const addProfitPercentage = (type) => {
        if(type === '$25,000'){
            setProfitPercentage25000(prevProfitPercentage => prevProfitPercentage < 90 ? prevProfitPercentage + 10 : prevProfitPercentage);
        }
    };

    const updateValue = () => {
        if (percentage25000 === 9 && profitPercentage25000 === 70) {
            setValueOne25000(149);

        } else if (percentage25000 === 9 && profitPercentage25000 === 80) {
            setValueOne25000(157);

        } else if (percentage25000 === 9 && profitPercentage25000 === 90) {
            setValueOne25000(180);

        } else if (percentage25000 === 11 && profitPercentage25000 === 70) {
            setValueOne25000(133);

        } else if (percentage25000 === 11 && profitPercentage25000 === 80) {
            setValueOne25000(141);

        } else if (percentage25000 === 11 && profitPercentage25000 === 90) {
            setValueOne25000(165);
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
                <h2 className='text-white text-start mainValue-text'>$25,000</h2>
                    <p className='text-white text-start pb-3'>Virtual capital <IoIosInformationCircleOutline /></p>
                    <p className='text-secondary d-lg-none' data-toggle="tooltip" style={{cursor:"pointer"}} data-placement="bottom" title={tradingCourse}>Trading Course (12 videos, 12h+) <IoIosInformationCircleOutline className='text-white' /></p>
                    <button className='access-btn'> <CiLock /> Full access</button>
                    <div className='row pb-3 pt-5'   >
                        <div className="col-3 p-0">
                            <button className="subtract-btn" onClick={()=>subtractPercentage('$25,000')}><FiMinus /></button>
                        </div>
                        <div className="col-6 p-0">
                        <p className='mb-0 text-secondary d-lg-none' data-toggle="tooltip" style={{cursor:"pointer"}} data-placement="bottom" title={profitTarget}>Profit Target <IoIosInformationCircleOutline className='text-white' /></p>
                            <p className='text-white'>{percentage25000} %</p>
                        </div>
                        <div className="col-3 p-0">
                            <button className="add-btn" onClick={()=>addPercentage('$25,000')}><FiPlus /></button>
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
                            <button className='subtract-btn'onClick={()=>subtractProfitPercentage('$25,000')}><FiMinus /></button>
                        </div>
                        <div className="col-6 p-0">
                        <p className='mb-0 text-secondary d-lg-none' data-toggle="tooltip" style={{cursor:"pointer"}} data-placement="bottom" title={profitSplit}>Profit Split <IoIosInformationCircleOutline className='text-white' /></p>
                            <p className='text-white' >{profitPercentage25000} %</p>
                        </div>
                        <div className="col-3 p-0">
                            <button className='add-btn'onClick={()=>addProfitPercentage('$25,000')}><FiPlus /></button>
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
                        <p className='profit-value-text text-start'>${valueOne25000} <span className='text-dark fs-5'><s>$209</s></span></p>
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

export default TwentyFiveThousandPackage
