// load is a special module which is called once
// the page loads
game.code('load', ['loop', 'world', 'actor', 'input', 'sprite',
function(loop, world, actor, input, sprite) {
    var canvas = document.getElementById("c");
    world.init(canvas);

    /*
    var r = actor();
    r.attrs.bg = 'red';
    r.attrs.moveUp = input.keys.KEY_W;
    r.attrs.moveDown = input.keys.KEY_S;
    r.attrs.moveLeft = input.keys.KEY_A;
    r.attrs.moveRight = input.keys.KEY_D;
    world.addActor(r);

    var b = actor();
    b.attrs.bg = 'blue';
    r.attrs.moveUp = input.keys.UP_ARROW;
    r.attrs.moveDown = input.keys.DOWN_ARROW;
    r.attrs.moveLeft = input.keys.LEFT_ARROW;
    r.attrs.moveRight = input.keys.RIGHT_ARROW;
    world.addActor(b);
    */

    var c = sprite();
    world.addActor(c);

    loop.start();

    world.paint();
}
]);
