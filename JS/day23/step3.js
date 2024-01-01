// 기존에 있는 자료를 select에 넣을때.
const category = [ '떡볶이' , '순대', '오뎅', '튀김'];

document.addEventListener('DOMContentLoaded', function(){
    //2.
    const selectBox = document.querySelector('#selectBox')
    let html = ``;
    for(let i = 0 ; i<category.length ; i++){
        html += `<option>${category[i]}</option>`
    }

    selectBox.innerHTML = html;
    // textContent : 문자열 그 자체 // innerHTML : 문자열 HTML 형식으로 넣기

    // p.343
    //1. 각 요소 객체로 호출
    const select = document.querySelector('select');
    const p = document.querySelector('p')
    //2. 요소의 이벤트 change: value의 값이 바뀔때 마다, 등록
    select.addEventListener('change', function(event){
        console.log(event); // change 이벤트 결과 정보 객체
        console.log(event.currentTarget); // change 이벤트를 발생시킨 요소
        console.log(event.currentTarget.options); // select 하위 요소들/배열 반환
        //[방법 1]
        const options = event.currentTarget.options;
        const index = event.currentTarget.options.selectedIndex

        p.textContent = `선택 : ${options[index].textContent}`

        //[방법 2]
        console.log(select.value);
        p.textContent = `선택: ${select.value}`

    })

    // p.345
    let 현재값;
    let 변환상수=10;

    const select3 = document.querySelector('select:nth-child(6)') // select중에서 3번째 놈 가져옴; 근데 바디 아래 모든 요소 중에선 6번째....? 이런식.

        console.log(select3)
    const input = document.querySelector('input');
    const span = document.querySelector('span');
    // 2. 계산 출력함수
    const calculate = function(){
        span.textContent = (현재값*변환상수).toFixed(2); // toFixed : 소수점 자르기 함수

    }
    // 3. select3 값을 change 했을때
    select3.addEventListener('change', function (event) {
        const options = event.currentTarget.options;
        const index = event.currentTarget.options.selectedIndex;
        변환상수 = Number( options[index].value);
        // 변환상수 = Number (select3.value);

        calculate();
        
    })  // end
    // 4.+ input의 값을 keyup 했을때
    input.addEventListener('keyup', function(event){
        현재값 = Number( event.currentTarget.value);
        // 현재값 = Number (input.value);

        calculate();
    })
    
})// e end