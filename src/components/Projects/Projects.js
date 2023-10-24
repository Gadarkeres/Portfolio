import './Projects.css'
// componentes
import Card from './Card'
// imagens
import img1 from './img/timer.png'
import img4 from './img/gerador.png'
import img5 from './img/todo-list.png'
import img6 from './img/projeto_filme.ong.png'
import img7 from './img/vayne.png'
import img8 from './img/petshop-virtual.png'
// pdf
import pdf from './file/CV-Atualizado-Matheus.pdf'




const Projects = () => {
  return (
    <section id="section4">
      <h2 className="Tittle">PROJETOS</h2>
      <div className="container_card">
      <Card img={img8} title={'Projeto: PetShop virtual'} link={"https://gadarkeres.github.io/Pet_shop/"} repositorio={"https://github.com/Gadarkeres/Pet_shop"}/>
      <Card img={img7} title={'Projeto: Site completo de personagem'} link={"https://gadarkeres.github.io/Vayne-Project/"} repositorio={"https://github.com/Gadarkeres/Vayne-Project"}/>
      <Card img={img6}title={"Projeto: Catálogo de filmes detalhado"} link={"https://gadarkeres.github.io/film_project"} repositorio={"https://github.com/Gadarkeres/film_project"}/>
      <Card img={img5}title={"Projeto: Lista de tarefas automática"} link="https://gadarkeres.github.io/todo-list/" repositorio={"https://github.com/Gadarkeres/todo-list"}/>
        <Card img={img1} title={"Projeto: Timer de estudos"} link={"https://gadarkeres.github.io/Projeto-timer/"} repositorio={"https://github.com/Gadarkeres/Projeto-timer"}/>
        <Card img={img4}title={"Projeto: Gerador de senha e nicks"} link={"https://gadarkeres.github.io/Generate-Pass-Nick/"} repositorio={"https://github.com/Gadarkeres/Generate-Pass-Nick"}/>
       
        
      
        
      </div>
      <div className="button_container" >
        <a href={pdf} download>Download CV</a>
      </div>
    </section>
  );
}

export default Projects