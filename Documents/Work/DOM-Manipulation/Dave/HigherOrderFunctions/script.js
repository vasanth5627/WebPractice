//Higher Order Functions

// A higher order function is a function that does atleast one of the following:
// ** Take one or more functions as argument(parameter)
// ** retrurns function as the result

import {posts} from "./posts.js";
//for-each()


posts.forEach(post => {
    console.log(post);
})

console.clear();


const filterPosts = posts.filter(post =>{
    return post.userId===10 ;
});

console.log(filterPosts);

const mappedPosts = filterPosts.map(post =>{
    return post.id*10;
});

console.log(mappedPosts);

const reducedPosts = mappedPosts.reduce((sum,post)=>{
    return sum+post;
});

console.log(reducedPosts)