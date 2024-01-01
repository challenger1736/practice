console.log('js열림'); // 스크립트 실행이 아예 안되면 안 켜짐
    // 거의 파일 경로의 문제다.

const 회원배열 = [] ; // 여러 회원이름을 저장하는 배열

function 회원등록(){ // f start // 선언 - 선언 하는거지 실행안 됨!
    // const 회원배열 = [] // !!! 여기 넣으면 안 됨 : 함수 호출될 때마다 실행되는 구역 -> 함수 호출될 때마다

    // - 배열을 위에 선언/생성한 이유
        //1. 선언은 1번만 되어야한다. [ 왜??? 선언이 계속되면 초기화되서 누적 불가능 ]
        //2. 여러 {}에서 호출/사용 해야 하므로 전역 사용.
        //아래 예 funtion 회원등록(){ const 회원배열 =[] } , funtion 회원삭제(){ const 회원배열 =[] }
/* 
=========JAVA SCRIPT=========

    { }안에서 선언된(태어난) 변수/상수는 { } 밖으로 나올 수 없다. 하위 { } 안으로는 들어갈 수 있다.

    let 변수 = 30;  // 전역에서 쓸수있는 전역 변수



    function 함수(){
        let 변수2 = 40;
        console.log(변수1)

    }





    if(조건){
        let 변수3 = 50;
    }

=========JAVA SCRIPT=========

*/


    //console.log(`회원등록함수 실행`);

  /*   //1. [입력] : input로 부터 입력받은 값[value] 호출 해서 name 상수 저장.
    const name = document.querySelector('#nameInput').value;
        // document.querySelector('#nameInput')
            // <input id="nameInput" value="" type="text" />
        // document.querySelector('#nameInput').value >> 얘의 속성을 가져온다
        console.log(name);
    //2. [처리] // 등록처리 -> 배열에 추가 // return : 함수 반환/리턴/함수(function)종류/아래코드 안된다.
        // - 아래 3가지중에 하나라도 충족하면 return 만나면 아래코드 실행 안되고 그래서 push 불가능!
        // [ 부가기능2] 만약에 입력받은 이름이 이미 배열에 존재하면 [중복발생]
        // 중복이면 배열에 push 하지말기.
    if( 회원배열.indexOf(name) >= 0 ){alert('현재 등록된 이름입니다.[중복]')} // 존재하면 인덱스번호 반환 / 없으면 -1
    else{ 
         // [ 부가기능2] 회원명은 3글자일 경우에만 가능
        // 입력값에 글자수가 3이 아니면 입력불가 해주고, 배열에 push 하지 말기.
        if(name.length != 3){alert('회원명은 3글자로 입력해주세요.')}
        else{


            // [ 부가기능2] 만약에 입력받은 이름에 숫자가 포함되어 있으면
            // 입력값에 alert로 숫자는 입력불가 해주고, 배열에 push 하지말기.
                // isNaN() 문자인지 숫자인지 판단 vs 자료변환
            console.log(isNaN(name[0]));
            console.log(isNaN(name[1]));
            console.log(isNaN(name[2]));
            if ( !isNaN(name[0])|| !isNaN(name[1])|| !isNaN(name[2]) ){// || 하나라도 숫자이면
                alert('숫자를 입력할 수 없어요')
            }else{
               */

                 // 1. [입력] : input로 부터 입력받은 값[value] 호출 해서 name상수 저장.
    const name = document.querySelector('#nameInput').value;  


    if( 회원배열.indexOf( name ) >= 0 ){ alert('현재 등록된 이름입니다.[중복]'); return; }
    if( name.length != 3 ){ alert('회원명 3글자로 입력해주세요.'); return; }
    if( !isNaN(name[0]) || !isNaN(name[1]) || !isNaN(name[2] ) ){ alert('숫자를 입력할수 없어요.'); return;}
    /* 숫자가 들어가면 !false 이므로 true라서 alert 알림창이 뜸. */
회원배열.push( name ); // 입력된 값을 배열에 추가 

// 3. [출력]
document.querySelector('#nameList').innerHTML = 회원배열;
// [ 부가기능1] 등록후 input 상자 초기화 [ input에 value에 빈문자열 넣어주기 ]
document.querySelector('#nameInput').value ='';
            
            
        

     

            } /* if 3 end */
            //-------------------------------------------------------------------------------
        //} /* if 2 end */
        //-------------------------------------------------------------------------------
    //} /* if 1 end */
//---------------------------------------------------------------------------------------
    

//}// f endㄴ

//document : HTML 전체
    // querySelector('선택자')
        // .innerHTML : <마크업>여기!<마크업>


/* function 함수1() { //함수 선언
    document.querySelector('div').innerHTML = 회원리스트;
}
 */

function 회원삭제(){ //f start
    //console.log(`회원삭제함수 실행`);
    //1.[입력]
    const name = document.querySelector('#nameInput').value; /* 전에 선언 했지만 그건 함수안에서 선언 한 것 이므로 또 해줘야함 */
    //2.[처리] 삭제 처리 -> 배열에서 요소 제거
        // 입력한 값이 존재하면 삭제, 없으면 없다고 출력
    const deleteIndex = 회원배열.indexOf(name);
    if( deleteIndex >=0 ){// .indexOf(): 존재하면 0이상의 인덱스위치 반환
        회원배열.splice(deleteIndex,1); alert('삭제 했습니다.')
        }
    else{ alert('등록되지 않은 이름입니다')}
    //3.[출력] -> 새로고침 (배열내 요소가 변경되었으니까, 화면도 다시 출력) ] 재 랜더링해야됨
    document.querySelector('#nameList').innerHTML = 회원배열;
    document.querySelector('#nameInput').value ='';
} // f end

//선언 키워드

// 변수 let 상수 const 함수 function