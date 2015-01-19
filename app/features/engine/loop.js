game.code('loop', ['world',
function(world) {

    var attrs = {
        isLoopRunning: false,
        fps: 20
    }

    var start = function() {
        attrs.isLoopRunning = true;
        exec();
    }

    var stop = function() {
        attrs.isLoopRunning = false;
    }

    var exec = function() {
        if(attrs.isLoopRunning) {
            window.requestAnimationFrame(exec);
        }
        world.paint();
    };

    return {
        attrs: attrs,
        start: start,
        stop: stop,
        exec: exec
    };
}
]);
