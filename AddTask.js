const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const randomId = Math.floor(Math.random() * 1000)
const filePath = './Tasks.json';

function AddingTask(){
    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.log('Error reading', err);
            } else {
                if (!data) {
                    console.log('Opps ');
                } else {
                    rl.question('Enter task: ', (task) => {
                        
                        const todo_date = [{ id:randomId , task: task }];
                      
                        fs.readFile(filePath, 'utf8', (readErr, fileData) => {
                          if (readErr) {
                            console.log('Error reading file:', readErr);
                            rl.close();
                            return;
                          }
                      
                          let existingData = [];
                          if (fileData) {
                            try {
                              existingData = JSON.parse(fileData);
                            } catch (parseError) {
                              console.log('Error parsing JSON data:', parseError);
                              rl.close();
                              return;
                            }
                          }
                      
                          const updatedData = [...existingData, ...todo_date];
                          fs.writeFile(filePath, JSON.stringify(updatedData), 'utf8', (writeErr) => {
                            if (writeErr) {
                              console.log('Error writing to file:', writeErr);
                            } else {
                              console.log('Task added successfully.');
                            }
                            rl.close();
                          });
                        });
                      });
                }
            }
        })
    } else {
        console.log(' error');
    }
}
module.exports = {
    AddingTask 
}