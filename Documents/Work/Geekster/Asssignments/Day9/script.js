const myButton = document.getElementById("btn");
myButton.addEventListener("click", addOnClickToMyButton());

function addOnClickToMyButton() {
    
    myButton.addEventListener("click", function() {
      alert("Button clicked!");
    });
  }

const myDiv = document.querySelector('.myDiv');

let clickCount = 0;

myDiv.addEventListener('click', function(event) {
  clickCount++;
  if (clickCount % 2 === 1) {
    myDiv.style.backgroundColor = 'red';
  } else {
    myDiv.style.backgroundColor = 'blue';
  }
});

  