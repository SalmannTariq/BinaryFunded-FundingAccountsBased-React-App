import React from 'react'
import FiveKTwoStepPackage from './FiveKTwoStepPackage'
import TenKTwoStepPackage from './TenKTwoStepPackage'
import TwentyFiveKPackage from './TwentyFiveKPackage'
import FiftyKTwoStepPackage from './FiftyKTwoStepPackage'
import LacTwoStepPackage from './LacTwoStepPackage'

const TwoStep = () => {
  return (
    <div>
      <div className="row gap-3 ms-2">
        <div className="col-lg-2 p-0">
            <FiveKTwoStepPackage />
        </div>
        <div className="col-lg-2 p-0">
          <TenKTwoStepPackage />
        </div>
        <div className="col-lg-2 p-0">
          <TwentyFiveKPackage />
        </div>
        <div className="col-lg-2 p-0">
          <FiftyKTwoStepPackage />
        </div>
        <div className="col-lg-2 p-0">
          <LacTwoStepPackage />
        </div>
      </div>
    </div>
  )
}

export default TwoStep
