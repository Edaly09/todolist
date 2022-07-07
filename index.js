// const et variables utiles

const taskArray = []
let ulAdd = document.getElementById("ul")
let taskCreate
let taskWrite
const formEdit = document.getElementById("formEdit")
let classOfTask
let i = 0
let taskEditValue
let taskEditStatues
let Limodiff
let Doing
let Done

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
    <li class="flex lines " id="${i}" >
        <div class="flex line">
            <div class="flex">
                ${taskWrite} 
                <img src="./iconesordi/Vector.png" alt="doing" class="doing Naffiche" id="Doing">
                <img src="./iconesordi/check.png" alt="Done" class="done Naffiche">
            </div>

            <div class="flex">
                <!-- ${taskCreate.status} -->
                <img src="./iconesordi/Vector-2.png"class="stylo pc ${i}" alt="modif" onclick="AffichFormEdit()">
                <img src="./iconesTel/Vector-2.png"class="stylo tel ${i}" alt="modif" onclick="AffichFormEdit()">

                <img src="./iconesordi/Vector-1.png" class="poubelle pc ${i}" alt="supr">
                <img src="./iconesTel/Vector-1.png" class="poubelle tel ${i}" alt="supr">

            </div>
        </div> 
        <Button>Priorité</Button>  
    </li>
    `
    
    i++
}

// Fonction edit

const AffichFormEdit = () =>{
    classOfTask = event.target.className
    formEdit.classList.add("affiche")
    formEdit.classList.remove("Naffiche")
}


const editTask = () =>{
    taskEditValue=document.getElementById("taskEditValue").value
    taskEditStatues=document.getElementById("taskEditStatues").value
    arrayClassOffTask=classOfTask.split(" ")
    const number=arrayClassOffTask[2]
    taskCreate[number] = {
        value: taskEditValue,
        status: taskEditStatues
    }
    Limodiff= document.getElementById(number)  
    Limodiff.innerHTML= `
        <div class="flex line">
            <div class="flex">
                ${taskCreate[number].value} 
                <img src="./iconesordi/Vector.png" alt="doing" class="doing Naffiche"id="Doing${number}">
                <img src="./iconesordi/check.png" alt="Done" class="done Naffiche" id="Done${number}">
            </div>

            <div class="flex">
                <!-- ${taskCreate[number].status} -->
                <img src="./iconesordi/Vector-2.png"class="stylo pc ${number}" alt="modif" onclick="AffichFormEdit()">
                <img src="./iconesTel/Vector-2.png"class="stylo tel ${number}" alt="modif" onclick="AffichFormEdit()">

                <img src="./iconesordi/Vector-1.png" class="poubelle pc ${number}" alt="supr">
                <img src="./iconesTel/Vector-1.png" class="poubelle tel ${number}" alt="supr">

            </div>
        </div> 
        <Button>Priorité</Button>  
        `
        Doing=document.getElementById(`Doing${number}`)
        Done=document.getElementById(`Done${number}`)

        console.log(Doing,Done);

        if (taskCreate[number].status==="Doing"){
            Doing.classList.remove("Naffiche")
            Doing.classList.add("affiche")
            Done.classList.remove("affiche")
            Done.classList.add("Naffiche")
        }else if (taskCreate[number].status==="Done"){
            Doing.classList.remove("affiche")
            Doing.classList.add("Naffiche")
            Done.classList.remove("Naffiche")
            Done.classList.add("affiche")
        }else if (taskCreate[number].status==="To do"){
            Doing.classList.remove("Naffiche")
            Doing.classList.add("Naffiche")
            Done.classList.remove("Naffiche")
            Done.classList.add("Naffiche")
        }

    formEdit.classList.add("Naffiche")
    formEdit.classList.remove("affiche")
}