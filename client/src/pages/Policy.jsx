import React from 'react'
import Layouts from '../component/Layouts/Layouts'


const Policy = () => {
  return (
    <Layouts title={"Privacy Policy"}>
      <div className="row contact">
        <div className="col-md-6">
          <img 
            src="images/2914501.jpg"
            alt='policy'
            style={{width:'100%'}}
            />
          </div>
          <div className="col-md-4">
          <p>Lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>feel free to ask</p>
        </div>
      </div>
    
    </Layouts>
  )
}

export default Policy