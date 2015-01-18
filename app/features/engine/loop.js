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
        world.paint();
        if(attrs.isLoopRunning) {
            setTimeout(function() {
                window.requestAnimationFrame(exec);
            }, 1000 / attrs.fps);
        }
    };

    return {
        attrs: attrs,
        start: start,
        stop: stop,
        exec: exec
    };
}
]);
