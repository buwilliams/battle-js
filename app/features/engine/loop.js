game.code('loop', [
function() {

    var attrs = {
        isLoopRunning: false,
        fps: 20,
        lastFrame: Date.now(),
        fpsRate: 0,
        world: null
    }

    var init = function(world) {
        attrs.world = world;
        return this;
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
        attrs.world.paint();
    };

    return {
        attrs: attrs,
        init: init,
        start: start,
        stop: stop,
        exec: exec
    };
}]);
