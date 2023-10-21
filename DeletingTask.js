const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const ran_Id = Math.floor(Math.random() * 50)
const filePath = 'Tasks.json';

function DeletingTask() {
    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.log('Error ', err);
            } else {
                if (!data) {
                    console.log('isEmty');
                } else {
                    const todos = JSON.parse(data);
                    rl.question('Enter taskId  ? : ', (taskId) => {
                        const taskdate = todos.filter(task => task.id != Number(taskId))
                        if (todos.length === taskdate.length) {
                            console.log('is empty ! ', todos.length);
                        } else {
                            fs.writeFile(filePath, JSON.stringify(taskdate, null, 2), (err) => {
                                if (err) {
                                    console.log(err);
                                } else {
                                    console.log('task deleted ', taskdate);
                                }
                            })
                        }
                    })
                }
            }
        })
    } else {
        console.log(' failed');
    }
}

module.exports = {
    DeletingTask
}