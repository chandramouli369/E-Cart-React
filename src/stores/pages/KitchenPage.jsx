import React from 'react'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'
import { kitchenData } from '../data/kitchen'
const KitchenPage = () => {
  return (
    <>
    <Navbar/>
    <div className="pageSection">
      {kitchenData.map((item) => {
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

export default KitchenPage
