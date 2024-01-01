

function 글쓰기( ){ console.log('글쓰기 펑션 실행')
    const writer = document.querySelector('#writer').value;
    const password = document.querySelector('#password').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;

    const identify = { writer : writer ,
                        password : password,
                        title : title,
                        content : content }
    identify.조회수 = 0

    let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
    if (identifyArray==null){ identifyArray=[]}
    identifyArray.push(identify)
    localStorage.setItem('identifyArray' , JSON.stringify(identifyArray) )

    location.href=`list.html`
}
// 첫 페이지 완료




