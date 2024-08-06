
require('./foo.js');

foo();

bar = require('./bar.js');
bar();

var fiz = require('./fiz.js').fiz;
fiz();