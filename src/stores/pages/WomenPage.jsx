import React from 'react'
import {womanData} from '../data/woman'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'
const WomenPage = () => {
  return (
    <>
    <Navbar/>
    <div className="pageSection">
      {womanData.map((item) => {
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

export default WomenPage
