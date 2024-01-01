// 1~100까지 숫자를 모두 더하면
/* 
let output = 0;

for(i=1 ; i<=100 ; i++){
    output += i
}

console.log(`1~100까지의 합 : ${output}`)

output = 1;

console.log(`1~100까지의 합 : ${output}`)
 */

//1부터 10이하까지 1씩 증가 반복 [한줄 표시]

/* for(i=1; i<=10 ; i++){
    console.log(`${i}번째`)
}
 */
//예 2 , 1부터 10이하까지 1씩 증가 반복 [ul 표시]

/* for(i=1; i<=10 ; i++){
    document.write(`<ul>${i}</ul>`)
} */

//예 3, 1부터 10이하까지 1씩 증가 반복 [누적합계]



//예 4, 1부터 100까지 7의 배수의 합

output = 0;

for(i=1 ; i<=100; i++){ 
    if(i%7==0){
        output += i
    }

    console.log(output) // 이거 쓰면 하나 하나 돌 때마다 나오는 것!!
}
console.log(output)


output = 0;

for(i=7 ; i<=100 ; i += 7){
    output += i
}

console.log(output)
//예5) 1부터 100까지 7배수 누적 합계.
    // - 1. i는 0부터 100까지 7씩 중가
    // - 2. i는 1부터 100까지 7배수 i % 7 == 



// 곱하기 구현하기

let html = ``;

for(i=2 ; i<=9; i++){
    for(a=1; a<=9; a++){
        html += `<div>${i}X${a}=${i*a}</div>`
        if(a==9){ html += `<br/>`}

    }
}

document.write(html)