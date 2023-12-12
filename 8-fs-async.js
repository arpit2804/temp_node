const {readFile, writeFile} = require('fs');

console.log('start');

readFile('./content/first.txt','utf8',(err, result)=>{
  if(err){
    console.log(err);
    return;
  }
  const first = result;
  readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      './content/result-async.txt',
      `here is the result: ${first} , ${second}`,
      (err,result) => {
        if(err){
          console.log(err);
          return;
        }
        console.log('done with this task');
      }
    )
    
  })
})

console.log('starting next task');
//this will execute earlier because of asynchronous approach

//here callbacks lead to the problem of callback hell leading
//our code to look messy and hard to manage
//to solve this problem we will use promises and async and await later.