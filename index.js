// const et variables utiles

const submitTodo = document.getElementById("submitTodo")

// création todo

submitTodo.addEventListener("submit", onTaskSubmit)

const onTaskSubmit = () =>{
    console.log("je suis appelé");
}