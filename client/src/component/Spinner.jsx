import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Spinner = () => {

        const [count, setCount] = useNavigate(5)
        const navigate = useNavigate()


    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue)
        }, 1000);
        count === 0 && navigate('/login')
        return () => clearInterval(interval)
    }, [count,navigate]);
            
    
  return (
    <>
<div className="d-flex flex-column justify-content-center"
     style={{ height:'100vh'}}
    >;
    <h1 className='Text-center'>redirection to you in {count} second </h1>
  <div classname="spinner-border" role="status">
    <span classname="visually-hidden">Loading...</span>
  </div>
</div>
    </>
  )
}

export default Spinner
