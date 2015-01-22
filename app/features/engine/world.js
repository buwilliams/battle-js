game.code('world', ['input',
function(input) {

    var attrs = {
        ctx: null,
        canvas: null,
        width: 1500,
        height: 1125,
        bg: '#eee',
        things: []
    };

    var bodies = [];

    var init = function(canvas) {
        attrs.canvas = canvas;
        attrs.ctx = canvas.getContext("2d");
        resize();
        background();
    };

    var background = function() {
        //attrs.ctx.rect(0, 0, attrs.width, attrs.height);
        attrs.ctx.fillStyle = attrs.bg;
        attrs.ctx.fillRect(0, 0, attrs.width, attrs.height);
    };

    var resize = function() {
        if(attrs.canvas.width !== attrs.width) {
            attrs.canvas.width = attrs.width;
        }

        if(attrs.canvas.height !== attrs.height) {
            attrs.canvas.height = attrs.height;
        }
    };

    var addThing = function(thing) {
        attrs.things.push(thing);
    };

    var getState = function() {
        return {
            key: input.getKey(),
            ctx: attrs.ctx
        };
    };

    var paint = function() {
        attrs.ctx.clearRect(0, 0, attrs.width, attrs.height);
        resize();
        background();
        var state = getState();
        for(var i=0; i<attrs.things.length; i++) {
            attrs.things[i].paint(state);
        }
    };

    return {
        attrs: attrs,
        init: init,
        background: background,
        resize: resize,
        addThing: addThing,
        paint: paint
    };
}
]);
