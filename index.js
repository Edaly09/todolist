// const et variables utiles

const taskArray = []
let ulAdd = document.getElementById("ul")
let taskCreate
let taskWrite
// création todo

const onTaskSubmit = () => { 
     taskWrite = document.getElementById("taskwrite").value
    taskCreate = {
        value: taskWrite,
        status: "to do"
    }
    taskArray.push(taskCreate)
    console.log(taskArray);
    printTask()
}
// Affiche to do
const printTask = () =>{
ulAdd.innerHTML = `<li>${taskWrite} <!-- ${taskCreate.status} --> <img src="./iconesordi/Vector-2.png"class="stylo" alt="image de modif"> <img src="./iconesordi/Vector-1.png" class="poubelle" alt="image de modif">  </li>`

}
