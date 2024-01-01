//예제1 : 2개의 숫자를 입력받아 더한 결과 값을 html에 <h3>안에 출력

/* const i = prompt('문제 1(더하기) : 숫자를 입력하세요.')*1

const i1 = prompt('문제 1(더하기) : 2번째 숫자를 입력하세요.')*1 */

// 1번째 출력 방법 : document.write(`<h3>${i+i1}</h3>`)
// 2번째 출력 방법 : document.querySelector('h3').innerHTML = i+i1
// 3번째 출력 방법 : document.querySelector('#h3id').innerHTML = i+i1 ;
/* 
let i2 = 0 ; // 여기 const 넣으면 값이 2번 들어가면서 let 쓰라고 함 = 상수에 변수 적용했다고 오류 뜸
    i2 += i  // 보니까 이 선언과 과정중에서 중간과정에서 바뀌면 상수로 선언하면 안됨. 나중에 되는 상황도 보기
    i2 += i1


document.querySelector('#h3id').innerHTML = i2
 */

/* let i2 = ``;
   // Number(i2) = i2+ i 문법의 오류 뜸 Invalid 뭐라 뭐라
    i2 = i // 문자열로 만들어도 그냥 수를 바로 바꿔주면 됨 변수라서 
    i2 = i2+ i1 

    console.log( typeof(i2)) // number
    console.log(i2)

document.write(`<h3>${i2}</h3>`)
//document.write는 밑에 쌓이네 신기하네

//예제2 : 2개의 숫자를 입력받아 더 큰수를 html에 <h3>안에 출력

const i3 = prompt('문제 2(더 큰 수) : 숫자를 입력하세요.')*1

const i4 = prompt('문제 2(더 큰 수) : 2번째 숫자를 입력하세요.')*1

document.querySelector('#h3id').innerHTML = `${i3>i4&&i3!==i4? i3 : i4}`

//재밌다! , 근데 if 배웠을 때네! 안배운줄 알고 삼항연산자 썻는데, 다음 과제부터는 if 가능!

let value1 = 10;

value1 = value1 + 1 ;

value1 += 1;

 */


////////////////////////////////////////////////////////////////////////////////////////


// -문제1 : prompt 함수 로 국어 , 영어 , 수학 점수를 입력받아 각 변수에 저장하고 총점 출력 , 평균 출력

/* let i =Number(prompt(`국어 점수를 입력하세요.`))
let i1 = Number(prompt(`영어 점수를 입력하세요.`))
let i2 = Number(prompt(`수학 점수를 입력하세요.`))

alert(` 세 과목 총점 : ${i+i1+i2}`);

alert(` 세 과목 평균 : ${(i+i1+i2)/3}`)
 */


// -문제2 : prompt 함수 로 반지름 입력받아서 원넓이[ 반지름*반지름*3.14 ] 출력
/* 
let r = Number(prompt(`반지름을 입력하세요.`))

alert (`원의 넓이 : ${r*r*3.14}`) */

// -문제3 : prompt 함수 로 두 실수를 입력받아서 앞실수의 값이 뒤실수의 값의 몇%인지 출력[- 54.5   84.3 두 실수 입력시   결과 : 64%]
/* 
let i3 = Number(prompt(`실수1를 입력하세요.`))
let i4 = Number(prompt(`실수2를 입력하세요.`))

alert(`${i3/i4*100}%`) */

// -문제4 : prompt 함수 로 정수를 입력받아 홀수[true] / 짝수[false] 여부 출력
/* 
let i5 = Number(prompt(`실수를 입력하세요. 홀수인가요?`))

if(i5%2==1){alert(`true`)}
else{alert(`false`)} */

// -문제5 : prompt 함수 로 정수를 입력받아 7배수이면 true / 아니면 false 출력

// -문제6 : prompt 함수 로 십만원 단위의 금액을 입력받아 지폐 개수 세기[연산자 사용]

/* let i6 = prompt(`십만원 단위의 금액을 입력하세요.`)


// alert(`만원권: ${i6[0]+i6[1]}개 천원권...`) 이거 말고 계산식으로 ? 굳이 굳이긴한데 뭘로 해야되려나..? 아하 나누기!

let i7 = parseInt(i6/100000) // 십만원 수
let i8 = parseInt((i6-i7*100000)/10000) // 만원 수
let i9 = parseInt((i6-i7*100000-i8*10000)/1000 ) //천원 수

alert(`오만원 권: ${i7*2}, 만원 단위: ${i8}, 천원 단위: ${i9}`)
  */


// -문제7 : prompt 함수 로 아이디와 비밀번호를 입력받아 아이디가 admin 이고 비밀번호가 1234 와 일치하면 [ 결과 : true 출력 아니면 false 출력 ]

/* const i10 = prompt(`아이디를 입력하세요.`)
const i11 = prompt(`비밀번호를 입력하세요`)

if ( i10 == `admin` && i11 == 1234){alert(true)}else{alert(false)}
 */
// -문제8 : prompt 함수로 정수를 입력받아 홀수 이면서 7배수이면 true 아니면 false 출력
// -문제9 : 정수 2개를 입력받아 더 큰수 를 출력

// -문제10 : 정수 3개를 입력받아 가장 큰수 를 출력 