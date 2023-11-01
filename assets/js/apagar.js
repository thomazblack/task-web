    //buscar os dados do localstorage
    //const tarefa =JSON.parse (localStorage.getItem("tarefas")) || []

    //remover a tarefa
    //const tarefas_filtradas =  tarefas.filter(tarefa => tarefa.id !== id)

    //salvar o localstorage
<<<<<<< HEAD
    //localStorage.setItem("tarefas",JSON.stringify (tarefas_filtradas))


function apagar(id){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    const tarefas_filtradas = tarefas.filter(tarefa => tarefa.id !== id)
    localStorage.setItem("tarefas", JSON.stringify(tarefas_filtradas) )
    atualizar()
    calcularEstatisticas()
=======
    localStorage.setItem("tarefas",JSON.stringify (tarefas_filtradas))
    calcularEstatiscas()
>>>>>>> 825ac178b93f91714b48886d9ac2b7871d9deefe
}