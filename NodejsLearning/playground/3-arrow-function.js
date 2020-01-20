// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
//we can do this in other way also
// getTasksToDo() { 
//     const tasksToDo = this.tasks.filter((task) => {
//         return task.completed !== true
//     })
//     return tasksToDo;

// }

//Alternate ways consize code
//     getTasksToDo() { 
//         return this.tasks.filter((task) => {
//             return task.completed !== true
//         })

// }


//One more way Alternate ways consize code
    getTasksToDo() { 
        return this.tasks.filter((task) => task.completed !== true)

    }

}

console.log(tasks.getTasksToDo())