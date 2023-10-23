import React from 'react'
import Layouts from '../component/Layouts/Layouts'
import { useAuth } from '../context/Auth';
const Home = () => {
  // eslint-disable-next-line
  const [auth, setAuth] = useAuth();
  return (
    <Layouts title={"best offers"}>
    <h1>HomePage</h1>
    <pre>{JSON.stringify(auth,null, 4)}</pre>
    </Layouts>
  )
}

export default Home