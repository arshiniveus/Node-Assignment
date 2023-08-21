const ready = true;
const pro1 = new Promise((resolve, reject) => {
    if (ready) {
        const check1 = 'Promise message';
        resolve(check1)
    } else {
        const check2 = 'not Promised'
        reject(check2);
    }
})
const pro2 = () => {
    pro1.then(val => {
        console.log(val)
    }
    ).catch(err => {
        console.log(err)
    })

}
pro2();


