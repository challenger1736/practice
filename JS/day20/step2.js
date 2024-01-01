
//p.267. 

// 1. toFixed(소수점) : 해당 소수점까지 출력[반올림]
const l = 123.456789;

console.log( l.toFixed(2))  //123.46    반올림을 해주는구나
console.log( l.toFixed(3))  //123.457   반올림을 해주는구나
console.log( l.toFixed(4))  //123.4568  반올림을 해주는구나
// 2. 숫자 유효성 검사 하려고 isNaN(숫자)
const m = Number('숫자로 변환할 수 없는 경우')
console.log(m);
console.log(m==NaN);                // NaN과 비교하면 무조건 false로 나옴 - 비교X
console.log(Number.isNaN(m));       // 그래서 isNaN()함수로 비교함

console.log(Number('숫자로 변환할 수 없는 경우')==m) // ?

// 3.isFinite(연산)
const n = 10/0
console.log(n)
const o = -10/0
console.log(o)
console.log(Number.isFinite(n))

//p. 269
// 1. .trim() : 문자열 양쪽 끝에 공백 없애기 왜?? 의미 있는 공백, 의미 없는 공백(공백 메모리)
const stringA = `
메시지를 입력하다보니 앞에 줄바꿈도 들어가고`

console.log(stringA.trim())
console.log(`       앞과        뒤에 공백도 들어가고        `.trim())

// 2. .split()
const timeList = "12:30\n15:20";
    console.log(timeList)
    
const timeArray = timeList.split('\n')
    console.log(timeArray)
const time = timeArray[0]
    console.log(time)
const hour = time.split(":")
    console.log(hour[0])

// 3. JSON : 다른 어플리케이션과 통신할 때 데이터 교환 목적으로 활용됨
    // 1. JS객체 --> JSON문자열 : JSON.stringify()
    // 2. JSON문자열 --> JS객체 : JSON.parse()

    // 356p. 좀 더 알아보기2
// - [ JS가 꺼지고/사라져도 사라지지 않는 메모리 ] 개방
    // - localStorage   : 브라우저[크롬,엣지]에 저장 , 브라우저 자체가 꺼지면 사라짐, 다른 탭에서 공유
    // - sessionstorage : 브라우저[크롬,엣지]에 저장 , 탭 꺼지면 메모리도 사라짐.   , 같은 탭에서 공유

// 예1)
// localStorage.setItem( 키 , 값 );
localStorage.setItem( '이름' , '유재석' ); // '이름' 이라는 키로 '유재석' 값을 저장. // localStorage라는 객체 하나에 키:값을 추가하는 개념
console.log( localStorage.getItem('이름') );    // '이름' 이라는 키를 넣어서 '유재석' 값을 호출 // 유재석   
    // vs
// JS 메모리 저장 [ JS가 꺼지면/사리지면 같이 사라짐. HTML 새로고침 바뀌면 JS메모리 초기화 ]
const _object = { 이름 : '유재석' } 
console.log( _object.이름 );
// 만약에 페이지가 바뀌면 어떻게 되느지??? step3

// 예2) localStorage: 브라우저(소프트웨어)에 저장이 되는데.. 브라우저는 객체몰라요.. 문자열.
const 회원목록 = [ { 이름 : '유재석' } , { 이름 : '강호동' } ];

localStorage.setItem( '회원정보목록'  , 회원목록 );

localStorage.setItem( '회원정보목록2' , JSON.stringify( 회원목록 ) );

//localStorage랑 JSON으로 저장하는건 한 묶음