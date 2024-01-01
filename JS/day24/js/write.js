// [1] 피드/게시물 등록 함수 ( 1. 피드게시버튼을 클릭했을때 )
function 피드등록(){
    console.log('피드등록()')

    //1. 각 요소의 입력값 호출
    const fpwd = document.querySelector('input').value;
    const fcontent = document.querySelector('textarea').value;
        // - 사진
        if(fpwd.length<1){alert('패스워드 입력해주세요.'); return;}
        if(fcontent.length<1){alert('내용을 입력해주세요.'); return;}
        if( imgByte == '' ){alert('대표 이미지를 넣어주세요'); return;}
    
        console.log(fpwd);
        console.log(fcontent);

            // 3. 기존 localStorage 호출
    let feedList = JSON.parse(localStorage.getItem('feedList'));
    console.log(feedList);
    if(feedList==null){feedList=[];};

    // 2. 객체화 [ 설계 ]

    const feed = {
        fno : feedList.length == 0 ? 1 : feedList[feedList.length-1].fno+1,    // [!] 게시물번호를 자동으로 순차적으로 배정. [마지막 게시물의 fno + 1 ]
        fimg : imgByte,   // [!] input file로 등록된 사진()
        fdate : new Date() , // new Date() :현재 날짜/시간 호출
        fcontent : fcontent.replaceAll('\n' ,'<br/>'), // 문자열.replaceAll('교체할문자','새로운문자') : 문자 치환/교체
        fgood : 3,
        fbad : 1,
        fpwd : fpwd
    }
    console.log(feed);


    
    // 4. 피드목록에 등록한 피드 푸쉬
    feedList.push(feed)

    // 5. localStorage 저장 [ !! : localStorage문자열만 저장가능하므로 ]
    localStorage.setItem('feedList', JSON.stringify(feedList))

    alert('등록성공'); location.href='index.html'
    
}   //f end

// [2] 이미지 등록함수 ( input(file)에서 첨부파일을 등록(onchange)할때마다.)
let imgByte = '';
function 이미지등록(event){
/*     console.log('이미지등록')
    console.log(event)
    console.log(event.target)
    console.log(event.target.files) // input type file 속성일때만 가능한 속성
    console.log(event.target.files[0])  */// 등록 첨부 파일의 파일객체를 준다.
     
    // [1] 첨부파일 input에 등록된 파일을 바이트 가져오기
        // 1. 파일 읽기 클라스. new FileReader()
    let 파일읽기객체 = new FileReader(); //파일 읽기 객체 생성 [ 도구 구매 ]
        // 2. 파일을 JS로 읽어들이기. [ 내가 등록한 파일을 ]
    파일읽기객체.readAsDataURL(event.target.files[0])
        console.log(파일읽기객체);
        // 3. 읽어온 바이트를 img태그에 출력
    파일읽기객체.onload = function(){
        document.querySelector('#fileImg').src = 파일읽기객체.result
        imgByte = 파일읽기객체.result; // 이미지바이트를 전역변수에 대입.
    }   //o end

}
