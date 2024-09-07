const btnAdicionarTask = document.getElementById('addButton');

function addTask()
{
    //pegar o valor digitado no campo de adiciomar tarefa
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value; //string

    //pegar o elemento ul html
    const taskList = document.getElementById("taskList");

    //criar o elemento li para a nossa ul
    const newTask = document.createElement('li');
    const taskTextNode = document.createTextNode(taskText);
    newTask.appendChild(taskTextNode);
    console.log(newTask);

    //Adicionar o li dentro da ul
    taskList.appendChild(newTask);

    //emite um alarta caso a caixa esteja vazia
    if (taskText === "") {
        alert("Por favor, digite uma tarefa.");
        return;
    }

    //limpa a caixa dps de apertar enviar
    taskInput.value = "";
    

}

btnAdicionarTask.setAttribute('onclick', 'addTask()');