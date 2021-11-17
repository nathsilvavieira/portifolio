import lunch from '../galeria/asset/lunch.png'
import podcast from '../galeria/asset/podcast.png'
import todo from '../galeria/asset/to-do-list.png'


import  './gallery.scss';

let galerias = [
    {
    id: 1,    
    nome: "Ifome",
    imagem: `${lunch}`,
    github: "https://nathsilvavieira.github.io/ifome/",
    repositorio: "https://github.com/nathsilvavieira/ifome"  
    },
    {
        id: 2, 
        nome: "PodCastream",
        imagem: `${podcast}`,
        github: "https://hiimgui.github.io/PodCastream/",
        repositorio: "https://github.com/hiimgui/PodCastream"  
    },
    {
        id: 3, 
        nome: "Todo List",
        imagem: `${todo}`,
        github: "https://nathsilvavieira.github.io/checkpoint02Fron02/",
        repositorio: "https://github.com/nathsilvavieira/checkpoint02Fron02"  
    }
    
]

function Gallery() {
    
    return(
        
        <div id="galeria">
            <h1 id ="Portifolio">Portifolio</h1>
            <div className ="card">
            {galerias.map((galeria)=>
            <>
                <div className ="itens">
                    <img key = {galeria.id} src={galeria.imagem} alt={galeria.nome} /> 
                    <h3 key = {galeria.id} >{galeria.nome}</h3>
                    <a key = {galeria.id} href={galeria.github} target="_blank" rel="noreferrer">GitPage</a>
                    <a key = {galeria.id} href={galeria.repositorio} target="_blank" rel="noreferrer">GitHub</a>  
                </div>
            </>)}
            </div> 
        </div>
    )
}

export default Gallery;