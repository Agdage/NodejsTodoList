const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const randomId = Math.floor(Math.random() * 1000)
const filePath = './Tasks.json';
function UpdatingTask() {
    if (fs.existsSync(filePath)) {

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                if (!data) {
                    console.log('isEmpty');
                } else {
                    rl.question('Enter taskId ? : ', (taskId) => {

                        rl.question('Enter taskName ? : ', (taskName) => {

                            const todos = JSON.parse(data);

                            const update_todos = todos.map(todo => {
                                if (todo.id == Number(taskId)) {
                                    return {
                                        ...todo,
                                        task: taskName
                                    }
                                }
                                return todo;
                            });
                            fs.writeFile(filePath, JSON.stringify(update_todos, null, 2), (err) => {
                                if (err) {
                                    console.log(err);
                                } else {
                                    console.log('task updated  ');
                                }
                            })
                            console.log('update_todos', update_todos);
                        })

                    })
                }
            }
        })

    } else {
        console.log(' feild ');
    }
}
module.exports = {
    UpdatingTask
}