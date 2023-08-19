const { rejects } = require('assert');
const fsFile = require('fs');
const { resolve } = require('path');
const folderName = 'public';


//checking whether folderExist
console.log(fsFile.existsSync(folderName))


fsFile.opendirSync(folderName);


(function testFunction () {
    fsFile.readdir(folderName, async (err, files) => {
        createNewFile('index1.html') // execute
        setTimeout(() => {
            console.log("index 2 file creation without using async function--->")
            createNewFile('index2.html')
        }, 6000)
        await new Promise((resolve) => setTimeout(() => {
            console.log("index 2 file creation using async function --->");
            resolve(createNewFile('index2.html'))
        }, 5000)); // 1-second delay

        createNewFile('index3.html')
    })
}())



function createNewFile (file1) {

    const html = `<h1>Hello world</h1>`
    fsFile.appendFile(folderName + '/' + file1, html, (err) => {
        if (err) throw err;
    });
    console.log(` file saved ${file1}`);

}
