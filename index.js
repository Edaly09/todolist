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
                <img src="./iconesTel/Vector-2.png"class="stylo tel line${i}" alt="modif" onclick="AffichFormEdit()">

<<<<<<< HEAD
<<<<<<< HEAD
               <img src="./iconesordi/Vector-1.png" class="poubelle pc" alt="image de modif">
                <img src="./iconesTel/Vector-1.png" class="poubelle tel" alt="image de modif">
=======
                <img src="./iconesordi/Vector-1.png" class="poubelle pc line${i}" alt="supr">
=======
                <img src="./iconesordi/Vector-1.png" class="poubelle pc line${i}" alt="supr">
// >>>>>>> 88c5ad65f808eb00c15c232f21a5e0bef9415f9a
                <img src="./iconesTel/Vector-1.png" class="poubelle tel line${i}" alt="supr">
// >>>>>>> ca9e212c4f9c82c82ba9e3782ddcc5b4221af7f4

            </div>
        </div> 
        <Button>Priorité</Button>  
    </li>
    `
    
    i++
}
// <<<<<<< HEAD
// const detelete = document.getElementById("delete")
// const deleteTask = () =>{
// ulAdd.innerHTML = ``

// }

// const poubelle = document.getElementsByClassName("poubelle")
// poubelle.addEventListener("click")
// =======

// // Fonction edit

// const AffichFormEdit = () =>{
//     classOfTask = event.target.className
//     console.log(classOfTask);
//     formEdit.classList.add("affiche")
//     formEdit.classList.remove("Naffiche")
// }


// const editTask = () =>{
    
// }
// >>>>>>> ca9e212c4f9c82c82ba9e3782ddcc5b4221af7f4
