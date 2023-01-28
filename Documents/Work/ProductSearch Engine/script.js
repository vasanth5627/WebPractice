const inp = document.getElementById('search-item');

inp.addEventListener('keyup',search);

function search(){
   const item = inp.value.toUpperCase();
   const storeitems = document.querySelector('.product-list'); //has the list of all products
   const product = document.querySelectorAll('.product'); //has each product 
   const pname = storeitems.getElementsByTagName('h2'); // has each product name

   for(i=0;i<pname.length;i++){
        let match = product[i].getElementsByTagName('h2')[0]; //gets the names of product

        if(match){
            let textvalue = match.textContent || match.innerHTML;

            if(textvalue.toUpperCase().indexOf(item)> -1){ //item exists
                 product[i].style.display = 'flex';
                 console.log(textvalue.toUpperCase().indexOf(item))
            }
            else{
                product[i].style.display = 'none';  
            }
        }
   }
}
