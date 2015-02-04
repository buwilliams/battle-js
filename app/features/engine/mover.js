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
        var props = {
            _mass: 1,
            _location:     { x: 0, y: 0 },
            _velocity:     { x: 0, y: 0 }, // x = xspeed and y = yspeed
            _acceleration: { x: 0, y: 0 },
            _forces: []
        };

        // You can pass in a default starting position and mass
        props._location.x = (typeof x === 'undefined') ? props._location.x : x;
        props._location.y = (typeof y === 'undefined') ? props._location.y : y;
        props._mass = (typeof mass === 'undefined') ? props._mass : mass;

        // Main public function to update location
        props.update = function() {

            // These are the things that make motion possible such as
            // wind, gravity, jumping, friction, etc.
            props.applyForces();

            // Update veloicty by acceleration
            // Acceleration is interesting because since we are
            // running this in a game loop we will be getting
            // faster or slower depending on the forces which are
            // applied
            props._velocity.x += props._acceleration.x;
            props._velocity.y += props._acceleration.y;

            // Update target location with velocity
            props._location.x += props._velocity.x;
            props._location.y += props._velocity.y;
        }

        // Functions for applying forces
        // forces are interesting because they accumulate
        props.applyForces = function() {
            for(var i=0; i<props.forces.length; i++) {
                var force = props.forces[i];
                props._acceleration.x += force.x;
                props._acceleration.y += force.y;
            }
        };

        // Force: {x: 0, y: 0, name: 'wind'}
        props.addForce = function(force) {
            props._forces.push(force);
        };

        props.removeForce = function(name) {
            for(var i=0; i<props._forces.length; i++) {
                if(props._forces[i].name === name) {
                    props._forces.splice(i, 1);
                }
            }
        };

        return props;
    };

    return out;

}
]);
