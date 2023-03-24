import React from 'react';
import './Tour.css';
import { Link } from 'react-router-dom';

const Tour = () => {
  return (
    <>
    <div className='header'>
        <h1> Tour Dates 2023 </h1>
        <img src='/images/dep-live2.jpg' alt='Dillinger Live' />
    </div>
    <div className='tour-rows'>
        <div className='col-1'>January 12,2023</div>
        <div className='col-2'>Vector Arena <br/> Auckland City, Auckland</div>
        <div className='col-2'>
            <Link to='/SignUp'>
            <button className='btn'>Buy Tickets</button>
            </Link>
        </div>
    </div>
    <div className='tour-rows'>
        <div className='col-1'>January 14,2023</div>
        <div className='col-2'>Fortitude Music Hall <br/> Brisbane,  QLD,  Australia</div>
        <div className='col-2'>
        <Link to='/SignUp'>
            <button className='btn'>Buy Tickets</button>
            </Link>
        </div>
    </div>
    <div className='tour-rows'>
        <div className='col-1'>January 20,2023</div>
        <div className='col-2'>The Star Theatre <br/> Singapore,  Singapore</div>
        <div className='col-2'>
        <Link to='/SignUp'>
            <button className='btn'>Buy Tickets</button>
            </Link>
        </div>
    </div>
    <div className='tour-rows'>
        <div className='col-1'>January 29,2023</div>
        <div className='col-2'>Zepp Osaka Bayside <br/> Osaka,  Japan</div>
        <div className='col-2'>
        <Link to='/SignUp'>
            <button className='btn'>Buy Tickets</button>
            </Link>
        </div>
    </div>
    <div className='tour-rows'>
        <div className='col-1'>March 12,2023</div>
        <div className='col-2'>Moonstar Studio <br/> Bangkok,  Thailand</div>
        <div className='col-2'>
        <Link to='/SignUp'>
            <button className='btn'>Buy Tickets</button>
            </Link>
        </div>
    </div>
    <div className='tour-rows'>
        <div className='col-1'>March 12,2023</div>
        <div className='col-2'>Campo Pequeno <br/> Lisbon,  Portugal</div>
        <div className='col-2'>
        <Link to='/SignUp'>
            <button className='btn'>Buy Tickets</button>
            </Link>
        </div>
    </div>
    </>
  )
}

export default Tour