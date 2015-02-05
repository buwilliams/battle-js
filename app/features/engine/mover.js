game.code('mover', [
function() {

    // Almost all this code is inspired by Daniel Shiffman's book
    // The Nature of Code (http://natureofcode.com)

    // Newton's Laws:
    //  1. An object at rest stays at rest and an object in motion stays in motion.
    //  2. An object at rest stays at rest and an object in motion stays in motion
    //     at a constant speed and direction unless acted upon by an unbalanced force.
    //     "Force equals mass times acceleration."
    //  3. For every action there is an equal and opposite reaction.

    var out = function(x, y, mass) {

        // Initial values
        var attrs = {
            _mass: 1,
            _location:     { x: 0, y: 0 },
            _velocity:     { x: 0, y: 0 }, // x = xspeed and y = yspeed
            _acceleration: { x: 0, y: 0 },
            _forces: []
        };

        // You can pass in a default starting position and mass
        attrs._location.x = (typeof x === 'undefined') ? attrs._location.x : x;
        attrs._location.y = (typeof y === 'undefined') ? attrs._location.y : y;
        attrs._mass = (typeof mass === 'undefined') ? attrs._mass : mass;

        // Main public function to update location
        attrs.update = function() {

            // These are the things that make motion possible such as
            // wind, gravity, jumping, friction, etc.
            attrs.applyForces();

            // Update veloicty by acceleration
            // Acceleration is interesting because since we are
            // running this in a game loop we will be getting
            // faster or slower depending on the forces which are
            // applied
            attrs._velocity.x += attrs._acceleration.x;
            attrs._velocity.y += attrs._acceleration.y;

            // Update target location with velocity
            attrs._location.x += attrs._velocity.x;
            attrs._location.y += attrs._velocity.y;
        }

        // Functions for applying forces
        // forces are interesting because they accumulate
        attrs.applyForces = function() {
            for(var i=0; i<attrs._forces.length; i++) {
                var force = attrs._forces[i];
                attrs._acceleration.x += force.x;
                attrs._acceleration.y += force.y;
            }
        };

        // Force: {x: 0, y: 0, name: 'wind'}
        attrs.addForce = function(force) {
            attrs._forces.push(force);
        };

        attrs.removeForce = function(name) {
            for(var i=0; i<attrs._forces.length; i++) {
                if(attrs._forces[i].name === name) {
                    attrs._forces.splice(i, 1);
                }
            }
        };

        return attrs;
    };

    return out;

}
]);
