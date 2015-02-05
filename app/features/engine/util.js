game.code('util', [
function() {

    var $ = function(id) {
        return document.getElementById(id);
    }

    var isUndefined = function(a) {
        return (typeof a === 'undefined');
    };

    var isArray = function(a) {
        return Object.prototype.toString.call(a) === '[object Array]';
    };

    var set = function(a, b) {
        if(!isUndefined(b)) {
            a = b;
        }
    };

    var each = function(a, fn) {
        for(var i=0; i<a.length; i++) {
            fn(a[i], i, a);
        }
    };

    // Mutates a with the contents of b
    var extend = function(a, b) {
        if(isArray(a)) {
            each(b, function(item) {
                a.push(item);
            })
        } else {
            for(var key in b) {
                if(b.hasOwnProperty(key)) {
                    a[key] = b[key];
                }
            }
        }
        return a;
    };

    return {
        $: $,
        set: set,
        each: each,
        isUndefined: isUndefined,
        isArray: isArray,
        extend: extend
    }

}
]);
