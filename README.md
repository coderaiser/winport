winport
=======

`WinPort` - library for getting information about ports and names of processes for windows.

## Install

`
npm i winport
`

## API

`getPidByPort(port, callback)`  - get process id by port.

`getNameByPid(pid, callback)`   - get name by process id.

## Example

```js
var winport = require('winport'),
    pid     = 80;
    
    winport.getPidByPort(80, function(error, pid) {
        if (error)
            console.log(error);
        else
            winport.getNameByPid(pid, function(error, name) {
                console.log(error || name);
            });
    });
```

## License

MIT