
// 1. HTML 요소에서 onclick="함수()" : 인라인 이벤트 모델 [react]
function 인치변환(){ //선언적 함수.
      // 1. 각 요소 가져오기
      const input = document.querySelector('input')
      const p = document.querySelector('p')
       // 3. 입력받은 값 호출 해서 숫자로  변환
       const inch = Number(input.value);
       // 4. 유효성검사
       if(isNaN(inch)){
           p.textContent = `숫자를 입력해주세요.`
           return; // 함수종료 [ 아래코드는 실행 X ]
       }
       // 5. inch를 cm 변환
       const cm = inch*2.54
       p.textContent = `${cm}cm`
} // f end

// 2. .addEventListener('click' , 함수()) : 표준 이벤트 모델

document.addEventListener('DOMContentLoaded', function(){ // 익명함수
    
    // 1. 각 요소 가져오기
    const input = document.querySelector('input')
    const button = document.querySelector('button')
    const p = document.querySelector('p')

    // 2. 요소의 이벤트 등록
    button.addEventListener('click', function(){ 
        // 3. 입력받은 값 호출 해서 숫자로  변환
        const inch = Number(input.value);
        // 4. 유효성검사
        if(isNaN(inch)){
            p.textContent = `숫자를 입력해주세요.`
            return; // 함수종료 [ 아래코드는 실행 X ]
        }
        // 5. inch를 cm 변환
        const cm = inch*2.54
        p.textContent = `${cm}cm`
    })  // e end

    // [ p. 341 ]
    // 1. 각 요소 가져오기
    const email = document.querySelector('#email');
    const emailConfirm = document.querySelector('#emailConfirm');

    // 2. 이메일 유효성검사 함수 선언 - 선언한거지 호출한게 아니라서 아무 외부적인 기능이 없음.
    const isEmail = function(value){        
        return value.indexOf('@') > 1 && value.split('@')[1].indexOf('.') > 1   //return 은 bool으로 true나 false를 리턴함
        // value.IndexOf('@') > 1 : value에 @가 있으면
    }
    // 3. 요소의 이벤트[input에 keyup할때마다] 등록
    email.addEventListener('keyup', function(event){
        console.log(event);
        console.log(event.currentTarget);     // 현재 이벤트를 발생시킨 요소 주체 (이벤트 발생을 누가 한지 모를때)
        console.log(email.value);             // 입력 요소에서 입력값 호출      (이벤트 발생을 안다면 똑같다 그냥)
        console.log(event.currentTarget.value)// 이벤트 발생한 요소의 입력값 호출

        const value = event.currentTarget.value;
        if( isEmail(value)){ // 2번 주석의 함수 호출
            emailConfirm.style.color = 'green';
            emailConfirm.textContent = `이메일 형식입니다. : ${value}`

        }
        else{
            emailConfirm.style.color = 'red';
            emailConfirm.textContent = `이메일 형식이 아닙니다. : ${value}`
        }
    })
})  // e end