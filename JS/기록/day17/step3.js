// 1. 글 쓰기// 2-1. 모든 글 출력 2-2 개별 글 출력 // 3. 글 수정 // 4. 글 삭제
// 1.   C   //  2.      R                        // 3.     U   // 4. D


//0. 전역변수 [ 배열 ]
    // - 속성[상태]마다 배열을 하나씩 만들면 배열이 너무 많아진다. 관리 힘들다..
    // 객체 지향 나오기 전..여러 속성들을 하나의 배열에서 관리하고 싶다.
        // 1. boardArray로 한 곳에 다 넣는다.
            // 하나의 서로 다른 유형의 4가지의 데이터를 하나의 배열에 저장하므로, 인덱스 관리가 힘들다.
        // 2. boardArray = [ "작성자/비밀번호/제목/내용" , "작성자/비밀번호/제목/내용",  "작성자/비밀번호/제목/내용" ]
            // - 기준문자 추가해서 여러개의 데이터를 저장한다. 여러 유형의 4가지 데이터를 하나의 문자열로 묶음 "단 구분이 있어야함 [구분 문자는 개발자 마음]"
            // - 입력 데이터에는 구분문자가 포함되면 안된다.
            // - 단점 : 분해 하고 분해후 순서를 기억해야한다.
    // 배열의 요소 구분 ,

/* const writerArray=[];
const passwordArray=[];
const titleArray=[];
const contentArray=[]; */

const boardArray = []; 

//1. [C]글쓰기 [글쓰기 버튼을 클릭했을 때.]
function 글쓰기(){ // 매개변수 : X // 리턴값 : X
    //1. HTML로부터 입력받은 값 가져오기
    const writer = document.querySelector('#writer').value;
    const password = document.querySelector('#password').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    
    //2. 배열에 저장하기
/*     writerArray.push(writer); console.log(writerArray);
    passwordArray.push(password);  console.log(passwordArray);
    titleArray.push(title);  console.log(titleArray);
    contentArray.push(content);  console.log(contentArray);
 */
    // ** 직접 / 구분해서 하나로 만들었는데 이제는 객체로 하나로 만들기.
    const board = {
        작성자 : writer,
        비밀번호 : password,
        제목 : title,
        내용 : content,
    } 
    board.조회수 = 0, // 객체내 없는 key 호출할 때... key 생성. // 이제 등록 했으니까 조회수는 0부터 시작하자.★★★★★
    boardArray.push(board); console.log(boardArray);
    //3. 배열 HTML에 출력하기
    
    document.querySelector('#writer').value = ``;
    document.querySelector('#password').value = ``;
    document.querySelector('#title').value = ``;
    document.querySelector('#content').value = ``;


    모든글출력();

    return;
}

//2-1. [R]모든글 출력 [1.js가 열렸을 때 2. 글쓰기/글수정/글삭제 처리 할때마다]
function 모든글출력(){ // 매개변수 : X // 리턴값 : X
    const tableBody = document.querySelector('table>tbody');

    let html = ``; // 없는 문자열을 html(document 명령어)으로 넣을거라서 빈 문자열 만들어 놓기( let 이름 = `` ;)

    for(let i = 0; i< boardArray.length ; i ++){
        console.log(boardArray[i]);
        html +=`<tr onclick="개별글출력(${i})">
                 <th>${i}</th> 
                 <th>${boardArray[i].제목}</th> 
                 <th>${boardArray[i].작성자}</th>
                 <th>${boardArray[i].조회수}</th>     
                </tr>`
                // index , index의 title, index의 writer
    }

    tableBody.innerHTML = html; // html에 출력;

    return;
}

//2-2. [R]글쓰기 [글쓰기 버튼을 클릭했을 때.]
function 개별글출력(index){ // 매개변수 : 보고자하는 글의 식별 번호 // 리턴값 : X
    console.log(index);

    // 조회수 증가
    boardArray[index].조회수 += 1;

    const boardBox = document.querySelector('#boardBox');
    let html = `<div> 작성자 : ${boardArray[index].작성자} 조회수: ${boardArray[index].조회수}</div>
                <div> 제목 : ${boardArray[index].제목}</div>
                <div> 내용 : ${boardArray[index].내용.replaceAll(`\n`,`<br/>`)}</div>
                <input onclick="글수정(${index})" type="button" value="수정"/>
                <input onclick="글삭제(${index})" type="button" value="삭제"/>
                `
    boardBox.innerHTML=html;

    모든글출력();
   
    return;
   
}
//3. [U]글수정 [글수정 버튼을 클릭했을 때.]
function 글수정(index){ // 매개변수 : (대상)수정할 식별번호 // 리턴값 : X 
    console.log(index);
    

    const checkPw = prompt('비밀번호')
    if (checkPw==boardArray[index].비밀번호){ //1. 검증[유효성 검사]- 패스워드를 입력받아.. 해당 게시물의 패스워드와 동일하면.
        // 수정할 값들을 입력받아.
        const updateTitle = prompt('수정할 제목');
        const updateContent = prompt('수정할 내용');
        // 수정처리 [ 기존데이터와 새로운 데이터 다시 합쳐서 수정. ]
        //boardArray[index] = `${boardArray[index].작성자}/${boardArray[index].비밀번호}/${updateTitle}/${updateContent}`; // 한 줄로 안하면 ENTER까지 들어감.
        boardArray[index].제목 = updateTitle;
        boardArray[index].내용 = updateContent; //다시 합칠 필요가 없이 (길게 써줄 필요 없이) 이렇게 하면 자동으로 바뀜!

        alert('수정 성공');
        // 새로고침
        모든글출력(); 개별글출력(index);
    }
    else{
        alert('패스워드가 다릅니다. 수정 불가.')
    }

    
    return;
}

//4. [D]글삭제 [글삭제 버튼을 클릭했을 때.]
function 글삭제(index){  // 매개변수 : (대상)삭제할 식별번호 // 리턴값 : X
    console.log(index);
    const checkPw = prompt(`비밀번호`);
    if(checkPw == boardArray[index].비밀번호){
        //삭제 처리
        boardArray.splice(index,1);
        alert('삭제 성공')
        모든글출력();
        document.querySelector('#boardBox').innerHTML=``; // 개별글보기 구역 초기화
    }
    else{
        alert('패스워드가 다릅니다. 삭제 불가.')
    }

    return;
}



/* 
    함수 만들때 고민할 점
        1. 언제 실행하는 함수인지?
        2. 함수 안으로 넣을 매개변수?
        3. 함수 밖으로 반환할 값?
        4. 무엇을 실행 하는지?

*/