game.code('loop', ['world',
function(world) {

    var attrs = {
        isLoopRunning: false,
        fps: 20,
        lastFrame: Date.now(),
        fpsRate: 0
    }

    var start = function() {
        attrs.isLoopRunning = true;
        exec();
    }

    var stop = function() {
        attrs.isLoopRunning = false;
    }

    var exec = function() {

        // keep track of fps
        var start = Date.now();
        attrs.fpsRate = start - attrs.lastFrame;
        attrs.lastFrame = start;

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
