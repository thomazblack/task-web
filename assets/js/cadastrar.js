document.querySelector("#botao-cadastrar").addEventListener("click",  () => {

let tarefas =JSON.parse( localStorage.getItem("tarefas")) || []

console.log(tarefas)

    const tarefa = {
        titulo:document.querySelector("#titulo").value,
        descricao:document.querySelector("#descricao").value,
        pontos: document.querySelector("#pontos").value
    }

    tarefas.push(tarefa)
    localStorage.setItem("tarefa", JSON.stringify(tarefa))

    window.location.href = "index.html"
})