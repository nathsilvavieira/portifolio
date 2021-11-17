/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.min.css';
import  './header.scss';
import logo from './n.png'



function Header() {

    return(
        <header className = "header">
        
            <nav class="navbar navbar-expand-lg ">
                <a class="navbar-brand text-light" href="#"> Meu Portifolio</a>
                <div class=" navbar-collapse " id="navbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#Portifolio">Portifolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#Contato">Contato</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>
    );
    
}

export default Header;