
// p.131 if 조건문
    // 조건에 따라서 코드를 실행하거나 실행하지 않을때 사용하는 구문.
    // 가장 일반적인 조건문 : IF
    /* 
        형태
        1. 참일때만 실행
            if(boolean 값이 나오는 표현식(T/F)){참(T)일때 실행코드;};
        2. 참 또는 거짓 둘 다 실행
            if(T/F){참/T일때 실행코드;}else{거짓/F일떄 실행코드} <----------------> 삼항 연산자 [ 불 ? 참 : 거짓 ]
        3. 참 또는 거짓중에서 조건부 실행
            if(T/F){                                    ---------------------- 성별이 남자 중에서
                if(T/F){}                                   ------------------- 대학교O/X
                else{}
            } else{                                     ---------------------- 성별이 여자 중에서
                if(T/F){}                                   ------------------- 대학교O/X
                else{}
            }
        4. 다수 조건 일때

            결과 1개 (하나의 문장으로 침)                           결과 5개  ( 차이점 )

            if(조건 1){}                                        if(조건 1){}
            else if(조건 2){}                                   if(조건 1){}
            else if(조건 3){}                                   if(조건 1){}
            else if(조건 4){}                                   if(조건 1){}
            else {}...                                          if(조건 1){}
        

    
    
    */

/*         1.
        // if start, 273이 100보다 미만이면
        if(273<100){
            console.log('273<100 => true');
        }
        // if end, false이므로 실행 안 됨.
        if(273>100){
            console.log('273>100 => true');
        } */
        //실행 됨. true

        //2.
      /*   const date = new Date(); // new Date(); 현재시간을 알려주는 코드[클래스:미리 만들어진 구조/코드] , 빈 칸 매개변수가 들어감, 지금 상황에 중요한 내용은 아님!
        console.log(date);
        const hour = date.getHours() // 현재시간.getHours() : 현재시간에서 시분초 중에서 시를 반환 함수
        console.log(hour);

        //3.
    
        if ( hour < 12){console.log('오전입니다.');}
        if ( hour >= 12){console.log('오후입니다.');}
    

        if ( hour < 12){console.log('오전입니다.');} else {console.log('오후입니다.');};


        if( hour < 11) { //11보다 작으면
            console.log('아침 먹을 시간입니다.');
        } else { 
            //중첩
            if(hour<15){console.log('점심 먹을 시간입니다.');}
            else{console.log('저녁 먹을 시간입니다.')}
            //두번쨰 if 끝
        }
        if( hour < 11) { //11보다 작으면
            console.log('아침 먹을 시간입니다.');}
        else if(hour<15){console.log('점심 먹을 시간입니다.');}
        else{console.log('저녁 먹을 시간입니다.');}

        if(1<0){
            console.log("1");}
        else if(2<0){
            console.log("2"); } // 이렇게만 써도 되네 그냥 나머지값 나오게 하려고 else 쓰는거임 */

        const a = Number(prompt('숫자를 입력해주세요.', ''))
        
        if(a>0){console.log('양수 입니다.')}
        else if(a=0){console.log('0 입니다.')}
        else {console.log('음수 입니다.')}

        // 왜 변수로 써야되지


        const date = new Date(); // new Date(); 현재시간을 알려주는 코드[클래스:미리 만들어진 구조/코드] , 빈 칸 매개변수가 들어감, 지금 상황에 중요한 내용은 아님!
        console.log(date);
        const month = date.getMonth() // 현재시간.getHours() : 현재시간에서 시분초 중에서 시를 반환 함수
        console.log(month);

        if(month>=3){
            if(month<=5){console.log('봄입니다.')}
            else if(month>=6){
                if(month<=8){console.log('여름입니다.')}
                else if(month>=9){
                    if(month<=11){console.log('가을입니다.')}
                    }
                }
            }
        else{console.log('겨울입니다.')}   // 이렇게 하는것 보다

        if(month>=3&&month<=5){console.log('봄입니다.')}
        else if(month>=6&&month<=8){console.log('여름입니다.')}
        else if(month>=9&&month<=11){console.log('가을입니다.')}
        else{console.log('겨울입니다.')}


      

       
        typeof(273)

    /* 
    조 과제 경우의 수  if와 같이 작성하기.
*/

/* 
    1.
        if(공기압 <= 35PSI){
            공기압 경고등이 들어온다.
        } else if(공기압 >= 50PSI) {
            공기압 경고등2가 들어온다.
        } else {
            공기압 경고등이 안들온다.
        }

    2. 
        if(기름 <= 2L){
            기름 경고등이 깜빡거린다.
        } else if(기름 <= 4L){
            기름 경고등이 켜진다.
        } else {
            기름 경고등이 꺼진다.
        }

    3. 
        if(어린이보호구역 == true){
            속도 28km 제한
        }
        if(일반도로 == true){
            속도 50km 제한
        }
        if(고속도로 == true){
            속도 120km 제한
        }

    4.
        if(앞 물체와의 거리 <= 2M){
            급 제동이 걸린다.
        } else if(앞 물체와의 거리 <= 5M) {
            속도를 줄인다.
        }

    5.
        if(현재온도 < 설정온도){
            히터를 튼다.
        } else if(현재온도 > 설정온도){
            에어컨 튼다.
        } else {
            히터/에어컨 끈다.
        }
*/
