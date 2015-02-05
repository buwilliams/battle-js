// load is a special module which is called once
// the page loads
game.code('load', ['loop', 'world', 'actor', 'input', 'sprite', 'image', 'util',
function(loop, world, actor, input, sprite, image, util) {

    world.init(1350, 600, util.$('c'));

    var a = image();
    a.attrs.image = 'images/emmas-room.png';
    a.attrs.width = 1500;
    a.attrs.height = 1125;

    var b = sprite();

    var c = actor();
    c.attrs.addForce({x: 0.01, y: 0.01, name: 'wind'});

    world.addThings([a, b, c]);

    loop.start();

}
]);
