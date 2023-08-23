
const promise1 = new Promise((resolve, reject) => {
    if (true) {
        resolve('promise message!!!')

    } else {
        reject('not Promised!!!');
    }
})

promise1.then(val => {
    console.log(val)
}
).catch(err => {
    console.log(err)
})
console.log(promise1);




