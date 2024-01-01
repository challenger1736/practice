
// HTML을 모두 읽었을 때, 해당 함수 실행
document.addEventListener('DOMContentLoaded', function(){
    // 2. h1 요소를 객체로 1개(querySelector) 가져오기
    const header = document.querySelector('h1'); console.log(header);
        //document.querySelector('h1')              해당 요소를 객체로 호출
        //document.querySelector('h1').value        해당 요소의 입력된 값 호출[* 단 value 입력관련 요소만 가능] : input, select, textarea 등.. / div, h1. span등은 value를 줘도 사용이 가능은 하나 별 쓸모가 없어서 의미가 없다.
        //document.querySelector('h1').innerHTML    해당 요소 사이의 HTML을 텍스트 호출. 상위 요소가 없는 애들 <input />, <br/> , <img />등은 안됨 [ 사이에 있는 마크업이 있으면 코드로 읽어옴 ]
    header.textContent = 'HEADERS';             // DOM 객체명.textContent : 텍스트 호출 [ 텍스트 그대로 ]
    header.style.color = 'white';               // DOM 객체명.style.css속성명 = '값';
    header.style.backgroundColor = 'black';
    header.style.padding = '10px'
        // css : background-color vs js : backgroundColor : 카멜 표기법 (-는 js에서 연산자로 취급되기 때문에.)
});

document.addEventListener('DOMContentLoaded', function(){
    // 2. h1 요소를 객체를 여러개 배열로(querySelectorAll) 가져오기
    const headers = document.querySelectorAll('h1'); console.log(headers);
        //document.querySelector('h1')              해당 요소를 객체로 호출
        //document.querySelector('h1').value        해당 요소의 입력된 값 호출[* 단 value 입력관련 요소만 가능] : input, select, textarea 등.. / div, h1. span등은 value를 줘도 사용이 가능은 하나 별 쓸모가 없어서 의미가 없다.
        //document.querySelector('h1').innerHTML    해당 요소 사이의 HTML을 텍스트 호출. 상위 요소가 없는 애들 <input />, <br/> , <img />등은 안됨 [ 사이에 있는 마크업이 있으면 코드로 읽어옴 ]

    for(let i = 0 ; i<headers.length ; i++){

    if(i%2==0){headers[i].style.color = 'red';}
    else{ headers[i].style.color = 'gold'; }        // DOM 객체명.style.css속성명 = '값';
    headers[i].textContent = 'HEADERS';             // DOM 객체명.textContent : 텍스트 호출 [ 텍스트 그대로 ]
    headers[i].style.backgroundColor = 'black';
    headers[i].style.padding = '10px'
}
    // css : background-color vs js : backgroundColor : 카멜 표기법 (-는 js에서 연산자로 취급되기 때문에.)
    const a = document.querySelector('#a');
    const b = document.querySelector('#b');

    a.textContent = `<h1>textContent 속성</h1>`; // 문자 그대로
    b.innerHTML = `<h1>textContent 속성</h1>`;  // html 형식을 맞춰서
});
