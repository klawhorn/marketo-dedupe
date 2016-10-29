var fs = require('fs');

fs.writeFile('message.txt', 'Hello Node.js', 'utf8', function(){
  console.log('Saved');
});
