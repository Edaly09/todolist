// const et variables utiles

let taskArray = []
let ulAdd = document.getElementById("ul")
let taskCreate
let taskWrite
const formEdit = document.getElementById("formEdit")
let classOfTask
let i = 0
let j=0
let taskEditValue
let taskEditStatues
let Limodiff
let Doing
let Done
let theFiltre
let filterArray = []
let selectedPrio = "0"
let maPrio
let select
let option
let myOptionline
let showPrio

// garder la priorité

const prio = (element) =>{
    console.log(element.Priorité);
    if (element.Priorité==="0"){
        maPrio=  `<select name="priorété" class="${i}" id="selectPriority${i}" onChange="priorité()">
        <option value="0" selcted>0</option>
        <option value="1" >1</option>
        <option value="2" >2</option>
        <option value="3" >3</option>
        <option value="4" >4</option>
        <option value="5" >5</option>
    </select> `
    } else if (element.Priorité==="1"){
        maPrio=  `<select name="priorété" class="${i}" id="selectPriority${i}" onChange="priorité()">
        <option value="0" >0</option>
        <option value="1" selected>1</option>
        <option value="2" >2</option>
        <option value="3" >3</option>
        <option value="4" >4</option>
        <option value="5" >5</option>
    </select> `
    } else if (element.Priorité==="2"){
        maPrio=  `<select name="priorété" class="${i}" id="selectPriority${i}" onChange="priorité()">
        <option value="0" >0</option>
        <option value="1" >1</option>
        <option value="2" selected>2</option>
        <option value="3" >3</option>
        <option value="4" >4</option>
        <option value="5" >5</option>
    </select> `
    }else if (element.Priorité==="3"){
        maPrio=  `<select name="priorété" class="${i}" id="selectPriority${i}" onChange="priorité()">
        <option value="0" >0</option>
        <option value="1" >1</option>
        <option value="2" >2</option>
        <option value="3" selected>3</option>
        <option value="4" >4</option>
        <option value="5" >5</option>
    </select> `
    }else if (element.Priorité==="4"){
        maPrio =  `<select name="priorété" class="${i}" id="selectPriority${i}" onChange="priorité()">
        <option value="0" >0</option>
        <option value="1" >1</option>
        <option value="2" >2</option>
        <option value="3" >3</option>
        <option value="4" selected>4</option>
        <option value="5" >5</option>
    </select> `
    }else if (element.Priorité==="5"){
        maPrio=  `<select name="priorété" class="${i}" id="selectPriority${i}" onChange="priorité()">
        <option value="0" >0</option>
        <option value="1" >1</option>
        <option value="2" >2</option>
        <option value="3" >3</option>
        <option value="4" >4</option>
        <option value="5" selected>5</option>
    </select> `
    }
    }


// création todo

const onTaskSubmit = () => { 
     taskWrite = document.getElementById("taskwrite").value
    taskCreate = {
        value: taskWrite,
        status: "To do",
        Priorité: "0"
    }
    taskArray.push(taskCreate)
    ulAdd.innerHTML=``
    i=0
    taskArray.forEach(element=>{
        printTask(element)
    })
    
}
// Affiche to do
const printTask = (element) =>{
prio(element)
ulAdd.innerHTML += `
    <li class="flex lines " id="${i}" >
        <div class="flex line">
            <div class="laPriorité" id="showPrio${i}"></div>
            <div class="flex">
                ${element.value} 
                <img src="./iconesordi/Vector.png" alt="doing" class="doing Naffiche" id="Doing${i}">
                <img src="./iconesordi/check.png" alt="Done" class="done Naffiche" id="Done${i}">
            </div>

            <div class="flex">
                <!-- ${element.status} -->
                <img src="./iconesordi/Vector-2.png"class="stylo pc ${i}" alt="modif" onclick="AffichFormEdit()">
                <img src="./iconesTel/Vector-1.png"class="stylo tel ${i}" alt="modif" onclick="AffichFormEdit()">

                <img src="./iconesordi/Vector-1.png" class="poubelle pc ${i}" alt="supr" onclick="Delete()">
                <img src="./iconesTel/Vector-2.png" class="poubelle tel ${i}" alt="supr" onclick="Delete()">

            </div>
        </div> 
        ${maPrio}
    </li>
    `

    Doing=document.getElementById(`Doing${i}`)
    Done=document.getElementById(`Done${i}`)

        if (element.status==="Doing"){
            Doing.classList.remove("Naffiche")
            Doing.classList.add("affiche")
            Done.classList.remove("affiche")
            Done.classList.add("Naffiche")
        }else if (element.status==="Done"){
            Doing.classList.remove("affiche")
            Doing.classList.add("Naffiche")
            Done.classList.remove("Naffiche")
            Done.classList.add("affiche")
        }else if (element.status==="To do"){
            Doing.classList.remove("Naffiche")
            Doing.classList.add("Naffiche")
            Done.classList.remove("Naffiche")
            Done.classList.add("Naffiche")
        }

        showPrio = document.getElementById(`showPrio${i}`)
        showPrio.classList.remove("prio0")
        showPrio.classList.remove("prio1")
        showPrio.classList.remove("prio2")
        showPrio.classList.remove("prio3")
        showPrio.classList.remove("prio5")
        showPrio.classList.add(`prio${element.Priorité}`)
        

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
    console.log(taskArray[number].Priorité);
    taskArray[number] = {
        value: taskEditValue,
        status: taskEditStatues,
        Priorité:taskArray[number].Priorité
    }
    Limodiff= document.getElementById(number)  
    i = number
    prio(taskArray[number])
    Limodiff.innerHTML= `
        <div class="flex line">
            <div class="laPriorité" id="showPrio${number}"></div>
            <div class="flex">
                ${taskArray[number].value} 
                <img src="./iconesordi/Vector.png" alt="doing" class="doing Naffiche"id="Doing${number}">
                <img src="./iconesordi/check.png" alt="Done" class="done Naffiche" id="Done${number}">
            </div>

            <div class="flex">
                <!-- ${taskArray[number].status} -->
                <img src="./iconesordi/Vector-2.png"class="stylo pc ${number}" alt="modif" onclick="AffichFormEdit()">
                <img src="./iconesTel/Vector-1.png"class="stylo tel ${number}" alt="modif" onclick="AffichFormEdit()">

                <img src="./iconesordi/Vector-1.png" class="poubelle pc ${number}" alt="supr" onclick="Delete()">
                <img src="./iconesTel/Vector-2.png" class="poubelle tel ${number}" alt="supr" onclick="Delete()">

            </div>
        </div> 
        ${maPrio}
        `
        Doing=document.getElementById(`Doing${number}`)
        Done=document.getElementById(`Done${number}`)


        if (taskArray[number].status==="Doing"){
            Doing.classList.remove("Naffiche")
            Doing.classList.add("affiche")
            Done.classList.remove("affiche")
            Done.classList.add("Naffiche")
        }else if (taskArray[number].status==="Done"){
            Doing.classList.remove("affiche")
            Doing.classList.add("Naffiche")
            Done.classList.remove("Naffiche")
            Done.classList.add("affiche")
        }else if (taskArray[number].status==="To do"){
            Doing.classList.remove("Naffiche")
            Doing.classList.add("Naffiche")
            Done.classList.remove("Naffiche")
            Done.classList.add("Naffiche")
        }

        showPrio = document.getElementById(`showPrio${number}`)
        showPrio.classList.remove("prio0")
        showPrio.classList.remove("prio1")
        showPrio.classList.remove("prio2")
        showPrio.classList.remove("prio3")
        showPrio.classList.remove("prio5")
        showPrio.classList.add(`prio${taskArray[number].Priorité}`)

    formEdit.classList.add("Naffiche")
    formEdit.classList.remove("affiche")

}

// deleteTask

const Delete = () =>{
    classOfTask = event.target.className
    arrayClassOffTask=classOfTask.split(" ")
    taskSupr = arrayClassOffTask[2]
    i=0
    ulAdd.innerHTML=``
    taskArray.splice(taskSupr,1)
    taskArray.forEach(element => {
    printTask(element) 

        
    });
}

// RAMDOM Task

const randomTask = () =>{
    const randomTaskArray = ["partir à l'école","Faire la vaiselle", "Lire un livre", "Faire le css du projet"]
    const randomchoice = Math.floor(Math.random()*randomTaskArray.length)
    taskCreate = {
        value: randomTaskArray[randomchoice],
        status: "To do",
        Priorité: "0"
    }
    taskArray.push(taskCreate)
    ulAdd.innerHTML=``
    i=0
    taskArray.forEach(element=>{
        printTask(element)
    })
    }

buttonRandom = document.getElementById("Random")

buttonRandom.addEventListener("click", randomTask)

// Filtre

const statusFilter = () =>{
    theFiltre = event.target.className
    if (theFiltre==="All"){
        filterArray = taskArray
        console.log(filterArray);
    }else{
        taskArray.forEach(element=>{
            console.log(element.status,theFiltre );
            if (element.status===theFiltre){
                filterArray.push(element)
            }
        })
    }
    console.log(filterArray);
    ulAdd.innerHTML=``
    i=0
    filterArray.forEach(element=>{
        printTask(element)
    })
    filterArray=[]
}

const priorité = () => {
    j = event.target.className
    console.log(j);
    select = document.getElementById(event.target.id);
    option = select.options[select.selectedIndex];
    selectedPrio=option.value
    console.log(taskArray[j]);
    console.log(selectedPrio);
    taskArray[j] = {
        value: taskArray[j].value,
        status: taskArray[j].status,
        Priorité: selectedPrio
    }

    showPrio = document.getElementById(`showPrio${j}`)
        showPrio.classList.remove("prio0")
        showPrio.classList.remove("prio1")
        showPrio.classList.remove("prio2")
        showPrio.classList.remove("prio3")
        showPrio.classList.remove("prio5")
        showPrio.classList.add(`prio${selectedPrio}`)

}

