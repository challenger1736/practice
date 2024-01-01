/* 

    - 카페고리가 있다면(최상위)
        - 게시물(상위)
            - 댓글(하위)
                1. 관계파악.

                2. 데이터.
                    게시물 : 대표이미지, 등록날짜, 내용 , 좋아요 수, 싫어요 수, 비밀번호(삭제/수정시 사용)
                    댓글 : 내용, 등록날짜, 비밀번호(삭제시 사용)

                3. 식별자
                    1. 인덱스 [인덱스 변화 있을경우 절대적인 식별자 역할 힘듬. 임시용만 가능함.]
                    2. 식별자 만들기[1. 자동번호(1씩증가) 2. 데이터조합으로 쓰기(차차 써볼 예정)] 중복이 없어야한다!!.

                4. 관계데이터 대입 [하위에서 상위의 식별을 가지고 있어야한다.]
                    게시물 : +게시물 번호[식별]
                    댓글 : +댓글번호[식별], +게시물 번호[참조]


*/

let feedList = [

];

let replyList = [
    {
        rno:1,
        fno:1, //참조할 게시물 번호 = 상위의 식별번호
        rdate : '2023-12-30',
        rcontent : '댓글입니다1',
        rpwd : '1234'
    },
    {
        rno:2,
        fno:2, //참조할 게시물 번호 = 상위의 식별번호
        rdate : '2023-12-30',
        rcontent : '두번째 게시물 댓글입니다2',
        rpwd : '1234'
    },
    {
        rno:3,
        fno:1, //참조할 게시물 번호 = 상위의 식별번호
        rdate : '2023-12-30',
        rcontent : '첫번째 게시물 2번째 댓글입니다3',
        rpwd : '1234'
    }

]
document.addEventListener('DOMContentLoaded' , function(){
    모든피드호출();
})

// [1] 모든 피드(게시물) 출력함수 정의 ( 1.js열렸을때 2.등록,삭제,댓글등록/삭제 )
function 모든피드호출(){

    let feedList = JSON.parse(localStorage.getItem('feedList'));
    // 1. [어디에]
    const feedBox = document.querySelector('#feedBox');
    // 2. [무엇을]
    let html = '';
        // 2-1 모든 피드 출력[ 피드 목록/배열 에 있는 객체를 하나씩 호출  ]
        for( let i = 0 ; i<feedList.length ; i++  ){

            // 2-2 배열내 하나의 게시물/피드 추출 
            const feed = feedList[i];
            // 2-3 각 객체 정보를 HTML에 대입
            html += `<div class="feed"> 
                        <div> <img src="${ feed.fimg }" /> </div>
                        <div class="contentBox"> 
                            <div class="date"> ${ feed.fdate } </div>
                            <div class="content"> ${ feed.fcontent }  </div>
                        </div>
                        <div class="btnBox">
                            <div> <!-- 왼쪽 버튼들-->
                                <button onclick="수정페이지이동(${ feed.fno })" type="button">수정</button>
                                <button onclick="피드삭제(${ feed.fno })" type="button">삭제</button>
                                <button type="button">답글</button>
                            </div>
                        <div>
                            <span> 👍 ${ feed.fgood } </span>  <span> 👎 ${ feed.fbad } </span>
                        </div>
                        </div> 
                        <div class="replyBox"> 
                            ${ 댓글출력( feed.fno ) }
                        </div>
                    </div>`
        }; // f end 
    // 3. [출력]
    feedBox.innerHTML = html;
} // f end 
// [2] 피드/게시물의 해당하는 댓글 모두출력하는 함수 정의 ( 1. 피드/게시물 출력시 같이 )
function 댓글출력(fno){
    let html = ``;
    for(let i =0; i<replyList.length ; i++){
        if(fno == replyList[i].fno){
            const reply = replyList[i];

            html += `<div class ="reply">
                        <div>${reply.rcontent}</div>
                        <div>
                            <span class="date">${reply.rdate}</span>
                            <button type="button"></button>
                        </div>
                    </div> `
        }
    }
    return html;
}

// [3] 삭제함수. 1. 삭제버튼 클릭했을때.

function 피드삭제( fno ){ // 매개변수 : 삭제할 fno

    if(패스워드확인(fno)){return;}
    

    // 2. 패스워드 일치 여부 확인
        // 1. 피드목록에서 fno에 객체 찾기.
    const feedList = JSON.parse(localStorage.getItem('feedList'));
  
    for(let i = 0 ; i<feedList.length; i++){

        // 2. 찾은 객체의 fpwd와 입력받은 패스워드 일치여부
        if( feedList[i].fno == fno ){
            
            
            feedList.splice(i,1)
            alert('삭제 되었습니다.')
            //!!!!!
            localStorage.setItem('feedList' , JSON.stringify(feedList))
            모든피드호출()
            //!!!!!
            return;
        }
    }

}

function 수정페이지이동( fno ){ // 매개변수??
    
    if(패스워드확인(fno)){return;}

    localStorage.setItem( 'updatefno', JSON.stringify(fno));
    location.href ="update.html";

}

function 패스워드확인( fno ){
    const pwdConfirm = prompt('피드의 비밀번호 확인')

    const feedList = JSON.parse(localStorage.getItem('feedList'))
    for(let i = 0 ; i<feedList.length; i++){
        if(feedList[i].fno == fno && feedList[i].fpwd == pwdConfirm){
            return false; // 패스워드 일치하면 false
        }
    };
alert('비밀번호가 일치하지 않습니다.');
return true; // 패스워드가 일치하지 않으면 true
}