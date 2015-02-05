game.code('util', [
function() {

    var each = function(a, fn) {
        for(var i=0; i<a.length; i++) {
            fn(a[i], i, a);
        }
    };

    var isArray = function(a) {
        return Object.prototype.toString.call(a) === '[object Array]';
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
        each: each,
        isArray: isArray,
        extend: extend
    }

}
]);
