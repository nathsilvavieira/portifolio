/* eslint-disable jsx-a11y/anchor-is-valid */
/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import  './header.scss';
import logo from './n.png'



function Header() {

    return(
        <div id="header">
            
            <nav class="navbar navbar-light bg-light">
            <a id="logo">
                <img src={logo} alt="" width="100" height="35" class="d-inline-block align-text-top"/>
            </a>
            
                <a class="menu" href="#">Home</a> 
                <a class="menu" href="#Portifolio">Portifolio</a> 
                <a class="menu" href="#Contato">Contato</a>
            </nav>
             
        </div>
    )
}

export default Header;