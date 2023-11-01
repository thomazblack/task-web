function concluir (id){

    //buscar do localstorage
   const tarefas = JSON.parse (localStorage.getItem("tarefas")) || []

    //buscar a tarefa com id
   let tarefa = tarefas.find(t => t.id === id )

    //alterar o estado da tarefa
     tarefas.concluida = true

    //salvar no locastorage
    localStorage.setItem("tarefas",JSON.stringify (tarefas))
    atualizar ()
    calcularEstatisticas()

}