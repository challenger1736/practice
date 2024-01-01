// p.116 자료형 변환
        //1.문자열 입력
/* const input = prompt('message', '_default'); */
        // 코드 실행순서
        // 1. prompt('message', '_default'); : 클라이언트에게 입력받는 알람 함수. ★★★ : [실행]
        // 2. prompt() 결과/반환/리턴값                                                 : [실행 결과]
        // 3. const input = 리턴된 값을 넣음                                            : [실행 결과 저장]

/* alert(input); */

//p.118 2. 불 입력 [ confirm() : 확인[true] / 취소[false]를 반환하는 알람함수]

/* const input2 = confirm('수락하시겠습니까?') */
/* alert(input2); */


        //3. 숫자 자료형으로 변환하기 [ Number() : 문자열 자료형을 숫자형으로 변환 함수 ]
/* console.log(Number("273")); */
/* console.log(Number("a")); */ /* NaN = Not a number */ // 숫자로 표현할 수 없다
/* console.log(Number(true));  *//* 1 */
/* console.log(Number(false));  *//* 0 */

        //4. 숫자 연산을 사용해 자료형 변환하기 [ *단 숫자+"문자열" : 연결연산자 조심]
/* console.log("52"-3);        //49    결과의 자료형이 숫자로 변환
console.log(true-1);        //0     결과의 자료형이 숫자로 변환
console.log(true+1);        //2     결과의 자료형이 숫자로 변환
 */

        //5. 문자열 자료형으로 변환하기 [String() : 문자열 변환 함수]
/* console.log(String(52.273));    //  52.273 -> "52.273"
console.log(true);    //  true -> "true"

console.log(52.273+"");     // 52.273 -> "52.273"   [연결 연산자 이용]
console.log(true+"")   */      // true -> "true"

        //6. 불 자료형으로 변환하기 [ boolean() : 불 자료형으로 변환 함수 ]
/* console.log(Boolean(0))     //false
console.log(Boolean(NaN))   //false
console.log(Boolean(""))    //false
console.log(Boolean(null))  //false
let 변수 ;
console.log(Boolean(변수))  //false
let 변수2 = 10 ;
console.log(Boolean(변수2))  //true

console.log(Boolean(1))     //true
 */
/* ★★★★★★★★★★★★★★★값이 없으면 false, 값이 있으면 true */

        //7. 논리 부정 연산자를 사용해 자료형 변환하기

/* console.log (!!273);         // 0->false, 1->true, 273 ->true, !273 -> false, !!273 -> true
console.log (!!0);    */        // 0 : false->true->false

    // 1. [입력]
/* const inch = prompt('inch 단위의 숫자를 입력해주세요.'); // 주로 html input에서 입력을 받기 때문에 prompt위주가 아님
    // 2. [처리]
const cm = inch * 2.54; // 연산을 통한 자동 자료형 반환
    // 3. [출력]
alert(`${inch}inch는 ${cm}cm 입니다.`) */





// 앞으로의 웹 개발 방향   ////////////////////////////////////////////
/* function 변환기능코드가지고있는상자(){

    const 인치 = document.querySelector('input');
    console.log(인치);
    console.log(인치.value);
        // document : HTML 
        // query : 질의
        // Selector : 선택자
            // document.querySelector("마크업"vs".class명"vs"#id명") : HTML에 요소 선택.
            // HTML 요소를 JS의 변수/객체 로 가져오기 함수
    // ---------->처리-----------> JAVA에게 통신 보내기
    // 결과 = input에 입력 받은 value를 h3 [innerHTML = 마크업 사이에] 에 대입
    document.querySelector('h3').innerHTML = `${인치.value*2.54}cm`
} */
    //function 함수명(매개변수){구현할 기능 코드}
// 변수 = let , 상수 = const, 함수 = function       선언 약속/규칙/문법
/* 
let i = 1

fucntion 함수1(i 밖의 변수, 상수등을 불러오기에도 가능 ){
}
 */







/* 문제 3번 p126 */

const cm = prompt(`cm 단위의 숫자를 입력해주세요.`);

const inch = cm*0.393701;

alert(`${cm}cm는 ${inch}inch입니다.`);

/* 문제 4번 */

const r = prompt(`원의 반지름을 입력하세요.`);

const cm2 = 3.14 *r*r;
const cm3 = 2*3.14*r

alert(`원의 넓이는 ${cm2} 원의 둘레는 ${cm3}입니다.`);

/* 문제 5번 */

const 달러 = prompt(`달러 단위의 금액을 입력해주세요.`);

const 원화 = 달러*1207;

alert(`${달러}달러는 ${원화}원입니다.`);

/* 각 생활에서 사용되는 기계/프로그램들 예시 만들기 [예시 6번]
    -키오스크, 엘리베이터 , 자율주행 자동차 
   [ 예 ]편의점 라면 포트기
    1. 저장/변수 5개: 온도 면종류 시간 온수상태 완료상태
    2. 기능/함수 5개: 시작 물추가 상태변경 조리시간추가 면종류 선택
    3. 경우의 수/논리 5개: 용기있다/없다, 조리시간 완료/미완, 상태 점검중/사용중, 온수 부족/충분, 온도 max값 판단
    4. 1-3 시각화 그림 : 
 */


