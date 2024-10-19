import React from 'react'
import './OneStep.css'

import FiveThousandPackage from './FiveThousandPackage'
import TenThousandPackage from './TenThousandPackage'
import TwentyFiveThousandPackage from './TwentyFiveThousandPackage'
import FifityThousandPackage from './FifityThousandPackage'
import OneLacPackage from './OneLacPackage'

const OneStep = () => {
  return (
    <div>
      <div className="row gap-3 ms-2">
        <div className="col-lg-2 p-0">
            <FiveThousandPackage />
        </div>
        <div className="col-lg-2 p-0 oneStep-col">
            <TenThousandPackage />
        </div>
        <div className="col-lg-2 p-0 oneStep-col">
          <TwentyFiveThousandPackage />
        </div>
        <div className="col-lg-2 p-0 oneStep-col">
          <FifityThousandPackage />
        </div>
        <div className="col-lg-2 p-0 oneStep-col">
          <OneLacPackage />
        </div>
      </div>
    </div>
  )
}

export default OneStep
