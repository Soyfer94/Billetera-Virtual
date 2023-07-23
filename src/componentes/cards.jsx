import React from 'react'
import Card from './card';

function Cards() {
  return (
    <div className="container">
        <div ClassName="row">
            <div className='col-md-4'><Card/>
            </div>
            <div className='col-md-4'><Card/>
            </div>
            <div className='col-md-4'><Card/>
            </div>       
        </div>
    </div>
  )
}

export default Cards
