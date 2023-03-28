
    
const promise = (value) => {
    return new Promise((resolve, reject) => {
        if (value < 0.5) {
            setTimeout(() => {
                console.log(value)
                resolve(console.log('resolved'))
            },1000)
        }
        else {
            setTimeout(() => {
                console.log(value)
                reject(console.log('rejected'));
            }, 1000)
        }
    })
}

async function hello() {
    const response = promise(0.1)
    .then(()=>console.log('then'))
    .catch(()=>console.log('catch'))
    
    
}

hello()

