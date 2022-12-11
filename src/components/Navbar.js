// import './style.css';

function Navbar(){
  return(
    <nav className='navbar'>
      <img src="images/logo192.png" alt="react logo"></img>
      <h3>React</h3>
      <ul className='nav-items'>
        <h4>Pricing</h4>
        <h4>About</h4>
        <h4>Contact</h4>
      </ul>
    </nav>
  )
}

export default Navbar;