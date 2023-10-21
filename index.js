const readline = require('readline');
// const todo = require("./todo");
const { AddingTask} = require('./AddTask.js',);
const { ReadingF1ile, ReadingFile} = require('./Read.js',);
const { UpdatingTask} = require('./UpdateTask.js',);
const { DeletingTask} = require('./DeletingTask.js',);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

 

rl.question("Enter The Action (add, Rea,  Updating A Task, Deleting A Task)? : ", (input) => {
    switch (input.toLowerCase()) {
      case 'read':
        ReadingFile();
        break;
      case 'add':
        AddingTask();
        break;
      case 'update':
        UpdatingTask();
        break;
      case 'delete':
        DeletingTask();
        break;
      default:
        console.log('out of the case');
    }
  });
