/* 
    p.102 상수와 변수

*/

//1. 상수 만들기
    //1. const          키워드 작성         왜? 상수 인지 변수인지 선언하려고               남vs여
    //2. 상수명         이름 [식별자]       왜? 상수가 여러개 있으므로 그 중에서 구별       남 중에서 '신승호'
    //3. =대입연산자    대입연산자 [ 값을 변수에 넣는 역할 ]
    //4. 자료           저장할 값

const pi = 3.141592;

//2. 상수 호출하는 방법 [ 상수 이름 작성 ]

console.log(pi); // 상수 출력
/* console.log( 신승호 ); 정의되지 않은 이름 부르면 어차피 안됨 is not defined*/

//3. 상수의 값을 변경하기 [ 호출해서 다시 대입 ] >> 불가능합니다 오류 발생함.

// pi = 3.97; /* step2.js:21 Uncaught TypeError: Assignment to constant variable. at step2.js:21:4 */

//4. 상수의 연산

const r = 10;

console.log(2*pi*r) //pi상수[상자] 안에 있는 값을 꺼내기 우선 = 상수 호출

//5. 동일한 상수명 [상수명은 식별용이므로 중복[같은 범위 내]이 불가능]
/* const pi = 3.97; Uncaught SyntaxError: Identifier 'pi' has already been declared (at step2.js:30:7) */

//6. 상수의 값 대입을 안했을 때

// const pi2; // Uncaught SyntaxError: Missing initializer in const declaration (at step2.js:34:7)

/* initializer= 초기값 */


//p 105 변수 만들기

//1. 변수 만들기[4단계]
    //1.let
    //2.변수명
    //3. =
    //4.값

let pi3 = 3.141592;

//2. 변수 호출 [ 호출시에는 let이나 const 쓰지말기 ! 이건 선언 키워드임 !! ]
console.log(pi3);
console.log("pi3:"+pi3); // 연결 연산자 : '문자열' + 변수의 값(숫자) => '문자열'
console.log(`pi3:${pi3}`)// 템플릿 문자열 `문~~~자 ~~${변수/상수/자료}~~~열`

//3.변수의 값 변경 [ 값 변경시에도 변수 호출후 다시 대입 ]

/* let  */pi3 =3.15; console.log(pi3)

//4. 변수의 연산

let r3=10;

console.log(2*pi3*r3);

// var vs let 의 차이

let value1 = 10;
/* let value1 = 10; */ // 불가  [ 동일한 변수명으로 선언시 동일한 이름이 있을경우 덮어쓰기 불가능 ]

var value2 = 10;
console.log(value2);

var value2 = 9; // 가능 [ 동일한 변수명으로 선언시 동일한 이름이 있을경우 덮어쓰기 가능 ]
console.log(value2);


//p108 복합 대입 연산자

let value = 10;
    // 컴퓨터는 동시에 다발적으로 연산을 처리X 연산 하나씩 처리
value += 10;
    // vs 같은 결과를 얻는 표현 방법
value = value + 10; // 문장 
    //  = 기준으로 오른쪽 연산 << 연산 결과
        // value + 10 중에서 변수 호출 먼저

    //1. 10
    //2. 10 + 10 // 호출 후 연산
    //3. 20      // 연산 결과
    //4.=        // 연산 후 대입
    //5. value=20 // 변수 수정

console.log(value);

//***********JS에서 HTML(문자열 자료형)을 작성할 때 주로 씀 */

let list = ``; // 'list'변수에 빈문자열 넣은 상태로 선언

list += `<ul>`;
list += `   <li>Hello</li>`;
list += `   <li>JavaScript</li>`;
list += `</ul>`;

document.write(list);

/* 이런식으로 div나 ul을 넣기도함!!! >> js에서 넣는 이유 = 기능 작동시
어떤 자료를 추가하기 위해 어디에? document.write로(body) list를*/

//예제1 : 2개의 숫자를 입력받아 더한 결과 값을 html에 <h3>안에 출력

/* let number1=Number(prompt("첫번째 숫자 "))
let number2=Number(prompt("두번째 숫자 "))

let htmlh3=``;

htmlh3 += `<h3>예제 1 결과 : ${number1+number2}</h3>`;

document.write(htmlh3);
 */

    //1.prompt("출력하고 싶은 말")    : 입력[input] 제공하는 함수
let ex1Value1 = Number(prompt("예1 1번째 숫자 입력하세요"))
/* 현재 실행중인 데이터 저장하기위해선 변수나 상수가 꼭 필요함 
이걸로 이해됨 아니면 인풋에 그냥 입력하더라도 사라짐*/
    // 만약에 10 입력시 let ex1Value1 = 10; 이렇게 바뀌는 것임.

console.log(typeof ex1Value1)
    // 타입 변환1 /문제점 : 혹여나 소수점 있으면 사라짐..
ex1Value1 = parseInt(ex1Value1); console.log(typeof ex1Value1)
    // 타입 변환 2 [Number("숫자")->숫자]
ec1Value1 = Number(ex1Value1); console.log(typeof ex1Value1)

let ex1Value2 = Number(prompt("예1 2번째 숫자 입력하세요"))


document.write(`<h3>예제 1 결과 : ${ex1Value1+ex1Value2}</h3>`);




//예제2 : 2개의 숫자를 입력받아 더 큰수를 html에 <h3>안에 출력

/* let number3=Number(prompt("세번째 숫자 "))
let number4=Number(prompt("네번째 숫자 "))

let htmlh4=``;

if(number3>number4){htmlh4 += `<h3>예제 2 결과 : ${number3}</h3>`};
if(number3<number4){htmlh4 += `<h3>예제 2 결과 : ${number4}</h3>`};
if(number3=number4){htmlh4 += `<h3>예제 2 결과 : ${number3}</h3>`};


document.write(htmlh4); */


    // 1. 입력받은 데이터를 숫자자료형으로 변환[연산할려고/문자로 연산할 수는 없으니까] 후 각 변수에 대입[기억했다가 다음연산에 쓰려고]

let ex2Value1 = Number(prompt("예2 1번째 숫자 입력하세요"))

let ex2Value2 = Number(prompt("예2 2번째 숫자 입력하세요"))

    //2. 
console.log( ex2Value1>ex2Value2 ); // 만약에 10과 20을 입력했다면 false
    //2.
    //단항 연산자 [피연산자 1개], 이항연산자[피연산자2개], 삼항연산자[피연산자3개]
    //삼항 연산자 : 조건 ? 참 : 거짓 [ 읽는 방법 ==  :콜론 ,  ;세미콜론] 
        //- 조건[T/F]에 따른 실행을 달리할 수 있기때문에,

console.log(ex2Value1>ex2Value2 ? ex2Value1 : ex2Value2 );

document.write(`<h3>예제 2 결과 : ${ex2Value1 > ex2Value2 ? ex2Value1 : ex2Value2 }</h3>`)

