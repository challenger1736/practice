/* 

// 문제1) 입력받은 수 만큼 * 출력 
    let output = ``;
        const value1 = Number(prompt('문제 1 : 수를 입력하세요.'));
        for(let i= 1 ; i <= value1 ; i++) { output += `*`;};
        
        console.log(output);
// 문제2) 입력받은 수 만큼 * 출력 [  - 3줄(3배수)마다 줄바꿈 ]

output = ``;
const value2 = Number(prompt('문제 2 수 입력'));
for(let i = 1; i <= value2; i++){ output += `*` 
    //만약 i가 3의 배우이면 줄 바꿈 처리
    if ( i %3==0){output += `\n`;} // \n : 제어(이스케이프) 문자
}
console.log(output);
 */
// 문제3) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]

/* 
output = ``;
const value3 = Number(prompt('문제 3 수 입력'));
for(let i = 1; i <= value3; i++){ 
    for (let s=1 ; s <= i ; s++ ){output += `*`}

    output += `\n`
}
console.log(output);

// 문제4) 입력받은 줄 수 만큼 * 출력 [ ex) 5 ]
output = ``;
const value4 = Number(prompt('문제 4 수 입력'));
for(let i = value4; i >= 1; i--){ 
    for (let s=1 ; s <= i ; s++ ){output += `*`}
    
    output += `\n`
}
console.log(output);
 */
// 문제5) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]

/* let output = ``;
const value5 = Number(prompt('문제 5 수 입력'));
for(let i = value5; i >= 1; i--){ 
    for( let s = i-1; s>=1; s--){output += `\t`
    for( let a = value5-s ; s>0 ; a){output += `*`}}
    output += `\n`
}
console.log(output); */  // 혼자 해볼것 !

/* let output=``; */
/* 
const line5 = Number(prompt('문제 5 수 입력'));
    for( let i =1 ; i <= line5 ; i++){
        for(let b = 1; b<=line5-i ; b++){ output +=' ';}
        for(let s = 1; s<=i ; s++){output +=`*`}
        output += `\n` // 행 바꿈
    }

console.log(output);

 */
// 문제6) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]


/* output=``;

const line6 = Number(prompt('문제 6 수 입력'));
    for( let i =1 ; i <= line6 ; i++){
        //공백
        for(let b =1 ; b<=i-1 ; b++){ output +=` `;}
        //별
        for(let s =1 ; s<=line6-i+1 ; s++){output +=`*`}
        //줄바꿈
        output += `\n`
    }

console.log(output);
 */

// 문제7) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
/* 
let
i/b/s
1/4/1
2/3/3
3/2/5
4/1/7
5/0/9

*/

/* output=``;

const line7 = Number(prompt('문제 7 수 입력'));
    for( let i =1 ; i <= line7 ; i++){
        //공백
        for(let b = line7-i ; b>=0 ; b--){ output +=` `;}
        //별
        for(let s =1 ; s<=2*i-1 ; s++){output +=`*`}
        //줄바꿈
        output += `\n`
    }

console.log(output); */

// 문제8) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
/* 
let
i/b/s
1/0/9
2/1/7
3/2/5
4/3/3
5/4/1
 */

/* output=``;

const line8 = Number(prompt('문제 8 수 입력'));
    for( let i =1 ; i <= line8 ; i++){ //1~line8까지
        //공백
        for(let b = 1 ; b<=i-1 ; b++){ output +=` `;}
        //별
        for(let s = 1; s<=2*line8-2*i+1 ; s++){output +=`*`} //s = 2*line8-2*i+1 -1,-3,-5        이런 식으로 공식 생각하기!
        //줄바꿈
        output += `\n`
    }

console.log(output);

 */

// 문제9) 입력받은 줄 수 만큼 * 출력  [ ex) 10 ] (짝수)
/* 
let
i/b/s           공식 만들기 
1/3/1
2/2/3       b= 
3/1/5       s= 1부터 2i-1(i가 4이하)
4/0/7       s= i가 4이상 일때는 s=1부터 2(i-a)-1 // a=i+a, 1씩 증가
5/0/7
6/1/5
7/2/3
8/3/1
 */
 // 나중에 해보기


// 문제10) 


/* 
let
i/b1/s1/b2/s2

1 /0 /1 /5 /1
2 /1 /1 /3 /1    b1= 1~ i-1 ,  s1 = 1~1, b2 = 1 ~ 2*(q7-1)-2*i +1    s2= (if b2=0) 1
3 /2 /1 /1 /1
4 /3/ 1/ 0 /0

1 /3 /1 /0 /0    b1 = 1~ q10-i, s1 = 1~1, b2 = 2(i-1)-1 s2= (if b2=0) 1
2 /2 /1 /1~1 /1
3 /1 /1 /1~3 /1
4 /0 /1/ 1~5 /1

*/

// 문제10-2
function 문제10(){
const line = Number(document.querySelector(`#line10`).value);

let html = ``;

//[행]
for(let r = 1 ; r<=line ; r++){
    html += `<tr>`

    //[열]
    for( let c = 1; c<=line; c++){
        if(c == r ){html += `<td>★</td>`}
        else if(c+r == line+1){html+=`<td>★</td>`}
        else{html += `<td>☆</td>`}
    }

    html += `</tr>`;
}

const tableObj = document.querySelector('table');
console.log(tableObj);
tableObj.innerHTML = html;
}


// 문제 9-2


/* 
let
i/b/s
1/4/1       b = 1부터 q7-i
2/3/3
3/2/5
4/1/7       s = 1부터 2*i-1
5/0/9
 */







/* 
let
i/b/s
1/0/9       b = 1부터 i-1
2/1/7
3/2/5
4/3/3       s = 1부터 2*q7-2*i+1 
5/4/1
 */
function 문제9(){

    const q7 = Number(document.querySelector(`#line9`).value)/2

    let html = ``;

    if((2*q7)%2==0){

        for(let i=1 ; i<=q7 ; i++ ){

            html += `<tr>`

            for(let b=1; b<=q7-i; b++){ html += `<td> </td>`;
            }
            for(let s=1; s<=2*i-1; s++){ html += `<td>*</td>`
            }
            
            html += `</tr>`;
        }


        for(let i=1; i<=q7; i++){
            html += `<tr>`
            for(let b=1; b<=i-1; b++){ html += `<td> </td>`;
            }
            for(let s=1; s<=2*q7-2*i+1; s++){html += `<td>*</td>`;
            }
            

            html += `</tr>`;
        }   
    }


    else{



        for(let i=1 ; i<=q7+0.5 ; i++ ){

            html += `<tr>`

            for(let b=1; b<=(q7+0.5)-i; b++){ html += `<td> </td>`;
            }
            for(let s=1; s<=2*i-1; s++){ html += `<td>*</td>`
            }
            
            html += `</tr>`;
        }


        
        for(let i=1; i<=q7-0.5; i++){

            html += `<tr>`
            
            for(let b=1; b<=i; b++){ html += `<td> </td>`;
            }
            for(let s=1; s<=2*(q7-0.5)-2*i+1 ; s++){html += `<td>*</td>`;
            }
           


            html += `</tr>`;
        }
    }

    const tableObj = document.querySelector('table');
    console.log(tableObj);
    tableObj.innerHTML = html;
}

/* querySelector (안의 값이) 없어도 innerHTML부분을 문제라고 한다. 그래서 찾기 어려움. */