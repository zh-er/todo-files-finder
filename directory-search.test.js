const mock = require('mock-fs')
const fileKeywordSearch = require("./file-search");
const directorySearch = require("./directory-search");

beforeAll(() => {
    mock({
        'sample-level-0': {
            'sample-level-1': {
                'sample-level-2': {
                    'sample-level-3': {
                        'sample-file-4.js': 'sample-file-4'
                    },
                    'sample-file-3.js': 'sample-file-3'
                },
                'sample-file-2.js': 'sample-file-2'
            },
            'sample-file-1.js': 'sample-file-1'
        },
        'sample-file-0.js': 'sample-file-0'
    })
})

test('correct nested path', async () => {
    await expect(directorySearch(
        'sample-level-0/sample-level-1/sample-level-2/sample-level-3',
        (filePath) => fileKeywordSearch(filePath, 'sample')
    )).resolves.toMatchObject(['sample-level-0/sample-level-1/sample-level-2/sample-level-3/sample-file-4.js'])
})

test('correct number of files', async () => {
    const results = await directorySearch('.', (filePath) => fileKeywordSearch(filePath, 'sample'));
    expect(results.length).toBe(5)
})

afterAll(() => {
    mock.restore();
})
