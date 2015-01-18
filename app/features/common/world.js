game.code('world', ['input',
function(input) {

    var attrs = {
        ctx: null,
        canvas: null,
        width: 1200,
        height: 600,
        bg: '#eee',
        actors: []
    };

    var bodies = [];

    var init = function(canvas) {
        attrs.canvas = canvas;
        attrs.ctx = canvas.getContext("2d");
        resize();
        background();
    };

    var background = function() {
        attrs.ctx.rect(0, 0, attrs.width, attrs.height);
        attrs.ctx.fillStyle = attrs.bg;
        attrs.ctx.fill();
    };

    var resize = function() {
        if(attrs.canvas.width !== attrs.width) {
            attrs.canvas.width = attrs.width;
        }

        if(attrs.canvas.height !== attrs.height) {
            attrs.canvas.height = attrs.height;
        }
    };

    var addActor = function(actor) {
        attrs.actors.push(actor);
    };

    var getState = function() {
        return {
            key: input.getKey(),
            ctx: attrs.ctx
        };
    };

    var paint = function() {
        resize();
        background();
        var state = getState();
        for(var i=0; i<attrs.actors.length; i++) {
            attrs.actors[i].paint(state);
        }
    };

    return {
        attrs: attrs,
        init: init,
        background: background,
        resize: resize,
        addActor: addActor,
        paint: paint
    };
}
]);
