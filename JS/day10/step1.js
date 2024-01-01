
console.log('자바스크랩트실행2')

//90p

console.log() // 크롬 f12(개발자 도구 > console)

console.log(5+3*2);
console.log((5+3)*2); // 수학 같이 곱셈 먼저 하기때문에 묶어줘서 하나로 인식하게
console.log(5-3*2); 

console.log(10%2); // 10에서 2를 나눈 나머지 값 0
console.log(10%3); // 10에서 3를 나눈 나머지 값 1 /* ;자꾸 뺴먹음 ;주의 */
console.log(10%4); // 10에서 4를 나눈 나머지 값 2

console.log(10/2); // 10을 2로 나눈 값
console.log(10/3); // 10을 3으로 나눈 값

//몫 구하기 [parseInt() : 정수 = 소수점 버리기]

console.log(parseInt(10/3)); // 3.33333333333333333335 -> 3으로 떨어지게 


//90~91p bool 만들기

console.log(true);
console.log(false);

console.log(52>273);
console.log(52<273);

console.log(String(52>273)[0]);
console.log(typeof(52<273));

console.log(10===10); console.log(10==10);
console.log(10==="10"); console.log(10=="10");//false, true

console.log('가방'>'하마');//false
    // 오름차순 : 0 1 2 3 4 ~~, a b c d ~~ , ㄱ ㄴ ㄷ ㄹ (사전상 앞에 있으면 더 작게 인식함)

console.log(52>=273); //false 
console.log(52<=273); //true
console.log(10!=11); //true

/* 부정 연산자 ! */
console.log(!true); //true -> false
console.log(!false); //false -> true

/* 관계 연산자 */
console.log(true&&true); // true
console.log(true&&false); // false
console.log(false&&true); // false
console.log(false&&false); // false

console.log(true||true); //true
console.log(true||false); //true
console.log(false||true); //true
console.log(false||false); //false

/* 96~97p 자료형 검사 (현재 자료가 숫자인가? 문자열인가? 불인가? 확인 작업) 
        -왜? 유효성 검사 [ 데이터가 확인? -- 자료형 마다 다른 로직/기능 작업 -- 오류 피하기위해서*/

console.log(typeof('안녕하세요')); //'안녕하세요'의 자료형 확인 string[문자열]
console.log(typeof(273)); //273의 자료형 확인 number[숫자]
console.log(typeof('273')); //'273'의 자료형 확인 string[문자열]
console.log(typeof(true)); //true의 자료형 확인 boolean[불]

console.log(typeof '안녕하세요');
console.log(typeof 50);         console.log(typeof(50-30));
console.log(typeof false);      console.log(typeof(50<30));

console.log(typeof 50-30) // NaN 나옴 (typeof 는 단항연산자 = Number -30이 되므로 Not a Number)

console.log(typeof(typeof(50-30)))// number가 나올거니 number는 string이므로 string으로 나옴

//p.98 템플릿 문자열* (서로 다른 자료형들을 존재할때는 + 연결연산자)
console.log('표현식 273+52의 값은'+(273+52)+'입니다.');
        //  '     문자열         '+  숫자  +'문자열'
        // +연결연산자 이용하면 되지만... 너무 많으면 복잡해진다.
console.log(`표현식 273+52의 값은 ${273+52} 입니다`);
        // ` 백틱(탭[tab]위에`)
        // 1. ``으로 전체를 감싼다.
        // 2. 데이터를 출력할 위치에 ${데이터}
        // 3. html과 함께 많이 쓰게 될 것!

console.log(`표현식`);

//99p
console.log(1=="1");//데이터만 비교
console.log(false==0) ; // false는 0과 같다. true는 1 [2진수 -> 0,1 -> false,ture]
console.log(false===0) ; // 얘는 자료형이 다르므로 false는 불이고 0은 number
console.log(""==[]) // 빈문자열 과 빈배열과 같은 데이터 의미
console.log( 0 ==[] ) // 0과 빈 배열과 같은 데이터 의미


// 이게 힌트였네, 배열, 문자열, 수 쓸때 변수, 상수로 지정할 것들 [], "", 0 ;

