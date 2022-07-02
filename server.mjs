import { createServer } from 'http';

const fs = require('fs').promises;
createServer( async (req, res) => {
  res.write( await loadFile() );
  res.end();
}).listen(process.env.PORT);

async function loadFile() {
    const data = await fs.readFile("index.html", "binary");
    return Buffer.from(data);
}
