submitButtonElement = document.querySelector('#submitButton');
submitButtonElement.addEventListener('click', async (event) => {
    console.log(event);
    let file = event.target.files[0];
    console.log(file);

    let readFile = async (file) => new Promise( (resolve, reject) => {
        let reader = new FileReader();
        reader.onload = (e) => resolve(reader.result);

        let csvText = readFile(file);
        console.log(csvText);
        
        reader.readAsText(file);
    });

    let csvText = await readFile(file);
    console.log(csvText);
    alert('실행됨');
});

/*
const fs = require("fs");
fs.readFile("./res/markets/processed 소상공인시장진흥공단_상가(상권)정보_광주_202306.csv", "utf-8") => {
    var allRows = csv.split(/\n|\r/)
}
*/

/*
const fs = require('fs');
const util = require('util');

// const require = createRequire(import.meta.url);

const getCsvData = (filename) => {
    // const csvPath = path.join('./res/markets/', '.', filename + '.csv')
    const fs = require("fs");
    const csvPath = './res/markets/' + filename
    const csv = fs.readFileSync(csvPath, "utf-8")
    const allRows = csv.split(/\n|\r/)

    for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
        var rowCells = allRows[singleRow].split(',')

        rowData.push(rowCells)
    }

    console.log(rowData);
}

getCsvData('processed 소상공인시장진흥공단_상가(상권)정보_광주_202306.csv');
*/

/*
getCsvData = function(event) {
    let file = event.target.files[0];

    let readFile = (file) => new Promise( (resolve, reject) => {
        let reader = new FileReader();
        reader.onload = (e) => resolve(reader.result);
        
        let filename = 'processed 소상공인시장진흥공단_상가(상권)정보_광주_202306.csv'
        let file = './res/markets/' + filename

        console.log(reader.readAsText(file))
    });

    readFile(file);
}
*/

// function onon() {
//     console.log('hi');
// };

// getCsvData = function (event) {
onChange = async function (event) {
    console.log(event);
    let file = event.target.files[0];

    let readFile = (file) => new Promise( (resolve, reject) => {
        let reader = new FileReader();
        reader.onload = (e) => resolve(reader.result);
        
        reader.readAsText(file);
    });

    let csvText = readFile(file);
    console.log(csvText);
}