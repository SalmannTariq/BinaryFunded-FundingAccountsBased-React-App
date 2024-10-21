import React,{useState,useEffect} from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiLock } from "react-icons/ci";
import { FiMinus, FiPlus } from 'react-icons/fi'
import { tradingCourse,profitSplit, maxDrawDown, dailyDrawDown, payouts, refund, Phase1,Phase2,timeLimit,oneTimeFee,bonus,maxWithdraw} from '../Home/ToolTipTexts';
const LacLitePackage = () => {
    const [user,setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth,(user)=>{
            if(user)
                {
                    setUser(true);
                }
                else{
                    setUser(false);
                }
        })
    });
    const currentDate = new Date();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentMonth = currentDate.getMonth();
    const currentMonthName = monthNames[currentMonth];
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
       <div className="oneStep p-3 position-relative" >
                <span class="badge most-popular position-absolute start-50 translate-middle-x">Most Popular</span>
                <h2 className='text-white text-start mainValue-text'>$100,000</h2>
                    <p className='text-white text-start pb-3'>Virtual capital <IoIosInformationCircleOutline /></p>
                    <p className='text-secondary d-lg-none' data-toggle="tooltip" style={{cursor:"pointer"}} data-placement="bottom" title={tradingCourse}>Trading Course (12 videos, 12h+) <IoIosInformationCircleOutline className='text-white' /></p>
                    <button className='access-btn'> <CiLock /> Full access</button>
                    <div className='row pb-3 pt-5'   >
                        <div className="col-3 p-0">
                            <button className="subtract-btn disabled"><FiMinus /></button>
                        </div>
                        <div className="col-6 p-0">
                        <p className='text-secondary d-lg-none mb-0' data-toggle="tooltip" style={{cursor:"pointer"}} data-placement="bottom" title={Phase1}>Profit Target: Phase 1 <IoIosInformationCircleOutline className='text-white' /></p>
                            <p className='text-white'>8 %</p>
                        </div>
                        <div className="col-3 p-0">
                            <button className="add-btn disabled" ><FiPlus /></button>
                        </div>
                    </div>
                    <div className='row pb-3'   >
                        <div className="col-3 p-0">
                            <button className="subtract-btn disabled"><FiMinus /></button>
                        </div>
                        <div className="col-6 p-0">
                        <p className='text-secondary d-lg-none mb-0' data-toggle="tooltip" style={{cursor:"pointer"}} data-placement="bottom" title={Phase2}>Profit Target: Phase 2 <IoIosInformationCircleOutline className='text-white' /></p>
                            <p className='text-white'>5 %</p>
                        </div>
                        <div className="col-3 p-0">
                            <button className="add-btn disabled"><FiPlus /></button>
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
                    <div className='row data pb-3'>
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
                    <div className='row data pb-3'>
                        <div className="col-3 p-0">
                            <button className='subtract-btn disabled'><FiMinus /></button>
                        </div>
                        <div className="col-6 p-0">
                        <p className='mb-0 text-secondary d-lg-none' data-toggle="tooltip" style={{cursor:"pointer"}} data-placement="bottom" title={profitSplit}>Profit Split <IoIosInformationCircleOutline className='text-white' /></p>
                            <p className='text-white' >80 %</p>
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
                        <p className='mb-0 text-secondary d-lg-none' data-toggle="tooltip" style={{cursor:"pointer"}} data-placement="bottom" title={bonus}>Bonus <IoIosInformationCircleOutline className='text-white' /></p>
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
                        <div className="col-6 p-0 ">
                        <p className='mb-0 text-secondary d-lg-none' data-toggle="tooltip" style={{cursor:"pointer"}} data-placement="bottom" title={oneTimeFee}>OneTime Fee <IoIosInformationCircleOutline className='text-white' /></p>
                            <p className='text-white'>P1: 30 days; P2: 30 days</p>
                        </div>
                        <div className="col-3 p-0 ">
                            <button className='add-btn disabled'><FiPlus /></button>
                        </div>
                    </div>
                    <div className='row pb-3'   >
                        <div className="col-3 p-0">
                            <button className='subtract-btn disabled'><FiMinus /></button>
                        </div>
                        <div className="col-6 p-0">
                        <p className='mb-0 text-secondary d-lg-none' data-toggle="tooltip" style={{cursor:"pointer"}} data-placement="bottom" title={maxDrawDown}>Max Withdrawal <IoIosInformationCircleOutline className='text-white' /></p>
                            <p className='text-white'>$10,000</p>
                        </div>
                        <div className="col-3 p-0">
                            <button className='add-btn disabled'><FiPlus /></button>
                        </div>
                    </div>
                    <div>
                        <p className='profit-value-text text-start'>$299<span className='text-dark fs-5'><s>$399</s></span></p>
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

export default LacLitePackage
