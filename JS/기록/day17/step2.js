/* 
    JS 자료형
        const 변수 = 10
        const 변수 = "10"
        1. 숫자                 1  VS  2  VS  3
        2. 문자열               ""  VS '' VS ``
        3. 불                    true vs false
        4. undefined 자료데이터 없다 , undefined vs "" vs 0 다른 것!
        5. 배열              [ 자료, 자료, 자료 ]
                                -1.[ 숫자 , 문자열, 불, 배열 ]
                                -2.[ 숫자 , 문자열, 불, 배열 , 변수, 상수, 함수, 객체{} ]
        6. 함수             function
                                -1. const/let 변수명 = function(){}
                                -2. function 함수명(){}
        7. 객체(object)     { key : 1, key : value, key : value }
    
                            - 1. {
                                key : 1,
                                key : "유재석",
                                key : true ,
                                key : [],
                                key : {},
                                key : function(){}
                            }

        
    // TOUR API (여행) 데이터 국가에서 받는 데이터; 70퍼 정도가 JSON(객체)
    // 공공데이터 포털
*/

// p.246
console.log({ });

//1. object객체를 만들어서 상수에 대입

const product = {
    제품명 : '7D 건조 망고' , // key '제품명' , value '7D 건조 망고' = 속성 property\
    유형 : '당절임',
    성분 : '망고, 설탕, 메타중아황산 나트륨, 치자 황색소',
    원산지 : '필리핀'
}

//2. 객체 호출

console.log(product)


//3. 객체내 속성 호출 객체명 ['keyName'] : 해당하는 키의 값을 호출. vs 객체명.keyName : 해당하는 키의 값을 호출 >> 왠만하면 . 사용하기 자바까지 이렇게 쓰기 떄문에!!

console.log(product['제품명'])

console.log(product['유형'])

console.log(product['성분'])

console.log(product['원산지'])

console.log(product.제품명);
console.log(product.유형);
console.log(product.성분);
console.log(product.원산지);


const object = {
    number : 273,
    string : '구름',
    boolean : true,
    array : [52, 273, 103, 32],

    method : function (){},
    객체3 : { method2 : function(){} }
}

console.log(object) // console: 객체 내 log라는 속성의 함수를 호출
// document.querySelector();    // document 객체 내 querySelector 속성에 함수 호출
// .(온점) : 접근 연산자 객체내 속성에 접근
object.method();    // 객체 내 속성(메소드) 호출
object.객체3.method2(); // 객체 내 속성(객체) 호출 // 그 객체내 속성(메소드2) 호출

const pet = {
    name : '구름',
    eat : function (food){
        alert(`${this.name}은/는 ${food}을/를 먹습니다.`);
        //this란? 함수내에서 현재객체내 속성을 호출할때 사용하는 키워드임!
        // this.key 로 사용
    },
    eat2(food){`${this.name}은/는 ${food}을/를 먹습니다.`} // 함수명이 속성명을 대신한다.
}
pet.eat(`도시락`);
pet.eat(`라면`);

//p.249~p.250
const student = {}
student.이름 = '윤인성'
student.취미 = '악기'
student.장래희망 = '생명공학자'

console.log(student)

delete student.장래희망;
student.장래희망 = '생명공학자'
student.장래희망 = '생명공학자2'
console.log(student)