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
ulAdd.innerHTML += `
    <li class="flex lines">
        <div class="flex line">
            <div class="flex">
                ${taskWrite} 
                <img src="./iconesordi/Vector.png" alt="doing" class="doing Naffiche">
                <img src="./iconesordi/check.png" alt="Done" class="done Naffiche">
            </div>

            <div class="flex">
                <!-- ${taskCreate.status} -->
                <img src="./iconesordi/Vector-2.png"class="stylo pc" alt="image de modif">
                <img src="./iconesTel/Vector-2.png"class="stylo tel" alt="image de modif">

                <img src="./iconesordi/Vector-1.png" class="poubelle pc" alt="image de modif">
                <img src="./iconesTel/Vector-1.png" class="poubelle tel" alt="image de modif">

            </div>
        </div> 
        <Button>Priorité</Button>  
    </li>
    `

}
