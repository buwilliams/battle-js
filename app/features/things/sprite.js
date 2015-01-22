game.code('sprite', ['input', 'loop',
function(input, loop) {

    return function() {
        var attrs = {
            label: 'sprite',
            x: 0,
            y: 0,
            move: 20,
            width: 64,
            height: 64,
            bg: 'black',
            moveUp: input.keys.KEY_W,
            moveDown: input.keys.KEY_S,
            moveLeft: input.keys.KEY_A,
            moveRight: input.keys.KEY_D,
            spriteFps: 14,
            spriteInstance: null,
            spriteImage: 'images/emma-running.png',
            spriteFrames: 8,
            spriteHeight: 1,
            spriteLeft: 1,
            spriteTop: 2,
            spriteLag: 4,
            spriteLagCount: -1,
            lastKeyPress: Date.now(),
            lastFrame: Date.now()
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
            if(key !== null) {
                var event = Date.now();
                console.log('keypress', event - attrs.lastKeyPress);
                attrs.lastKeyPress = event;
            }
            if(attrs.moveUp === key) {
                moveUp();
            } else if(attrs.moveDown === key) {
                moveDown();
            } else if(attrs.moveLeft === key) {
                attrs.spriteTop = 1;
                moveLeft();
            } else if(attrs.moveRight === key) {
                attrs.spriteTop = 2;
                moveRight();
            }
        };

        var shouldAnimate = function() {
            attrs.spriteLagCount++;
            if(attrs.spriteLagCount === attrs.spriteLag) {
                attrs.spriteLagCount = -1
                return true;
            }
            return false;
        };

        var animate = function(ctx) {
            if(attrs.spriteInstance === null) {
                loadImage();
            }

            if(shouldAnimate()) {
                attrs.spriteLeft = (attrs.spriteFrames === attrs.spriteLeft) ? 1 : attrs.spriteLeft + 1;
            }

            var spriteX = (attrs.width * attrs.spriteLeft) - attrs.width;
            var spriteY = (attrs.height * attrs.spriteTop) - attrs.height;

            ctx.drawImage(attrs.spriteInstance,
                                spriteX, spriteY, attrs.width, attrs.height,
                                attrs.x, attrs.y, attrs.width, attrs.height);
        };

        var loadImage = function() {
            var img = new Image();
            img.src = attrs.spriteImage;
            attrs.spriteInstance = img;
        };

        var paint = function(state) {
            /*
            var event = Date.now();
            console.log('frame', event - attrs.lastFrame);
            attrs.lastFrame = event;
            */

            //attrs.x += attrs.move;
            handleKeyPress(state.key);
            animate(state.ctx);
        };

        return {
            attrs: attrs,
            paint: paint
        };
    };
}
]);
