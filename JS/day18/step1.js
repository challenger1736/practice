const 상영관목록 = [{
                        상영관코드 : 0,
                        상영중인영화 : `<div onclick="보기2(서울의봄)">서울의 봄</div>
                                        <div onclick="보기2(노량)">노량</div>
                                        <div>아쿠아맨</div>
                                        <div>신세계2</div>` ,

                        서울의봄 : '2관 : 12:36 , 3관 : 13:36',
                        노량 : 'ㅇㅇ',
                    },

                    {  
                        상영관코드 : 1,
                        상영중인영화 : `<div>서울의 봄</div>
                                        <div>노량</div>
                                        <div>아쿠아맨</div>` }];

function 보기(i){ 
    document.querySelector('#result').innerHTML= 상영관목록[i].상영중인영화 

}

function 보기2(i){
    document.querySelector('#result2').innerHTML = this
}