
const 전국영화관 = [ 
    {  지점코드 : 1 , 지점명 :'안산센트럴락'     , 주소 : '고잔로 108'   , 
        영화 : [ 
                { 영화코드 : 1 , 영화이름 : '서울의봄' , 시간테이블 : [ { 관:'1관' , 시간 : '12:00' } , { 관:'3관' , 시간 : '12:00' } ] },
                { 영화코드 : 2 , 영화이름 : '노량' , 시간테이블 : [ { 관:'5관' , 시간 : '14:00' } , {관:'1관' , 시간 : '16:00' } ] },
            ] 
    } , 
    {  지점코드 : 2 , 지점명:'안산고잔'         , 주소 : '고잔로 203'   , 영화 : [ '아쿠아맨', '노량' ] } , 
    {  지점코드 : 3 , 지점명:'안산롯데시네마'   , 주소 : '상록구 755'   , 영화 : ['싱글인서울'] } 
];

전국영화관출력();

function 전국영화관출력(){
    console.log('전국영화관출력 함수실행')

    let html = ``;

    for(let i = 0 ; i<전국영화관.length ; i++){ // 없는 범위의 전국영화관까지 해버리면 .지점명 할게 없어서 오류남
        html += `<span style="margin:10px;" onclick="영화출력(${전국영화관[i].지점코드})">${전국영화관[i].지점명}</span>` 
    }

    document.querySelector('#전국영화관출력구역').innerHTML = html
}
                    
function 영화출력(a){   
    console.log('영화출력 함수실행')

    let html = ``;

    for(let i = 0 ; i < 전국영화관.length ; i++){
        //console.log('for 첫 실행')      
        if(전국영화관[i].지점코드==a){
            //console.log('if 첫 실행')   
            for(let j =0 ; j < 전국영화관[i].영화.length ; j++){
                html += `<span style="margin:10px;" onclick="시간표출력(${전국영화관[i].지점코드},${전국영화관[i].영화[j].영화코드})">${전국영화관[i].영화[j].영화이름}</span>`
            }
        }
       

    }

    document.querySelector('#영화출력구역').innerHTML=html
}

function 시간표출력(aa,bb){

    console.log('영화시간표출력 함수 실행')

    let html = ``;

    for(let i = 0; i<전국영화관.length; i++){
        if (전국영화관[i].지점코드==aa){
            for(let j =0 ; j < 전국영화관[i].영화.length ; j++){
                if (전국영화관[i].영화[j].영화코드 == bb){
                    for(let n =0 ; n < 전국영화관[i].영화[j].시간테이블.length ; n++ ){
                        html += `<span style="margin:10px";>${전국영화관[i].영화[j].시간테이블[n].관}------------->${전국영화관[i].영화[j].시간테이블[n].시간}<span>`
                        
                    }
                }
            }
        }
    }
    document.querySelector('#시간출력구역').innerHTML=html

}