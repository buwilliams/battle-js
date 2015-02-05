game.code('actor', ['input', 'mover', 'util',
function(input, mover, util) {

    return function() {

        var attrs = mover();

        util.extend(attrs, {
            label: 'actor',
            width: 20,
            height: 20,
            bg: 'black',
            moveUp: input.keys.KEY_W,
            moveDown: input.keys.KEY_S,
            moveLeft: input.keys.KEY_A,
            moveRight: input.keys.KEY_D
        });

/*
        var moveUp = function() {
            attrs.y -= attrs.move;
        };

        var moveDown = function() {
            attrs.y += attrs.move;
        };

        var moveLeft = function() {
            attrs.x -= attrs.move;
        };

        var moveRight = function() {
            attrs.x += attrs.move;
        };

        var handleKeyPress = function(key) {
            //console.log('keypress', key, attrs.moveDown);
            if(attrs.moveUp === key) {
                moveUp();
            } else if(attrs.moveDown === key) {
                moveDown();
            } else if(attrs.moveLeft === key) {
                moveLeft();
            } else if(attrs.moveRight === key) {
                moveRight();
            }
        };
        */

        var paint = function(state) {
            attrs.update();
            //handleKeyPress(state.key);
            state.ctx.fillStyle = attrs.bg;
            state.ctx.fillRect(attrs._location.x, attrs._location.y, attrs.width, attrs.height);
        };

        return {
            attrs: attrs,
            paint: paint
        };
    };
}
]);
