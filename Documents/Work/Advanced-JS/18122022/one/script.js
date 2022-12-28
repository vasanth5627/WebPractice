const countryInput = document.getElementById('countryInput');
const stateInput = document.getElementById('stateInput');
const searchBtn = document.getElementById('searchBtn');
const cards = document.getElementsByClassName('cards')[0];

init();

function init() {
    searchBtn.addEventListener('click', fetchData);
    stateInput.addEventListener('keyup', (e) => {
        if(e.key === 'Enter'){
            fetchData();
        }
    })
}

async function fetchData(){
    const streamResponse = await fetch(`http://universities.hipolabs.com/search?country=${countryInput.value}`);
    const textBody = await streamResponse.text();
    const jsonData = JSON.parse(textBody);
    render(jsonData);
}

function render(data){
    let html = '';
        let newData = data.filter((d) => {
            let state = stateInput.value;
            state = state.charAt(0).toUpperCase() + state.slice(1);
            return d['state-province'] === state;
        })
        // console.log(newData);
    for (let i = 0; i < newData.length; i++) {
        html += `<div class="card">
                    <p><u><b>State Name:</b></u> ${newData[i]['state-province']} </p>
                    <p><u><b>University Name:</b></u> ${newData[i].name}</p>
                    <p><u><b>University Site URL:</b></u> ${newData[i].web_pages}</p>
                </div>`
        
    }
    cards.innerHTML = html;
    countryInput.value = '';
    stateInput.value = ''
}