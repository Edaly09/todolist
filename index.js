// const et variables utiles
const submitTodo = document.getElementById("submitTodo")
const taskArray = []
// création todo

const onTaskSubmit = () => { 
    const taskWrite = document.getElementById("taskwrite")
    console.log(taskWrite.value);
}

submitTodo.addEventListener("submit", onTaskSubmit())