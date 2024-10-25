
const fs = require('fs');
var o=require('./a.json');
for(let i in o){
    let value=o[i]
    console.log(value);
}

// console.log(o);
// o['arpit jain']+=1;
// o=JSON.stringify(o);
// fs.writeFile('a.json',o,(err) => {
//     if (err) {
//       console.error('Error writing to JSON file:', err);
//     } else {
//       console.log('Data has been written to the JSON file:');
//     }});
// var a=[];
// a.push({"arpit":0});
// console.log(a[0].arpit);
// const b=JSON.stringify(a,null,2);
// const filePath = 'output.json';

// // Write the JSON string to the file
// fs.writeFile(filePath, b, (err) => {
//   if (err) {
//     console.error('Error writing to JSON file:', err);
//   } else {
//     console.log('Data has been written to the JSON file:', filePath);
//   }
// });

// const data = require('./output.json');
// console.log(data[0].arpit);