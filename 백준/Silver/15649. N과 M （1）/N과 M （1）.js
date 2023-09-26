let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n,m] = input[0].split(' ').map(Number); //1~n까지 자연수 중에서 중복없이 
let arr = []; // 순열을 계산하고자 하는 원소가 담긴 배열 
for (let i = 1; i <= n; i++) arr.push(i);
let visited = new Array(n).fill(false); // 각 원소 인덱스 별 방문 여부 
let selected = []; // 현재 순열에 포함된 원소 

let ans = '';
function dfs (arr, depth) {
    if (depth == m) { // 모든 순열을 확인하는 부분
        let result = []; // 순열 결과 저장 테이블 
        for (let i of selected) result.push(arr[i]);
        for (let x of result) ans += x + ' '; // 계산된 순열을 실질적으로 처리하는 부분
        ans += '\n';
        return;
    }
    for (let i = 0; i < arr.length; i++) { // 하나씩 원소 인덱스를 확인하면
        if (visited[i]) continue; // 중복을 허용하지 않으므로 이미 처리된 원소라면 무시
        selected.push(i); // 현재 원소 선택
        visited[i] = true; // 현재 원소 방문 처리
        dfs(arr, depth+1); // 재귀 함수 호출
        selected.pop(); // 현재 원소 선택 취소
        visited[i] = false; // 현재 원소 방문 처리 취소
    }
}
dfs(arr,0);
console.log(ans.slice(0,-1));