

import React, { useState } from 'react'
import './Dashboard.css'



import Day from 'components/Graph&Table/Day'
import Week from 'components/Graph&Table/Week'
import Month from 'components/Graph&Table/Month'
import DashProfile from './DashProfile'


function Dashboard() {
  const [active, setActive] = useState("dayData")
  return (
    <>
   

<DashProfile/>
    <div className='Dashboard'  >
{/* <div className="flexLeft"> */}
{/* </div> */}

<div className="flexRight">
      <div>
        {active === "dayData" && <Day />}
        {active === "weekData" && <Week />}
        {active === "monthData" && <Month />}
      </div>

      <nav className='button-group'>
        <button className='button1' onClick={() => setActive("dayData")} >Day</button> <br />
        <button className='button2' onClick={() => setActive("weekData")} >Week</button> <br />
        <button className='button3' id='btn3' onClick={() => setActive("monthData")} >Month</button> <br />
      </nav>
    </div>
    </div>
    </>
  )
}

export default Dashboard

