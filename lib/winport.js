(function() {
    'use strict';
    
    var exec = require('child_process').exec;
    
    exports.getPidByPort = function(port, callback) {
        exec('netstat -oan', function(error, stdout, stderror) {
            var pid,
                err = error || stderror;
            
            if (err) {
                callback(err);
            } else {
                stdout.split('\r\n').some(function(line) {
                    var length,
                        lineParsed,
                        
                        is  = ~line.indexOf(port);
                    
                    if (is) {
                        lineParsed  = line.split('       ');
                        length      = lineParsed.length - 1;
                        pid         = lineParsed[length] - 0;
                    }
                    
                    return is;
                });
                
                callback(null, pid);
            }
        });
    };
    
    exports.getNameByPid    = function(pid, callback) {
        exec('tasklist', function(error, stdout, stderror) {
            var name,
                err = error || stderror;
            
            if (err) {
                callback(err);
            } else {
                stdout.split('\r\n').some(function(line) {
                    var index,
                        is  = ~line.indexOf(pid);
                    
                    if (is) {
                        index   = line.indexOf(' ');
                        name    = line.substr(0, index);
                    }
                    
                    return is;
                });
                
                callback(null, name);
            }
        });
    };
})();
