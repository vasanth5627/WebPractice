const shoppingList = ['Apple','Milk','Potato','Salt','Sugar'];

shoppingList.forEach((ele)=>{
    console.log(ele);
});

shoppingList.push('Cream'); //add another item to the end of the array.

shoppingList.pop(); //remove the last item from the array.

shoppingList.shift(); //remove the first item from the array. 

shoppingList.unshift('ToothBrush'); //add element at start of array.

// use the filter() method to create a new array called "shortList" that only includes items with less than six characters in their name.

const shortList = shoppingList.filter((ele)=>{
    if(ele.length<9) return ele;
});

console.log(shortList);

// use the map() method to create a new array called "capitalList" that includes all the items in the original list, but with the first letter capitalised.
const capitalList = shoppingList.map((ele)=>{
   return  ele.charAt(0).toUpperCase()+ele.substring(1)
})

console.log(capitalList);

// use the reduce() method to calculate the total number of characters in all the items in the original list.

let count = shoppingList.reduce((count,ele)=>{
        return count+ele.length;
},0);

console.log(count)

// use the slice() method to create a new array called "partialList" that includes the first three items in the original list.

const partialList = shoppingList.slice(0,3);
console.log(partialList);

// use the splice() method to remove the second and third items from the original list.
console.log(shoppingList)
shoppingList.splice(1,2);

console.log(shoppingList)

//use the sort() method to sort the remaining items in the original list in alphabetical order. Use console.log() to display the sorted list.

shoppingList.sort();
console.log(shoppingList);