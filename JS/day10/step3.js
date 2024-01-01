
// 109~110p 증감 연산자
    // - 복합 대입 연산자 간략하게 사용 할려고.

let value1 = 10;
value1 = value1 + 1 ;   // 1. 변수 호출하고 연산후 결과를 변수에 대입   
    // vs
value1 += 1;            // 2. 1번을 간략하게 하기 위해
    // vs                                               2, 3번 차이점 증감 연산자는 1씩 증가 1씩 감소만 가능 [왜? 프로그래밍 색인/검사/패턴 = 엘리베이터, 많이 쓰기때문] (vs 복합 연산자)
value1++;               // 3. 2번을 간략하게 하기 위해        
    // vs                                               3, 4번 차이점 
++value1;               

    //110p


let number1 = 10; number1++; console.log(number1); // 후위 11
let number2 = 10; ++number2; console.log(number2); // 선위 11
    // 차이점 1 : console 이 먼저냐 ++1 증가가 우선이냐
let number3 = 10; console.log(number3++); // 후위 10                    출력 후 증가
console.log(number3++); // 11 
let number4 = 10; console.log(++number4); // 선위 11                    출력 전 증가

    // 차이점 2 :+ , = 우선 ? ++ 우선이냐
let result1 = number4++ +10 ; console.log(result1); // 21
    console.log(result1);                           // 21
    console.log(number4);                           // 12


let string1 ;
let string2 =0;
let string3 ="";
let string4 =" ";

