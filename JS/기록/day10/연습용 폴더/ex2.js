console.log('동해물과 백두산이\n마르고 닳도록'); /* 개발자 도구로는 안보임 */

console.log('이름\t나이\t지역'); /* 재밌다! */

console.log('가나다'+'라마'+'바사아'+"자차카타"+'파하'); /* ''과 ""구분 없이 잘 + 연결연산자 됨 */

console.log('안녕하세요'[0]);
console.log('안녕하세요'[1]);
console.log('안녕하세요'[2]);
console.log('안녕하세요'[3]);
console.log('안녕하세요'[4]);

console.log('안녕하세요'.length)
console.log('13'.length)
/* console.log(13.length) 이건 안됨 */

console.log(5+3*2)
console.log((5+3)*2)

console.log(10%2)
console.log(10%3)
console.log(10%4)

console.log(true)
console.log(false)

console.log(!false) /* true */
console.log(!true) /* false */

console.log(typeof('문자열'))
console.log(typeof(273))
console.log(typeof(true)) /* 자바할 때 수동이기떄문에 자주 쓰임. 자료형 확인 */

const name = "name이라는 이름의 상수를 선언해볼게요."

/* const name = "한번 더 선언해볼게요." Uncaught SyntaxError: Identifier 'name' has already been declared */

/* const name2 
선언 안해서 에러 뜸 Uncaught SyntaxError: Missing initializer in const declaration (at ex2.js:38:7) */

let name3
var name4       /* const 아니고 let var등 변수는 선언안해도 에러 안뜸 */

/* name = "그 값을 변경해 볼게요" */
/* ex2.js:44 Uncaught TypeError: Assignment to constant variable. at ex2.js:44:6 이건 해석하기도 어렵네, 상수 변수에 할당 외우기 */

let value = 10
console.log(value)/* 10 */
value += 10 
console.log(value)/* 20 */
value -= 10 
console.log(value)/* 10 */
value /= 10
console.log(value)/* 1 */





