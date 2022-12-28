const one_div = document.getElementById("one");
const two_div = document.getElementById("two");
const three_div = document.getElementById("three");

const array = [" Everybody doesn't want eerything, But something ",
" Sometimes we won't share, because nobody give a damn.,Sometimes we can't share, Until someone feels the same ",
" Thoghts unshaken.. Lips unsealed..but , words unspoken.. leaving me unknown to myself..challenging me to question myself..Evert single day and in every possible way ",
" I read somewhere that Creative People get bored easily, Nope... Boring people become creative sometimes ",
" All we want is that one person to look our soul a little deeper,to love us a little harder,to make our heart a little warmer ",
" Eyes speak the words that lips can't",
" If you don't have one with you,then be the ONE for you"];

function main(){

}
let x = array.length;
function shuffle(){
    let random = Math.floor(Math.random(x)*x);
    console.log(random)
    one_div.textContent=array[random];
    if(random+1<array.length)
    two_div.textContent=array[random+1];
    else two_div.textContent=array[random-1];
    if(random+2<array.length)
    three_div.textContent=array[random+2];
    else three_div.textContent=array[random-2];

}