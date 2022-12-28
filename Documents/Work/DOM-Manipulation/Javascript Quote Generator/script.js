let btn_div = document.querySelector('#newquote');
let quote_div = document.querySelector('.quote');
let person_div = document.querySelector('.person');


const getNewQuote = async () =>
{
    //api for quotes
    var url="https://type.fit/api/quotes";    

    // fetch the data from api
    const response=await fetch(url);
    console.log(typeof response);
    //convert response to json and store it in quotes array
    const allQuotes = await response.json();

    // Generates a random number between 0 and the length of the quotes array
    const indx = Math.floor(Math.random()*allQuotes.length);

    //Store the quote present at the randomly generated index
    const quote=allQuotes[indx].text;

    //Store the author of the respective quote
    const auth=allQuotes[indx].author;

    if(auth==null)
    {
        auth = "Anonymous";
    }

    //function to dynamically display the quote and the author
    quote_div.innerHTML=quote;
    person_div.innerHTML=auth;

    
    
}

btn_div.addEventListener("click", getNewQuote);