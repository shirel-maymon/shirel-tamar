const fs = require('node:fs/promises');


async function info() {
    try {
      const stats = await fs.stat('/Users/joe/test.txt');
      stats.isFile();
      stats.size; 
    } catch (err) {
      console.log(err);
    }
  }
  info();