
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