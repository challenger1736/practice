
// let p = 0; //이런 무한 반복문도 p를 초기값 등록해줘야함

/* while( confirm('계속 진행할까요?')){//확인= true, 취소 = false - while은 false가 될 때까지 실행하므로 취소누르면 더 이상 안뜸.
    alert(`${p}번째 반복 입니다.`);
    p++;}

    
while( confirm('계속 진행할까요?')){//확인= true, 취소 = false - while은 false가 될 때까지 실행하므로 취소누르면 더 이상 안뜸.
    alert(`${p}번째 반복 입니다.`);
    ++p;} */

//    ++p, p++ 똑같았음 결과

/* let output = 0

for(let m =1 ; m<=10 ; m++){

    if(m%2===1){continue;} // 밑의 아무작업 하지 않기만하고 반복문을 그대로 유지한다.
    output += m;
}
console.log(output); // 30

for(let m =1 ; m<=10 ; m++){

    if(m%2===1){break;} // break는 if문을 나가는게 아니라 for문을 나간다. or while or switch
    output += m;
}
console.log(output); // 0

for(let m =1 ; m<=10 ; m++){

    if(m%2===1){;}      //;는 아무 기능이 없다. 그냥 모든 수를 더 하는 것과 같다.
    output += m;
}
console.log(output); // 55(세 개 다 켜면 85)

 */
// 문제1) 입력받은 수 만큼 ★ 출력 
/* 
const i = Number(prompt('입력받은 수 만큼 ★ 출력'));
let output = ``;
for(a=0 ; a<i ; a++ ){ output += '★'};
document.querySelector('#result').innerHTML = output
 */
// 문제2) 입력받은 수 만큼 * 출력 [  - 3줄(3배수)마다 줄바꿈 ]
/* 
const i = Number(prompt('입력받은 수 만큼 ★ 출력'));
let output = ``;
for( a=0 ; a<i ; a++ ){ output += `★`
    if((a+1)%3==0 && a!=0){output += `<br/>`}
};
document.querySelector('#result').innerHTML = output
 */
// 문제3) 입력받은 줄 수 만큼 ★ 출력  [ ex) 5 ]

/* const i = Number(prompt('입력받은 수 만큼 ★ 출력'));
let output = ``;
for( a=0 ; a<i ; a++ ){
    for( b=0 ; b<=a ; b++ ){
        output += `★`
    }
    output += `<br/>`
}
document.querySelector('#result').innerHTML = output */
/* 
★
★★         
★★★     
★★★★ 
★★★★★
 */
// 문제4) 입력받은 줄 수 만큼 * 출력 [ ex) 5 ]
/* const i = Number(prompt('입력받은 수 만큼 ★ 출력'));
let output = ``;
for( a=0 ; a<i ; a++){
    for( b = (a-i)*-1 ; b > 0 ; b--){
        output += `★`
    }
    output += `<br/>`
}


document.querySelector('#result').innerHTML = output */
/* 
★★★★★
★★★★ 
★★★
★★  
★
 */
// 문제5) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
/* let output = ``;       
const line5 = Number(prompt('문제 5 수 입력'));
    for( let i =1 ; i <= line5 ; i++){
        for(let b = 1; b<=line5-i ; b++){ output +='☆';}
        for(let s = 1; s<=i ; s++){output +=`★`}
        output += `<br/>` // 행 바꿈
    }
document.querySelector('#result').innerHTML = output */

//★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
//★★★★★★★★ 풀이를 보면 이렇게 쉬운데 왜 이렇게 생각을 못 할까. ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
//★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★

/* 
        ★
      ★★
    ★★★
  ★★★★
★★★★★
 */
// 문제6) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]         

/* let html = '';
const i = Number(prompt('줄 수 입력'));
for(let a=1; a<=i; a++){
    for(let c=0; c<a-1; c++){html +='☆';}
    for(let b=a; b<=i; b++){html +=`★`}
    html += `<br/>`
}

document.querySelector('#result').innerHTML = html */



/* 
★★★★★
  ★★★★
    ★★★
      ★★
        ★
 */
// 문제7) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
/* 
let html = '';
const i = Number(prompt('줄 수 입력'));
for(let a=1; a<=i; a++){
    for(let c=a; c<=i-1; c++){html +='☆';}
    for(let b=1; b<=2*a-1; b++){html +=`★`}
    html += `<br/>`
}

document.querySelector('#result').innerHTML = html

 */


/* 
    *
   ***
  *****
 *******
*********
 */
// 문제8) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]

/* let html = '';
const i = Number(prompt('줄 수 입력'));
for(let a=1; a<=i; a++){
    for(let c=0; c<a-1; c++){html +='☆';}
    for(let b=2*i-2*a+1 ; b>0 ; b--){html +=`★`}
    html += `<br/>`
}

document.querySelector('#result').innerHTML = html
 */


/* 
*********
 *******
  *****
   ***
    *
 */
// 문제9) 입력받은 줄 수 만큼 * 출력  [ ex) 10 ]

/* 
let html = '';
const i = Number(prompt('줄 수 입력'));
for(let a=1; a<=i; a++){
    for(let c=a; c<=i-1; c++){html +='☆';}
    for(let b=1; b<=2*a-1; b++){html +=`★`}
    html += `<br/>`
}

document.querySelector('#result').innerHTML = html

for(let a=1; a<=i; a++){
    for(let c=0; c<a-1; c++){html +='☆';}
    for(let b=2*i-2*a+1 ; b>0 ; b--){html +=`★`}
    html += `<br/>`
}

document.querySelector('#result').innerHTML = html //if 써서 하는거 있는데 그건 또 하면 됨.
 */
/* 
    *
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    *
 */
// 문제10) 입력받은 줄 수 만큼 * 출력  [ ex) 7 ]

/* 
    const line = Number(prompt(`줄 수`));
    
    let html = ``;
    
    //[행]
    for(let r = 1 ; r<=line ; r++){
        
    
        //[열]
        for( let c = 1; c<=line; c++){
            if(c == r ){html += `★`}
            else if(c+r == line+1){html+=`★`}
            else{html += `☆`}
        }
    
        html += `<br/>`;
    }
    
    document.querySelector('#result').innerHTML = html
 */
/* 
*     *
 *   *
  * *
   *
  * *
 *   *
*     *
 */