import { NavLink } from "react-router-dom";
import logo from '../../images/freshcart-logo.svg'


function Navbar() {
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

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/home">Home </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/categories">Category</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/brands">Brands</NavLink>
        </li>
       
      </ul>

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center ">
        <li className="nav-item">
            <i className="fa-brands fa-twitter mx-1"></i>
            <i className="fa-brands fa-facebook mx-1"></i>
            <i className="fa-brands fa-linkedin mx-1"></i>
            <i className="fa-brands fa-youtube mx-1"></i>
        </li>
        <li className="nav-item mx-2">
          <NavLink className="nav-link  position-relative" to="/cart">
          <i class="fa-solid fa-cart-shopping"></i>
          Cart
          
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span className="visually-hidden">unread messages</span>
  </span>
          </NavLink>
        </li>

        <li className="nav-item mx-2">
          <NavLink className="nav-link  position-relative" to="/wishlist">
          <i class="fa-solid fa-heart"></i>
          Washlist
          
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    9+
    <span className="visually-hidden">unread messages</span>
  </span>
          
          
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/signin">Logout</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link active" to="/Register">Register</NavLink>
        </li> */}
      
      </ul>
    </div>
  </div>
</nav>
    
    
    
    </>;
}

export default Navbar;