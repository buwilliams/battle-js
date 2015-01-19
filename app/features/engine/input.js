game.code('input', [
function() {

    var attrs = {
        keyEvents: []
    };

    var keys = {
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        KEY_W: 87,
        KEY_S: 83,
        KEY_A: 65,
        KEY_D: 68
    };

    var getKey = function() {
        if(attrs.keyEvents.length > 0) {
            return attrs.keyEvents.splice(0, 1)[0];
        } else {
            return null;
        }
    };

    var addKey = function(keyCode) {
        attrs.keyEvents.push(keyCode);
    }

    document.onkeydown = function(e) {
        addKey(e.keyCode);
        //console.log(e.keyCode);
    };

    return {
        attrs: attrs,
        keys: keys,
        getKey: getKey,
        addKey: addKey
    };

}
]);
