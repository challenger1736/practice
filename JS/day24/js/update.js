/* 

    수정
        1.[식별자] 누구를 수정할건지
        2.기존데이터 호출
        3.수정처리

*/

document.addEventListener('DOMContentLoaded', function (){ 수정정보호출(); })

//[1] 수정할 게시물의 정보를 출력한다.
function 수정정보호출(){

    // 1. 누구를
    const fno = JSON.parse(localStorage.getItem('updatefno'));
    // 2. fno에 해당하는 객체 찾기
    const feedList = JSON.parse(localStorage.getItem('feedList'));
        for(let i=0; i<feedList.length ; i++){
            if(fno == feedList[i].fno){
                //3. 기존데이터 대입
                document.querySelector('textarea').value = feedList[i].fcontent.replaceAll('<br/>', '\n'); /* textarea안으로 들어올때는 또 \n으로 html에 출력할때만 br로 */
                document.querySelector('#fileImg').src = feedList[i].fimg;
                return;
            }
        }
}

let imgByte = '';
function 이미지등록(event){
/*     console.log('이미지등록')
    console.log(event)
    console.log(event.target)
    console.log(event.target.files) // input type file 속성일때만 가능한 속성
    console.log(event.target.files[0])  */// 등록 첨부 파일의 파일객체를 준다.
     
    // [1] 첨부파일 input에 등록된 파일을 바이트 가져오기
        // 1. 파일 읽기 클라스. new FileReader()
    let 파일읽기객체 = new FileReader(); //파일 읽기 객체 생성 [ 도구 구매 ]
        // 2. 파일을 JS로 읽어들이기. [ 내가 등록한 파일을 ]
    파일읽기객체.readAsDataURL(event.target.files[0])
        console.log(파일읽기객체);
        // 3. 읽어온 바이트를 img태그에 출력
    파일읽기객체.onload = function(){
        document.querySelector('#fileImg').src = 파일읽기객체.result
        imgByte = 파일읽기객체.result; // 이미지바이트를 전역변수에 대입.
    }   //o end

}

function 피드수정(){
    // 1. 입력받은 값 호출
    const fcontent = document.querySelector('textarea').value;
    // 2. 수정할 게시물/피드 찾기
    const fno = JSON.parse(localStorage.getItem('updatefno'))
    const feedList = JSON.parse(localStorage.getItem('feedList'))
        for( let i = 0 ; i<feedList.length ; i++){
            if(fno ==feedList[i].fno){

                feedList[i].fcontent = fcontent.replaceAll('\n','<br/>');
                // 만약에 새로운 첨부이미지 없으면 기존데이터/ 있으면 새로운 첨부 페이지
                feedList[i].fimg = imgByte == `` ? feedList[i].fimg : imgByte
                localStorage.setItem = ( 'feedList' , JSON.stringify(feedList) )

                alert('수정 성공'); location.href='index.html';
                
            }
        }
}
