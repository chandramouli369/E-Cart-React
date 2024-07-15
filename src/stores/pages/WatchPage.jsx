import React from 'react'

import {watchData} from '../data/watch'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'
const WatchPage = () => {
  return (
    <>
    <Navbar/>
    <div className="pageSection">
      {watchData.map((item) => {
        return (
          <div className="mobileItem">
            <div className="pageImg">
              <img src={item.image} alt="Mobile" />
            </div>
            <div className="proModel">
                    {item.company}, {item.model}
                </div>
          </div>
        );
      })}
    </div>
    </>
  )
}

export default WatchPage
