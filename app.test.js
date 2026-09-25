const test = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const app = require('./app');

test('returns a healthy JSON response', async () => {
  await new Promise((resolve) => app.listen(0, resolve));
  const { port } = app.address();

  const response = await new Promise((resolve, reject) => {
    http.get(`http://localhost:${port}`, (res) => {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => resolve({ statusCode: res.statusCode, body }));
    }).on('error', reject);
  });

  app.close();
  assert.equal(response.statusCode, 200);
  assert.deepEqual(JSON.parse(response.body), {
    message: 'Hello from Jenkins!',
    status: 'ok'
  });
});
