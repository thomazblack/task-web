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
<<<<<<< HEAD
    calcularEstatisticas()
=======
  calcularEstatiscas()
>>>>>>> 825ac178b93f91714b48886d9ac2b7871d9deefe

}