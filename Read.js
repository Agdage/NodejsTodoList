const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const randomId = Math.floor(Math.random() * 1000)
const filePath = './Tasks.json';
function ReadingFile() { 
    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                if (!data) {
                    console.log('isEmpty');
                } else {
                    rl.question("Enter task_Id ? : ", (taskId) => {
                        const todos = JSON.parse(data);
                        const todo = todos.find(todo => {
                            return todo.id == Number(taskId);
                        })
                        console.log('task', todo);
                    })
                }
            }
        })
    } else {
        console.log('Opps 404 😜 ');
    }
} 
module.exports = {
    ReadingFile
}