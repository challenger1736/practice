document.addEventListener('DOMContentLoaded', function(){
    // 전체 함수 = js 실행

    const input = document.querySelector('#todo')
    const todoList = document.querySelector('#todo_list')
    const addButton = document.querySelector('#add_button')

    let keyCount = 0;

    const addTodo = function(){
        if(input.value.trim() === ''){ // 유효성 검사
            alert('할 일을 입력해주세요.')
            return;
        }
        const item = document.createElement('div')
        const checkbox = document.createElement('input')
        const text = document.createElement('span')
        const button = document.createElement('button')

       

        const key = keyCount
        keyCount ++

        item.setAttribute('data-key', key) // div에 임의의 속성 추가 한 것!
        item.appendChild(checkbox)
        item.appendChild(text)
        item.appendChild(button)
        todoList.appendChild(item)

        console.log(item)

        checkbox.type = 'checkbox'
        checkbox.addEventListener('change', function(event){
            item.style.textDecoration = event.target.checked ? 'line-through' : ''
        })

        text.textContent = input.value

        button.textContent = '제거하기'
        button.addEventListener('click', function(){
            removeTodo(key)
        })

        input.value = ''

    }
    const removeTodo = function(key){
        const item = document.querySelector(`[data-key="${key}"]`)
        todoList.removeChild(item)
    }

    addButton.addEventListener('click', addTodo)
    input.addEventListener('keyup', function(event){
        const ENTER = 13
        console.log(event.keyCode)
        console.log(event)
        if( event.keyCode===ENTER){
            addTodo()
        }
    })
})