import  './footer.scss';
import linkedin from '../footer/assets/linkedin.png'
import github from '../footer/assets/github.png'


function Footer() {

    return(
        <div id="Contato">
            <h3>Contato</h3>
            <p> Nathalia Vieira - Curso CTD 2021 </p>
            <a class="contato" href="https://github.com/nathsilvavieira" target = "_blank"><img  src={github} alt="" /></a> 
            <a class="contato" href="https://www.linkedin.com/in/nathalia-vieira93/" target = "_blank"><img  src={linkedin} alt="" /></a> 
            <span class="contato">naahviera@gmail.com</span>
            
        </div>
    )
}

export default Footer;