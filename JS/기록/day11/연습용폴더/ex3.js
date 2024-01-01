// 문제1. 세 점수를 각 input으로 입력 받아 총점과 평균 span에 출력하시오.



function 등록(){
    alert('첫번째 문제버튼')
    const i1 = Number(document.querySelector('#input1').value)
    const i2 = Number(document.querySelector('#input2').value)
    const i3 = Number(document.querySelector('#input3').value)
    
    document.querySelector('#result').innerHTML = `총점 : ${i1+i2+i3}, 평균 : ${(i1+i2+i3)/3}`
}


//문제2 : 2개 정수를 입력받아 더 큰 수를 출력 
 function 등록2(){
    alert('두번째 문제버튼')
    const i1 = Number(document.querySelector('#input1').value)
    const i2 = Number(document.querySelector('#input2').value)

    let result = i1> i2? i1 : i2
    document.querySelector('#result').innerHTML = result
 }

//문제 3 : 3개의 정수[입력값1/2/3] 를 입력받아서 가장 큰수를 출력 
function 등록3(){
    alert('세번째 문제버튼')
    const i1 = Number(document.querySelector('#input1').value)
    const i2 = Number(document.querySelector('#input2').value)
    const i3 = Number(document.querySelector('#input3').value)

    let result = 0;

    if(i1>i2&&i1>i3){result=i1}
    else if(i2>i3&&i2>i1){result=i2}
    else {result=i3}

    document.querySelector('#result').innerHTML = result

}

//문제 4 : 1개의 점수[입력값1] 를 입력받아 점수 90점이상 합격 출력 아니면 탈락 출력
function 등록4(){
const i1 = Number(document.querySelector('#input1').value)

i1>=90 ? document.querySelector('#result').innerHTML ='합격입니다': document.querySelector('#result').innerHTML ='탈락입니다'


}


/*문제 5 : 점수[입력값1]를 입력받아 점수 90점이상 A등급 출력 
                            80점이상 B등급 출력 
                            70점이상 C등급 출력  
                            그외 재시험
*/
function 등록5(){
    const i1 = Number(document.querySelector('#input1').value)
    
    if(i1>=90){ result = `A등급`;}
    else if(i1>=80){ result = `B등급`; }
    else if(i1>=70){ result = `C등급`; }
    else{ result = `재시험`;}

    document.querySelector('#result').innerHTML = result
}

/*문제 6: 아이디[입력값1] 와 비밀번호[입력값2] 입력받기 
                   회원아이디가 admin 이고 비밀번호가 1234 이면 로그인 성공 출력 아니면 로그인실패 출력
*/
function 등록6(){
    alert('여섯번째 문제버튼')
    const i1 = document.querySelector('#input1').value
    const i2 = document.querySelector('#input2').value
    
    if(i1 == 'admin' && i2 == 1234){ result = `로그인 성공` }
    else{ result = `로그인 실패` }
    
    document.querySelector('#result').innerHTML = result
}

//문제 7 : 3개의 정수[입력값1/2/3] 를 입력받아서 오름차순 / 내림차순 출력 

function 등록7(){
    alert('일곱번째 문제버튼')
    let i1 = Number(document.querySelector('#input1').value)
    let i2 = Number(document.querySelector('#input2').value)
    let i3 = Number(document.querySelector('#input3').value)

    let temp = 0;
    //작은수 부터 오름차순
    if(i1>i2){ temp = i1 ;  i1 = i2 ; i2 = temp;} // temp가 제일 커지고 그럼 i1<i2가 된다.
    if(i1>i3){ temp = i1 ;  i1 = i3 ; i3 = temp;} // i1<i3가 된다  
    if(i2>i3){ temp = i2 ; i2 = i3 ; i3 = temp; }                                           // 비교하는 순서 굉장히 중요함 << 첫 두줄에서 i1가 제일 작은수를 만들어놨으니 나머지 두 항만 비교를 하는 것임. 이런 식으로 생각해야함!

    document.querySelector('#result').innerHTML =  `작은 수 부터 오름 차순 : ${i1},${i2},${i3}`

}

    /*  3개 일 때 강사님 풀이법 */

 /*    if(p1>p2) {let temp = p1; p1=p2; p2=temp;}
    if(p1>p3) {let temp = p1; p1=p3; p3=temp;}
    if(p2>p3) {let temp = p2; p2=p3; p3=temp;} */
