import img from './foto.jpg'
import  './main.scss';



function Main() {

    return(
        <div id="main">
            <img src={img} class = "foto" alt=""/>
            <div class="text">
                <h1> Olá, seja bem vindo! </h1>
                <p> Sou Nathalia, estudante de desenvolvimento fullstack pela Digital House. Este site foi criado com intuito de treinar minhas skills em react, divulgando meus contatos para futuras posições como desenvolvedora front end. Para isso irei aplicar atulizações, modificando esse site conforme evoluo nos meus estudos. </p>
            </div>
            
        </div>
    )
}

export default Main;