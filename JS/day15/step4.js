/* 주제 가계부

요구사항 

    조건 배열 3개 사용 ( 등록, 출력, 삭제 ) ㅇ

	1. 입력
		날짜 항목 금액 [ 등록하면 저장 됨 ]
	2. 출력
        저장된 배열 내 모든 요소
		날짜 항목 금액 출력
    3. 삭제 
        3가지 항목 같이 삭제
        ==================추가 요구사항===================
    2.천단위 쉼표를 만들어주는 함수 [JS에서 제공하는 함수X] .toLocaleString() 등 외부라이브러리 사용금지.
    3.날짜 오름차순으로 출력되게 할 것 (정렬 함수나 로직)
    4.총합계
 */

console.log('js 실행')

const 날짜배열 = []; 
const 항목배열 = [];
const 금액배열 = [];



function 등록(){            /* 등록 펑션 */
    /* 하나라도 안 입력했을떄 알러트 */
    let 날짜 = document.querySelector('#dateInput').value
    let 항목 = document.querySelector('#contentInput').value
    let 금액 = document.querySelector('#spendInput').value
    if ( 날짜== "" || 항목 == "" || 금액 == ""){ alert('입력되지 않은 값이 있습니다.'); return;}
    if ( 금액 != Number(금액)){alert('금액은 숫자로 입력해주세요'); return;}

    날짜배열.push(날짜)
    항목배열.push(항목)
    금액배열.push(금액)
    console.log(날짜배열)
    console.log(항목배열)
    console.log(금액배열)

    //이제 넣었다, 처리는 완료 했고 출력이 되야한다.
    출력() 
}



function 삭제(삭제인덱스){      /* 삭제 펑션 */
    console.log(`삭제기능 확인`);
    날짜배열.splice(삭제인덱스, 1);
    항목배열.splice(삭제인덱스, 1);
    금액배열.splice(삭제인덱스, 1);
    
    출력()
}





function 출력(){            /* 출력 펑션 */
    let output = ``;

    let totalMoney = ``;



    /* 등록 배열을 만드는 함수 + 삭제함수 기능 */
    for( let i = 0 ; i < 날짜배열.length ; i++){

        output += `  <div class="divt2">
                        <div>${날짜배열[i]}</div>
                        <div>${항목배열[i]}</div>
                        <div id="">${천단위(i)}원</div>
                        <div onclick="삭제(${i})" class="bold">삭제</div>        
                    </div>`


     }

    /* 총 합계 만드는 함수 */

    for( let i = 0; i <금액배열.length; i++ ){
        totalMoney = totalMoney*1+ Number(금액배열[i])
        
    }

    document.querySelector('#divt3').innerHTML = output

    console.log(document.querySelector(`#dateInput`).value)

    document.querySelector('#dateInput').value = ""
    document.querySelector('#contentInput').value = ""
    document.querySelector('#spendInput').value = ""

    document.querySelector('#totalMoney').innerHTML = `${천단위2(totalMoney)} 원`


    
    
    
    //날짜배열펑션()
    

}
/////////////////////////////////////////////////////////////
/* 그냥 일단 금액 천단위로 만들어주는 함수 만들어보기 */

/* 금액배열[i] string 이므로 */

function 천단위(i){         /* 천단위 로직 */
    let 천단위배열 = [];
    for(let a = 금액배열[i].length-1 ; a>=0 ; a--){
    if(a%3==0 && a != 0 ){ 천단위배열.push(`${금액배열[i][(a-금액배열[i].length+1)*-1]},`)}
    else{ 천단위배열.push(`${금액배열[i][(a-금액배열[i].length+1)*-1]}`)}
}
/* 여기서 return 천단위배열 하면 3,,3,3,3 이런식으로 나옴 */

 /* 천단위배열의 각 자리수를 다 연결 연산자로 더하는 로직 */
  let 천단위배열플러스 = ``;    /* +=이랑 push랑 자꾸 헷갈리는 경우가 많음 */

    for(let a = 0 ; a < 천단위배열.length ; a ++){
       천단위배열플러스 += 천단위배열[a]
    }
 
/* 천단위배열[0]+천단위배열[1]~~~~~천단위배열[천단위배열.length-1] */
 
return 천단위배열플러스

}



///////////////////////////////////////////////
//★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
/*★★★ 지역변수 test 자리에 totalmonery를 넣는 식으로 다른 펑션에 천단위2 펑션을 적용할 수 있다. */
//★★★★★★★★★★★★ 헷 갈 림 ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
function 천단위2(test){         /* 천단위 합계 로직 */
    let 천단위배열 = [];
    let st = String(test)
    for(let a = st.length-1 ; a>=0 ; a--){
    if(a%3==0 && a != 0 ){ 천단위배열.push(`${st[(a-st.length+1)*-1]},`)}
    else{ 천단위배열.push(`${st[(a-st.length+1)*-1]}`)}
}
 
 /* 천단위배열의 각 자리수를 다 연결 연산자로 더하는 로직 */
  let 천단위배열플러스 = ``; /* +=이랑 push랑 자꾸 헷갈리는 경우가 많음 */

    for(let a = 0 ; a < 천단위배열.length ; a ++){
       천단위배열플러스 += 천단위배열[a]
    }
 
/* 천단위배열[0]+천단위배열[1]~~~~~천단위배열[천단위배열.length-1] */


 
return 천단위배열플러스

}




/* 날짜 오름차순으로 출력되게 할 것 */



