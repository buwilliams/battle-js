// load is a special module which is called once
// the page loads
game.code('load', ['loop', 'world', 'actor', 'input', 'sprite', 'image',
function(loop, world, actor, input, sprite, image) {

    var canvas = document.getElementById("c");
    world.init(canvas);
    world.attrs.width = 1350;
    world.attrs.height = 600;

    var a = image();
    a.attrs.image = 'images/emmas-room.png';
    a.attrs.width = 1500;
    a.attrs.height = 1125;

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

    var b = sprite();

    var c = actor();

    world.addThings([a, b, c]);

    loop.start();

    world.paint();
}
]);
