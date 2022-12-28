const buttons = document.getElementsByClassName('button');
const container2 = document.getElementsByClassName('container2')[0];
const nextBtn = document.getElementById('nextBtn');
const countQue = document.getElementById('countQue');

const data = [
    {
        que: 'What tag is used to render an image on a webpage?',
        options: ['img', 'src', 'image', 'class'],
        ans:'img'
    },
    {
        que: 'What is the smallest header in HTML by default?',
        options: ['h1', 'h4', 'h2', 'h6'],
        ans: 'h6'
    },
    {
        que:'Which property is used to set colors in HTML?',
        options: ['color', 'background-color', 'font-color', 'text-color'],
        ans: 'color'
    },
    {
        que:'We enclose HTML tags within?',
        options: ['{}', '<>', '!!', 'None of above'],
        ans: '<>'
    },
    {
        que:'Which attribute is used to provide a unique name to an HTML element?',
        options: ['id', 'class', 'type', 'None of above'],
        ans: 'id'
    },
]





let count = 0;
let countque = 1;
init()
function init() {

    render(count);

    check(count);
    

    nextBtn.addEventListener('click', () => {
        count++;
        render(count);
        check(count);
        countQue.innerHTML = ++countque;
    })
}

function render(count){
    let html = '';
    
        html += `<h2>${data[count].que}</h2>
        <div class="options">
            <button class="button">${data[count].options[0]}</button>
            <button class="button">${data[count].options[1]}</button>
            <button class="button">${data[count].options[2]}</button>
            <button class="button">${data[count].options[3]}</button>
        </div>`
    container2.innerHTML = html;

}

function check(count) {
    for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener('click', () => {
            console.log(buttons[i])
            if(buttons[i].innerHTML === `${data[count].ans}`){
                buttons[i].setAttribute('class', 'select');
                const select = document.getElementsByClassName('select')[0];
                select.style.backgroundColor = '#d2edda';
                select.style.border = 'none';
                
            }else{
                buttons[i].style.backgroundColor = '#f8d8db';
                buttons[i].style.border = 'none';
            }
        })
    }
}
