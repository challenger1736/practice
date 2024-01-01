
const 할일목록 = []; // 할 일의 내용을 배열으로!! 저장!!!!!!!!!!!!!!!!!!!
const 상태목록 = []; // 할 일의 상태를 배열으로!! 저장!!!!!!!!!!!!!!!!!!!

// let 할일 = document.querySelector('#content').value // html이 켜지고 js가 켜지고 body가 켜지므로 js는 값을 찾을 수 없다

function 등록(){
    console.log('등록function 시작')
    // 1. 입력 : html input 값을 들고온다
    const content = document.querySelector('#content').value;
    console.log(content)
    // 2. 처리 : 입력 받은 값 배열 저장
   할일목록.push(content);
   상태목록.push(false); //  false boolean 그자체를 목록에 push
   console.log(할일목록); console.log(상태목록); // 확인해 보기
    // 3. 출력
    출력()

   
    


    // 1. 배열 내 모든 요소를 하나씩 꺼내기
    
    document.querySelector('#content').value = ""; alert('등록 성공')
    
}

function 변경(변경할인덱스){
    console.log('매개function 시작'+변경할인덱스)
    //1.입력 x
    //2. 처리 false -> true / true -> false
    상태목록[변경할인덱스] = !상태목록[변경할인덱스]; // 기존의 반대를 대입한다.
    console.log(상태목록);
    //3. 출력 
    출력() /* 이런거 까먹기 쉬움!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
}

function 삭제(삭제할인덱스){
    console.log('삭제function 시작'+삭제할인덱스)
    //1.입력 x
    //2.처리 // 배열 요소에서 삭제 .splice()
    할일목록.splice(삭제할인덱스, 1); // 할인목록 도 1개 삭제
    상태목록.splice(삭제할인덱스, 1); // 상태목록 도 1개 삭제
    
    출력() /* 이런거 까먹기 쉬움!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

}


// 4. 출력 함수 [ 등록 후, 변경 후, 삭제 후 = 배열의 최신상태를 HTML에 대입, 그려주는]


// 재 랜더링을 계속하는 경우가 많아서 출력함수를 또 만들어준다.
function 출력(){        // 1.[어디에] todoBottom에
    const todoBottom = document.querySelector('#todoBottom');
    // 2.[무엇을] 배열에 있는 여러 요소들을
    let html = ``;

    for(let i = 0; i<할일목록.length ; i++){

        html += `<div class="todo ${상태목록[i] ? 'success' : '' }">
                    <div class="content">${할일목록[i]}</div>
                    <div class="btnBox">
                        <input type="button" value="변경" onclick="변경(${i})"/>
                        <input type="button" value="삭제" onclick="삭제(${i})"/>
                    </div>
                </div>`
                }
    // 3.[대입]
    todoBottom.innerHTML = html;}