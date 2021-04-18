/**
 * Given input file path and keyword, return the location of the keyword
 */

const DEFAULT_ENCODING = 'utf-8';
const fs = require("fs");

const fileKeywordSearch = async (filePath, keyword, encoding = DEFAULT_ENCODING) => {

    const re = new RegExp(`\\b(\/*)?${keyword}\\b`, 'sgi');

    try {
        const content = await fs.promises.readFile(filePath, {encoding});
        return content.match(re) !== null;
    } catch (error) {
        // console.error(error);
    }

    return null

}



module.exports = fileKeywordSearch;
