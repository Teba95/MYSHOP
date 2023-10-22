import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { useAuth } from '../../context/Auth';
const Header = () => {
  const [auth,setAuth] = useAuth()
  const handleLogout = () => {
    setAuth({
      ...auth, user:null,token:''
    })
    localStorage.removalItem("auth");
  }
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" > 
     MyShop
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link"  href="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Category" className="nav-link"  href="#">Category</NavLink>
        </li>
        {
          !auth.user ? (<>
            <li className="nav-item">
          <NavLink to="/register" className="nav-link" href="#">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink onClick={handleLogout} to="/login" className="nav-link" href="#">Login</NavLink>
        </li>
        </>) : (<>
          <li className="nav-item">
          <NavLink to="/login" className="nav-link" href="#">Logout</NavLink>
        </li>
        </>)
        }
      
        <li className="nav-item">
          <NavLink to="/Cart" className="nav-link" href="#">Carte(0)</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header