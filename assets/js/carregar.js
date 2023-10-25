window.addEventListener("load", atualizar) 
    
    function atualizar(){

      document.querySelector("#lista-tarefas").innerHTML = ""
      let tarefas =JSON.parse(localStorage.getItem("tarefas")) || []
      console.log(tarefas)
      tarefas.forEach (tarefa=> criaCard (tarefa))
    }


function criaCard (tarefa){
    const card = document.createElement("div")
    card.classList.add("col", "s12", "m6","l4")
    card.innerHTML = `
    <div class="card ${tarefa.concluida ? 'grey' : ''}">
            <div class="card-content black-text"> 
              <span class="card-title">${tarefa.titulo}</span>
              <span class="helper-text" data-error="Título muito curto.preencha com pelo menos 3 caracteres" data-success="">digite o título da tarefa</span>
              <p> ${tarefa.descricao}</p>
              <span data-badge-caption="pontos" class=" badge blue white-text">
              ${tarefa.pontos}
              </span>
            </div>
            <div class="card-action">
              <a href="#" class="btn red" onClick="apagar(${tarefa.id})"> 
                <i class="material-icons">delete</i>
              </a>
              <a href="#" class="btn green" onClick ="concluir"(${tarefa.id})"> 
              <i class="material-icons">check</i></a>
            </div>
          </div> `

          document.querySelector("#lista-tarefas").appendChild(card)

}