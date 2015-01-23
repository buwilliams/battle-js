game.code('Vector', [
function() {

    var out = function(x, y) {

        var info = {};

        info.x = (typeof x === 'undefined') ? 0 : x;
        info.y = (typeof y === 'undefined') ? 0 : y;

        var add = function(v) {
            info.x = info.x + v.info.x;
            info.y = info.y + v.info.y;
        };

        return {
            info: info,
            add: add
        };

    };

    return out;

}
]);
