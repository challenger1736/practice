
/* 연산자 연습문제 */
/* 문제 1 */
/* let number1=Number(prompt("국어 점수"))
let number2=Number(prompt("영어 점수"))
let number3=Number(prompt("수학 점수"))

console.log(`총점:${number1+number2+number3}`)
console.log(`평균:${(number1+number2+number3)/3}`)
document.write(`총점:${number1+number2+number3}, 평균:${(number1+number2+number3)/3}`) */

/* 문제 2 */
/* let r=Number(prompt("반지름의 길이"))

console.log(`${r*r*3.14}`)
document.write(`${r*r*3.14}`) */

/* 문제 3 */
/* 
let number4=Number(prompt("첫번째 실수"))
let number5=Number(prompt("두번째 실수"))

console.log(`앞 실수의 값이 뒷 실수의 몇 퍼센트인가?${parseInt(number4/number5*100)}%`)
document.write(`앞 실수의 값이 뒷 실수의 몇 퍼센트인가?${parseInt(number4/number5*100)}%`) */

/* 문제 4 */
/* let number6=Number(prompt("홀수는 true 짝수는 false"))


document.write(`${number6%2==1 ? true : false}`) */


/* 문제 5 */
/* let number7=Number(prompt("7의 배수만 true"))

console.log()
document.write(`${number7%7==0 ? true : false}`) */

/* 문제 6 */
/* let number8=Number(prompt("십만원대 지폐 개수 계산기"))

let 십만원 = parseInt(number8/100000)
let 만원 = parseInt((number8-(십만원*100000))/10000)
let 천원 = parseInt((number8-(십만원*100000)-(만원*10000))/1000)
 */

/* document.write(`십만원 짜리 개수 : ${number8[0]} 만원 짜리 개수 : ${number8[1]}  천원 짜리 개수 : ${number8[2]}  ` ) */
/* document.write(`십만원 짜리 개수 :` +십만원+ `만원 짜리 개수 :` +만원+ `천원 짜리 개수 :` +천원) *//* 이렇게 양옆으로 ++ 적어줘야함 이렇게 할빠에는 ${단일}로 쓰는게 나음 */
/* document.write(`십만원 짜리 개수 : ${십만원} 만원 짜리 개수 : ${만원} 천원 짜리 개수 : ${천원}`) */

// 강사님 정답 -문제6 : prompt 함수 로 십만원 단위의 금액을 입력받아 지폐 개수 세기[연산자 사용] 입력예) 356789  , 출력 예) 십만원:3장 만원:5장 천원:6장
    // 1. 금액 자릿수[인덱스] 이용 방법 
/*
let 금액1 = prompt('십만원 단위의 금액 입력 : ');   
console.log( `십만원:${금액1[0]}장 , 만원 : ${금액1[1]}장 , 천원 : ${금액1[2]}장` );
*/
    // 2. 연산 
/*
let 금액2=  Number( prompt('십만원 단위의 금액 입력 : ') ) ;
let 십만원권 = parseInt( 금액2/100000 ); // 십만원 단위  : parseInt(금액/100000)
금액2 -= (십만원권*100000);  // 금액(원금)에 십만원권 제외한 금액에서 만원권 계산 
let 만원권 = parseInt(금액2/10000);     // 만원 단위 : parseInt(금액/10000)
금액2 -= (만원권*10000);    // 금액(원금)에 만원권 제외한 금액에서 천원권 계산 
let 천원권 = parseInt(금액2/1000);      // 천원 단위 : parseInt(금액/1000)

console.log( `십만원:${ 십만원권 }장 , 만원 : ${ 만원권 }장 , 천원 : ${ 천원권 }장` );


/* 문제 7 */
/* let id=prompt("ID를 입력하세요")
let password=prompt("패스워드를 입력하세요")

document.write(`${id+password=="admin1234" ? true : false}`) */

/* 강사님 정답 : console.log( `로그인 결과 : ${ 아이디 == 'admin' && 비밀번호 == 1234 } `);  */ // O

/* 문제 8 */
/* let number9=Number(prompt("정수를 입력하세요(홀수이면서 7의배수는 true)"))

document.write(`${number9}은 홀수이면서 7의 배수인가? ${(number9%7==0 && number9%2==1) ? "그렇다" : "아니다"}`) */ /* 삼항연산자 묶어서도 쓸 수 있음 */



/* 문제 9 */
/* let number10=Number(prompt("9번 문제 더 큰 수는? 첫번째"))
let number11=Number(prompt("9번 문제 더 큰 수는? 두번째"))

document.write(`${number10}과 ${number11} 중 더 큰 수는? ${number10>number11 ? number10 : number11}`) */


//삼항 연산자 조건? 참 : 거짓

//삼항 연산자 2중첩 조건 1 ? 참1 : 조건 2 ? 참2 : 거짓

//삼항 연산자 3중첩 조건 1 ? 참1 : 조건 2 ? 참2 : 조건 3 ? 참 3 : 거짓

// 중첩 많아지면 관리가 힘들다 ====> 조건문 if를 쓰는거임 그래서.



/* 문제 10 */

/* let number12=Number(prompt("10번 문제 가장 큰 수는? 첫번째"))
let number13=Number(prompt("10번 문제 가장 큰 수는? 두번째"))
let number14=Number(prompt("10번 문제 가장 큰 수는? 세번째"))

console.log((number12>=number13 && number12>=number14) ? number12 :
(number13>=number14 && number13>=number12) ? number13 :
(number14 >= number12 && number14>=number13)? number14: "none") */

// 1. 변수[저장/기억] 활용 [ 가장 큰 수 기억하는 방법 ]

/* let max = 정수1; */ // 1. 가장 큰 수를 가지는 변수를 선언해서 첫번째 수를 넣어둔다.
/* max = max <= 정수2 ? 정수2 : max; */ /* 2. 두번째 수가 max보다 크면 max를 두번째 수를 대입 */
/* max = max <= 정수3 ? 정수3 : max; */ /* 3. 세번째 수가 max보다 크면 max를 세번째 수를 대입 */
/* console.log(`가장 큰수는: ${max}`) */  


/* 문제 11 */

let num1=Number(prompt("오름 첫번째"))
let num2=Number(prompt("오름 두번째"))
let num3=Number(prompt("오름 세번째"))

/* 각 자릿수 비교해서 스왑하는 방법 */

/* 첫번쨰 자리 비교 비교 2번 */
let temp = num1 > num2 ? num2 : num1; /* 정수2를 temp에다가 넣기 *//*  1 > 2 ? temp에 2를 넣거나 아니면 1 = 1 무조건 작은 수가 들어간다 */
num2 = num1 > num2 ? num1 : num2;   /* 정수 1- > 정수 2 */ 
num1 = num2 > temp ? temp : num2;  /* temp -> 정수1 */    /* 마지막 줄엔 temp */

temp = num1 > num3 ? num3 : num1;   /*  */
num3 = num1 > num3 ? num1 : num3;
num1 = num3 > temp ? temp : num1;

/* 두번째 자리 비교 비교 1번*/
temp = num2 > num3 ? num3 : num2;
num3 = num2 > num3 ? num2 : num3;
num2 = num3 > temp ? temp : num2;

/* 세번째 자리 비교 비교 0번 */


console.log( num1, num2, num3)

//- 최대값, 최솟값, 미들값 구해서 계산하는 방법 [ 수가 많아지면 힘들어짐 ]



/* 오름 차순 하는 방법 [정렬] 
    7   5   9
    a   b   c

    1. a와 b를 비교 a>b a가 더 크면 자리 바꾸기[스왑]
    ----모든 자리수 마다 비교---

    a자리는 b, c와 비교
    b자리는 c와 비교
    c자리는 안함

- 변수 와 변수의 값을 바꾸는 방법 [스왑]
    a 와 b를 스왑  - 주면서 받기 불가능,, 컴퓨터는 동시에 불가능,,
    1. a 에 b 대입
        a=b     [문제점 : a의 값은 사라짐.. 왜?? 변수는 1개밖에 저장을 못했으니까]
    2. b에 a 대입

    - 스왑하는 방법 [임의 변수 활용]
    1. temp 임의[임시저장소] 생성
    2. temp a를 대입
    3. a에 b를 대입
    4. b에 temp를 대입

    a<-----직거래------>b
    7[*3=5]            5[*4=7]

    temp[임시] [*2=7]
    */
 /*    문제12 : [ 가위바위보 게임 ] 
    - 가위가 '0' 이고 바위가 '1' 이고 보가 '2' 일때 플레이어1와 플레이어2 가 있습니다. 
    - 승리자 판단과 무승부 경우의수를 출력하시오.
    [입력]
       플레이어1가 0 혹은 1 혹은 2 입력받아 변수에 저장합니다.
       플레이어2가 0 혹은 1 혹은 2 입력받아 변수에 저장합니다.
    [경우의수 판단]
       플레이어1 이겼을때 경우의수 ' 플레이어1 승리 ' 출력
       플레이어2 이겼을때 경우의수 ' 플레이어2 승리 ' 출력
       비겼을경우 '무승부' 출력
 */
    let player1 = Number(prompt('플레이어1'))
    let player2 = Number(prompt('플레이어2'))
    let answer = player1==player2 ? 
                        '무승부' :  player1==(player2+1)%3 ? 
                                    '플레이어1 승리' :  '플레이어2 승리';
    console.log( answer )

    /* 
        플레이어 1이 이기는 경우의 수
            플레이어1== 0일때 플레이어2 == 2
            플레이어1== 1일때 플레이어2 == 0
            플레이어1== 2일때 플레이어2 == 1

                            플레이어2 == 2+1 = 3 => 3%3 ==0
                            
    */
    




