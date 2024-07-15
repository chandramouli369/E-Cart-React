import React from 'react'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'
import {acData} from '../data/ac'
const ACPage = () => {
  return (
    <>
    <Navbar/>
    <div className="pageSection">
      {acData.map((item) => {
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

export default ACPage
