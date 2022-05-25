# Description

enums for javascript

# Example
## Enums
```js
var { Enums } = require('jenums');

var dir0 = new Enums('UP', 'DOWN', 'LEFT', 'RIGHT');
dir0.UP;     // 'UP';
dir0.DOWN;  // 'DOWN';
dir0.LEFT;  // 'LEFT';
dir0.RIGHT; // 'RIGHT';

var dir1 = new Enums(['UP', 0], ['DOWN', 'down'], ['RIGHT', 3]);
dir1.UP;    // 0;
dir1.DOWN;  // 'down';
dir1.RIGHT; // 3;


var dir2 = new Enums(['UP', 'UP-Value'], ['DOWN', 'DOWN-Value'], ['LEFT', 'LEFT-Value'], ['RIGHT', 'RIGHT-Value']);


var { log } = console;

log(dir2.UP == 'UP')          // false;
log(dir2.UP == dir2.up)       // false;
log(dir2.UP == 'UP-Value')    // true;
log(dir2[0] == 'UP')          // true;
log(dir2.UP == dir2[dir2[0]]) // true;


dir2.UP =  'new value';

log(dir2.UP == 'new value') // false;
log(dir2.UP == 'UP-Value') // false;
```
## NumberEnums
```js
var { NumberEnums } = require('jenums');


var enum = NumberEnums.new('start', 'waiting', 'end'); // value start at 0;

var { log } = console;

log(enum.start === 0); // true;
log(enum.waiting === 1); // true;
log(enum.end === 2); // true;

var enum1 = NumberEnums.new(['start', 4], 'waiting', 'end'); // value start at 4;

var { log } = console;

log(enum1.start === 4); // true;
log(enum1.waiting === 5); // true;
log(enum1.end === 6); // true;

var enum2 = NumberEnums.new(['start', 'START'], 'waiting', 'end'); // if value is string it start at sum of chars code (ex: S=83, T=84, A=65, R=82, T=84, START=83 + 84 + 65 + 82 + 84 = 398);

var { log } = console;

log(enum2.start === 398); // true;
log(enum2.waiting === 399); // true;
log(enum2.end === 400); // true;
```


# Classes
* EnumsBuilder
* Enums
* StringEnums
* SymbolEnums
* NumberEnums