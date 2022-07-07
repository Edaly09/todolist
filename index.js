// const et variables utiles
const submitTodo = document.getElementById("submitTodo")


// création todo

const onTaskSubmit = () => { 
    console.log("je suis appelé");
}

submitTodo.addEventListener("submit", onTaskSubmit())