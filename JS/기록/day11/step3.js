/* 
    변수/상수 : 자료를 저장해서 반복적으로 호출해서 재사용.[재활용]
    함수 : 코드를 저장해서 호출을 여러번 가능.[재활용]

*/


/* if 문 연습문제 */
/* prompt 대신에 input으로 입력받기 */
/* 풀이 결과를 console.log 대신에 span에 출력 */


//참고
//1. 




// 문제1. 세 점수를 각 input으로 입력 받아 총점과 평균 span에 출력하시오.
    //-함수의 선언
function 연습버튼을클릭했을때실행되는코드모음상자(){
 alert('첫번째 버튼을 클릭했네.') // 이 함수를 또 쓰고 싶어[재활용]
 // input에 입력받은 값 가져오기 [] / document.querySelector('마크업 또는 #id명 또는 .class명')

//1.입력
let value1 = document.querySelector('#input1').value;
let value2 = document.querySelector('#input2').value;
let value3 = document.querySelector('#input3').value;

//2.처리
let sumValue = Number(value1)+Number(value2)+Number(value3);
let avgValue = sumValue/3;

document.querySelector('#result').innerHTML = `총점:${sumValue}점 평균:${avgValue}점`/* 함수 안에서 실행 */
}
/* 
document.querySelector('#result').innerHTML = `총점:${sumValue}점 평균:${avgValue}점` */ /* 함수 밖에 있으면 그냥 실행됨 */
//3.출력

//f end

//문제2 : 2개 정수를 입력받아 더 큰 수를 출력 
function 문제2함수(){
    alert('문제2함수가 실행됐음')
    let value1 = Number(document.querySelector('#input1').value);
    let value2 = Number(document.querySelector('#input2').value);
    // [처리]
    let result = ""; // 결과변수 [if조건에 따른 실행코드 결과를 저장하는 변수]
        //처음에는 빈문자열.

        //1. 만약에 첫번째 수가 더 크면 결과변수에 첫번째 수를 저장

    if(value1>value2){result=value1+"가 큽니다.";}
    
    else if(value1<value2){result =value2+"가 큽니다."}

    else{result = "두수는 같다"}

    document.querySelector('#result').innerHTML = result
}

//문제 3 : 3개의 정수[입력값1/2/3] 를 입력받아서 가장 큰수를 출력 
function 문제3함수(){
let value1 = Number(document.querySelector('#input1').value);
let value2 = Number(document.querySelector('#input2').value);
let value3 = Number(document.querySelector('#input3').value);

if(value1>=value2&&value1>=value3){ document.querySelector('#result').innerHTML = value1}
else if(value2>=value1&&value2>=value3){document.querySelector('#result').innerHTML = value2}
else{document.querySelector('#result').innerHTML = value3}

/* 강사님 풀이법
let result = ''; // 결과를 아직 처리 안 했기 때문에 반문자열 초기화

let max = value1; // 첫번째 값을 가장 크다고 가정.
// 만약에 max값보다 value2의 값이 더 크면 max에 value2 값을 대입/수정

if(max < value2){max = value2;}
if(max < value3){max = value3;} // 위에 조건을 충족해도 현재 조건도 검사를 해야하므로 else if 안씀!!!


*/

}

//문제 4 : 1개의 점수[입력값1] 를 입력받아 점수 90점이상 합격 출력 아니면 탈락 출력 

function 문제4함수(){
    let value1 = Number(document.querySelector('#input1').value);

    if(value1>=90){document.querySelector('#result').innerHTML = "합격"}
    else{document.querySelector('#result').innerHTML = "탈락"}
}
          
/*문제 5 : 점수[입력값1]를 입력받아 점수 90점이상 A등급 출력 
                            80점이상 B등급 출력 
                            70점이상 C등급 출력  
                            그외 재시험
*/

function 문제5함수() {
    let value1 = Number(document.querySelector('#input1').value);
    if(value1>=90){document.querySelector('#result').innerHTML = "A등급"}
    else if(value1>=80){document.querySelector('#result').innerHTML = "B등급"}
    else if(value1>=70){document.querySelector('#result').innerHTML = "C등급"}
    else{document.querySelector('#result').innerHTML = "재시험"}
}

/*문제 6: 아이디[입력값1] 와 비밀번호[입력값2] 입력받기 
                   회원아이디가 admin 이고 비밀번호가 1234 이면 로그인 성공 출력 아니면 로그인실패 출력
*/

function 문제6함수() {
    let value1 = document.querySelector('#input1').value;
    let value2 = document.querySelector('#input2').value;

    if (value1==admin&&value2==1234){document.querySelector('#result').innerHTML = "로그인 성공"}
    else{document.querySelector('#result').innerHTML = "로그인 실패"}
}

//문제 7 : 3개의 정수[입력값1/2/3] 를 입력받아서 오름차순 / 내림차순 출력 

function 문제7함수() {
    let value1 = Number(document.querySelector('#input1').value);
    let value2 = Number(document.querySelector('#input2').value);
    let value3 = Number(document.querySelector('#input3').value);
    
    let temp

    if(value1>value2){temp = value2}
    else{temp = value1} /* temp가 제일 작아짐 */
    if(value1>value2){value2 = value1} /* value2 제일 커짐 */
    value1 = temp /* 1번쨰 자리가 제일 작아짐 */
   
    if(value1>value3){temp = value3}
    else{temp = value1}
    if(value1>value3){value3=value1}
    value1 = temp

    if(value2>value3){temp = value3}
    else{temp = value2}
    if(value2>value3){value3=value2}
    value2 = temp

    value1 = value1+""
    value2 = value2+""
    value3 = value3+""

    document.querySelector('#result').innerHTML = `오름 차순 :  ${value1},${value2},${value3} 내림 차순 : ${value3},${value2},${value1}`


    /*  3개 일 때 강사님 풀이법 */

 /*    if(p1>p2) {let temp = p1; p1=p2; p2=temp;}
    if(p1>p3) {let temp = p1; p1=p3; p3=temp;}
    if(p2>p3) {let temp = p2; p2=p3; p3=temp;} */
}