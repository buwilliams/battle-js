// load is a special module which is called once
// the page loads
game.code('load', ['loop', 'world', 'actor', 'input', 'sprite', 'image',
function(loop, world, actor, input, sprite, image) {
    var canvas = document.getElementById("c");
    world.init(canvas);

    var bg = image();
    bg.attrs.image = 'images/emmas-room.png';
    bg.attrs.width = 1500;
    bg.attrs.height = 1125;
    world.addThing(bg);

    /*
    var r = actor();
    r.attrs.bg = 'red';
    r.attrs.moveUp = input.keys.KEY_W;
    r.attrs.moveDown = input.keys.KEY_S;
    r.attrs.moveLeft = input.keys.KEY_A;
    r.attrs.moveRight = input.keys.KEY_D;
    world.addThing(r);

    var b = actor();
    b.attrs.bg = 'blue';
    r.attrs.moveUp = input.keys.UP_ARROW;
    r.attrs.moveDown = input.keys.DOWN_ARROW;
    r.attrs.moveLeft = input.keys.LEFT_ARROW;
    r.attrs.moveRight = input.keys.RIGHT_ARROW;
    world.addThing(b);
    */

    var c = sprite();
    world.addThing(c);

    loop.start();

    world.paint();
}
]);
