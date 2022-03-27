const { error } = require('./src/constants');
const File = require('./src/file');

const { rejects, deepStrictEqual } = require('assert');

; (async () => {
  {
    const filePath = './mocks/emptyFile-invalid.csv';
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }
  {
    const filePath = './mocks/fourItems-invalid.csv';
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }
  {
    const filePath = './mocks/treeItems-valid.csv';
    const result = await File.csvToJson(filePath);
    const expected = [
      {
        "id": 123,
        "name": "Erick Wendel",
        "profession": "Javascript Instructor",
        "age": 30
      },
      {
        "id": 321,
        "name": "Xuxa da Silva",
        "profession": "Javascript Specialist",
        "age": 80
      },
      {
        "id": 231,
        "name": "Joaozinho",
        "profession": "Java Developer",
        "age": 30
      }
    ];
    await deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
  }
})().catch(e => console.log(e));