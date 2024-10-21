import React from 'react'
import TenThousandLitePackage from './TenThousandLitePackage'
import TwentyFiveThousandPackage from './TwentyFiveThousandPackage'
import FiftyThousandLitePackage from './FiftyThousandLitePackage'
import LacLitePackage from './LacLitePackage'

const TwoStepLite = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-3">
            <TenThousandLitePackage />
        </div>
        <div className="col-lg-3">
            <TwentyFiveThousandPackage/>
        </div>
        <div className="col-lg-3">
            <FiftyThousandLitePackage/>
        </div>
        <div className="col-lg-3">
            <LacLitePackage/>
        </div>
      </div>
    </div>
  )
}

export default TwoStepLite
