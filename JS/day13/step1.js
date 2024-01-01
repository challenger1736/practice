console.log("step1.js 열림")

const idArray = [] ;
const pwArray = [] ;

function 회원가입(){ // f start // 선언부 // 실행조건 : 가입버튼을 클릭했을 때, <input onclick="회원가입()" type="button" value="가입" />
    console.log("회원가입 버튼 함수")
    // 1.[입력] document.querySelector('선택자').value
    const signID = document.querySelector('#signID').value; /*  ★★★★★ const랑 선택자 옆에 '' 쓰는거 까먹었었음 ★★★★★ */
    const signPW = document.querySelector('#signPW').value;
    // 2.[처리] 배열명.push(추가 할 요소)
    idArray.push(signID);
    pwArray.push(signPW);
    // 3.[출력]
    alert('회원가입이 되었습니다')
        document.querySelector('#signID').value = '' /* signID라고 썼으면 안되는데 풀어서 자료형으로 써서 상수를 재 지정한게 아님  */
        document.querySelector('#signPW').value = ''


} // f end


function 회원로그인(){ // f start // 선언부 // 실행조건 : 로그인버튼을 클릭했을 때, <input onclick="회원로그인()" type="button" value="로그인"/>
    console.log("회원로그인 버튼 함수")
    // 1.[입력]
    const loginID = document.querySelector('#loginID').value;
    const loginPW = document.querySelector('#loginPW').value;
    // 2.[처리]
    const sIndex = idArray.indexOf(loginID)
    if ( sIndex >= 0 && pwArray[sIndex] == loginPW ){
        alert('로그인 성공');
        document.querySelector('#loginID').value = ''
        document.querySelector('#loginPW').value = ''
    } else{
        alert('동일한 회원정보가 없습니다.');
    }
    
    // 3.[출력]
} // f end

/* 

    변수선언 : let 변수명 = 10;
    상수선언 : const 상수명 = 10;
    배열선언 : let/const 변수/상수명 = []
    함수선언 : function 함수명(){}

    변수호출 : 변수명
    상수호출 : 상수명
    배열호출 : 변수/상수명 또는 변수/상수명[인덱스]
    함수호출 : 함수명()

*/