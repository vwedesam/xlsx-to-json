const fs = require('fs');
const path = require('path');
const xlsx = require('node-xlsx');

module.exports = extract = (limit) => {

    // Parse a buffer
    const workbook = xlsx.parse(fs.readFileSync(path.resolve("./", 'sample-superstore.xls')));

    const data = workbook[0].data;
    const attr = data[0];
    const value = data;
    let dataArr = [];
    let obj = {};
    for (let x = 1; x  <= limit; x++) {
        for (let i = 0; i < attr.length; i++) {
            obj[attr[i]] = value[1][i]
        }
        dataArr.push(obj)
    }

    return dataArr;

}



