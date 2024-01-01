/* 
    p.174 반복문
        - 반복 작업
        - 형태
            for( let i = 0 ; 1 < 반복 횟수 ; i++){
                문장
            }

            fort( 초기값; 조건문; 증감식 ){실행코드;}

            1. let i = 0        : 반복을 시작할 때 처음 값 [초기값]
                i를 0부터 시작
            2. i < 반복횟수     : 반복을 할 수 있는 조건[조건을 충족시 반복실행]
                i는 반복횟수 보다 작으면
            3. 문장             : 반복시 실행되는 코드
            4. i++              : 1회 반복 후 실행되는 증감연산, 증감식

        - 실행 순서
            1. [1초기값] 선언 또는 초기화
            2. [2조건문] for{}안의 반복 되는 조건인가? [t-> 가능 / f-> 불가능]
            3. [3실행문] {} 안에 있는 코드 모두 실행
            4. [4증감식] 실행문 후에 증가 또는 감소.
                // [초기값 1번만 실행되므로 증감식 이후 조건문으로 이동]
            5. [2조건문] 
            6. [3실행문]
            7. [4증감식]... 무한 반복 /// 2 조건문의 false가 될 때 까지
*/
// 1. 우유 구매를 10번 출력해.
console.log('우유 구매');
console.log('우유 구매');
console.log('우유 구매');
console.log('우유 구매');
console.log('우유 구매');
console.log('우유 구매');
console.log('우유 구매');
console.log('우유 구매');
console.log('우유 구매');
console.log('우유 구매');
console.log('우유 구매');
console.log('우유 구매');
    // vs 10번 출력해 [가능 // but 비효율적]

for (let i = 1 ; i<=10 ; i++){console.log('for)우유 구매');}
// - let i는 1부터 10이하 까지 1씩증가 반복하면서 console.log를 반복할 거야

for(let i = 0 ; i <5 ; i++){
 //leti =0이고 5미만까지 1씩 증가하면서 console.log를 반복 실행.
    console.log(`${i}번째 반복입니다.`)
}

let output = 0

for(let i = 1 ; i<=100;i++) { // for s
    output +=i ; // output = output + i;
    // output에 i를 더한값을 다시 output에 저장하고 그 저장한 아웃풋에 또 반복을 실행해서 아웃풋에 저장
    console.log(`${i}회 , output : ${output}`)
} //for e

console.log(`1~100까지 숫자를 모두 더하면 ${output}입니다.`) //5050

// p 180 예제3 for문과 배열 ( 인덱스 : 0부터 ~ 1씩 증가 패턴 / 배열내 인덱스 순회/확인) 의 관계
    // - 0부터 마지막 인덱스( <= 배열.length-1 또는 < 배열.length) 까지

const todos= ['우유구매','업무 메일 확인하기', '필라테스 수업']
    //인덱스 0 , 1 , 2 // 길이 : 3
for (let i = 0; i<todos.length; i++){

    console.log(`${i}번째 할 일 : ${todos[i]}`)
}   // i는 방복 변수 : 현재 반복되고 있는 변수의 상태 저장
    // 인덱스 대신에 i 활용.
//for (let i = 1; i<=todos.length; i++){}


const todos2 = ['우유구매','업무 메일 확인하기', '필라테스 수업']

for (let i = todos2.length-1; i >= 0; i--) {
    console.log(`${i}번째 할 일 : ${todos[i]}`)
    
}

//1부터 10이하까지 1씩 증가 반복 [한줄 표시]

let outPrint = ''

for(let i = 1 ; i<=10 ; i++ ){
    outPrint += ` ${i} `;
}

console.log(outPrint);


//예 2 , 1부터 10이하까지 1씩 증가 반복 [ul 표시]

outPrint = ``;

for(let i = 1 ; i<=10 ; i++ ){
    outPrint += `<li>${i}</li>`;
}

document.querySelector('ul').innerHTML = outPrint;

//예 3, 1부터 10이하까지 1씩 증가 반복 [누적합계]

 let sum = 0;

 for ( let i =1;  i<=10 ; i++)
 { sum += i; //i를 sum에 더한 후 sum을 대입
}//for end

/* 
    예4 반복문 순서도, 모든 코드 과정 순서 작성
        초기값 : i = 1      , sum = 0
        for 시작
            i           조건[i<=10]         실행문[sum += i]        sum[누계]           증감식[i++]
            i = 1       true                     0+1 => 1           sum = 1                 i=2
            i = 2       true                     1+2 => 3           sum = 3                 i=3
            i = 3       true                     3+3 => 6           sum = 6                 i=4
            i = 4       true                     6+4 => 10          sum = 10                i=5
            i = 5       true                     10+5 => 15         sum = 1                 i=6
            i = 6       true                     15+6 => 21         sum = 3                 i=7
            i = 7       true                     21+7 => 28         sum = 6                 i=8
            i = 8       true                     28+8 => 36         sum = 10                i=9
            i = 9       true                     36+9 => 45         sum = 3                 i=10
            i = 10      true                     45+10 =>55         sum = 6                 i=11
            i = 11      false - 반복문 종료


*/

sum = 0;

for (let i = 0; i<=100 ; i += 7){
    sum += i;
}
console.log(`1~100까지 7배수 합 : ${sum}`);

sum = 0;
for(let i =1; i <=100 ; i++){
    if(i%7==0){sum+=i;} /* 만약에 i가 나누기 7했을때 나머지가 0이면 i는 7의 배수 */
}
console.log(`1~100까지 7배수 합 : ${sum}`);

//for 중첩 =============================================곱하기 등 부모따라 반복하는 일에 많이 쓰임.
for(let 부모=1 ; 부모<=5 ; 부모++){ // 총 5회전
    console.log(`=====${부모}=====`)
    for(let 자식 = 1; 자식 <=3; 자식++){  // 총 15회전
        console.log(`${부모}의 자식${자식}=====`)
    } 
}


//예5) 1부터 100까지 7배수 누적 합계.
    // - 1. i는 0부터 100까지 7씩 중가
    // - 2. i는 1부터 100까지 7배수 i % 7 == 0

for(let 단 = 2 ; 단<=9 ; 단++){
    console.log(`${단}단`);
    for(let 곱 = 1; 곱 <=9 ; 곱++){
        console.log(`${단}X${곱}=${단*곱}`)
    };
}