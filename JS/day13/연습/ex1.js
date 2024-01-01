const idArray = [] ;
const pwArray = [] ;

function 회원가입(){
    const id = document.querySelector('#signID').value
    const pw = document.querySelector('#signPW').value

    idArray.push(id)
    pwArray.push(pw)

    console.log(idArray)
    console.log(pwArray)
    alert('회원가입이 되었습니다')
        document.querySelector('#signID').value = '' /* signID라고 썼으면 안되는데 풀어서 자료형으로 써서 상수를 재 지정한게 아님  */
        document.querySelector('#signPW').value = ''
}   

function 회원로그인(){

    console.log("회원로그인 버튼 함수")
 
    const loginID = document.querySelector('#loginID').value;
    const loginPW = document.querySelector('#loginPW').value;
 
    const sIndex = idArray.indexOf(loginID)
    if ( sIndex >= 0 && pwArray[sIndex] == loginPW ){
        alert('로그인 성공');
        document.querySelector('#loginID').value = ''
        document.querySelector('#loginPW').value = ''
    } else{
        alert('동일한 회원정보가 없습니다.');
    }
    
  
}