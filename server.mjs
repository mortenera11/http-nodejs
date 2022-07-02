import { createServer } from 'http';

const fs = require('fs').promises;
createServer((req, res) => {
  res.write('Hello World!');
  res.end();
}).listen(process.env.PORT);

async function loadMonoCounter() {
    const data = await fs.readFile("index.html", "binary");
    return Buffer.from(data);
}
