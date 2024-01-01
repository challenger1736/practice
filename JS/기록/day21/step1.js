// p.276

console.log(Math.PI)

console.log(Math.random())

const num = Math.random()

console.log(num);

console.log(num*10);
console.log(num*50);
console.log(num*10-5);

console.log(Math.floor(3.14))
console.log(Math.floor(3.78))   // 소수점을 변환
console.log(parseInt(3.78))     // 정수로 변환
console.log(3.78.toFixed(0))     // 반올림 0번째 자리까지, String으로 반환

console.log(Math.floor(num*10-5))
console.log(Math.floor(num*50-25)) //25까지 나오게하려면 어떻게 해야할까
console.log(Math.floor(num*26)) //이렇게 해야지 0<= x < 26 까지 정수로 나옴, 그럼 25.00까지 나오게하는 소수점은 뭐가 있을까
console.log(Math.floor(num*26)-Math.floor(num))  // 이거려나.. 수학적으로는 num*25랑 같지만 컴퓨터로는 다를 듯

const _object = { //  변수/상수 이름 정의할때 주의할 점 1. 숫자시작x 2. 일부특수문자가능 3. 띄어쓰기x 4.키워드 , 키워드를 쓰는 다른 언어가 있기 때문에, 앞에 _을 붙이거나 기능이름을 붙이거나 그런 개발자가 많다.
    name : '혼자 공부하는 파이썬' ,
    price : 18000 , 
    publisher : '한빛미디어'
}

if (_object.name !== undefined){
    console.log('name 속성이 있습니다.')
} else {console.log('name 속성이 없습니다.') }

if (_object.author !== undefined){
    console.log('author 속성이 있습니다.')
} else {console.log('author 속성이 없습니다.') }
