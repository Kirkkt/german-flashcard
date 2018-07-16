const fs = require('fs')

module.exports = (show, hide) => fs.readFile('words.txt', 'utf-8', (err, file) => {
  const lines = file.trim().split('\n').filter(line => line.indexOf(',') !== -1)
  const pairs = lines.map(line => ({
    en: line.split(',')[0].trim(),
    de: line.split(',')[1].trim(),
  }))
  pairs.sort(() => Math.random() - .5)
  let i = 0
  console.log(pairs[i][show])
  gets(function(reuslt){
    console.log(pairs[i][hide])
    i++
    if (i === pairs.length) {
      process.stdin.pause()
    } else {
      console.log(pairs[i][show])
    }
  });
})

function gets(cb){
    process.stdin.setEncoding('utf8');
    process.stdin.resume();
    process.stdin.on('data', function(chunk) {
        //去掉下一行可一直监听输入，即保持标准输入流为开启模式
        // process.stdin.pause();
        cb(chunk);
    });
}

