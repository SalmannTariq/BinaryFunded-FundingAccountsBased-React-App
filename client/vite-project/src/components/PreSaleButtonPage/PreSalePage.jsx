import React,{useState} from 'react'
import './PreSalePage.css'
import TelegramPage from '../TelegramPage/TelegramPage'
const PreSalePage = () => {
    const[isClicked,setClicked] = useState(false)
    function handleChange(){
        setClicked(true)
    }
  return (
    <div className='container preSale'>
      {isClicked ? (
                <TelegramPage />
            ) : (
                <button type='button' className='preSale-btn btn-primary' onClick={handleChange}>
                   ACCESS THE PRE-SALE
                </button>
            )}
    </div>
  )
}

export default PreSalePage
