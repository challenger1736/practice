/*
객체 배열 사용
    전국[안산, 수원, 안양]
        안산[안산센트럴락, 안산고잔, 안산롯데시네마]
            안센트럴락{
                지점명:센트럴락
                주소: 고잔로 108
                영화: 영화[서울의봄, 노량, 싱글인서울, 3일의휴가]
                }
                서울의봄{
                    12:45 : 2관
                    12:55 : 3관
                    13:50: 5관
                    14:40: 1관
                }

*/


// 식별자 : 절대적으로 식별할수 있는 고정 값 + 중복 없어도 한다.
// - !!! : 배열의 인덱스는 절대적인 식별자 역할 할수 없다.
// - 주민등록번호 , 사번 , 학번 , 제품번호 , ISBN 등등
//    { 주민등록번호 : 870625-1 , 이름:김현수 , 주소 : 인천 , 직업 : 강사  }

const 전국영화관 = [ 
    {  지점코드 : 1 , 지점명:'안산센트럴락'     , 주소 : '고잔로 108'   , 
        영화 : [ 
                { 영화코드 : 1 , 영화이름 : '서울의봄' , 시간테이블 : [ { 관:'1관' , 시간 : '12:00' } , { 관:'3관' , 시간 : '12:00' } ] },
                { 영화코드 : 2 , 영화이름 : '노량' , 시간테이블 : [ { 관:'5관' , 시간 : '14:00' } , {관:'1관' , 시간 : '16:00' } ] },
            ] 
    } , 
    {  지점코드 : 2 , 지점명:'안산고잔'         , 주소 : '고잔로 203'   , 영화 : [ '아쿠아맨', '노량' ] } , 
    {  지점코드 : 3 , 지점명:'안산롯데시네마'   , 주소 : '상록구 755'   , 영화 : ['싱글인서울'] } 
];

전국영화관출력();
function 전국영화관출력(){  // 함수 선언 [ 실행조건 : js가 열렸을때 최초로 1번 실행 ]
    // 1. 어디에 
    let 전국영화관출력구역 = document.querySelector('#전국영화관출력구역');
    // 2. 무엇을
    let html ="";
        for( let i = 0 ; i<전국영화관.length ; i++ ){
            html += `<span style="margin:10px" 
                        onclick="영화출력( ${ 전국영화관[i].지점코드 } )"> 
                        ${ 전국영화관[i].지점명 } 
                    </span>`
        }
    // 3. 츨력
    전국영화관출력구역.innerHTML = html;
}
// 
function 영화출력( 선택한지점코드 ){        // 함수 선언 // 인수 : 인덱스 [ 실행조건 : 영화관 이름 을 클릭했을때 ]
    // 1. 어디에
    let 영화출력구역 = document.querySelector('#영화출력구역');
    // 2. 무엇을
    let html ="";
        // 1. 선택한 지점코드 찾기.
        for( let i = 0 ; i<전국영화관.length ; i++ ){
            // 만약에 전국영화관내 지점코드 중에 내가 선택한지점코드와 같으면
            if( 전국영화관[i].지점코드 == 선택한지점코드 ){ // 이게 개 중요한거 같은데!
                // 2. 찾았으면 해당 지점의 영화 출력 
                for( let j = 0 ; j<전국영화관[i].영화.length ; j++ ){
                    console.log(  전국영화관[i].영화[j] );
                    html += `<span style="margin:10px" 
                                onclick="시간출력( ${ 선택한지점코드 } , ${ 전국영화관[i].영화[j].영화코드 } )"> 
                                ${ 전국영화관[i].영화[j].영화이름 } 
                            </span>`
                } // for end 
            }
        } // for end 
    // 3. 출력 
    영화출력구역.innerHTML = html;
}



function 시간출력( 선택한지점코드 , 선택한영화코드 ){ // 타고 타고 들어가야해서 그런건지 2개가 매개변수 - 이건 안에 안에 다 넣었을때!
    // 1. 어디에 
    const 시간출력구역 = document.querySelector('#시간출력구역');
    // 2. 무엇을 
    let html = "";
        // 지점에 영화에 시간테이블 출력 
        //   1. 지점찾기 
        for( let i = 0 ; i<전국영화관.length ; i++ ){
            if( 전국영화관[i].지점코드 == 선택한지점코드 ){
                // 2 지점에 영화찾기 
                for( let j = 0 ; j<전국영화관[i].영화.length ; j++ ){
                    if( 전국영화관[i].영화[j].영화코드 == 선택한영화코드 ){
                        // 3. 지점에 영화 시간테이블 출력 
                        for( let t = 0 ; t<전국영화관[i].영화[j].시간테이블.length ; t++ ){
                            html += `<span style="margin:10px" "> 
                                        ${ 전국영화관[i].영화[j].시간테이블[t].관 } --->  
                                        ${ 전국영화관[i].영화[j].시간테이블[t].시간 } 
                                    </span>`
                        }
                    }
                }
            }
        }
    // 3. 출력 
    시간출력구역.innerHTML = html;
}