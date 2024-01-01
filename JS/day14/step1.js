/* 

    p.175
        [배열, 객체, 자료]
        1. for(let i =0; i<배열명.length ; i++){}

        [배열, 객체]
        2. for(let i in 배열명){} //but 배열 또는 객체만 가능    -i 에 배열안의 인덱스가 나열됨

        3. for( let v of 배열명){}                              -v에 배열안의 값들이 나열됨

        4. while문
            
            while(조건문){실행문;} // 조건문 true 면 실행문 실행
            1. for  처럼 사용 [빈도 적다.]
                초기값
                while(조건문){실행문;증감식;} 
            2. 무한루프 [빈도 높음.]
                while(true){실행문;}
                for(;;){실행문;}

                -break 키워드 : 특정 조건이 되면 무한루프 종료 // {}나가기 == break;
*/

const todos=['우유구매', '업무메일 확인하기', '필라테스 수업']
// 1. - i는 0부터 마지막인덱스까지 1씩증가하면서 console.log 반복 실행
for (let i =0; i<todos.length ; i++){ console.log(todos[i]) }
// 2. - i는 todos배열내 요소 인덱스를 하나씩 대입 받으면서 console.log 반복 실행
for (let i in todos){console.log(todos[i]);}
// 3. - i는 todos배열내 요소 값을 하나씩 대입 받으면서 console.log 반복 실행
for (let i of todos){console.log(i);}

for (const i in todos){
    console.log(todos[i]);
} /* 나갔다가 선언하고 나갔다가 선언하고 이런느낌 인듯하기에 const도 가능한 것 같음 - of도 마찬가지 */

// 4
let i = 0;
while(i<todos.length){console.log(todos[i]); i++;};

// p.181 무한루프
/* let j = 0;
while(true){alert(`${j}번째 반복입니다.`); j++} */

/* for(let j = 0; true; j++){alert(`${j}번째 반복입니다.`);} */
/* for(;;){alert(` 번째 반복입니다.`)} */
// while(1){alert('무한반복');}

/* let p = 0;
while( confirm('계속 진행할까요?')){//확인= true, 취소 = false - while은 false가 될 때까지 실행하므로 취소누르면 더 이상 안뜸.
    alert(`${p}번째 반복 입니다.`);
    p++;
} */

/* 

    함수
        - 1. 남이 만든 함수 : alert, confirm, push, splice
        - 2. 내가 만든 함수 : 회원등록(), 로그인()

    함 : 상자 , 수 : 숫자
    상자안에 들어있는 수 => 상자 안에 들어있는 코드 => {}안에 들어있는 코드
        - 왜? 다시 쓸려고, 재활용 성
        1. 매개변수/인자/인수 
        2. 리턴/ 결과/ 반환

        -------(인수)------- x=2, y= 3 등 인수 함수 안으로 들어가는 수 ()
        |                  |
        |       2x + y     |
        |                  |
        |                  |
        |______(반환)______| 리턴 : 함수 밖으로 나오는 수  return 
                            return = 7

*/


for (let m = 1; true ; m++){
    alert(`${m}번째 반복문입니다.`)

   ;
   //조건에 따른 무한루프 종료
   const isContinue = confirm('계속 하시겠습니까?') 
   if (!isContinue){
    break; //가장 가까운 for/while 탈출
   }
}

alert(`프로그램 종료`)

for(let i=0 ; i<5; i++){

    continue; // 반복 작업을 멈추고 반복문의 처음[증감식]으로 이동
    alert(m); // vs code에서 지원하는 기능 => 의미없는 코드 투명색.
}

let output = 0

for(let m =1 ; m<=10 ; m++){

    if(m%2===1){continue;}
    output += m;
}
console.log(output);

