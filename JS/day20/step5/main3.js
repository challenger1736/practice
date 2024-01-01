let 글출력 = JSON.parse(localStorage.getItem('글출력'))

상세글출력(글출력)

function 상세글출력(index){
    console.log('상세글 출력함수시작');
    let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
    const boardBox = document.querySelector('#boardBox');
    let html = `<div> 작성자 : ${identifyArray[index].writer} 조회수: ${identifyArray[index].조회수}</div>
                <div> 제목 : ${identifyArray[index].title}</div>
                <div> 내용 : ${identifyArray[index].content}</div>
                <input onclick="글수정(${index})" type="button" value="수정"/>
                <input onclick="글삭제(${index})" type="button" value="삭제"/>
                `

                
    boardBox.innerHTML=html;

    
}

function 글수정(글출력){ // 매개변수 : (대상)수정할 식별번호 // 리턴값 : X 
    console.log(글출력);
    let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
    
 
    const checkPw = prompt('비밀번호')
    if (checkPw==identifyArray[글출력].password){ //1. 검증[유효성 검사]- 패스워드를 입력받아.. 해당 게시물의 패스워드와 동일하면.
        // 수정할 값들을 입력받아.
        const updateTitle = prompt('수정할 제목');
        const updateContent = prompt('수정할 내용');
        // 수정처리 [ 기존데이터와 새로운 데이터 다시 합쳐서 수정. ]
        //boardArray[index] = `${boardArray[index].작성자}/${boardArray[index].비밀번호}/${updateTitle}/${updateContent}`; // 한 줄로 안하면 ENTER까지 들어감.
        if(updateTitle==''){alert('수정할 제목을 입력하세요!'); return;}
        if(updateContent==''){alert('수정할 내용을 입력하세요!'); return;}
        identifyArray[글출력].title = updateTitle;
        identifyArray[글출력].content = updateContent; //다시 합칠 필요가 없이 (길게 써줄 필요 없이) 이렇게 하면 자동으로 바뀜!

        
        // 새로고침
        localStorage.setItem('identifyArray' , JSON.stringify(identifyArray) )
        alert('수정 성공');
        상세글출력(글출력);
        
    }
    else{
        alert('패스워드가 다릅니다. 수정 불가.')
    }

   
    return;
}

function 글삭제(글출력){  // 매개변수 : (대상)삭제할 식별번호 // 리턴값 : X
    console.log(글출력);
    let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
    const checkPw = prompt(`비밀번호`);
    if(checkPw == identifyArray[글출력].password){
        //삭제 처리
        identifyArray.splice(글출력,1);
        alert('삭제 성공')
        location.href=`list.html`
   
    }
    else{
        alert('패스워드가 다릅니다. 삭제 불가.')
    }
    localStorage.setItem('identifyArray' , JSON.stringify(identifyArray) )
    return;
}
