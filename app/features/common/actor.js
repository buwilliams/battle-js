game.code('actor', ['input',
function(input) {

    return function() {
        var attrs = {
            label: 'actor',
            x: 0,
            y: 0,
            move: 10,
            width: 20,
            height: 20,
            bg: 'black',
            moveUp: input.keys.KEY_W,
            moveDown: input.keys.KEY_S,
            moveLeft: input.keys.KEY_A,
            moveRight: input.keys.KEY_D
        };

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

        var paint = function(state) {
            handleKeyPress(state.key);
            state.ctx.fillStyle = attrs.bg;
            state.ctx.fillRect(attrs.x, attrs.y, attrs.width, attrs.height);
        };

        return {
            attrs: attrs,
            paint: paint
        };
    };
}
]);
