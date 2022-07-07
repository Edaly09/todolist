// const et variables utiles

const taskArray = []
let ulAdd = document.getElementById("ul")
let taskCreate
let taskWrite
const formEdit = document.getElementById("formEdit")
let classOfTask
let i = 0

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
    <li class="flex lines " id="line${i}" >
        <div class="flex line">
            <div class="flex">
                ${taskWrite} 
                <img src="./iconesordi/Vector.png" alt="doing" class="doing Naffiche">
                <img src="./iconesordi/check.png" alt="Done" class="done Naffiche">
            </div>

            <div class="flex">
                <!-- ${taskCreate.status} -->

                 <img src="./iconesordi/Vector-2.png"class="stylo pc line${i}" alt="modif" onclick="AffichFormEdit()">

                 <img src="./iconesordi/Vector-1.png" class="poubelle pc line${i}" alt="supr">

                <img src="./iconesTel/Vector-1.png" class="poubelle tel line${i}" alt="supr">

                <img src="./iconesTel/Vector-2.png"class="stylo tel line${i}" alt="modif" onclick="AffichFormEdit()">



            </div>
        </div> 
        <Button>Priorité</Button>  
    </li>
    `
    
    i++
}

// Function delete
let Array = []
const detelete = document.getElementById("0")

const deleteTask = () =>{
classOfTask = event.target.className

 Array = line.split("")
 

ulAdd.innerHTML = ``

}
console.log(Array[0,0])

// const poubelle = document.getElementsByClassName("poubelle")
// poubelle.addEventListener("click")

// Fonction edit

const AffichFormEdit = () =>{
    classOfTask = event.target.className
    console.log(classOfTask);
    formEdit.classList.add("affiche")
    formEdit.classList.remove("Naffiche")
}


const editTask = () =>{
    
}
