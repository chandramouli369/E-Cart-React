import React from 'react'
import {computerData} from '../data/computers'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'
const ComputerPage = () => {
    return (
        <>
        <Navbar/>
        <div className="pageSection">
          {computerData.map((item) => {
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
      );
}

export default ComputerPage
