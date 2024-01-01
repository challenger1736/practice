/* 

    설계..
        1. 경험
        2. 기능 실행 순서
            [키오스크 = 사용자 입장]
                - 카테고리선택 -> 제품선택 -> 장바구니 담기 -> 결제
            [포스기 = 관리자 입장]
                - 결제 내역 (주문, 제조중)
                - 카테고리 추가/삭제 기능
                - 제품 추가/삭제 기능
                
        3. 기능에 필요한 메모리(저장-DB설계) 설계
            카테고리 = [ { cno : 1 , cname : '신제품(NEW)'} ,
                        { cno : 2 , cname : '프리미엄'} ,
                        { cno : 3 , cname : '와퍼&주니어'} ,
                        { cno : 4 , cname : '치킨&슈림프버거'} ,
                        { cno : 5 , cname : '올데이킹&킹모닝'}]
                - 관리자가 해당 배열을 추가/삭제

                카테고리 문서화 제출
                카테고리 표 [ 행 여러개 --> 객체 여러개 ]
                    카테고리 번호   카테고리명
                    cno             cname
                1행 1               신제품(NEW)             ---------------> 하나의 행이 하나의 객체
                2행 2               프리미엄                ---------------> 하나의 행이 하나의 객체
                3행 3               와퍼&주니어             ---------------> 하나의 행이 하나의 객체
                4행 4               치킨&슈림프버거         ---------------> 하나의 행이 하나의 객체
                5행 5               올데이킹&킹모닝         ---------------> 하나의 행이 하나의 객체


        4. 배열 안에 있는 데이터를 식별할 때 기준점.
            사람 ={ 이름 : '유재석' , 나이: '40세' , 직업 : '강사' } - 이름으로 식별시 동명이인 존재 하면 문제점 발생. [중복이 절대로 없어야함.]
            사람 ={ 주민등록번호 : 840420-1 , 이름 : '유재석' , 나이: '40세' , 직업 : '강사' } - 이름으로 식별시 동명이인 존재 하면 문제점 발생. [주민번호는 절대 중복이 없다.]

            - 인덱스 vs 식별코드생성 vs 이름
                '신제품(NEW)' ---> { cno : 1 , cname : '신제품(NEW)'}


*/


/* 백엔드로 부터 데이터를 받았다고 치고 */

// 저장 데이터를 얼마나 가지고 있어야 할까 ? 카테고리, 물품, 장바구니 //

let categoryArray = [ { cno : 1 , cname : '신제품(NEW)'} ,
                        { cno : 2 , cname : '프리미엄'} ,
                        { cno : 3 , cname : '와퍼&주니어'} ,
                        { cno : 4 , cname : '치킨&슈림프버거'} ,
                        { cno : 5 , cname : '올데이킹&킹모닝'}]

/* 제품목록 */

let productArray = [
    {pno : 1 ,pname:'큐브 스테이크 와퍼', pprice : 9000 , pimg : 'burger1.png' , cno : 1},
    {pno : 2 ,pname:'스파이시 큐브 스테이크 와퍼' , pprice : 10000, pimg : 'burger2.png', cno : 4},
    {pno : 3 ,pname:'블양양맥시멈2...더보기' , pprice : 12000, pimg : 'burger3.png', cno : 5}
]

printCategory(1)
// - [함수]1 : 카테고리 출력하는 함수 (실행조건 : js열렸을때, onclick)
function printCategory(selectCno){ // 매개변수
    console.log('printCategory 함수')
    //1. 어디에
    const categoryUl = document.querySelector('#header>ul');
    //2. 무엇을
    let html = ``      // 안에서 해줘야 for를 계속 돌려도 안 쌓임!                                         
        for( let i = 0 ; i < categoryArray.length; i++){
            html += `<li onclick="printCategory(${categoryArray[i].cno})" class=${categoryArray[i].cno == selectCno ? 'selectMenu' : '' }>
            ${categoryArray[i].cname}</li>`
        }
    //3. 출력
    categoryUl.innerHTML = html
    printProduct(selectCno) ;  // 카테고리에서 선택된 카테고리번호를 제품출력에 매개변수로 전달.
    // 왜?? 제품출력시 모든제품 출력이 아니고. 선택된 카체고리번호의 일치한 제품만 출력해야 되니까.
}                                                       

//메뉴 클릭시 마다 for를 계속 돌려서 select를 바꾸는 것!



//- [함수2] : 제품 출력하는 함수. (실행조건 : 카테고리 출력 완료 되었을 때)
function printProduct( selectCno ){ //함수 선언 // 전체출력 X // 내가 선택한 카테고리의 제품만.(selectCno)
    console.log(selectCno);

    // 1. 어디에
    const productBox = document.querySelector("#productBox")
    // 2. 무엇을
    let html = ''
        for(let i = 0; i<productArray.length ; i ++){
            // 만약 i번쨰 제품의 cno와 내가 선택한 cno가 같으면
            // 천단위 쉼표 함수 .toLocaleString()
            if(productArray[i].cno == selectCno){
                html += `<div onclick="setCart(${productArray[i].pno})" class="product">
                            <img src="img/${productArray[i].pimg}" />
                            <div class="pinfo">
                                <div class="pname">${productArray[i].pname}</div>
                                <div class="pprice">${productArray[i].pprice.toLocaleString()}원</div>
                            </div>
                         </div>`
            }
        }
    // 3. 출력
    productBox.innerHTML = html
}   //f end


let cartArray = []; // 카트 목록!!(인덱스 vs 식별번호 - 값이 하나밖에 저장할 게 없어서 식별번호 안써도 되나, 옵션이 있을 때는 객체로 만들어주는게 훨씬 나음)
// - [함수3] 제품 선택시 장바구니에 담아주는 함수. (실행조건 : 제품을 클릭했을때,)
function setCart(selectPno){ // 제품 pno 대표번호만 넣어주는 함수를 만들자!
    console.log(selectPno)
    // 1. 입력
    // 2. 처리
    cartArray.push(selectPno); console.log(cartArray)
    printCart()
}

//-[함수4] 카트에서 x 버튼 클릭시 카트에서 삭제 ( 실행 조건: X버튼을 클릭했을 때. )
function cartDelete( deleteIndex ){
    console.log('개별취소 함수 실행')
    cartArray.splice( deleteIndex, 1 )
    
    printCart()
}

//-[함수5] 카트의 현재 상태를 출력하는 함수 ( 실행 조건: 1.제품을 선택했을 때, 2. 제품을 삭제했을 때,)
function printCart(){
     // 3. 출력
        // 1. 어디에
        const cartBottom = document.querySelector('#cartBottom')
        // 2. 무엇을
        let html = ''
        let cartprice = 0;
        // 카트목록에 있는 모든 제품번호 출력 [ 배열에 있는 모든 요소를 하나씩 출력 ] = 0번 인덱스부터 마지막 인덱스까지 출력
            for ( let i = 0 ; i < cartArray.length ; i++){
                console.log(cartArray[i]);
                for(let a = 0; a< productArray.length ; a++){
                    if ( cartArray[i]== productArray[a].pno){
                        html += ` <div class="citem">
                                        <div>${productArray[a].pname}</div>
                                        <div>${productArray[a].pprice.toLocaleString()}</div>
                                        <span onclick="cartDelete(${i})">X</span>
                                    </div>`;

                        cartprice += productArray[a].pprice*1 // 카트의 합계 구하기
                    } 
                }
            }
        // 3.출력
        cartBottom.innerHTML = html;


        document.querySelector('#cartTop').innerHTML = ` <div>카트<span>${cartArray.length}</span></div>
        <div> 총 주문 금액 <span>${cartprice.toLocaleString()}원</span></div>`


}

function allde(){
    if(confirm('모두 취소 하시겠습니까?')){
    cartArray.splice(0);
    printCart()}
    
    return;
}

function order(){
    alert('주문 완료')
    cartArray.splice(0)
    printCart()

    return;
}