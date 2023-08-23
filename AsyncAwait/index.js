const fs = require('fs');
const folderName = 'public';

// Checking whether folder exists
console.log(fs.existsSync(folderName));

fs.opendirSync(folderName);

(async function asyncFunction () {
    fs.readdir(folderName, async (err, files) => {
        try {
            createNewFile('index1.txt'); // execute

            setTimeout(() => {
                console.log("index 2 file creation without using async function--->");
                createNewFile('index2.txt');
            }, 6000);

            await new Promise((resolve) => setTimeout(() => {
                console.log("index 2 file creation using async function --->");
                resolve(createNewFile('index2.txt'));
            }, 5000)); // 5-second delay

            createNewFile('index3.txt');
        } catch (error) {
            console.error('Error:', error);
        }
    });
})();

function createNewFile (file) {
    try {
        const textFile = `<h1>Hello world</h1>`;
        fs.appendFileSync(folderName + '/' + file, textFile);
        console.log(`File saved ${file}`);
    } catch (error) {
        console.error('Error:', error);
    }
}
