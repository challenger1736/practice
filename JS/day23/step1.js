document.addEventListener('DOMContentLoaded', function(){

    const textarea = document.querySelector('textarea')
    const h1 = document.querySelector('h1')

    textarea.addEventListener('keydown', function(e){
        console.log(e)
        console.log(e.code); // 입력한 키의 문자열 표시
        console.log(e.keyCode) // 입력한 키의 숫자로 표시
        console.log(e.altKey)
        console.log(e.ctrlKey)
        console.log(e.shiftKey)
        const length = textarea.value.length
        h1.textContent = `글자 수: ${length}`
    })

    // 1. 별 기본 설정
    const star = document.querySelector('h2')
    star.style.position = 'absolute'
    /* style 속성 조작 */

    let x = 0;  //가로
    let y = 0;  //세로
    const block = 20 // 이동단위

    // 2. 별 위치 함수
    const print = function(){
        star.style.left = `${x*block}px`
      
        star.style.top = `${y*block}px`
   
    }

    print();
    // 3. 별 위치 이동하는 이벤트
        //3-1 키보드 방향키의 키번호
    const left = 37; const up = 38; const right = 39; const down=40;
        //3-2 body(전체)에서 키를 눌렀을때 이벤트 발생
    document.body.addEventListener('keydown', function(e){
        console.log(e)
        if( e.keyCode == left ){ x-- }  // 왼쪽 방향키를 눌렀을때, x 1감소
        else if( e.keyCode == right ){ x++}
        else if( e.keyCode == up ){ y-- }
        else if( e.keyCode == down ){ y++ }
        else{}

        print();
    })


})

//keydown은 하나씩 밀림(반응의 차이) - 키를 누를 때의 상태가 글자가 0개 이므로, 이런 식으로 발동하는 듯하다.
