const fs = require("fs");
const path = require("path");

const directorySearch = async (directoryPath, searchFn) => {

    try {
        const directories = await fs.promises.readdir(directoryPath);
        // console.log('reading directory', directories);

        const paths = await Promise.all(
            directories.map(async (item) => {
                const filePath = path.join(directoryPath, item);

                const stat = await fs.promises.stat(filePath);
                if (stat.isDirectory()) {
                    return directorySearch(filePath, searchFn);
                }

                // console.log('searching for file', filePath);
                const result = await searchFn(filePath);
                return result ? filePath : null;
            })
        );
        return paths.filter(p => !!p).reduce((a, b) => {
            if (Array.isArray(b)) {
                return [...a, ...b];
            }
            return [...a, b];
        }, []);
    } catch (error) {
        console.error('Failed to read directory');
        console.error(error);
    }

    return [];

}

module.exports = directorySearch;

