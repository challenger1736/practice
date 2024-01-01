/* 

    객체 : 속성과 메소드를 가질 수 있는 모든 것
        형태
            객체 선언 : const object = {}
            객체내 속성추가 : object.새로운속성명 = 값;
            객체내 속성의 값 호출 : object.속성명       vs object['속성명']
            객체내 속성의 값 변경 : object.기존속성명 = 값;
        - 배열도 객체
        - 함수도 객체

        - 기본자료형 (숫자, 불, 문자열) 객체 X
            1. 기본자료형 --> 객체로 변환 ( 객체 자료형, 래퍼 클래스 )
                - 왜?? 객체로 활용할려고 ( 속성/메소드 사용하니까.--부가기능, 부가속성 첨부하기 위해 )

            2. new : 객체를 만들때 쓰는 일반적인 new 연산자 ( 인스턴스 화 )
                new Number(숫자 자료형)
                new String(문자 자료형)
                new Boolean(불 자료형)

            3. 문자열 타입 [일시적 승급]
                - 속성을 추가는 할수 없지만. js만든 사람이 제공하는 속성은 사용이 가능하다.
            

*/

//p.257

const a = []// []대괄호 사용 했으므로 배열 (a상수에 배열 자료 저장)

a.sample = 10 // 객체.새로운속성명 = 값; // 객체에 속성추가

console.log(a.sample)

console.log(a)

console.log( typeof a ); // typeof 상수/변수

console.log(Array.isArray(a)) // is~~ : 확인하는 메소드!! Array.isArray()/ isNaN()이랑 비교됨 ! 기본 자료형이라 그럼  Number가



function b (){}

b.sample = 10

console.log(b.sample)

console.log(typeof b) // 함수는 객체의 특성을 완벽하게 가지고 있음. [ js만 ]

const c = 273

c.sample = 10

console.log(c.sample)   // undefined : 기본자료형 [ 객체가 아니므로 ]은 속성을 추가 할 수 없다.

const d = '안녕하세요'
d.sample = 10
console.log(d.sample)  // undefined : 기본자료형 [ 객체가 아니므로 ]은 속성을 추가 할 수 없다.
console.log(d.length)  // ????????? 일시적 승급 ( 기본 자료형을 객체 자료형으로 승급 )

const e = true
e.sample = 10
console.log(e.sample)  // undefined : 기본자료형 [ 객체가 아니므로 ]은 속성을 추가 할 수 없다.

//p.260

const f = new Number(273)
const f2 = new Number(273)
console.log(f) // {273}
console.log(f+f2) // 546
f.sample = 10;
f2.sample = 10;
console.log(f)
console.log(f.valueOf());
console.log(f2.valueOf());
console.log(f+f2) // 546

//p.261

console.log('안녕하세요'.length)
console.log('안녕하세요'.anchor('greeting')) // 문자열 기본자료형도 메소드 사용가능하다는게 중점이지 권장하지는 않는다는 것
console.log('안녕하세요'.bold('aaa'))

//p.263

Number.prototype.sample = 10;

const i = 273

console.log (i.sample)

const j = 100

console.log (j.sample)

const i2 = new Number ( 273 )
i2.sample2 = 10;
console.log(i2.sample2) // 10
const j2 = new Number ( 273 )
console.log(j2.sample2) // undefined


Number.prototype.power = function(n=2){     // 값이 없을때 매개변수의 값을 넣어준다. n=2로 넣어준다.
    console.log(`n : ${n}`)
    console.log(`this : ${this.valueOf()}`)
    return this.valueOf()**n
}

const ab = 12
console.log('ab.power():', ab.power())
console.log('ab.power(3):', ab.power(3))
console.log('ab.power(4):', ab.power(4))

const h = '안녕하세요'

console.log(h.indexOf('안녕')) // 문자열 내 '안녕'이 존재하면 앞문자의 인덱스로 추출.
console.log(h.indexOf('하세'))
console.log(h.indexOf('자바'))
    // vs
// console.log(h.contain('안녕')) // step1.js:121 Uncaught TypeError: h.contain is not a function 기능이 없다.

String.prototype.contain = function (data){
    return this.indexOf(data) >=0;  // 불 문장 0이상이면 true(존재하면 true) , 아니면 false
}
console.log(h.contain('안녕'))

String.prototype.contain = function (data){
    return this.indexOf(data)
}
console.log(h.contain('하세')); // h의 cotain 펑션을 작동시켜 그 펑션의 매개변수를 '하세'로 한다