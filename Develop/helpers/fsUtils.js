const fs = require('fs');
const util = require('util');

// This will allow us to use promises for the fs.readFile method
const readFromFile = util.promisify(fs.readFile);

// This function will write new data to the file
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

// This function will read new data to the file and append the new content to the file
// The content parameter is the new content that will be written to the file usually in JSON format
const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
}

module.exports = { readFromFile, writeToFile, readAndAppend };