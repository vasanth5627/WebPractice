const form = document.getElementById('form');

form.addEventListener('submit', function(e){
    //auto submission

    e.preventDefault();

    const name = document.getElementById('name').value;
    const body = document.getElementById('body').value;
    // const id = document.getElementById('id').value;

    //fetch Post request

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'Post',
        body: JSON.stringify({
            title:name,
            body:body,
            // id:id
            
        }),
        headers:{
            "Content-type":"application/json; Charset=UTF-8"
        }
        
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    })
    
    const results = document.getElementById('results');
    results.innerHTML = `<p>The title of the Todo is ${name} <br>
                            The body of the Todo is ${body}</p>`
    
})