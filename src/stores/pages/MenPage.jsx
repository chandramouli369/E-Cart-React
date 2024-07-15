import React from 'react'
import {menData} from '../data/men'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'
const MenPage = () => {
  return (
    <>
    <Navbar/>
    <div className="pageSection">
      {menData.map((item) => {
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

export default MenPage
