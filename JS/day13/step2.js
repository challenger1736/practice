/* JS 과제 [주차장 정산기]
	요구사항
	1. 입차
		1. 차번호 입력받기 숫자 4자리로 입력받기 (input type="text")	ㅇ
		2. 입차시간을 type="time"으로 입력 받기							ㅇ
	2.저장
		배열[차번호 따로, 입차 시간 따로]에 저장						ㅇ
===============================================================
	3.출차
		1.차번호 숫자4자리 입력받기 type = "text"						ㅇ
	4.요금계산
		1.출차시간을 type="time"										ㅇ
		2.해당 차번호의 입차시간과 출차시간을 계산해서.					ㅇ
		30분 내외면 무료												ㅇ
		30분 이상이면 10분당 1000원										ㅇ
	5. 출력
		alert(요금)													ㅇ
		또는
		alert(입차한 차량이 없습니다.)									ㅇ
==================추가 요구 사항 ========================	

	1. 입차/출차시 차량번호 4자리만 입력할 수 있도록 하고 아니면 입차 불가능. ㅇ
	2. 입차/출차 시간을 입력 안했으면 입차/출차 불가능.							ㅇ
	3. 일별 매출 현황 HTML에 출력하기										ㄱㄱ
	4. CSS 간단하게. */

	const carArray = [];
	const timeArray = [];
	const outDateArray = [];
	const 매출현황Array = [];
	
	function 입차(){
		console.log('입차 함수 실행');
		let car = document.querySelector('#carNumber').value;
		let time = document.querySelector('#carTime').value;
		let date = document.querySelector('#inDate').value;
		//console.log(document.querySelector('#inDate').value) - 2023-12-21T이런식
		//console.log(time) - 00:00 으로 나옴
		
		if( date == ""){alert('입차날짜를 입력하세요!'); return;}
		if( car.length !== 4){alert('차량번호는 4자리로 입력해주세요!'); return;}
		if( time == ""){alert('입차시간을 입력하세요!'); return;}
	
		carArray.push(car);
		timeArray.push(time);
	
		console.log(carArray);
		console.log(timeArray);
		alert('입차가 완료 되었습니다.')
	}
	
	function 출차(){				// 출차를 츨차라고 써서 1시간동안 고민함...
		console.log('출차 함수 실행');
		let outcar = document.querySelector('#carNumOut').value;
		let outtime = document.querySelector('#carDateOut').value;
		let outDate = document.querySelector('#outDate').value;
	
		if( outtime == ""){alert('출차시간을 입력하세요!'); return;}
		if( outDate == ""){alert('출차날짜를 입력하세요!'); return;}
		
		let i = carArray.indexOf(outcar)
	
		if (i >= 0){	//입차는 했을때 ( 중에 30분 내외는 무료 )
			let a = timeArray[i].split(':');
			let b = outtime.split(':');
			let c = (b[0]*60+b[1]*1)-(a[0]*60+a[1]*1)
			if(c>30){//30분 이상일때
				if(c%10==0){ alert(`주차요금 : ${((c-30)/10)*1000}원`); 매출현황Array.push(((c-30)/10)*1000); outDateArray.push(outDate)}
				else{ alert(`주차요금 : ${parseInt((c-30)/10)*1000+1000}원`); 매출현황Array.push(((c-30)/10)*1000+1000);  outDateArray.push(outDate)}
		   
			carArray.splice(i,1)
			timeArray.splice(i,1)
			
			}
			else{ alert('30분 내외는 무료입니다.');
			carArray.splice(i,1)
			timeArray.splice(i,1)}
		}
		else{ alert('입차한 차량이 없습니다.')} // 입차도 안했다.
	
	
		for(i=0; i < outDateArray.length ; i++) {
			for( a=i+1; a< outDateArray.length ; a++) {
				console.log(outDateArray[i].split('T')[0])
				console.log(outDateArray[a].split('T')[0])
				if(outDateArray[i].split('T')[0]==outDateArray[a].split('T')[0]){
					
					outDateArray.splice(a,1) ;													// 함수 시작 직후 시작이 되는지 부터 확인하면, 알아내기 쉽다. [재미있었다. 내가 바꾼거라곤 for 두번째 반복문에 a = i+1(or 1)로 바꾼거 하나임,]
					매출현황Array[i] = 매출현황Array[i]*1+매출현황Array[a]*1
	
					console.log[매출현황Array[i]]
					
				}
				
			}
	
			
		} 
		let html = ``;
		for(a=0; a<outDateArray.length; a++){
			
			html += `<div>${outDateArray[a].split('T')[0]} 매출현황 : ${매출현황Array[a]}</div>`
			
			}
		
		
			document.querySelector('#매출현황').innerHTML = html
	
	}