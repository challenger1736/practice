
// p.131 if조건문 
    // 조건에 따라서 코드를 실행하거나 실행하지 않을때 사용하는 구문.
    // 가장 일반적인 조건문 : IF
    /*
        형태
        1. 참일때만 실행 
            if( T/F ){ 참/T 일때 실행코드; }

        2. 참 또는 거짓일때 실행
            if( T/F ){ 참/T 일때 실행코드; }        <-------->  삼항연산자 :    조건 ? 참 : 거짓 
            else{ 거짓/F 일때 실행코드; }

        3. 참 또는 거짓일때 일때 조건추가 
            if( T/F ){                  --- 성별이 남자 중에서
                if( T/F ){ }                    -- 병역 여부 확인 
                else{ }
            }else{                      ---- 성별이 여자 중에서 
                if( T/F ){ }                    -- 
                else{ }
            }

        4. 다수 조건 일때  결과1개       <--------------------->  다수 조건일때.  결과 여러개
            if( 조건1 ){ }                                      if( 조건1 ){ }
            else if( 조건2 ){ }                                 if( 조건1 ){ }
            else if( 조건3 ){ }                                 if( 조건1 ){ }
            else if( 조건4 ){ }                                 if( 조건1 ){ }
            else { }                                            if( 조건1 ){ }
    */

// 1. if( 조건 ) : 조건의 결과가 참이면 { } 안으로 들어가고 아니면 { } 못들어감.
if( 273 < 100 ){ // if start  ,  273이 100보다 미만이면 
    console.log( '273<100 => true '); // 실행x [ 조건이 false 이므로 ]
} // if end 

console.log('1종료'); // 실행o [ 조건문과 상관이 없어요. 왜 { } 밖이니까. ]

// 2. 
const date = new Date(); // new Date(); 현재시간을 알려주는 코드[ 클래스 : 미리 만들어진 구조/코드 ]
    console.log( date );
const hour = date.getHours();   // 현재시간.getHours() : 현재시간에서 시분초 중에서 시 를 반환 함수.
    console.log( hour );

    // 1. 만약에 현재  시가 12보다 작으면 오전
if( hour < 12 ){ console.log('오전입니다.'); }
    // 2. 만약에 현재 시 가 12보다 이상이면 오후 
if( hour >=12 ){ console.log("오후입니다."); }

// 3. p.134
if( hour < 12 ){ console.log('오전입니다.'); }
else{ console.log('오후입니다.'); }

// 4. p.135
if( hour < 11 ){  // 11시 미만
    console.log('아침 먹을 시간입니다.'); 
}else{ // [반대] 11시 이상 

    // ** 중첩
    if( hour < 15 ){ //   11시 이상이면서 15시 미만.
        console.log('점심 먹을 시간입니다.'); 
    }else{ // 11시 이상이면서 15시 이상 
        console.log('저녁 먹을 시간입니다.')
    } // 두번째 if 끝 

} // 첫번째 if 끝 

// 5. p.137 
if( hour < 11 ){ console.log('아침 먹을 시간입니다.'); }
else if( hour < 15 ){ console.log('점심 먹을 시간입니다.'); } 
else { console.log('저녁 먹을 시간입니다.'); } 

    // vs  위 코드는 결과를 무조건 1개만 실행되지만. 아래 코드는 조건에 따라 여러개가 실행될수 있다.

if( hour < 11 ){ console.log('아침 먹을 시간입니다.'); }
if( hour < 15 ){ console.log('점심 먹을 시간입니다.'); } 
else { console.log('저녁 먹을 시간입니다.'); } 

// p. 138

/*
    확인문제
        1 : 3 
        2 : Number ,   Number , a > b , a == b
        3 : && 
                - x=10일때 5보다 크고 20보다 작다.     
                    5<x<20 [표현불가능]
                    x>5 && x<20 [ &&이용 ]
        4.
        5.
        6.

        - 앞전 조 과제에 경우의수를 IF문으로 예시 작성해보기.
        
*/

// *4
/*
    if( a > 0 ){ console.log("양수입니다."); }
    else if( a == 0 ){console.log("0입니다.");}
    else{ console.log("음수입니다."); }
*/
// *5
/*
    if( a % 2 == 0 ){ console.log("짝수 입니다."); }
    else{ console.log("홀수 입니다."); }
*/
// *6
/*
    계절 기준 : 3~5[봄] , 6~8[여름] , 9~11[가을] , 12~2[겨울]    
    if( 3<=a<=5 ) [x]

    if( a>=3 && a<=5 ) { 봄 }
    else if( a>=6 && a<=8){ 여름 }
    else if( a>=9 && a<=11 ){ 가을 }
    else{ 겨울 }
*/
