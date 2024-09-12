import React from 'react'
import Navbar from '../components/Navbar'
import "/css/home.css"
import Bars from '../public/Chart.png'
import Bars2 from '../public/Bar.png'
import Img1 from '../public/Order Time.png'
import Img2 from '../public/Rating.png'
import Img3 from '../public/order.png'

function Home() {
  return (
    <div className='homeContainer'>
      <Navbar />
      <div className='blockMain'>
        <div className='block1'>
          <div>
            <div className='dashCont1'>
              <h4>Dashboard</h4>
              <h5>Visitas</h5>
              <p>10.00 views</p>
              <img src={Bars} alt="" />
            </div>
            <div className='dashCont2'>
              <button>View Report</button>
            </div>
          </div>
          <div className='block2'>
            <h5>Order</h5>
            <p>2.568</p>
            <img src={Bars2} alt="" />
          </div>
        </div>
        <div className='block3'>
          <img src={Img1} alt="" />
          <img src={Img2} alt="" />
          <img src={Img3} alt="" />
        </div>
      </div>
    </div>

  )
}

export default Home