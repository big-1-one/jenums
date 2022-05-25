# Description

enums for javascript

# Example

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