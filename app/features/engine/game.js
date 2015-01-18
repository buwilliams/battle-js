var game = {
    modules: {}
};

// Dependency Injection
game.code = function(name, sign) {

    var createModule = function() {

        var m = game.modules[name] = {
            fn: sign[sign.length - 1],
            deps: null,
            instance: null
        };

        m.init = function() {

            //console.log('initializing', name);
            var args = [];

            // initialize deps
            if(m.deps !== null) {
                for(var i=0; i<m.deps.length; i++) {
                    var depName = m.deps[i];
                    var depMod = game.modules[depName];
                    var d = (depMod.instance == null) ? depMod.init() : depMod.instance;
                    args.push(d);
                }

            }

            // pass those to fn and create instance
            m.instance = m.fn.apply(null, args);

            return m.instance;
        };

        if(sign.length > 1) {
            for(var i=0; i<sign.length; i++) {
                m.deps = sign.slice(0, sign.length - 1);
            }
        }
    };

    var m = game.modules[name];

    if(typeof m === 'undefined' && typeof sign == 'undefined') {
        console.error(name, 'module not loaded');
        return;
    } else if(typeof m === 'undefined') {
        createModule();
    } else if(m.instance !== null) {
        return m.instance;
    } else {
        return m.init();
    }

};

window.onload = function() {
    game.code('load');
};
