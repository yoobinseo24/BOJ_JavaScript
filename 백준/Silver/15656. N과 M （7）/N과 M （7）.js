let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function dfs(arr, depth) {
  if (depth == m) {
    let result = [];
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + ' ';
    answer += '\n';
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    selected.push(i);
    dfs(arr, depth+1, i+1);
    selected.pop();
  }
}


let [n,m] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);
arr.sort((a,b) => a-b);

let selected = [];
let answer = '';

dfs(arr, 0);
console.log(answer);