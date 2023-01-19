const appId = '523310f4';
const appKey = 'e6ae7e58aed7a78b7fa317c5c3a0b96c';
const baseUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${appId}&app_key=${appKey}`;
const recepieContainer = document.querySelector('#recipie-container');
const txtSearch = document.querySelector('#txtSearch');
const searchBtn = document.querySelector('#searchBtn');
const loadele = document.querySelector('#loading');

const toggleLoad = (element,isShow)=>{
    element.classList.toggle('hide',isShow);
}


function loadRecepies(type="panner"){
    toggleLoad(loadele,false);
    const url = baseUrl+`&q=${type}`
    fetch(url)
        .then(res=>res.json())
    .then(data=>{
        renderRecipies(data.hits)
        toggleLoad(loadele,true)
    })

    .catch((error)=>toggleLoad(loadele,true))
    .finally(()=>setScrollPosition())
}

loadRecepies();

const getRecipieSteps = (ingredientLines=[])=>{
    let str="";
    for(var step of ingredientLines){
        str+=`<li>${step}</li>`
    }
    return str;
}


const renderRecipies = (recipieList=[]) =>{
    recepieContainer.innerHTML="";
        recipieList.forEach(recipieObj =>{

            const {label:recipieTitle,
                 ingredientLines,
                 image:recipieImage} = recipieObj.recipe;

                 const recipieStepStr = getRecipieSteps(ingredientLines)


            const htmlStr=`<div class="recipie">
            <div class="recipie-title">${recipieTitle}</div>
            <div class="recipie-image">
                <img src="${recipieImage}" alt="food" >
            </div>
            <div class="recipie-text">
                <ul>
                    ${recipieStepStr}
                </ul>
            </div>
        </div>`;

        recepieContainer.insertAdjacentHTML("beforeend",htmlStr);
        })
}

txtSearch.addEventListener('keyup', (e)=>{
    const inpVal = txtSearch.value;
    if(e.keyCode === 13){
        loadRecepies(inpVal)
    }
})


searchBtn.addEventListener('click', (e)=>{
    const inpVal = txtSearch.value;
    if(inpVal.length>0){
        loadRecepies(inpVal)
    }
})

const setScrollPosition = ()=>{
    recepieContainer.scrollTo({top: 0, behavior:"smooth"})
}

