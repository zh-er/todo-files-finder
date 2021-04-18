// file structure

// directory-search.js - one file to get all files, and filter file (see if this is necessary)
// file-search.js - to open the file and search for content

const directorySearch = require("./directory-search");
const fileKeywordSearch = require("./file-search");

// feel free to change the path
const currentDirectory = process.cwd();

directorySearch(currentDirectory, (filePath) => fileKeywordSearch(filePath, 'todo'))
    .then((searchResults) => {
        console.log('searchResults', searchResults)
    });
