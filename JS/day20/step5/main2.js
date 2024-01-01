모든글출력()


function 모든글출력(){ console.log('모든글출력 실행')
    const tableBody = document.querySelector('table>tbody');

    let html = ``; // 없는 문자열을 html(document 명령어)으로 넣을거라서 빈 문자열 만들어 놓기( let 이름 = `` ;)

    let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
    console.log(identifyArray)
    for(let i = 0; i< identifyArray.length ; i++){
        console.log(identifyArray[i]);
        html +=`<tr onclick="상세글출력(${i})">
                 <th>${i+1}</th> 
                 <th>${identifyArray[i].title}</th> 
                 <th>${identifyArray[i].writer}</th>
                 <th>${identifyArray[i].조회수}</th>     
                </tr>`
                
    }

    tableBody.innerHTML = html; // html에 출력;

    return;
}
function 상세글출력(index){
    let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
    // 조회수 증가
    identifyArray[index].조회수 += 1;
    localStorage.setItem( 'identifyArray' , JSON.stringify(identifyArray) )
    console.log(identifyArray[index].조회수)
  
    모든글출력()
    
    localStorage.setItem( '글출력' , JSON.stringify(index) )

    location.href=`content.html`
    
    return;
   
}  

