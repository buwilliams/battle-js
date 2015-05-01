// load is a special module which is called once
// the page loads
game.code('load', ['loop', 'world', 'actor', 'input', 'sprite', 'image', 'util',
function(loop, world, actor, input, sprite, image, util) {

    var w = world({
      canvas: util.$('c'),
      width: 800,
      height: 800
    });

    var a = image({
      image: 'images/emmas-room.png',
      width: 800,
      height: 800
    });

    var b = sprite({
        width: 64,
        height: 64,
        spriteImage: 'images/emma-running.png',
    });

    //var c = actor();
    //c.attrs.addForce({x: 0.01, y: 0.01, name: 'wind'});

    w.addThings([a, b]);

    loop.init(w).start();

}
]);
