const fileKeywordSearch = require("./file-search");
const mock = require('mock-fs')


beforeAll(() => {
    mock({
        'sample-1.js': 'hello world',
        'sample-2.js': 'hello world\n//TODO',
        'sample-3.js': 'hello world\n//todo',
        'sample-4.js': 'hello world\n//nottodo',
        'sample-5.js': 'hello world\n//TODOss'
    });
});

test('keyword search "TODO" should not be found', async () => {
    await expect(fileKeywordSearch('sample-1.js', 'todo')).resolves.toBe(false)
})

test('keyword search "TODO" should be found', async () => {
    await expect(fileKeywordSearch('sample-2.js', 'todo')).resolves.toBe(true)
})

test('keyword insensitive case search "todo" found', async () => {
    await expect(fileKeywordSearch('sample-3.js', 'todo')).resolves.toBe(true)
})

test('keyword search "todo" should not be found', async () => {
    await expect(fileKeywordSearch('sample-4.js', 'todo')).resolves.toBe(false)
})

test('keyword search "todo" should not be found', async () => {
    await expect(fileKeywordSearch('sample-5.js', 'todo')).resolves.toBe(false)
})

test('file not found', async () => {
    await expect(fileKeywordSearch('not-found.js', 'todo')).resolves.toBe(null)
})

afterAll(() => {
    mock.restore();
});
