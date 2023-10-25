
var contador = 0;
let tarefas = []

document.querySelector("#botao-cadastrar").addEventListener("click",  () => {



    const tarefa = {
        id: Date.now(), 
        titulo:document.querySelector("#titulo").value,
        descricao:document.querySelector("#descricao").value,
        pontos: document.querySelector("#pontos").value,
        concluida: false
    }

    tarefas[contador]=(tarefa)
    localStorage.setItem("tarefa", JSON.stringify(tarefa))
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
   contador ++

    window.location.href = "index.html"
})