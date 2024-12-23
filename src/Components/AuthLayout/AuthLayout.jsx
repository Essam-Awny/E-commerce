import { Link, NavLink, Outlet } from "react-router-dom";
import logo from '../../images/freshcart-logo.svg'

function AuthLayout() {
    return <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <NavLink className="navbar-brand" to="/">
    <img src={logo} alt="logo" />
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

     

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center ">
        
      
        
       

       
        <li className="nav-item">
          <NavLink className="nav-link " to="/signin">signin</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/register">Register</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link active" to="/Register">Register</NavLink>
        </li> */}
      
      </ul>
    </div>
  </div>
</nav>
    
    <Outlet/>
    
    </>;
}

export default AuthLayout;