// 1. 익명함수

const 함수명1 = function(){}

// 2. 선언적 함수

function 함수2(){}

// [p. 321]
document.addEventListener('DOMContentLoaded', function(){
    // 1. 각 부모 요소 2개 호출
    const divA = document.querySelector('#first');
    const divB = document.querySelector('#second');
    // 2. <h1> 요소 생성
    const h1 = document.createElement('h1');
    console.log(h1)
    // 3. h1 요소에 내용 추가.
    h1.textContent = '이동하는 h1 태그' ;
    
    // 4. 함수1 정의 : 부모 1에 h1을 대입
    const toFirst = function(){
        divA.appendChild(h1);
        setTimeout(toSecond, 10000); // 10000 => 10초, 1000 => 1초

    }

    // 5. 함수2 정의 : 부모 1에 h1을 대입
    const toSecond = function (){
        divB.appendChild(h1);
        setTimeout(toFirst, 10000 );
    }

    toFirst();

    // [p. 322]
    // 원형 : set Timeout (함수, 밀리초);
    
    setTimeout( function()
    {const h2 = document.querySelector('h2');
    console.log(h2.parentNode); // 객체명.parentNod : 해당 객체의 부모 => body
    h2.parentNode.removeChild(h2)
    }, 3000 )

    // [p. 323]

    let counter = 0;
    const h3 = document.querySelector('h3')

    h3.addEventListener('click', function(e){ //e 이름은 아무거나
        // 1. click 이벤트가 발생할때 실행되는 함수. addEventListener
        // 2. 그 이벤트를 발생한 결과내용을 콜백함수의 매개변수로 전달.
        // 왜??? 클릭 이벤트에 필요한 정보가 있으면 활용해서 쓸 수 있도록. (console에 정보잇음)
        console.log(e)
        counter++
        h3.textContent = `클릭횟수 : ${counter}`;
    })


    })


    /*     // 1. 익명함수를 선언       [재호출 O]
    const 삭제함수1 = function(){}
    setTimeout (삭제함수1, 3000);   

    // 2. 익명함수를 상수에 대입X [재호출 X]
    setTimeout(function(){},3000);

    // 3. 선언적함수를 선언       [재호출 O]
    function 삭제함수2(){
        const h2 = document.querySelector('h2');
        h2.parentNode.removeChild(h2);
    }

    setTimeout(삭제함수2(),3000) */