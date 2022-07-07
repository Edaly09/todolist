// const et variables utiles

const taskArray = []
// création todo

const onTaskSubmit = () => { 
    const taskWrite = document.getElementById("taskwrite").value
    const taskCreate = {
        value: taskWrite,
        status: "to do"
    }
    taskArray.push(taskCreate)
    console.log(taskArray);
}